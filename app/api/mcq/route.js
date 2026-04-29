import { questionBank } from '@/data/questionBank';

const fallbackTopics = {
  python: 'Python for Data Science',
  statistics: 'Statistics and Probability',
  ml: 'Machine Learning',
  nlp: 'Natural Language Processing',
};

function fallbackQuestions(topic, count = 10) {
  const bank = questionBank[topic] || questionBank.python;
  const today = new Date();
  const seed = Number(`${today.getFullYear()}${today.getMonth() + 1}${today.getDate()}`);
  return [...bank]
    .sort((a, b) => ((a.q.length + seed) % 97) - ((b.q.length + seed) % 97))
    .slice(0, count)
    .map((item, index) => ({
      id: index + 1,
      question: item.q.replace(/^Q\d+\.\s*/, ''),
      options: item.o,
      answer: item.a,
      explanation: `Fallback question from the local ${fallbackTopics[topic] || 'Data Science'} question bank.`,
      difficulty: index < 3 ? 'easy' : index < 7 ? 'medium' : 'hard',
    }));
}

function safeJsonParse(text) {
  try {
    const cleaned = text.replace(/```json|```/g, '').trim();
    return JSON.parse(cleaned);
  } catch {
    return null;
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const topic = String(body?.topic || 'python').toLowerCase();
    const difficulty = String(body?.difficulty || 'mixed');
    const count = Math.min(Number(body?.count || 10), 25);
    const weakAreas = Array.isArray(body?.weakAreas) ? body.weakAreas.join(', ') : 'None';

    if (!process.env.OPENAI_API_KEY) {
      return Response.json({
        source: 'fallback',
        questions: fallbackQuestions(topic, count),
        note: 'OPENAI_API_KEY is missing. Using local fallback MCQs.',
      });
    }

    const prompt = `Generate ${count} unique MCQs for ${fallbackTopics[topic] || topic}. Difficulty: ${difficulty}. Weak areas to focus: ${weakAreas}. Return ONLY valid JSON with this shape: {"questions":[{"question":"...","options":["A","B","C","D"],"answer":"exact correct option text","explanation":"short explanation","difficulty":"easy|medium|hard"}]}. Requirements: every question must be different, options must be plausible, answer must exactly match one option, no repeated questions.`;

    const aiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        temperature: 0.8,
        messages: [
          { role: 'system', content: 'You are an expert Data Science exam question generator. Return strict JSON only.' },
          { role: 'user', content: prompt },
        ],
      }),
    });

    const data = await aiResponse.json();
    const text = data?.choices?.[0]?.message?.content || '';
    const parsed = safeJsonParse(text);
    const questions = parsed?.questions;

    if (!Array.isArray(questions) || questions.length === 0) {
      return Response.json({ source: 'fallback', questions: fallbackQuestions(topic, count), note: 'AI response could not be parsed. Using fallback MCQs.' });
    }

    return Response.json({
      source: 'openai',
      questions: questions.slice(0, count).map((item, index) => ({
        id: index + 1,
        question: String(item.question || ''),
        options: Array.isArray(item.options) ? item.options.slice(0, 4).map(String) : [],
        answer: String(item.answer || ''),
        explanation: String(item.explanation || ''),
        difficulty: String(item.difficulty || difficulty),
      })),
    });
  } catch {
    return Response.json({ source: 'fallback', questions: fallbackQuestions('python', 10), note: 'Server error. Using fallback MCQs.' });
  }
}
