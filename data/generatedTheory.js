export const generatedTheory = {
  python: {
    title: 'Python for Data Science',
    source: 'Python for Data Analysis: Data Wrangling with pandas, NumPy & Jupyter',
    summary: 'Python is a practical language for data science because it combines readable programming syntax with strong data libraries. A beginner should learn Python basics, Jupyter notebooks, NumPy arrays, pandas DataFrames, file loading, data cleaning, transformation, visualization, aggregation, and time series workflows.',
    units: [
      { title: 'Python Language Basics and Jupyter', content: 'Learn the Python interpreter, IPython shell, Jupyter Notebook, variables, scalar types, control flow, functions, lists, dictionaries, sets, comprehensions, files, errors, and exception handling. These skills create the base for repeatable data workflows.' },
      { title: 'NumPy Arrays', content: 'NumPy provides multidimensional arrays, vectorized computation, indexing, slicing, boolean indexing, random number generation, universal functions, array-oriented programming, statistics, sorting, file I/O, and linear algebra.' },
      { title: 'Pandas DataFrames', content: 'Pandas provides Series, DataFrame, indexes, filtering, sorting, ranking, arithmetic alignment, mapping, descriptive statistics, correlation, covariance, value counts, and membership operations.' },
      { title: 'Data Loading and Cleaning', content: 'Data scientists load CSV, JSON, XML, HTML, Excel, binary formats, web APIs, and databases. Cleaning includes missing data, duplicate removal, replacing values, renaming indexes, binning, detecting outliers, sampling, dummy variables, strings, regular expressions, and categorical data.' },
      { title: 'Wrangling and Visualization', content: 'Wrangling includes hierarchical indexing, merging, joining, concatenation, reshaping, pivoting, and group operations. Visualization includes matplotlib figures, axes, line plots, bar plots, histograms, density plots, scatter plots, annotations, legends, and saving charts.' }
    ]
  },
  statistics: {
    title: 'Statistics & Probability',
    source: 'Probability and Statistics for Data Science',
    summary: 'Statistics and probability help data scientists reason from samples, uncertainty, random variables, distributions, expectation, descriptive statistics, confidence intervals, and inference.',
    units: [
      { title: 'Basic Probability Theory', content: 'Study probability spaces, events, conditional probability, independence, and the logic of uncertainty. These concepts support inference and machine learning.' },
      { title: 'Random Variables', content: 'Understand discrete and continuous random variables, conditioning on events, functions of random variables, and random variable generation.' },
      { title: 'Multivariate Random Variables', content: 'Learn joint distributions, independence, functions of several variables, multivariate generation, and rejection sampling.' },
      { title: 'Expectation and Variance', content: 'Expectation summarizes average behavior. Mean, variance, covariance, and conditional expectation are core tools for modeling and evaluating data.' },
      { title: 'Inference and Descriptive Statistics', content: 'Learn histograms, sample mean and variance, order statistics, covariance matrices, frequentist sampling, mean square error, consistency, confidence intervals, nonparametric estimation, and parametric estimation.' }
    ]
  },
  sql: {
    title: 'SQL and Excel for Data Analysis',
    source: 'Data Analysis Using SQL and Excel',
    summary: 'SQL and Excel are practical analysis tools for extracting, summarizing, exploring, and visualizing business data. SQL handles structured querying; Excel supports charting and quick analysis.',
    units: [
      { title: 'SQL Foundations', content: 'Understand tables, data models, NULL values, column types, entity-relationship diagrams, SQL queries, SELECT, FILTER, JOIN, UNION ALL, CASE, IN, and subqueries.' },
      { title: 'Joins and Dataflows', content: 'Learn cross joins, lookup joins, equijoins, nonequijoins, outer joins, aggregate operations, sorting, appending calculated columns, and combining datasets.' },
      { title: 'Data Exploration', content: 'Explore values in tables using counts, histograms, min, max, mode, string checks, distinct counts, summary queries, and generated SQL summary code.' },
      { title: 'Statistics in SQL', content: 'Apply null hypothesis thinking, confidence, probability, normal distribution, standard deviation, difference testing, proportions, confidence intervals, and chi-square analysis.' },
      { title: 'Time and Location Analysis', content: 'Analyze dates, times, intervals, time zones, calendar tables, day-of-week effects, geospatial latitude/longitude, distances, zip codes, maps, and hierarchical geography.' }
    ]
  },
  ml: {
    title: 'Data Science and Machine Learning',
    source: 'Data Science and Machine Learning: Mathematical and Statistical Methods',
    summary: 'Machine learning learns from data to make predictions, discover structure, and support decisions. Students should understand statistical learning, Monte Carlo methods, unsupervised learning, regression, regularization, kernels, and classification.',
    units: [
      { title: 'Importing, Summarizing, and Visualizing Data', content: 'Start with feature types, summary tables, summary statistics, plotting qualitative and quantitative variables, and bivariate visualization.' },
      { title: 'Statistical Learning', content: 'Learn supervised and unsupervised learning, training and test loss, tradeoffs, risk estimation, cross-validation, modeling data, multivariate normal models, normal linear models, and Bayesian learning.' },
      { title: 'Monte Carlo Methods', content: 'Study random number generation, simulation of random variables and random vectors, resampling, Markov Chain Monte Carlo, Monte Carlo estimation, bootstrap, variance reduction, and optimization.' },
      { title: 'Unsupervised Learning', content: 'Understand risk and loss in unsupervised learning, EM algorithm, density estimation, mixture models, K-Means, hierarchical clustering, PCA, and SVD.' },
      { title: 'Regression and Classification', content: 'Learn linear regression, parameter estimation, model selection, prediction, ANOVA, validation, regularization, kernel methods, classification metrics, Bayes rule, LDA, QDA, logistic regression, KNN, SVM, and scikit-learn classification.' }
    ]
  },
  nlp: {
    title: 'Natural Language Processing',
    source: 'Natural Language Processing course material',
    summary: 'NLP teaches computers to understand, analyze, manipulate, and generate human language. It supports chatbots, translation, information extraction, spam filtering, search, summarization, and AI assistants.',
    units: [
      { title: 'NLP Introduction and Applications', content: 'Understand NLP as the intersection of computer science, linguistics, and AI. Applications include sentiment analysis, machine translation, text extraction, chatbots, email classification, search engines, grammar checking, voice assistants, and social translation.' },
      { title: 'Text Preprocessing with NLTK', content: 'Learn word tokenization, sentence tokenization, stop-word filtering, stemming, POS tagging, lemmatization, chunking, chinking, named entity recognition, and TF-IDF.' },
      { title: 'Morphology and Word Structure', content: 'Study words and components, lexemes, morphemes, morphology, problems in morphological processing, typology, and morphological typology.' },
      { title: 'Syntax Analysis', content: 'Study parsing natural language, treebanks, dependency graphs, phrase structure trees, shift-reduce parsing, CYK parsing, probabilistic context-free grammar, generative parsing models, and discriminative parsing models.' },
      { title: 'Language Modeling and Semantics', content: 'Learn N-gram models, language model evaluation, parameter estimation, language adaptation, semantic interpretation, word sense systems, predicate-argument structure, discourse cohesion, reference resolution, and discourse structure.' }
    ]
  },
  genai: {
    title: 'Generative AI',
    source: 'Multidisciplinary Minor - Generative AI syllabus',
    summary: 'Generative AI focuses on systems that create text, images, music, stories, code, and other outputs. Students learn AI and ML foundations, generative models, tools, techniques, applications, ethics, and capstone project work.',
    units: [
      { title: 'Introduction to Generative AI', content: 'Learn AI and ML foundations, neural networks, deep learning, and the role of models that generate new data points by learning the underlying distribution of training data.' },
      { title: 'Generative AI Models', content: 'Study how generative models create new outputs, including model architectures, training behavior, loss functions, hyperparameters, and output quality.' },
      { title: 'Generative AI Tools and Techniques', content: 'Develop expertise using AI tools and technologies for business, creative, and technical workflows.' },
      { title: 'Applications and Responsible AI', content: 'Explore applications such as realistic image/text generation, music generation, style transfer, stories, artworks, and business automation while understanding deepfakes, privacy, ethics, and societal impact.' },
      { title: 'Laboratory and Capstone Project', content: 'Apply theory to hands-on interdisciplinary projects using tools such as TensorFlow or PyTorch and build complete Generative AI solutions.' }
    ]
  }
};
