export const ADAPTIVE_STORAGE_KEY = 'dsml_adaptive_learning_v1';

export function getDefaultAdaptiveState() {
  return {
    attempts: 0,
    correct: 0,
    wrong: 0,
    weakTopics: {},
    history: [],
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

export function updateAdaptiveState(currentState, payload) {
  const state = currentState || getDefaultAdaptiveState();
  const area = payload.area || normalizeQuestionArea(payload.question, payload.topic);
  const correct = Boolean(payload.correct);
  const previousArea = state.weakTopics?.[area] || { wrong: 0, correct: 0, strength: 0 };
  const nextArea = {
    wrong: previousArea.wrong + (correct ? 0 : 1),
    correct: previousArea.correct + (correct ? 1 : 0),
    strength: Math.max(0, previousArea.correct + (correct ? 1 : 0) - (previousArea.wrong + (correct ? 0 : 1))),
  };

  return {
    ...state,
    attempts: state.attempts + 1,
    correct: state.correct + (correct ? 1 : 0),
    wrong: state.wrong + (correct ? 0 : 1),
    weakTopics: {
      ...state.weakTopics,
      [area]: nextArea,
    },
    history: [
      { area, correct, topic: payload.topic, at: new Date().toISOString() },
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
