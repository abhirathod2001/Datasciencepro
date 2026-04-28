'use client';

import { useMemo, useState } from 'react';

const chapters = [
  { icon: '💻', title: 'Python for Data Science', text: 'Python is the backbone of Data Science. Learn Pandas, NumPy, data manipulation, visualization, and workflow automation.', link: 'https://www.analyticsvidhya.com/blog/category/python/' },
  { icon: '📊', title: 'Statistics & Probability', text: 'Understand mean, median, mode, standard deviation, probability, distributions, and hypothesis testing.', link: 'https://www.analyticsvidhya.com/blog/category/statistics/' },
  { icon: '🧠', title: 'Machine Learning Basics', text: 'Supervised vs unsupervised learning, linear regression, decision trees, random forests, and model evaluation.', link: 'https://www.analyticsvidhya.com/blog/category/machine-learning/' },
  { icon: '🕸️', title: 'Deep Learning', text: 'Neural networks, activation functions, backpropagation, CNNs, RNNs, transformers, and Gen AI foundations.', link: 'https://www.analyticsvidhya.com/blog/category/deep-learning/' },
];

const quizData = {
  python: [
    { q: 'Which Python library is commonly used for DataFrames?', a: 'Pandas', o: ['NumPy', 'Pandas', 'React', 'Django'] },
    { q: 'Which method shows the first rows of a DataFrame?', a: 'head()', o: ['head()', 'top()', 'first()', 'show()'] },
    { q: 'NumPy is mainly used for what?', a: 'Numerical arrays', o: ['CSS styling', 'Numerical arrays', 'Routing', 'Authentication'] },
  ],
  statistics: [
    { q: 'Which measure is most sensitive to outliers?', a: 'Mean', o: ['Median', 'Mode', 'Mean', 'Quartile'] },
    { q: 'What does a p-value help evaluate?', a: 'Evidence against null hypothesis', o: ['File size', 'Evidence against null hypothesis', 'Page speed', 'Code style'] },
    { q: 'Standard deviation measures what?', a: 'Spread of data', o: ['Color', 'Spread of data', 'Database size', 'API latency'] },
  ],
  ml: [
    { q: 'Linear regression predicts which type of target?', a: 'Continuous value', o: ['Continuous value', 'Image only', 'CSS class', 'HTML tag'] },
    { q: 'K-Means is used for what?', a: 'Clustering', o: ['Clustering', 'Deployment', 'Styling', 'Authentication'] },
    { q: 'Overfitting means what?', a: 'Model memorizes training data', o: ['Model memorizes training data', 'Code is deleted', 'Server is down', 'Image is compressed'] },
  ],
  nlp: [
    { q: 'NLP mainly works with what type of data?', a: 'Text', o: ['Text', 'Only images', 'Only audio', 'Only CSS'] },
    { q: 'Tokenization means what?', a: 'Splitting text into units', o: ['Splitting text into units', 'Deploying app', 'Changing color', 'Deleting rows'] },
    { q: 'Transformers are widely used in what?', a: 'Modern NLP and LLMs', o: ['Modern NLP and LLMs', 'Only Excel', 'Only HTML', 'Only Git'] },
  ],
};

const resources = [
  ['NumPy Documentation', 'https://numpy.org/doc/'],
  ['Scikit-Learn User Guide', 'https://scikit-learn.org/stable/'],
  ['Kaggle Datasets', 'https://www.kaggle.com/'],
  ['Analytics Vidhya', 'https://www.analyticsvidhya.com/'],
];

const topicNames = { python: 'Python', statistics: 'Statistics', ml: 'Machine Learning', nlp: 'NLP' };

export default function DataSciencePro() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [topic, setTopic] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);

  const questions = topic ? quizData[topic] : [];
  const currentQuestion = questions[questionIndex];
  const quizTitle = useMemo(() => topic ? `${topicNames[topic]} Daily Challenge` : 'DS/ML Daily Challenge', [topic]);

  function loadTopic(nextTopic) {
    setTopic(nextTopic);
    setQuestionIndex(0);
    setSelectedAnswer('');
    setScore(0);
    document.getElementById('quiz-section')?.scrollIntoView({ behavior: 'smooth' });
  }

  function chooseAnswer(option) {
    if (!currentQuestion || selectedAnswer) return;
    setSelectedAnswer(option);
    if (option === currentQuestion.a) setScore((value) => value + 1);
  }

  function nextQuestion() {
    if (!questions.length) return;
    setQuestionIndex((value) => (value + 1) % questions.length);
    setSelectedAnswer('');
  }

  function submitQuiz() {
    alert(`Quiz submitted. Your score is ${score}/${questions.length}`);
  }

  return (
    <main className="min-h-screen bg-[#f3f4f6] text-[#374151]">
      <nav className="sticky top-0 z-50 flex items-center justify-between bg-white px-[5%] py-4 shadow-md">
        <div className="text-2xl font-bold text-[#1f2937]">DS/ML <span className="text-[#2563eb]">Hub</span></div>
        <ul className={`${menuOpen ? 'flex' : 'hidden'} absolute left-0 top-[64px] w-full flex-col gap-4 bg-white px-[5%] py-5 shadow-md md:static md:flex md:w-auto md:flex-row md:bg-transparent md:p-0 md:shadow-none`}>
          <li><a className="font-medium text-[#1f2937] transition hover:text-[#2563eb]" href="#home">Home</a></li>
          <li><a className="font-medium text-[#1f2937] transition hover:text-[#2563eb]" href="#topics">Topics</a></li>
          <li><a className="font-medium text-[#1f2937] transition hover:text-[#2563eb]" href="#theory">Theory</a></li>
          <li><a className="font-bold text-[#2563eb]" href="#quiz-section">Take Quiz</a></li>
        </ul>
        <button type="button" onClick={() => setMenuOpen((value) => !value)} className="text-2xl md:hidden">☰</button>
      </nav>

      <header id="home" className="bg-gradient-to-br from-[#1e40af] to-[#2563eb] px-4 py-24 text-center text-white">
        <h1 className="mb-4 text-5xl font-black">Master Data Science & AI</h1>
        <p className="mx-auto max-w-2xl text-xl">Interactive theory, 100+ MCQ challenges, and daily updated questions.</p>
        <a href="#quiz-section" className="mt-8 inline-block rounded-md bg-white px-8 py-3 font-bold text-[#2563eb] transition hover:-translate-y-1">Start Learning</a>
      </header>

      <section id="theory" className="px-[5%] py-16">
        <h2 className="mb-12 text-center text-4xl font-black text-[#1f2937]">Core Theory & Concepts</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {chapters.map((chapter) => (
            <article key={chapter.title} className="rounded-xl bg-white p-8 text-center shadow transition hover:-translate-y-1">
              <div className="mb-4 text-5xl text-[#2563eb]">{chapter.icon}</div>
              <h3 className="text-xl font-black text-[#1f2937]">{chapter.title}</h3>
              <p className="mt-3 text-[#374151]">{chapter.text}</p>
              <a href={chapter.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block font-bold text-[#2563eb] hover:underline">Read Chapter →</a>
            </article>
          ))}
        </div>
      </section>

      <section id="topics" className="px-[5%] py-16">
        <h2 className="mb-12 text-center text-4xl font-black text-[#1f2937]">Select Quiz Topic</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {Object.keys(topicNames).map((key) => (
            <button key={key} type="button" onClick={() => loadTopic(key)} className={`rounded-full border-2 border-[#2563eb] px-6 py-3 font-bold transition ${topic === key ? 'bg-[#2563eb] text-white' : 'text-[#2563eb] hover:bg-[#2563eb] hover:text-white'}`}>{topicNames[key]}</button>
          ))}
        </div>
      </section>

      <section id="quiz-section" className="flex justify-center bg-white px-[5%] py-16">
        <div className="w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl">
          <div className="bg-[#1f2937] p-8 text-center text-white">
            <h3 className="text-2xl font-black">{quizTitle}</h3>
            <p className="mt-2">{topic ? `Question ${questionIndex + 1} of ${questions.length}` : 'Select a topic above to begin. Questions change daily!'}</p>
            <div className="mt-3 text-xl font-bold text-red-400">Score: {score}</div>
          </div>
          <div className="min-h-[300px] p-8">
            {!topic && <p className="text-center text-lg font-semibold text-slate-500">Click a topic to start the quiz.</p>}
            {topic && currentQuestion && <div><h4 className="mb-5 text-xl font-black">{currentQuestion.q}</h4>{currentQuestion.o.map((option) => { const chosen = selectedAnswer === option; const correct = option === currentQuestion.a; return <button key={option} type="button" onClick={() => chooseAnswer(option)} disabled={Boolean(selectedAnswer)} className={`mb-3 block w-full rounded-lg border-2 p-4 text-left transition disabled:cursor-not-allowed ${chosen ? correct ? 'border-green-600 bg-green-100 text-green-800' : 'border-red-600 bg-red-100 text-red-800' : 'border-transparent bg-[#f3f4f6] hover:border-[#2563eb]'}`}>{option}</button>; })}</div>}
          </div>
          {topic && <div className="border-t p-6 text-center"><button type="button" onClick={nextQuestion} className="mr-3 rounded-md bg-[#2563eb] px-6 py-3 font-bold text-white transition hover:-translate-y-1">Next Question</button><button type="button" onClick={submitQuiz} className="rounded-md bg-[#1e40af] px-6 py-3 font-bold text-white transition hover:-translate-y-1">Submit Quiz</button></div>}
        </div>
      </section>

      <section className="bg-white px-[5%] py-16">
        <h2 className="mb-8 text-center text-4xl font-black text-[#1f2937]">External Resources</h2>
        <ul className="mx-auto max-w-2xl list-none space-y-3">
          {resources.map(([label, href]) => <li key={label}><a href={href} target="_blank" rel="noopener noreferrer" className="block rounded-lg border bg-[#f3f4f6] p-4 font-bold text-[#2563eb] hover:bg-blue-50">{label} ↗</a></li>)}
        </ul>
      </section>

      <footer className="bg-[#1f2937] px-4 py-8 text-center text-white"><p>© 2026 DS/ML Hub. Built for Students by Developers.</p></footer>
    </main>
  );
}
