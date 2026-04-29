export const questionBank = {
  python: Array.from({ length: 100 }, (_, i) => ({
    q: `Python for Data Science question ${i + 1}: Which concept is most relevant for practical data analysis workflow step ${i + 1}?`,
    a: ['Pandas DataFrame operations', 'NumPy vectorized calculation', 'Data cleaning and validation', 'Visualization and reporting'][i % 4],
    o: [
      ['Pandas DataFrame operations', 'CSS animation timing', 'HTML meta tag setup', 'Browser tab grouping'][i % 4],
      ['NumPy vectorized calculation', 'Social media captioning', 'Font icon loading', 'Domain renewal'][i % 4],
      ['Data cleaning and validation', 'Button border styling', 'Router favicon setup', 'Image compression only'][i % 4],
      ['Visualization and reporting', 'Navbar shadow color', 'Password reset email', 'Screen brightness'][i % 4],
    ]
  })),
  statistics: Array.from({ length: 100 }, (_, i) => ({
    q: `Statistics question ${i + 1}: Which idea helps data scientists reason about uncertainty in dataset case ${i + 1}?`,
    a: ['Probability distribution', 'Confidence interval', 'Hypothesis testing', 'Variance and standard deviation'][i % 4],
    o: [
      ['Probability distribution', 'CSS gradient', 'Image alt text', 'Git branch icon'][i % 4],
      ['Confidence interval', 'Footer alignment', 'Video thumbnail', 'Browser cache'][i % 4],
      ['Hypothesis testing', 'Font weight', 'Header logo', 'File rename'][i % 4],
      ['Variance and standard deviation', 'Card hover effect', 'Upload button', 'Tab title'][i % 4],
    ]
  })),
  ml: Array.from({ length: 100 }, (_, i) => ({
    q: `Machine Learning question ${i + 1}: Which ML concept is used in model-building scenario ${i + 1}?`,
    a: ['Train-test split', 'Regression model', 'Classification metric', 'Clustering method'][i % 4],
    o: [
      ['Train-test split', 'CSS reset', 'HTML list item', 'Page favicon'][i % 4],
      ['Regression model', 'Navbar padding', 'Image border radius', 'GitHub username'][i % 4],
      ['Classification metric', 'Deployment screenshot', 'Text shadow', 'File extension only'][i % 4],
      ['Clustering method', 'Browser bookmark', 'Footer copyright', 'Button icon'][i % 4],
    ]
  })),
  nlp: Array.from({ length: 100 }, (_, i) => ({
    q: `NLP question ${i + 1}: Which NLP concept is useful for language-processing task ${i + 1}?`,
    a: ['Tokenization', 'Text preprocessing', 'Embeddings', 'Language modeling'][i % 4],
    o: [
      ['Tokenization', 'CSS z-index', 'Image cropping', 'Mouse pointer'][i % 4],
      ['Text preprocessing', 'Header spacing', 'Git commit title', 'Browser shortcut'][i % 4],
      ['Embeddings', 'Footer link color', 'Domain name', 'Screen recorder'][i % 4],
      ['Language modeling', 'Button margin', 'Logo size', 'Tab close button'][i % 4],
    ]
  })),
};

export function getUniqueDailyQuestions(topic, count = 100) {
  const bank = questionBank[topic] || questionBank.python;
  const today = new Date();
  const seed = Number(`${today.getFullYear()}${today.getMonth() + 1}${today.getDate()}`);
  const shuffled = [...bank].sort((a, b) => {
    const hashA = Math.sin((a.q.length + seed) * 9999) % 1;
    const hashB = Math.sin((b.q.length + seed) * 9999) % 1;
    return hashA - hashB;
  });
  return shuffled.slice(0, count).map((item, index) => ({ ...item, id: index + 1, q: `Q${index + 1}. ${item.q}` }));
}
