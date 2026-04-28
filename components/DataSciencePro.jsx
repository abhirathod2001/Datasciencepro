'use client';

import { useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'datasciencepro_progress_v2';

const topics = [
  { icon: '🐍', title: 'Python for Data Science', category: 'Python', image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=900&q=80', video: 'https://www.youtube.com/results?search_query=krish+naik+python+data+science', theory: 'Python is the core programming language for data science. Learn variables, functions, Pandas, NumPy, Matplotlib, data cleaning, EDA, and automation.' },
  { icon: '📊', title: 'Statistics & Probability', category: 'Statistics', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80', video: 'https://www.youtube.com/results?search_query=krish+naik+statistics+for+data+science', theory: 'Statistics helps data scientists understand uncertainty, distributions, sampling, hypothesis testing, confidence intervals, and model evaluation.' },
  { icon: '🗄️', title: 'SQL for Data Science', category: 'Database', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80', video: 'https://www.youtube.com/results?search_query=satish+dhawale+sql+full+course', theory: 'SQL is used to extract, filter, join, aggregate, and prepare data from databases for machine learning and analytics.' },
  { icon: '🤖', title: 'Machine Learning', category: 'ML', image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=900&q=80', video: 'https://www.youtube.com/results?search_query=krish+naik+machine+learning+full+course', theory: 'Machine learning trains models to learn patterns from data. Core topics include regression, classification, clustering, feature engineering, and model evaluation.' },
  { icon: '🧠', title: 'Deep Learning', category: 'AI', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80', video: 'https://www.youtube.com/results?search_query=krish+naik+deep+learning+full+course', theory: 'Deep learning uses neural networks for complex tasks such as image recognition, NLP, speech, recommendation, and generative AI.' },
  { icon: '💬', title: 'NLP', category: 'AI', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80', video: 'https://www.youtube.com/results?search_query=krish+naik+nlp+full+course', theory: 'Natural Language Processing focuses on text data, tokenization, embeddings, sentiment analysis, transformers, and large language models.' },
  { icon: '👁️', title: 'Computer Vision', category: 'AI', image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=900&q=80', video: 'https://www.youtube.com/results?search_query=computer+vision+deep+learning+full+course', theory: 'Computer vision helps models understand images and videos using CNNs, object detection, segmentation, and image classification.' },
  { icon: '✨', title: 'Generative AI', category: 'Gen AI', image: 'https://images.unsplash.com/photo-1676299081847-824916de030a?auto=format&fit=crop&w=900&q=80', video: 'https://www.youtube.com/results?search_query=krish+naik+generative+ai+rag+agents', theory: 'Generative AI includes LLMs, prompt engineering, RAG, vector databases, AI agents, evaluation, and responsible AI workflows.' },
];

const syllabus = [
  { title: 'Python Foundations', detail: 'Syntax, functions, loops, files, Pandas, NumPy, EDA, plotting, and project workflows.', link: 'https://www.analyticsvidhya.com/blog/category/python/' },
  { title: 'Statistics & Probability', detail: 'Distributions, sampling, hypothesis testing, confidence intervals, p-values, and statistical thinking.', link: 'https://www.analyticsvidhya.com/blog/category/statistics/' },
  { title: 'SQL and Databases', detail: 'SELECT, JOIN, GROUP BY, HAVING, CTEs, window functions, and analytics queries.', link: 'https://www.analyticsvidhya.com/blog/category/sql/' },
  { title: 'Machine Learning', detail: 'Regression, classification, clustering, feature engineering, model selection, and evaluation.', link: 'https://www.analyticsvidhya.com/blog/category/machine-learning/' },
  { title: 'Deep Learning', detail: 'Neural networks, CNNs, RNNs, transformers, optimization, and practical model training.', link: 'https://www.analyticsvidhya.com/blog/category/deep-learning/' },
  { title: 'Generative AI', detail: 'LLMs, prompting, RAG, vector search, agents, fine-tuning, and evaluation.', link: 'https://www.analyticsvidhya.com/blog/category/generative-ai/' },
];

const workflowSteps = [
  { title: 'Collect Data', icon: '📥', detail: 'Gather CSVs, APIs, logs, databases, surveys, and public datasets.' },
  { title: 'Clean & Prepare', icon: '🧹', detail: 'Fix missing values, duplicates, outliers, data types, and inconsistent formats.' },
  { title: 'Explore & Visualize', icon: '📈', detail: 'Use EDA, charts, statistics, and dashboards to understand patterns.' },
  { title: 'Model & Evaluate', icon: '🧠', detail: 'Train ML models and evaluate with accuracy, RMSE, precision, recall, or F1.' },
  { title: 'Deploy & Explain', icon: '🚀', detail: 'Deploy reports or models and communicate insights for business action.' },
];

const dailyTasks = ['Python coding practice', 'SQL query drill', 'Statistics MCQs', 'EDA notebook practice', 'ML model training', 'Read one Analytics Vidhya article', 'Gen AI prompt practice'];

const quizBank = [
  { q: 'Which Python library is commonly used for DataFrames?', a: 'Pandas', o: ['Pandas', 'React', 'Laravel', 'Tailwind'] },
  { q: 'Which metric is used for classification models?', a: 'Accuracy', o: ['Accuracy', 'HTML', 'CSS', 'DNS'] },
  { q: 'Which algorithm is used for clustering?', a: 'K-Means', o: ['K-Means', 'Linear CSS', 'DOM Parser', 'Webpack'] },
  { q: 'What does SQL JOIN do?', a: 'Combines related tables', o: ['Combines related tables', 'Styles a page', 'Deploys a site', 'Compresses images'] },
  { q: 'What is overfitting?', a: 'Model memorizes training data', o: ['Model memorizes training data', 'Server is slow', 'CSS breaks', 'Database deleted'] },
  { q: 'What does RAG combine?', a: 'LLMs with external retrieval', o: ['LLMs with external retrieval', 'Only CSS', 'Only Excel', 'Only images'] },
  { q: 'Which plot is useful for distribution?', a: 'Histogram', o: ['Histogram', 'Navbar', 'Footer', 'DNS'] },
  { q: 'Which method splits model validation data?', a: 'train_test_split', o: ['train_test_split', 'display_flex', 'npm_install', 'git_push'] },
];

function getDailyQuestions() {
  const daySeed = new Date().getDate();
  return Array.from({ length: 100 }, (_, index) => {
    const item = quizBank[(index + daySeed) % quizBank.length];
    return { id: index + 1, question: `Q${index + 1}. ${item.q}`, answer: item.a, options: item.o };
  });
}

const defaultProgress = { user: null, selectedTopic: topics[0].title, completedTasks: [], completedTopics: [], quizIndex: 0, score: 0, answered: 0 };

export default function DataSciencePro() {
  const [hydrated, setHydrated] = useState(false);
  const [name, setName] = useState('');
  const [progress, setProgress] = useState(defaultProgress);
  const [selectedTopic, setSelectedTopic] = useState(topics[0]);
  const [selectedWorkflow, setSelectedWorkflow] = useState(workflowSteps[0]);
  const [openSyllabus, setOpenSyllabus] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [answer, setAnswer] = useState('');
  const [aiInput, setAiInput] = useState('');
  const [aiLoading, setAiLoading] = useState(false);
  const [messages, setMessages] = useState([{ role: 'assistant', text: 'Ask me anything about Python, SQL, ML, Deep Learning, NLP, or Gen AI.' }]);

  const quizQuestions = useMemo(() => getDailyQuestions(), []);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = { ...defaultProgress, ...JSON.parse(saved) };
        setProgress(parsed);
        setSelectedTopic(topics.find((topic) => topic.title === parsed.selectedTopic) || topics[0]);
      }
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (hydrated) localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [hydrated, progress]);

  const currentQuestion = quizQuestions[progress.quizIndex] || quizQuestions[0];
  const progressPercent = useMemo(() => Math.round(((progress.completedTasks.length + progress.completedTopics.length + Math.min(progress.answered, 100)) / (dailyTasks.length + topics.length + 100)) * 100), [progress]);

  function login(event) {
    event.preventDefault();
    const cleanName = name.trim();
    if (!cleanName) return;
    setProgress((current) => ({ ...current, user: { name: cleanName } }));
  }

  function logout() {
    localStorage.removeItem(STORAGE_KEY);
    setProgress(defaultProgress);
    setSelectedTopic(topics[0]);
    setQuizStarted(false);
    setAnswer('');
  }

  function selectTopic(topic) {
    setSelectedTopic(topic);
    setProgress((current) => ({ ...current, selectedTopic: topic.title }));
  }

  function toggleTask(task) {
    setProgress((current) => ({ ...current, completedTasks: current.completedTasks.includes(task) ? current.completedTasks.filter((item) => item !== task) : [...current.completedTasks, task] }));
  }

  function markTopicComplete() {
    setProgress((current) => ({ ...current, completedTopics: current.completedTopics.includes(selectedTopic.title) ? current.completedTopics : [...current.completedTopics, selectedTopic.title] }));
  }

  function startQuiz() {
    setQuizStarted(true);
    setAnswer('');
  }

  function chooseAnswer(option) {
    if (answer) return;
    setAnswer(option);
    setProgress((current) => ({ ...current, score: current.score + (option === currentQuestion.answer ? 1 : 0), answered: current.answered + 1 }));
  }

  function nextQuestion() {
    setProgress((current) => ({ ...current, quizIndex: (current.quizIndex + 1) % quizQuestions.length }));
    setAnswer('');
  }

  async function askAI() {
    const text = aiInput.trim();
    if (!text) return;
    setMessages((current) => [...current, { role: 'user', text }]);
    setAiInput('');
    setAiLoading(true);
    try {
      const response = await fetch('/api/assistant', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ message: text, topic: selectedTopic.title }) });
      const data = await response.json();
      setMessages((current) => [...current, { role: 'assistant', text: data.reply || 'No response received.' }]);
    } catch (error) {
      setMessages((current) => [...current, { role: 'assistant', text: `Fallback: For ${selectedTopic.title}, define the problem, collect data, clean data, train/evaluate model, then explain results.` }]);
    } finally {
      setAiLoading(false);
    }
  }

  if (!hydrated) return <main className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 p-8 text-center text-white">Loading Data Science Pro...</main>;

  if (!progress.user) {
    return <main className="grid min-h-screen place-items-center bg-[radial-gradient(circle_at_top_left,#2563eb,#0f172a_45%,#020617)] px-4 text-white"><form onSubmit={login} className="w-full max-w-md rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur"><div className="mb-6 grid h-20 w-20 place-items-center rounded-3xl bg-white/10 text-4xl">🧠</div><h1 className="text-4xl font-black">Data Science Pro</h1><p className="mt-3 text-blue-100">Premium learning dashboard for Data Science, ML, AI and Gen AI. Login to save progress locally.</p><input value={name} onChange={(event) => setName(event.target.value)} placeholder="Enter your name" className="mt-6 w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-blue-200 focus:border-cyan-300" /><button type="submit" className="mt-5 w-full rounded-2xl bg-cyan-400 px-5 py-3 font-black text-slate-950 hover:bg-cyan-300">Start Learning</button></form></main>;
  }

  return <main className="min-h-screen bg-slate-950 text-white"><section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,#2563eb,#111827_42%,#020617)] px-4 py-8"><div className="mx-auto max-w-7xl"><nav className="mb-8 flex flex-col items-center justify-between gap-4 rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur md:flex-row"><div><p className="font-black text-cyan-300">Data Science Pro</p><p className="text-sm text-blue-100">Welcome, {progress.user.name} • Progress {progressPercent}% • Score {progress.score}/{progress.answered}</p></div><div className="flex flex-wrap gap-3"><button type="button" onClick={() => document.getElementById('topics')?.scrollIntoView({ behavior: 'smooth' })} className="rounded-full bg-white px-4 py-2 font-bold text-slate-950 hover:bg-cyan-200">Explore Topics</button><button type="button" onClick={logout} className="rounded-full border border-white/30 px-4 py-2 font-bold hover:bg-white/10">Reset</button></div></nav><header className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"><div><div className="inline-flex rounded-full border border-cyan-300/40 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-200">ML • AI • Gen AI • Analytics Vidhya Resources</div><h1 className="mt-6 text-5xl font-black tracking-tight sm:text-6xl">Build your Data Science career with one interactive dashboard.</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-blue-100">Daily MCQs, clickable syllabus, visual workflow, AI assistant, project tasks, topic videos, theory notes and local progress tracking.</p><div className="mt-7 flex flex-wrap gap-3"><button type="button" onClick={startQuiz} className="rounded-2xl bg-orange-500 px-6 py-4 font-black text-white hover:bg-orange-400">Start Daily Quiz</button><button type="button" onClick={() => document.getElementById('syllabus')?.scrollIntoView({ behavior: 'smooth' })} className="rounded-2xl bg-white/10 px-6 py-4 font-black text-white hover:bg-white/20">View Syllabus</button></div></div><div className="rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur"><img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1100&q=80" alt="Data science dashboard" className="h-80 w-full rounded-[1.5rem] object-cover" /><div className="mt-4 grid grid-cols-3 gap-3 text-center"><div className="rounded-2xl bg-white/10 p-3"><p className="text-2xl font-black text-cyan-300">100</p><p className="text-xs text-blue-100">Daily MCQs</p></div><div className="rounded-2xl bg-white/10 p-3"><p className="text-2xl font-black text-cyan-300">{topics.length}</p><p className="text-xs text-blue-100">Topics</p></div><div className="rounded-2xl bg-white/10 p-3"><p className="text-2xl font-black text-cyan-300">AI</p><p className="text-xs text-blue-100">Assistant</p></div></div></div></header></div></section><section className="mx-auto max-w-7xl space-y-6 px-4 py-8"><section className="grid gap-5 lg:grid-cols-[1.35fr_0.75fr]"><div className="space-y-6">{quizStarted && <div className="rounded-3xl border border-slate-800 bg-white p-6 text-slate-950 shadow-xl"><div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between"><h2 className="text-2xl font-black">Daily Quiz</h2><p className="font-bold text-blue-700">Score {progress.score}/{progress.answered} • Question {progress.quizIndex + 1}/100</p></div><p className="mt-4 text-lg font-semibold">{currentQuestion.question}</p><div className="mt-4 grid gap-3 md:grid-cols-2">{currentQuestion.options.map((option) => { const selected = answer === option; const correct = option === currentQuestion.answer; return <button key={option} type="button" onClick={() => chooseAnswer(option)} disabled={Boolean(answer)} className={`rounded-2xl border p-4 text-left font-bold disabled:cursor-not-allowed ${selected ? correct ? 'border-green-500 bg-green-50 text-green-700' : 'border-red-500 bg-red-50 text-red-700' : 'bg-white hover:bg-blue-50'}`}>{option}</button>; })}</div>{answer && <div className="mt-4 flex items-center justify-between rounded-2xl bg-slate-100 p-4"><p className="font-black">{answer === currentQuestion.answer ? 'Correct.' : `Wrong. Correct: ${currentQuestion.answer}`}</p><button type="button" onClick={nextQuestion} className="rounded-xl bg-blue-600 px-5 py-2 font-bold text-white hover:bg-blue-700">Next</button></div>}</div>}<div className="rounded-3xl border border-slate-800 bg-white p-6 text-slate-950 shadow-xl"><h2 className="text-2xl font-black">Interactive Data Science Workflow</h2><div className="mt-5 grid gap-3 md:grid-cols-5">{workflowSteps.map((step) => <button key={step.title} type="button" onClick={() => setSelectedWorkflow(step)} className={`rounded-2xl border p-4 text-center transition hover:-translate-y-1 ${selectedWorkflow.title === step.title ? 'border-blue-600 bg-blue-50' : 'bg-white hover:bg-slate-50'}`}><div className="text-3xl">{step.icon}</div><p className="mt-2 text-sm font-black">{step.title}</p></button>)}</div><div className="mt-5 rounded-2xl bg-slate-100 p-5"><h3 className="font-black">{selectedWorkflow.icon} {selectedWorkflow.title}</h3><p className="mt-2 text-slate-700">{selectedWorkflow.detail}</p></div></div><div id="topics" className="rounded-3xl border border-slate-800 bg-white p-6 text-slate-950 shadow-xl"><h2 className="text-2xl font-black">Topics of Data Science</h2><div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{topics.map((topic) => <button key={topic.title} type="button" onClick={() => selectTopic(topic)} className={`overflow-hidden rounded-3xl border text-left transition hover:-translate-y-1 hover:shadow-xl ${selectedTopic.title === topic.title ? 'border-blue-600 ring-4 ring-blue-100' : 'border-slate-200'}`}><img src={topic.image} alt={topic.title} className="h-36 w-full object-cover" /><div className="p-4"><div className="text-3xl">{topic.icon}</div><h3 className="mt-2 font-black">{topic.title}</h3><p className="text-sm text-slate-500">{topic.category}</p><a href={topic.video} target="_blank" rel="noopener noreferrer" onClick={(event) => event.stopPropagation()} className="mt-3 inline-block font-bold text-blue-600 hover:underline">Watch Video</a></div></button>)}</div></div><div className="rounded-3xl border border-slate-800 bg-white p-6 text-slate-950 shadow-xl"><h2 className="text-2xl font-black">Theory: {selectedTopic.title}</h2><p className="mt-3 leading-7 text-slate-700">{selectedTopic.theory}</p><button type="button" onClick={markTopicComplete} className="mt-4 rounded-2xl bg-green-600 px-5 py-3 font-black text-white hover:bg-green-700">Mark Topic Complete</button></div></div><aside className="space-y-6"><div className="rounded-3xl border border-slate-800 bg-white p-6 text-slate-950 shadow-xl"><h2 className="text-2xl font-black">Everyday Tasks</h2><div className="mt-4 space-y-3">{dailyTasks.map((task) => <div key={task} className="flex items-center justify-between gap-3 rounded-2xl border p-3"><button type="button" onClick={() => toggleTask(task)} className={`text-left font-bold ${progress.completedTasks.includes(task) ? 'text-green-700 line-through' : ''}`}>✓ {task}</button><button type="button" onClick={() => toggleTask(task)} className="rounded-xl border px-3 py-2 text-sm font-bold hover:bg-slate-100">{progress.completedTasks.includes(task) ? 'Undo' : 'Done'}</button></div>)}</div></div><div className="rounded-3xl border border-slate-800 bg-white p-6 text-slate-950 shadow-xl"><h2 className="text-2xl font-black">AI Assistant</h2><div className="mt-4 h-64 overflow-y-auto rounded-2xl border bg-slate-50 p-4">{messages.map((msg, index) => <div key={index} className={`mb-3 rounded-2xl p-3 ${msg.role === 'assistant' ? 'bg-white' : 'bg-blue-50 text-blue-900'}`}>{msg.text}</div>)}{aiLoading && <div className="rounded-2xl bg-white p-3">Thinking...</div>}</div><div className="mt-3 flex gap-2"><input value={aiInput} onChange={(e) => setAiInput(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') askAI(); }} placeholder="Ask about data science..." className="min-w-0 flex-1 rounded-2xl border px-3 py-3 outline-none focus:border-purple-500" /><button type="button" onClick={askAI} className="rounded-2xl bg-purple-600 px-5 py-3 font-black text-white hover:bg-purple-700">Send</button></div></div><div id="syllabus" className="rounded-3xl border border-slate-800 bg-white p-6 text-slate-950 shadow-xl"><h2 className="text-2xl font-black">Clickable Syllabus</h2><div className="mt-4 space-y-3">{syllabus.map((item, index) => { const open = openSyllabus === index; return <div key={item.title} className="rounded-2xl border"><button type="button" onClick={() => setOpenSyllabus(open ? -1 : index)} className="flex w-full items-center justify-between p-4 text-left font-black hover:bg-slate-50"><span>{index + 1}. {item.title}</span><span>{open ? '−' : '+'}</span></button>{open && <div className="border-t p-4 text-slate-700"><p>{item.detail}</p><a href={item.link} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block font-bold text-blue-600 hover:underline">Open Analytics Vidhya</a></div>}</div>; })}</div></div></aside></section></section></main>;
}
