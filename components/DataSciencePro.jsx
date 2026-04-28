'use client';

import { useMemo, useState } from 'react';

const chapters = [
  {
    icon: '💻',
    title: 'Python for Data Science',
    text: 'Master Pandas, NumPy, EDA, visualization and production-ready analysis workflows.',
    link: 'https://www.analyticsvidhya.com/blog/category/python/',
    tag: 'Beginner',
  },
  {
    icon: '📊',
    title: 'Statistics & Probability',
    text: 'Learn distributions, sampling, hypothesis testing, p-values and experiment design.',
    link: 'https://www.analyticsvidhya.com/blog/category/statistics/',
    tag: 'Core',
  },
  {
    icon: '🧠',
    title: 'Machine Learning Basics',
    text: 'Build regression, classification and clustering models with clean evaluation habits.',
    link: 'https://www.analyticsvidhya.com/blog/category/machine-learning/',
    tag: 'Popular',
  },
  {
    icon: '🕸️',
    title: 'Deep Learning',
    text: 'Understand neural networks, CNNs, backpropagation, transformers and Gen AI foundations.',
    link: 'https://www.analyticsvidhya.com/blog/category/deep-learning/',
    tag: 'Advanced',
  },
];

const quizData = {
  python: [
    {
      q: 'Which Python library is commonly used for DataFrames?',
      a: 'Pandas',
      o: ['NumPy', 'Pandas', 'React', 'Django'],
    },
    {
      q: 'Which method shows the first rows of a DataFrame?',
      a: 'head()',
      o: ['head()', 'top()', 'first()', 'show()'],
    },
    {
      q: 'NumPy is mainly used for what?',
      a: 'Numerical arrays',
      o: ['CSS styling', 'Numerical arrays', 'Routing', 'Authentication'],
    },
  ],
  statistics: [
    {
      q: 'Which measure is most sensitive to outliers?',
      a: 'Mean',
      o: ['Median', 'Mode', 'Mean', 'Quartile'],
    },
    {
      q: 'What does a p-value help evaluate?',
      a: 'Evidence against null hypothesis',
      o: ['File size', 'Evidence against null hypothesis', 'Page speed', 'Code style'],
    },
    {
      q: 'Standard deviation measures what?',
      a: 'Spread of data',
      o: ['Color', 'Spread of data', 'Database size', 'API latency'],
    },
  ],
  ml: [
    {
      q: 'Linear regression predicts which type of target?',
      a: 'Continuous value',
      o: ['Continuous value', 'Image only', 'CSS class', 'HTML tag'],
    },
    {
      q: 'K-Means is used for what?',
      a: 'Clustering',
      o: ['Clustering', 'Deployment', 'Styling', 'Authentication'],
    },
    {
      q: 'Overfitting means what?',
      a: 'Model memorizes training data',
      o: ['Model memorizes training data', 'Code is deleted', 'Server is down', 'Image is compressed'],
    },
  ],
  nlp: [
    {
      q: 'NLP mainly works with what type of data?',
      a: 'Text',
      o: ['Text', 'Only images', 'Only audio', 'Only CSS'],
    },
    {
      q: 'Tokenization means what?',
      a: 'Splitting text into units',
      o: ['Splitting text into units', 'Deploying app', 'Changing color', 'Deleting rows'],
    },
    {
      q: 'Transformers are widely used in what?',
      a: 'Modern NLP and LLMs',
      o: ['Modern NLP and LLMs', 'Only Excel', 'Only HTML', 'Only Git'],
    },
  ],
};

const roadmap = [
  ['01', 'Learn Python', 'Pandas, NumPy, functions and notebook workflow'],
  ['02', 'Understand Data', 'Statistics, probability, cleaning and visualization'],
  ['03', 'Build Models', 'ML algorithms, validation, metrics and tuning'],
  ['04', 'Ship Projects', 'Portfolio notebooks, dashboards and Gen AI apps'],
];

const resources = [
  ['NumPy Documentation', 'https://numpy.org/doc/'],
  ['Scikit-Learn Guide', 'https://scikit-learn.org/stable/'],
  ['Kaggle Datasets', 'https://www.kaggle.com/'],
  ['Analytics Vidhya', 'https://www.analyticsvidhya.com/'],
];

const topicNames = {
  python: 'Python',
  statistics: 'Statistics',
  ml: 'Machine Learning',
  nlp: 'NLP',
};

export default function DataSciencePro() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [topic, setTopic] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);

  const questions = topic ? quizData[topic] : [];
  const currentQuestion = questions[questionIndex];

  const quizTitle = useMemo(
    () => (topic ? `${topicNames[topic]} Daily Challenge` : 'DS/ML Daily Challenge'),
    [topic]
  );

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

    if (option === currentQuestion.a) {
      setScore((value) => value + 1);
    }
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
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <nav className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-6">
          <a href="#home" className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-blue-600 text-xl text-white shadow-lg shadow-blue-600/25">
              ⌁
            </span>
            <span className="text-xl font-black tracking-tight">
              DS/ML <span className="text-blue-600">Hub</span>
            </span>
          </a>

          <ul
            className={`${
              menuOpen ? 'flex' : 'hidden'
            } absolute left-4 right-4 top-20 flex-col gap-3 rounded-3xl border bg-white p-5 shadow-xl md:static md:flex md:flex-row md:items-center md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
          >
            <li>
              <a className="font-semibold text-slate-700 hover:text-blue-600" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="font-semibold text-slate-700 hover:text-blue-600" href="#theory">
                Theory
              </a>
            </li>
            <li>
              <a className="font-semibold text-slate-700 hover:text-blue-600" href="#roadmap">
                Roadmap
              </a>
            </li>
            <li>
              <a className="font-semibold text-slate-700 hover:text-blue-600" href="#quiz-section">
                Quiz
              </a>
            </li>
            <li>
              <a
                className="rounded-full bg-blue-600 px-5 py-2.5 font-bold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700"
                href="#topics"
              >
                Start
              </a>
            </li>
          </ul>

          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            className="rounded-xl border px-3 py-2 text-xl md:hidden"
          >
            ☰
          </button>
        </div>
      </nav>

      <header
        id="home"
        className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,#dbeafe,#ffffff_36%,#eff6ff)]"
      >
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-200/60 blur-3xl" />
        <div className="absolute -bottom-28 left-0 h-72 w-72 rounded-full bg-cyan-200/60 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-6 lg:py-28">
          <div>
            <div className="inline-flex rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-bold text-blue-700 shadow-sm">
              For data science students • Daily practice • Career roadmap
            </div>

            <h1 className="mt-7 max-w-4xl text-5xl font-black tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              Master Data Science & AI with a focused study hub.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Learn Python, statistics, ML, deep learning and NLP through theory cards, topic-wise
              quizzes, curated resources and a clean student dashboard.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#quiz-section"
                className="rounded-2xl bg-blue-600 px-7 py-4 font-black text-white shadow-xl shadow-blue-600/25 hover:bg-blue-700"
              >
                Start Learning
              </a>

              <a
                href="#theory"
                className="rounded-2xl border border-slate-300 bg-white px-7 py-4 font-black text-slate-800 shadow-sm hover:bg-slate-50"
              >
                View Theory
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
              <div className="rounded-2xl border bg-white p-4 shadow-sm">
                <p className="text-2xl font-black text-blue-600">100+</p>
                <p className="text-sm text-slate-500">MCQs</p>
              </div>
              <div className="rounded-2xl border bg-white p-4 shadow-sm">
                <p className="text-2xl font-black text-blue-600">4</p>
                <p className="text-sm text-slate-500">Core tracks</p>
              </div>
              <div className="rounded-2xl border bg-white p-4 shadow-sm">
                <p className="text-2xl font-black text-blue-600">24/7</p>
                <p className="text-sm text-slate-500">Resources</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border bg-white p-4 shadow-2xl shadow-blue-900/10">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
              alt="Data dashboard"
              className="h-80 w-full rounded-[1.5rem] object-cover"
            />

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {roadmap.slice(0, 2).map(([num, title, text]) => (
                <div key={num} className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-sm font-black text-blue-600">{num}</p>
                  <h3 className="font-black">{title}</h3>
                  <p className="text-sm text-slate-500">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      <section id="theory" className="mx-auto max-w-7xl px-4 py-20 lg:px-6">
        <div className="mb-12 text-center">
          <p className="font-black uppercase tracking-widest text-blue-600">Study modules</p>
          <h2 className="mt-2 text-4xl font-black text-slate-950">Core Theory & Concepts</h2>
          <p className="mt-3 text-slate-600">
            Start with the concepts that matter most for real projects and interviews.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {chapters.map((chapter) => (
            <article
              key={chapter.title}
              className="group rounded-3xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-blue-50 text-3xl">
                  {chapter.icon}
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-600">
                  {chapter.tag}
                </span>
              </div>

              <h3 className="mt-5 text-xl font-black text-slate-950">{chapter.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{chapter.text}</p>

              <a
                href={chapter.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex font-black text-blue-600 group-hover:underline"
              >
                Read Chapter →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="roadmap" className="bg-slate-950 px-4 py-20 text-white lg:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="font-black uppercase tracking-widest text-cyan-300">Roadmap</p>
            <h2 className="mt-2 text-4xl font-black">From beginner to project-ready.</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {roadmap.map(([num, title, text]) => (
              <div key={num} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-3xl font-black text-cyan-300">{num}</p>
                <h3 className="mt-4 text-xl font-black">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="topics" className="mx-auto max-w-7xl px-4 py-20 lg:px-6">
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-black text-slate-950">Select Quiz Topic</h2>
          <p className="mt-3 text-slate-600">Pick a topic and begin a focused challenge.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {Object.keys(topicNames).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => loadTopic(key)}
              className={`rounded-2xl border-2 px-7 py-4 font-black transition ${
                topic === key
                  ? 'border-blue-600 bg-blue-600 text-white shadow-xl shadow-blue-600/20'
                  : 'border-blue-200 bg-white text-blue-700 hover:border-blue-600 hover:bg-blue-50'
              }`}
            >
              {topicNames[key]}
            </button>
          ))}
        </div>
      </section>

      <section id="quiz-section" className="bg-white px-4 py-20 lg:px-6">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="font-black uppercase tracking-widest text-blue-600">Daily challenge</p>
            <h2 className="mt-2 text-4xl font-black text-slate-950">
              Practice until it feels natural.
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Choose a topic, answer the question, review the result and move to the next one.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] border bg-white shadow-2xl shadow-slate-900/10">
            <div className="bg-slate-950 p-8 text-white">
              <h3 className="text-2xl font-black">{quizTitle}</h3>
              <p className="mt-2 text-slate-300">
                {topic ? `Question ${questionIndex + 1} of ${questions.length}` : 'Select a topic above to begin.'}
              </p>
              <div className="mt-4 inline-flex rounded-full bg-white/10 px-4 py-2 font-black text-cyan-300">
                Score: {score}
              </div>
            </div>

            <div className="min-h-[320px] p-8">
              {!topic && (
                <p className="rounded-2xl bg-slate-50 p-6 text-center text-lg font-semibold text-slate-500">
                  Click a topic to start the quiz.
                </p>
              )}

              {topic && currentQuestion && (
                <div>
                  <h4 className="mb-5 text-xl font-black text-slate-950">{currentQuestion.q}</h4>

                  {currentQuestion.o.map((option) => {
                    const chosen = selectedAnswer === option;
                    const correct = option === currentQuestion.a;

                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => chooseAnswer(option)}
                        disabled={Boolean(selectedAnswer)}
                        className={`mb-3 block w-full rounded-2xl border-2 p-4 text-left font-bold transition disabled:cursor-not-allowed ${
                          chosen
                            ? correct
                              ? 'border-green-600 bg-green-50 text-green-800'
                              : 'border-red-600 bg-red-50 text-red-800'
                            : 'border-slate-100 bg-slate-50 hover:border-blue-500 hover:bg-blue-50'
                        }`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {topic && (
              <div className="flex flex-wrap justify-center gap-3 border-t p-6">
                <button
                  type="button"
                  onClick={nextQuestion}
                  className="rounded-2xl bg-blue-600 px-6 py-3 font-black text-white hover:bg-blue-700"
                >
                  Next Question
                </button>

                <button
                  type="button"
                  onClick={submitQuiz}
                  className="rounded-2xl border border-slate-300 bg-white px-6 py-3 font-black text-slate-800 hover:bg-slate-50"
                >
                  Submit Quiz
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-6">
        <div className="rounded-[2rem] border bg-white p-8 shadow-sm">
          <h2 className="text-center text-4xl font-black text-slate-950">External Resources</h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {resources.map(([label, href]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border bg-slate-50 p-5 font-black text-blue-600 hover:border-blue-500 hover:bg-blue-50"
              >
                {label} ↗
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 px-4 py-10 text-center text-slate-300">
        <p>© 2026 DS/ML Hub. Built for students by developers.</p>
      </footer>
    </main>
  );
}
