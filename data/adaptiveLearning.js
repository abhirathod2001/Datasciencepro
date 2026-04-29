export const ADAPTIVE_STORAGE_KEY = 'dsml_adaptive_learning_v2';

export function getDefaultAdaptiveState() {
  return {
    attempts: 0,
    correct: 0,
    wrong: 0,
    weakTopics: {},
    history: [],
    reviewQueue: [],
  };
}

export function normalizeQuestionArea(question, topic = 'general') {
  const text = String(question?.question || question?.q || '').toLowerCase();
  const rules = [
    ['python:pandas', ['pandas', 'dataframe', 'series']],
    ['python:numpy', ['numpy', 'array', 'vectorized']],
    ['python:data-cleaning', ['clean', 'missing', 'duplicate', 'outlier']],
    ['statistics:probability', ['probability', 'random', 'distribution']],
    ['statistics:inference', ['hypothesis', 'p-value', 'confidence', 'interval']],
    ['statistics:variance', ['variance', 'standard deviation', 'spread']],
    ['ml:regression', ['regression', 'continuous']],
    ['ml:classification', ['classification', 'accuracy', 'precision', 'recall']],
    ['ml:clustering', ['cluster', 'k-means']],
    ['nlp:tokenization', ['token', 'tokenization']],
    ['nlp:embeddings', ['embedding', 'vector']],
    ['nlp:language-modeling', ['language model', 'transformer', 'llm']],
  ];

  const found = rules.find(([, keywords]) => keywords.some((keyword) => text.includes(keyword)));
  return found?.[0] || `${topic}:general`;
}

export function scheduleNextReview(previousItem, correct) {
  const now = Date.now();
  const level = previousItem?.level || 0;
  const nextLevel = correct ? Math.min(level + 1, 5) : 0;
  const intervalsHours = [1, 6, 24, 72, 168, 336];
  return {
    level: nextLevel,
    dueAt: new Date(now + intervalsHours[nextLevel] * 60 * 60 * 1000).toISOString(),
  };
}

export function updateAdaptiveState(currentState, payload) {
  const state = currentState || getDefaultAdaptiveState();
  const area = payload.area || normalizeQuestionArea(payload.question, payload.topic);
  const correct = Boolean(payload.correct);
  const questionText = String(payload.question?.question || payload.question?.q || '');
  const answer = String(payload.question?.answer || payload.question?.a || '');
  const selected = String(payload.selected || '');
  const previousArea = state.weakTopics?.[area] || { wrong: 0, correct: 0, strength: 0 };
  const nextArea = {
    wrong: previousArea.wrong + (correct ? 0 : 1),
    correct: previousArea.correct + (correct ? 1 : 0),
    strength: Math.max(0, previousArea.correct + (correct ? 1 : 0) - (previousArea.wrong + (correct ? 0 : 1))),
  };

  const existingReview = (state.reviewQueue || []).find((item) => item.question === questionText);
  const reviewSchedule = scheduleNextReview(existingReview, correct);
  const reviewItem = {
    id: existingReview?.id || `${area}-${Date.now()}`,
    topic: payload.topic,
    area,
    question: questionText,
    options: payload.question?.options || payload.question?.o || [],
    answer,
    selected,
    explanation: payload.question?.explanation || '',
    wrongCount: (existingReview?.wrongCount || 0) + (correct ? 0 : 1),
    correctCount: (existingReview?.correctCount || 0) + (correct ? 1 : 0),
    lastAttemptCorrect: correct,
    lastAttemptAt: new Date().toISOString(),
    ...reviewSchedule,
  };

  const reviewQueue = [
    reviewItem,
    ...(state.reviewQueue || []).filter((item) => item.question !== questionText),
  ]
    .filter((item) => item.wrongCount > 0 || item.level < 5)
    .slice(0, 80);

  return {
    ...state,
    attempts: state.attempts + 1,
    correct: state.correct + (correct ? 1 : 0),
    wrong: state.wrong + (correct ? 0 : 1),
    weakTopics: {
      ...state.weakTopics,
      [area]: nextArea,
    },
    reviewQueue,
    history: [
      { area, correct, topic: payload.topic, selected, answer, at: new Date().toISOString() },
      ...(state.history || []),
    ].slice(0, 100),
  };
}

export function getWeakAreas(state, limit = 5) {
  return Object.entries(state?.weakTopics || {})
    .map(([area, stats]) => ({ area, ...stats, weakness: (stats.wrong || 0) - (stats.correct || 0) }))
    .filter((item) => item.wrong > 0)
    .sort((a, b) => b.weakness - a.weakness || b.wrong - a.wrong)
    .slice(0, limit);
}

export function getAdaptiveDifficulty(state) {
  const attempts = state?.attempts || 0;
  const accuracy = attempts ? (state.correct || 0) / attempts : 0;
  if (attempts < 10) return 'mixed';
  if (accuracy >= 0.8) return 'hard';
  if (accuracy >= 0.55) return 'medium';
  return 'easy';
}

export function getDueReviews(state, limit = 10) {
  const now = Date.now();
  return (state?.reviewQueue || [])
    .filter((item) => !item.dueAt || new Date(item.dueAt).getTime() <= now)
    .sort((a, b) => (b.wrongCount || 0) - (a.wrongCount || 0))
    .slice(0, limit);
}

export function getNextReviewTime(state) {
  const pending = (state?.reviewQueue || []).filter((item) => item.dueAt);
  if (!pending.length) return null;
  return pending.sort((a, b) => new Date(a.dueAt).getTime() - new Date(b.dueAt).getTime())[0].dueAt;
}

export function getMasteryScore(state) {
  const attempts = state?.attempts || 0;
  if (!attempts) return 0;
  const accuracy = (state.correct || 0) / attempts;
  const weakPenalty = Math.min(0.3, getWeakAreas(state, 10).length * 0.03);
  return Math.max(0, Math.round((accuracy - weakPenalty) * 100));
}
