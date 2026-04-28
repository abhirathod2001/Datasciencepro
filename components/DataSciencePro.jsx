'use client';

import { useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'datasciencepro_progress_v1';

const topics = [
  { title: 'Python for Data Science', category: 'Python', video: 'https://www.youtube.com/results?search_query=krish+naik+python+data+science', theory: 'Python is the core programming language for data science. Learn variables, functions, Pandas, NumPy, Matplotlib, data cleaning, EDA, and automation.' },
  { title: 'Statistics & Probability', category: 'Statistics', video: 'https://www.youtube.com/results?search_query=krish+naik+statistics+for+data+science', theory: 'Statistics helps data scientists understand uncertainty, distributions, sampling, hypothesis testing, confidence intervals, and model evaluation.' },
  { title: 'SQL for Data Science', category: 'Database', video: 'https://www.youtube.com/results?search_query=satish+dhawale+sql+full+course', theory: 'SQL is used to extract, filter, join, aggregate, and prepare data from databases for machine learning and analytics.' },
  { title: 'Machine Learning', category: 'ML', video: 'https://www.youtube.com/results?search_query=krish+naik+machine+learning+full+course', theory: 'Machine learning trains models to learn patterns from data. Core topics include regression, classification, clustering, feature engineering, and model evaluation.' },
  { title: 'Deep Learning', category: 'AI', video: 'https://www.youtube.com/results?search_query=krish+naik+deep+learning+full+course', theory: 'Deep learning uses neural networks for complex tasks such as image recognition, NLP, speech, recommendation, and generative AI.' },
  { title: 'NLP', category: 'AI', video: 'https://www.youtube.com/results?search_query=krish+naik+nlp+full+course', theory: 'Natural Language Processing focuses on text data, tokenization, embeddings, sentiment analysis, transformers, and large language models.' },
  { title: 'Computer Vision', category: 'AI', video: 'https://www.youtube.com/results?search_query=computer+vision+deep+learning+full+course', theory: 'Computer vision helps models understand images and videos using CNNs, object detection, segmentation, and image classification.' },
  { title: 'Generative AI', category: 'Gen AI', video: 'https://www.youtube.com/results?search_query=krish+naik+generative+ai+rag+agents', theory: 'Generative AI includes LLMs, prompt engineering, RAG, vector databases, AI agents, evaluation, and responsible AI workflows.' },
];

const syllabus = [
  { title: 'Python Foundations', detail: 'Syntax, functions, loops, files, Pandas, NumPy, EDA, plotting, and project workflows.', link: 'https://www.analyticsvidhya.com/blog/category/python/' },
  { title: 'Statistics & Probability', detail: 'Distributions, sampling, hypothesis testing, confidence intervals, p-values, and statistical thinking.', link: 'https://www.analyticsvidhya.com/blog/category/statistics/' },
  { title: 'SQL and Databases', detail: 'SELECT, JOIN, GROUP BY, HAVING, CTEs, window functions, and analytics queries.', link: 'https://www.analyticsvidhya.com/blog/category/sql/' },
  { title: 'Machine Learning', detail: 'Regression, classification, clustering, feature engineering, model selection, and evaluation.', link: 'https://www.analyticsvidhya.com/blog/category/machine-learning/' },
  { title: 'Deep Learning', detail: 'Neural networks, CNNs, RNNs, transformers, optimization, and practical model training.', link: 'https://www.analyticsvidhya.com/blog/category/deep-learning/' },
  { title: 'Generative AI', detail: 'LLMs, prompting, RAG, vector search, agents, fine-tuning, and evaluation.', link: 'https://www.analyticsvidhya.com/blog/category/generative-ai/' },
];

const dailyTasks = ['Python coding practice', 'SQL query drill', 'Statistics MCQs', 'EDA notebook practice', 'ML model training', 'Read one Analytics Vidhya article', 'Gen AI prompt practice'];

const quizBank = [
  { q: 'Which Python library is commonly used for DataFrames?', a: 'Pandas', o: ['Pandas', 'React', 'Laravel', 'Tailwind'] },
  { q: 'Which metric is used for classification models?', a: 'Accuracy', o: ['Accuracy', 'HTML', 'CSS', 'DNS'] },
  { q: 'Which algorithm is used for clustering?', a: 'K-Means', o: ['K-Means', 'Linear CSS', 'DOM Parser', 'Webpack'] },
  { q: 'What does SQL JOIN do?', a: 'Combines related tables', o: ['Combines related tables', 'Styles a page', 'Deploys a site', 'Compresses images'] },
  { q: 'What is overfitting?', a: 'Model memorizes training data', o: ['Model memorizes training data', 'Server is slow', 'CSS breaks', 'Database deleted'] },
  { q: 'What does RAG combine?', a: 'LLMs with external retrieval', o: ['LLMs with external retrieval', 'Only CSS', 'Only Excel', 'Only images'] },
];

const quizQuestions = Array.from({ length: 100 }, (_, index) => {
  const item = quizBank[(index + new Date().getDate()) % quizBank.length];
  return { id: index + 1, question: `Q${index + 1}. ${item.q}`, answer: item.a, options: item.o };
});

const defaultProgress = { user: null, selectedTopic: topics[0].title, completedTasks: [], completedTopics: [], quizIndex: 0, score: 0, answered: 0 };

export default function DataSciencePro() {
  const [hydrated, setHydrated] = useState(false);
  const [name, setName] = useState('');
  const [progress, setProgress] = useState(defaultProgress);
  const [selectedTopic, setSelectedTopic] = useState(topics[0]);
  const [openSyllabus, setOpenSyllabus] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [answer, setAnswer] = useState('');
  const [aiInput, setAiInput] = useState('');
  const [aiLoading, setAiLoading] = useState(false);
  const [messages, setMessages] = useState([{ role: 'assistant', text: 'Ask me anything about Python, SQL, ML, Deep Learning, NLP, or Gen AI.' }]);

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

  if (!hydrated) return <main className="min-h-screen bg-slate-100 p-8 text-center">Loading...</main>;

  if (!progress.user) {
    return <main className="grid min-h-screen place-items-center bg-slate-100 px-4"><form onSubmit={login} className="w-full max-w-md rounded-2xl border bg-white p-8 shadow"><h1 className="text-4xl font-black">Data Science Pro</h1><p className="mt-3 text-slate-600">Login to track quiz, tasks, topics, and learning progress.</p><input value={name} onChange={(event) => setName(event.target.value)} placeholder="Enter your name" className="mt-6 w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-600" /><button type="submit" className="mt-5 w-full rounded-lg bg-blue-600 px-5 py-3 font-bold text-white hover:bg-blue-700">Start Learning</button></form></main>;
  }

  return <main className="min-h-screen bg-slate-100 px-4 py-8 text-slate-950"><section className="mx-auto max-w-7xl space-y-5"><header className="text-center"><div className="mb-4 flex flex-col items-center justify-between gap-3 rounded-xl border bg-white p-4 shadow-sm md:flex-row"><div className="text-left"><p className="font-bold">Welcome, {progress.user.name}</p><p className="text-sm text-slate-500">Overall progress: {progressPercent}% • Quiz score: {progress.score}/{progress.answered}</p></div><button type="button" onClick={logout} className="rounded-lg border px-4 py-2 font-semibold hover:bg-slate-100">Reset / Logout</button></div><h1 className="text-5xl font-black">Data Science Pro</h1><p className="mt-3 text-xl text-slate-700">Your Study Platform for Data Science, ML, AI & Gen AI</p></header><section className="grid gap-5 lg:grid-cols-[1.35fr_0.75fr]"><div className="space-y-5"><div className="grid gap-5 md:grid-cols-2"><div className="rounded-xl border bg-white p-5 shadow-sm"><h2 className="text-2xl font-bold">Syllabus</h2><button type="button" onClick={() => document.getElementById('syllabus')?.scrollIntoView({ behavior: 'smooth' })} className="mt-5 w-full rounded-lg bg-blue-600 px-5 py-4 text-lg font-bold text-white hover:bg-blue-700">View Full Syllabus</button><a href="https://www.analyticsvidhya.com/blog/category/data-science/" target="_blank" rel="noopener noreferrer" className="mt-4 block text-center text-sm text-blue-600 hover:underline">Analytics Vidhya resources</a></div><div className="rounded-xl border bg-white p-5 shadow-sm"><h2 className="text-2xl font-bold">Daily MCQ Quiz</h2><h3 className="mt-2 text-2xl font-black">100 Questions Daily</h3><p className="text-slate-600">Questions rotate every day.</p><button type="button" onClick={startQuiz} className="mt-5 rounded-lg bg-orange-500 px-8 py-4 text-lg font-bold text-white hover:bg-orange-600">Start Quiz</button></div></div>{quizStarted && <div className="rounded-xl border bg-white p-5 shadow-sm"><div className="flex justify-between gap-3"><h2 className="text-2xl font-bold">Daily Quiz</h2><p className="font-semibold text-blue-700">Score {progress.score}/{progress.answered} • Question {progress.quizIndex + 1}/100</p></div><p className="mt-4 text-lg font-semibold">{currentQuestion.question}</p><div className="mt-4 grid gap-3 md:grid-cols-2">{currentQuestion.options.map((option) => { const selected = answer === option; const correct = option === currentQuestion.answer; return <button key={option} type="button" onClick={() => chooseAnswer(option)} disabled={Boolean(answer)} className={`rounded-lg border p-4 text-left font-semibold disabled:cursor-not-allowed ${selected ? correct ? 'border-green-500 bg-green-50 text-green-700' : 'border-red-500 bg-red-50 text-red-700' : 'bg-white hover:bg-blue-50'}`}>{option}</button>; })}</div>{answer && <div className="mt-4 flex items-center justify-between rounded-lg bg-slate-100 p-4"><p className="font-bold">{answer === currentQuestion.answer ? 'Correct.' : `Wrong. Correct: ${currentQuestion.answer}`}</p><button type="button" onClick={nextQuestion} className="rounded-lg bg-blue-600 px-5 py-2 font-bold text-white hover:bg-blue-700">Next</button></div>}</div>}<div className="rounded-xl border bg-white p-5 shadow-sm"><h2 className="text-2xl font-bold">Everyday Tasks</h2><div className="mt-4 space-y-3">{dailyTasks.map((task) => <div key={task} className="flex items-center justify-between gap-3"><button type="button" onClick={() => toggleTask(task)} className={`text-left text-lg ${progress.completedTasks.includes(task) ? 'text-green-700 line-through' : ''}`}>✓ {task}</button><button type="button" onClick={() => toggleTask(task)} className="rounded border px-4 py-2 hover:bg-slate-100">{progress.completedTasks.includes(task) ? 'Undo' : 'Mark Complete'}</button></div>)}</div></div><div className="rounded-xl border bg-white p-5 shadow-sm"><h2 className="text-2xl font-bold">Topics of Data Science</h2><div className="mt-4 grid gap-4 md:grid-cols-3">{topics.map((topic) => <button key={topic.title} type="button" onClick={() => selectTopic(topic)} className={`rounded-lg border p-4 text-left hover:border-blue-500 hover:bg-blue-50 ${selectedTopic.title === topic.title ? 'border-blue-600 bg-blue-50' : 'bg-white'}`}><h3 className="font-bold">{topic.title}</h3><p className="mt-2 text-sm text-slate-600">{topic.category}</p><a href={topic.video} target="_blank" rel="noopener noreferrer" onClick={(event) => event.stopPropagation()} className="mt-4 block font-semibold text-blue-600 hover:underline">Watch Video</a></button>)}</div></div><div className="rounded-xl border bg-white p-5 shadow-sm"><h2 className="text-2xl font-bold">Theory: {selectedTopic.title}</h2><p className="mt-3 leading-7 text-slate-700">{selectedTopic.theory}</p><button type="button" onClick={markTopicComplete} className="mt-4 rounded-lg bg-green-600 px-5 py-3 font-bold text-white hover:bg-green-700">Mark Topic Complete</button></div></div><aside className="space-y-5"><div className="rounded-xl border bg-white p-5 shadow-sm"><h2 className="text-2xl font-bold">AI Assistant</h2><div className="mt-4 h-64 overflow-y-auto rounded-lg border bg-slate-50 p-4">{messages.map((msg, index) => <div key={index} className={`mb-3 rounded-lg p-3 ${msg.role === 'assistant' ? 'bg-white' : 'bg-blue-50 text-blue-900'}`}>{msg.text}</div>)}{aiLoading && <div className="rounded-lg bg-white p-3">Thinking...</div>}</div><div className="mt-3 flex gap-2"><input value={aiInput} onChange={(e) => setAiInput(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') askAI(); }} placeholder="Ask about data science..." className="min-w-0 flex-1 rounded-lg border px-3 py-3 outline-none focus:border-purple-500" /><button type="button" onClick={askAI} className="rounded-lg bg-purple-600 px-5 py-3 font-bold text-white hover:bg-purple-700">Send</button></div></div><div id="syllabus" className="rounded-xl border bg-white p-5 shadow-sm"><h2 className="text-2xl font-bold">Clickable Syllabus</h2><div className="mt-4 space-y-3">{syllabus.map((item, index) => { const open = openSyllabus === index; return <div key={item.title} className="rounded-lg border"><button type="button" onClick={() => setOpenSyllabus(open ? -1 : index)} className="flex w-full items-center justify-between p-4 text-left font-bold hover:bg-slate-50"><span>{index + 1}. {item.title}</span><span>{open ? '−' : '+'}</span></button>{open && <div className="border-t p-4 text-slate-700"><p>{item.detail}</p><a href={item.link} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block font-semibold text-blue-600 hover:underline">Open Analytics Vidhya</a></div>}</div>; })}</div></div></aside></section></section></main>;
}
