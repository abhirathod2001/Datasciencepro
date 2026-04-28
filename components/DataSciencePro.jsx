'use client';

import { useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'dsml_hub_user_dashboard_v1';

const syllabus = [
  {
    key: 'python',
    icon: '💻',
    title: 'Python for Data Science',
    level: 'Beginner',
    video: 'https://www.youtube.com/results?search_query=Krish+Naik+Python+for+Data+Science+Pandas+NumPy',
    theory: 'Python is the main programming language used in data science because it is simple, readable, and supported by powerful libraries. A data science student should learn variables, loops, functions, lists, dictionaries, file handling, NumPy arrays, Pandas DataFrames, Matplotlib charts, and basic automation. The most important practical skill is converting raw data into clean tables that can be analyzed repeatedly.',
    bullets: ['Python syntax and functions', 'Pandas DataFrames', 'NumPy arrays', 'Data cleaning', 'Exploratory data analysis'],
  },
  {
    key: 'statistics',
    icon: '📊',
    title: 'Statistics & Probability',
    level: 'Core',
    video: 'https://www.youtube.com/results?search_query=Krish+Naik+Statistics+for+Data+Science',
    theory: 'Statistics helps you understand variation, uncertainty, and patterns in data. Data scientists use statistics to summarize datasets, compare groups, test assumptions, and make decisions from samples. Core concepts include mean, median, mode, variance, standard deviation, probability, distributions, sampling, confidence intervals, p-values, and hypothesis testing.',
    bullets: ['Descriptive statistics', 'Probability distributions', 'Sampling', 'Hypothesis testing', 'Confidence intervals'],
  },
  {
    key: 'sql',
    icon: '🗄️',
    title: 'SQL for Data Science',
    level: 'Beginner',
    video: 'https://www.youtube.com/results?search_query=Satish+Dhawale+SQL+full+course',
    theory: 'SQL is used to collect data from databases before analysis or machine learning. A data scientist should be comfortable writing SELECT queries, filtering rows with WHERE, joining tables, grouping data, calculating aggregates, using HAVING, writing CTEs, and applying window functions. SQL is critical because most company data lives in relational databases.',
    bullets: ['SELECT and WHERE', 'JOINs', 'GROUP BY and HAVING', 'CTEs', 'Window functions'],
  },
  {
    key: 'ml',
    icon: '🧠',
    title: 'Machine Learning',
    level: 'Intermediate',
    video: 'https://www.youtube.com/results?search_query=Krish+Naik+Machine+Learning+full+course',
    theory: 'Machine learning is the process of training algorithms to learn patterns from data and make predictions. Important categories include supervised learning, unsupervised learning, regression, classification, clustering, and recommendation systems. A strong ML workflow includes feature preparation, train-test split, model training, evaluation, tuning, and interpretation.',
    bullets: ['Regression', 'Classification', 'Clustering', 'Model evaluation', 'Overfitting and underfitting'],
  },
  {
    key: 'dl',
    icon: '🕸️',
    title: 'Deep Learning',
    level: 'Advanced',
    video: 'https://www.youtube.com/results?search_query=Krish+Naik+Deep+Learning+full+course',
    theory: 'Deep learning uses neural networks to solve complex tasks such as image recognition, speech processing, NLP, and generative AI. Students should learn neurons, layers, activation functions, loss functions, gradient descent, backpropagation, CNNs, RNNs, transformers, and practical training concepts like epochs, batch size, and learning rate.',
    bullets: ['Neural networks', 'Activation functions', 'Backpropagation', 'CNNs and RNNs', 'Transformers'],
  },
  {
    key: 'nlp',
    icon: '💬',
    title: 'Natural Language Processing',
    level: 'Advanced',
    video: 'https://www.youtube.com/results?search_query=Krish+Naik+NLP+full+course',
    theory: 'Natural Language Processing focuses on understanding and generating human language. It includes text cleaning, tokenization, stemming, lemmatization, embeddings, sentiment analysis, text classification, transformers, and large language models. NLP is important for chatbots, document search, summarization, and AI assistants.',
    bullets: ['Text preprocessing', 'Tokenization', 'Embeddings', 'Sentiment analysis', 'Transformers and LLMs'],
  },
  {
    key: 'genai',
    icon: '✨',
    title: 'Generative AI',
    level: 'Advanced',
    video: 'https://www.youtube.com/results?search_query=Krish+Naik+Generative+AI+RAG+Agents',
    theory: 'Generative AI creates new text, code, images, summaries, and answers from learned patterns. For data science students, key topics include LLMs, prompt engineering, embeddings, vector databases, retrieval augmented generation, AI agents, tool use, evaluation, and responsible AI. Gen AI is useful for analytics assistants, document Q&A, SQL generation, and report automation.',
    bullets: ['Prompt engineering', 'LLMs', 'Embeddings', 'RAG', 'AI agents'],
  },
];

const chapters = syllabus.slice(0, 4).map((item) => ({ icon: item.icon, title: item.title, text: item.theory.slice(0, 135) + '...', link: item.video, tag: item.level }));

const baseQuiz = {
  python: [
    { q: 'Which Python library is commonly used for DataFrames?', a: 'Pandas', o: ['NumPy', 'Pandas', 'React', 'Django'] },
    { q: 'Which method shows the first rows of a DataFrame?', a: 'head()', o: ['head()', 'top()', 'first()', 'show()'] },
    { q: 'NumPy is mainly used for what?', a: 'Numerical arrays', o: ['CSS styling', 'Numerical arrays', 'Routing', 'Authentication'] },
    { q: 'Which method removes duplicate rows in Pandas?', a: 'drop_duplicates()', o: ['drop_duplicates()', 'remove_css()', 'delete_html()', 'join_rows()'] },
    { q: 'Which file type is commonly loaded with read_csv?', a: 'CSV', o: ['CSV', 'PNG', 'MP4', 'DOCX'] },
  ],
  statistics: [
    { q: 'Which measure is most sensitive to outliers?', a: 'Mean', o: ['Median', 'Mode', 'Mean', 'Quartile'] },
    { q: 'What does a p-value help evaluate?', a: 'Evidence against null hypothesis', o: ['File size', 'Evidence against null hypothesis', 'Page speed', 'Code style'] },
    { q: 'Standard deviation measures what?', a: 'Spread of data', o: ['Color', 'Spread of data', 'Database size', 'API latency'] },
    { q: 'A confidence interval estimates what?', a: 'A plausible parameter range', o: ['A plausible parameter range', 'A CSS rule', 'A file path', 'A chart color'] },
    { q: 'Which distribution is bell-shaped?', a: 'Normal distribution', o: ['Normal distribution', 'Folder distribution', 'HTML distribution', 'Git distribution'] },
  ],
  ml: [
    { q: 'Linear regression predicts which type of target?', a: 'Continuous value', o: ['Continuous value', 'Image only', 'CSS class', 'HTML tag'] },
    { q: 'K-Means is used for what?', a: 'Clustering', o: ['Clustering', 'Deployment', 'Styling', 'Authentication'] },
    { q: 'Overfitting means what?', a: 'Model memorizes training data', o: ['Model memorizes training data', 'Code is deleted', 'Server is down', 'Image is compressed'] },
    { q: 'Which metric is common for classification?', a: 'Accuracy', o: ['Accuracy', 'Padding', 'Margin', 'Viewport'] },
    { q: 'Train-test split helps with what?', a: 'Model validation', o: ['Model validation', 'Font loading', 'Button styling', 'Domain setup'] },
  ],
  nlp: [
    { q: 'NLP mainly works with what type of data?', a: 'Text', o: ['Text', 'Only images', 'Only audio', 'Only CSS'] },
    { q: 'Tokenization means what?', a: 'Splitting text into units', o: ['Splitting text into units', 'Deploying app', 'Changing color', 'Deleting rows'] },
    { q: 'Transformers are widely used in what?', a: 'Modern NLP and LLMs', o: ['Modern NLP and LLMs', 'Only Excel', 'Only HTML', 'Only Git'] },
    { q: 'Embeddings represent text as what?', a: 'Vectors', o: ['Vectors', 'Buttons', 'Cookies', 'Pixels only'] },
    { q: 'RAG combines LLMs with what?', a: 'External retrieval', o: ['External retrieval', 'Only CSS', 'Only CSV export', 'Browser tabs'] },
  ],
};

const resources = [
  ['NumPy Documentation', 'https://numpy.org/doc/'],
  ['Scikit-Learn Guide', 'https://scikit-learn.org/stable/'],
  ['Kaggle Datasets', 'https://www.kaggle.com/'],
  ['Python Docs', 'https://docs.python.org/3/'],
];

const topicNames = { python: 'Python', statistics: 'Statistics', ml: 'Machine Learning', nlp: 'NLP' };
const dailyTasks = ['Solve 10 MCQs', 'Read one theory chapter', 'Practice one Python notebook', 'Write one SQL query', 'Review one ML concept'];
const defaultUser = { name: '', score: 0, answered: 0, completedTasks: [], lastTopic: 'python' };

function getDailyQuiz(topic) {
  const source = baseQuiz[topic] || baseQuiz.python;
  const seed = new Date().getDate();
  return Array.from({ length: 100 }, (_, index) => {
    const item = source[(index + seed) % source.length];
    return { ...item, id: index + 1, q: `Q${index + 1}. ${item.q}` };
  });
}

export default function DataSciencePro() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [topic, setTopic] = useState('python');
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [user, setUser] = useState(defaultUser);
  const [nameInput, setNameInput] = useState('');
  const [chatInput, setChatInput] = useState('');
  const [chatLoading, setChatLoading] = useState(false);
  const [messages, setMessages] = useState([{ role: 'assistant', text: 'Ask me anything about Data Science, Python, ML, NLP, or Gen AI.' }]);
  const [openSyllabus, setOpenSyllabus] = useState(0);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = { ...defaultUser, ...JSON.parse(saved) };
        setUser(parsed);
        setTopic(parsed.lastTopic || 'python');
      }
    } catch {}
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  }, [user]);

  const questions = useMemo(() => getDailyQuiz(topic), [topic]);
  const currentQuestion = questions[questionIndex];
  const quizTitle = `${topicNames[topic]} Daily Challenge`;
  const progressPercent = Math.min(100, Math.round((user.answered / 100) * 100));

  function saveName(event) {
    event.preventDefault();
    const clean = nameInput.trim();
    if (!clean) return;
    setUser((current) => ({ ...current, name: clean }));
    setNameInput('');
  }

  function loadTopic(nextTopic) {
    setTopic(nextTopic);
    setQuestionIndex(0);
    setSelectedAnswer('');
    setUser((current) => ({ ...current, lastTopic: nextTopic }));
    document.getElementById('quiz-section')?.scrollIntoView({ behavior: 'smooth' });
  }

  function chooseAnswer(option) {
    if (!currentQuestion || selectedAnswer) return;
    setSelectedAnswer(option);
    const correct = option === currentQuestion.a;
    setUser((current) => ({ ...current, score: current.score + (correct ? 1 : 0), answered: current.answered + 1 }));
  }

  function nextQuestion() {
    setQuestionIndex((value) => (value + 1) % questions.length);
    setSelectedAnswer('');
  }

  function toggleTask(task) {
    setUser((current) => ({ ...current, completedTasks: current.completedTasks.includes(task) ? current.completedTasks.filter((item) => item !== task) : [...current.completedTasks, task] }));
  }

  async function sendMessage() {
    const text = chatInput.trim();
    if (!text) return;
    setMessages((current) => [...current, { role: 'user', text }]);
    setChatInput('');
    setChatLoading(true);
    try {
      const response = await fetch('/api/assistant', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ message: text, topic: topicNames[topic] }) });
      const data = await response.json();
      setMessages((current) => [...current, { role: 'assistant', text: data.reply || 'No response received.' }]);
    } catch {
      setMessages((current) => [...current, { role: 'assistant', text: 'Fallback: Break the concept into definition, example, code/formula, and practice task.' }]);
    } finally {
      setChatLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <nav className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-6">
          <a href="#home" className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-blue-600 text-xl text-white shadow-lg shadow-blue-600/25">⌁</span><span className="text-xl font-black tracking-tight">DS/ML <span className="text-blue-600">Hub</span></span></a>
          <ul className={`${menuOpen ? 'flex' : 'hidden'} absolute left-4 right-4 top-20 flex-col gap-3 rounded-3xl border bg-white p-5 shadow-xl md:static md:flex md:flex-row md:items-center md:border-0 md:bg-transparent md:p-0 md:shadow-none`}>
            <li><a className="font-semibold text-slate-700 hover:text-blue-600" href="#dashboard">Dashboard</a></li>
            <li><a className="font-semibold text-slate-700 hover:text-blue-600" href="#syllabus">Syllabus</a></li>
            <li><a className="font-semibold text-slate-700 hover:text-blue-600" href="#theory">Theory</a></li>
            <li><a className="font-semibold text-slate-700 hover:text-blue-600" href="#quiz-section">Quiz</a></li>
            <li><a className="font-semibold text-slate-700 hover:text-blue-600" href="#ai-chat">AI Chat</a></li>
            <li><a className="rounded-full bg-blue-600 px-5 py-2.5 font-bold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700" href="#topics">Start</a></li>
          </ul>
          <button type="button" onClick={() => setMenuOpen((value) => !value)} className="rounded-xl border px-3 py-2 text-xl md:hidden">☰</button>
        </div>
      </nav>

      <header id="home" className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,#dbeafe,#ffffff_36%,#eff6ff)]">
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-6 lg:py-28">
          <div><div className="inline-flex rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-bold text-blue-700 shadow-sm">In-site syllabus • Video links • Full theory notes</div><h1 className="mt-7 max-w-4xl text-5xl font-black tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">Master Data Science & AI with a focused study hub.</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">Learn with built-in theory, clickable syllabus, curated video links, daily MCQs, AI help, and a progress dashboard.</p><div className="mt-8 flex flex-wrap gap-4"><a href="#syllabus" className="rounded-2xl bg-blue-600 px-7 py-4 font-black text-white shadow-xl shadow-blue-600/25 hover:bg-blue-700">Open Syllabus</a><a href="#quiz-section" className="rounded-2xl border border-slate-300 bg-white px-7 py-4 font-black text-slate-800 shadow-sm hover:bg-slate-50">Start Quiz</a></div></div>
          <div className="rounded-[2rem] border bg-white p-4 shadow-2xl shadow-blue-900/10"><img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80" alt="Data dashboard" className="h-80 w-full rounded-[1.5rem] object-cover" /></div>
        </div>
      </header>

      <section id="dashboard" className="mx-auto max-w-7xl px-4 py-12 lg:px-6">
        <div className="rounded-[2rem] border bg-white p-6 shadow-sm"><div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"><div><p className="font-black uppercase tracking-widest text-blue-600">User dashboard</p><h2 className="mt-1 text-3xl font-black">{user.name ? `Welcome, ${user.name}` : 'Create your local profile'}</h2><p className="text-slate-600">Progress is saved in your browser.</p></div><form onSubmit={saveName} className="flex gap-2"><input value={nameInput} onChange={(e) => setNameInput(e.target.value)} placeholder="Enter name" className="rounded-2xl border px-4 py-3 outline-none focus:border-blue-500" /><button className="rounded-2xl bg-blue-600 px-5 py-3 font-black text-white">Save</button></form></div><div className="mt-6 grid gap-4 md:grid-cols-4"><div className="rounded-2xl bg-blue-50 p-5"><p className="text-3xl font-black text-blue-600">{progressPercent}%</p><p className="text-sm text-slate-600">Daily progress</p></div><div className="rounded-2xl bg-slate-50 p-5"><p className="text-3xl font-black">{user.score}</p><p className="text-sm text-slate-600">Correct answers</p></div><div className="rounded-2xl bg-slate-50 p-5"><p className="text-3xl font-black">{user.answered}</p><p className="text-sm text-slate-600">Questions answered</p></div><div className="rounded-2xl bg-slate-50 p-5"><p className="text-3xl font-black">{user.completedTasks.length}/{dailyTasks.length}</p><p className="text-sm text-slate-600">Tasks complete</p></div></div><div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-blue-600" style={{ width: `${progressPercent}%` }} /></div></div>
      </section>

      <section id="syllabus" className="mx-auto max-w-7xl px-4 py-16 lg:px-6"><div className="mb-10 text-center"><p className="font-black uppercase tracking-widest text-blue-600">Complete syllabus</p><h2 className="mt-2 text-4xl font-black text-slate-950">Clickable syllabus with video links</h2><p className="mt-3 text-slate-600">Every module includes theory directly on this website. Videos open separately for practice.</p></div><div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]"><div className="space-y-3">{syllabus.map((item, index) => <button key={item.key} onClick={() => setOpenSyllabus(index)} className={`w-full rounded-3xl border p-5 text-left transition hover:-translate-y-1 ${openSyllabus === index ? 'border-blue-600 bg-blue-50 shadow-lg shadow-blue-600/10' : 'bg-white hover:bg-slate-50'}`}><div className="flex items-center gap-3"><span className="text-3xl">{item.icon}</span><div><h3 className="font-black text-slate-950">{index + 1}. {item.title}</h3><p className="text-sm text-slate-500">{item.level}</p></div></div></button>)}</div><article className="rounded-[2rem] border bg-white p-7 shadow-xl shadow-slate-900/5"><div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between"><div><p className="text-4xl">{syllabus[openSyllabus].icon}</p><h3 className="mt-3 text-3xl font-black text-slate-950">{syllabus[openSyllabus].title}</h3><p className="mt-1 text-sm font-bold text-blue-600">Level: {syllabus[openSyllabus].level}</p></div><a href={syllabus[openSyllabus].video} target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-red-600 px-5 py-3 text-center font-black text-white hover:bg-red-700">Watch Video</a></div><p className="mt-6 text-lg leading-8 text-slate-700">{syllabus[openSyllabus].theory}</p><div className="mt-6 grid gap-3 sm:grid-cols-2">{syllabus[openSyllabus].bullets.map((point) => <div key={point} className="rounded-2xl bg-slate-50 p-4 font-bold text-slate-700">✓ {point}</div>)}</div></article></div></section>

      <section id="theory" className="mx-auto max-w-7xl px-4 py-16 lg:px-6"><div className="mb-10 text-center"><p className="font-black uppercase tracking-widest text-blue-600">Theory modules</p><h2 className="mt-2 text-4xl font-black text-slate-950">Core Concepts</h2></div><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">{chapters.map((chapter) => <article key={chapter.title} className="group rounded-3xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"><div className="flex items-center justify-between"><div className="grid h-14 w-14 place-items-center rounded-2xl bg-blue-50 text-3xl">{chapter.icon}</div><span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-600">{chapter.tag}</span></div><h3 className="mt-5 text-xl font-black text-slate-950">{chapter.title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{chapter.text}</p><a href="#syllabus" onClick={() => setOpenSyllabus(syllabus.findIndex((item) => item.title === chapter.title))} className="mt-5 inline-flex font-black text-blue-600 group-hover:underline">Read Theory Here →</a></article>)}</div></section>

      <section className="bg-slate-950 px-4 py-16 text-white lg:px-6"><div className="mx-auto max-w-7xl"><div className="mb-10"><p className="font-black uppercase tracking-widest text-cyan-300">Daily tasks</p><h2 className="mt-2 text-4xl font-black">Build a habit, not just a page.</h2></div><div className="grid gap-4 md:grid-cols-5">{dailyTasks.map((task) => <button key={task} onClick={() => toggleTask(task)} className={`rounded-3xl border p-5 text-left font-black ${user.completedTasks.includes(task) ? 'border-green-400 bg-green-400/10 text-green-300' : 'border-white/10 bg-white/5 hover:bg-white/10'}`}>{user.completedTasks.includes(task) ? '✓ ' : ''}{task}</button>)}</div></div></section>

      <section id="topics" className="mx-auto max-w-7xl px-4 py-16 lg:px-6"><div className="mb-10 text-center"><h2 className="text-4xl font-black text-slate-950">Select Quiz Topic</h2><p className="mt-3 text-slate-600">Pick a topic and begin a 100-question daily engine.</p></div><div className="flex flex-wrap justify-center gap-4">{Object.keys(topicNames).map((key) => <button key={key} type="button" onClick={() => loadTopic(key)} className={`rounded-2xl border-2 px-7 py-4 font-black transition ${topic === key ? 'border-blue-600 bg-blue-600 text-white shadow-xl shadow-blue-600/20' : 'border-blue-200 bg-white text-blue-700 hover:border-blue-600 hover:bg-blue-50'}`}>{topicNames[key]}</button>)}</div></section>

      <section id="quiz-section" className="bg-white px-4 py-16 lg:px-6"><div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start"><div><p className="font-black uppercase tracking-widest text-blue-600">Dynamic MCQ engine</p><h2 className="mt-2 text-4xl font-black text-slate-950">100 daily questions per topic.</h2><p className="mt-4 leading-7 text-slate-600">Questions rotate based on the day and selected topic. Score is saved in your dashboard.</p></div><div className="overflow-hidden rounded-[2rem] border bg-white shadow-2xl shadow-slate-900/10"><div className="bg-slate-950 p-8 text-white"><h3 className="text-2xl font-black">{quizTitle}</h3><p className="mt-2 text-slate-300">Question {questionIndex + 1} of {questions.length}</p><div className="mt-4 inline-flex rounded-full bg-white/10 px-4 py-2 font-black text-cyan-300">Score: {user.score}/{user.answered}</div></div><div className="min-h-[320px] p-8"><h4 className="mb-5 text-xl font-black text-slate-950">{currentQuestion.q}</h4>{currentQuestion.o.map((option) => { const chosen = selectedAnswer === option; const correct = option === currentQuestion.a; return <button key={option} type="button" onClick={() => chooseAnswer(option)} disabled={Boolean(selectedAnswer)} className={`mb-3 block w-full rounded-2xl border-2 p-4 text-left font-bold transition disabled:cursor-not-allowed ${chosen ? correct ? 'border-green-600 bg-green-50 text-green-800' : 'border-red-600 bg-red-50 text-red-800' : 'border-slate-100 bg-slate-50 hover:border-blue-500 hover:bg-blue-50'}`}>{option}</button>; })}</div><div className="flex flex-wrap justify-center gap-3 border-t p-6"><button type="button" onClick={nextQuestion} className="rounded-2xl bg-blue-600 px-6 py-3 font-black text-white hover:bg-blue-700">Next Question</button></div></div></div></section>

      <section id="ai-chat" className="mx-auto max-w-7xl px-4 py-16 lg:px-6"><div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="font-black uppercase tracking-widest text-blue-600">AI tutor</p><h2 className="mt-2 text-4xl font-black text-slate-950">Ask for help while you study.</h2><p className="mt-4 text-slate-600">Uses your backend API route. If OPENAI_API_KEY is missing, fallback tutor still works.</p></div><div className="rounded-[2rem] border bg-white p-6 shadow-xl"><div className="h-80 overflow-y-auto rounded-3xl bg-slate-50 p-4">{messages.map((msg, index) => <div key={index} className={`mb-3 rounded-2xl p-4 ${msg.role === 'user' ? 'ml-auto bg-blue-600 text-white' : 'bg-white text-slate-700 shadow-sm'} max-w-[85%]`}>{msg.text}</div>)}{chatLoading && <div className="rounded-2xl bg-white p-4 shadow-sm">Thinking...</div>}</div><div className="mt-4 flex gap-3"><input value={chatInput} onChange={(e) => setChatInput(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') sendMessage(); }} placeholder="Ask about ML, Python, NLP..." className="min-w-0 flex-1 rounded-2xl border px-4 py-3 outline-none focus:border-blue-500" /><button onClick={sendMessage} className="rounded-2xl bg-blue-600 px-6 py-3 font-black text-white hover:bg-blue-700">Send</button></div></div></div></section>

      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-6"><div className="rounded-[2rem] border bg-white p-8 shadow-sm"><h2 className="text-center text-4xl font-black text-slate-950">Reference Tools</h2><div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{resources.map(([label, href]) => <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="rounded-2xl border bg-slate-50 p-5 font-black text-blue-600 hover:border-blue-500 hover:bg-blue-50">{label} ↗</a>)}</div></div></section>

      <footer className="bg-slate-950 px-4 py-10 text-center text-slate-300"><p>© 2026 DS/ML Hub. Built for students by developers.</p></footer>
    </main>
  );
}
