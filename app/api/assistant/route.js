export async function POST(request) {
  try {
    const body = await request.json();
    const message = String(body?.message || '').trim();
    const topic = String(body?.topic || 'Data Science');

    if (!message) {
      return Response.json({ reply: 'Please type a question first.' }, { status: 400 });
    }

    if (!process.env.OPENAI_API_KEY) {
      return Response.json({
        reply: `Fallback AI Tutor: For ${topic}, break your question into: concept, example, formula/code, and practice task. Your question was: "${message}". Add OPENAI_API_KEY in Vercel for real AI responses.`,
      });
    }

    const aiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content:
              'You are a clear, beginner-friendly Data Science tutor. Explain Python, statistics, machine learning, NLP, deep learning, and Gen AI with examples.',
          },
          {
            role: 'user',
            content: `Topic: ${topic}\nQuestion: ${message}`,
          },
        ],
      }),
    });

    const data = await aiResponse.json();

    return Response.json({
      reply: data?.choices?.[0]?.message?.content || 'No AI response received.',
    });
  } catch (error) {
    return Response.json({
      reply: 'Server error. Please try again.',
    });
  }
}
