const topicTemplates = {
  python: {
    label: 'Python for Data Science',
    skills: ['Python syntax', 'functions', 'lists', 'dictionaries', 'file handling', 'NumPy arrays', 'pandas Series', 'pandas DataFrames', 'missing values', 'duplicates', 'groupby', 'merge', 'pivot tables', 'matplotlib', 'EDA', 'CSV loading', 'JSON loading', 'data types', 'outliers', 'automation'],
  },
  statistics: {
    label: 'Statistics and Probability',
    skills: ['mean', 'median', 'variance', 'standard deviation', 'probability', 'conditional probability', 'independence', 'random variables', 'normal distribution', 'binomial distribution', 'Poisson distribution', 'sampling', 'confidence intervals', 'hypothesis testing', 'p-values', 'correlation', 'covariance', 'central limit theorem', 'descriptive statistics', 'inferential statistics'],
  },
  ml: {
    label: 'Machine Learning',
    skills: ['train-test split', 'cross-validation', 'linear regression', 'logistic regression', 'decision trees', 'random forest', 'KNN', 'SVM', 'K-Means', 'PCA', 'feature scaling', 'overfitting', 'underfitting', 'bias variance', 'precision', 'recall', 'F1 score', 'ROC AUC', 'regularization', 'model deployment'],
  },
  nlp: {
    label: 'Natural Language Processing',
    skills: ['tokenization', 'stopwords', 'stemming', 'lemmatization', 'POS tagging', 'NER', 'TF-IDF', 'embeddings', 'sentiment analysis', 'machine translation', 'language modeling', 'n-grams', 'transformers', 'LLMs', 'semantic search', 'RAG', 'chunking', 'text classification', 'summarization', 'prompting'],
  },
};

function makeQuestion(topic, i) {
  const config = topicTemplates[topic] || topicTemplates.python;
  const skill = config.skills[i % config.skills.length];
  const nextSkill = config.skills[(i + 5) % config.skills.length];
  const wrong1 = config.skills[(i + 9) % config.skills.length];
  const wrong2 = config.skills[(i + 13) % config.skills.length];
  const styles = [
    `In ${config.label}, which concept best solves a task involving ${skill}?`,
    `A student is practicing ${skill}. Which option is the most correct?`,
    `Which topic should you review for a question about ${skill}?`,
    `For real project work, ${skill} is mainly connected to which data science skill?`,
    `Which answer is most relevant when handling ${skill} in ${config.label}?`,
  ];
  const answer = skill;
  const options = [answer, nextSkill, wrong1, wrong2];
  const rotated = options.slice(i % 4).concat(options.slice(0, i % 4));
  return {
    id: i + 1,
    q: styles[i % styles.length],
    question: styles[i % styles.length],
    a: answer,
    answer,
    o: rotated,
    options: rotated,
    explanation: `${skill} is the target concept for this question. Review this area if you answered incorrectly.`,
    difficulty: i % 3 === 0 ? 'easy' : i % 3 === 1 ? 'medium' : 'hard',
    skill,
  };
}

export const questionBank = {
  python: Array.from({ length: 100 }, (_, i) => makeQuestion('python', i)),
  statistics: Array.from({ length: 100 }, (_, i) => makeQuestion('statistics', i)),
  ml: Array.from({ length: 100 }, (_, i) => makeQuestion('ml', i)),
  nlp: Array.from({ length: 100 }, (_, i) => makeQuestion('nlp', i)),
};

function seededRandom(seed) {
  let value = seed % 2147483647;
  if (value <= 0) value += 2147483646;
  return () => {
    value = (value * 16807) % 2147483647;
    return (value - 1) / 2147483646;
  };
}

function hashText(text) {
  return String(text).split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
}

export function getUniqueDailyQuestions(topic, count = 100) {
  const bank = questionBank[topic] || questionBank.python;
  const today = new Date();
  const seed = Number(`${today.getFullYear()}${today.getMonth() + 1}${today.getDate()}`) + hashText(topic);
  const random = seededRandom(seed);
  const shuffled = [...bank]
    .map((item) => ({ item, sort: random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);

  return shuffled.slice(0, Math.min(count, shuffled.length)).map((item, index) => ({
    ...item,
    id: index + 1,
    q: `Q${index + 1}. ${item.q}`,
    question: item.q,
  }));
}
