export const statisticsSubtopics = [
  {
    title: 'Basic Probability Theory',
    theory: `Concept:\nProbability is the mathematical framework for reasoning about uncertainty. A probability model starts with a sample space, which contains all possible outcomes, events, which are sets of outcomes, and a probability measure, which assigns likelihoods to events.\n\nWhy it matters:\nData science decisions are usually made under uncertainty. Probability helps quantify uncertain events such as customer churn, fraud risk, rain tomorrow, model error, or experiment results.\n\nKey ideas:\nSample space, event, probability measure, complement, union, intersection, and disjoint events.\n\nExample:\nIf a model predicts whether a user will click an ad, the sample space may be {click, no click}. The event click may have probability 0.12.\n\nData science use:\nUse probability to interpret predictions, uncertainty, risk, and experimental outcomes.\n\nPractice:\nDefine the sample space and three events for an online purchase experiment.`
  },
  {
    title: 'Conditional Probability',
    theory: `Concept:\nConditional probability measures how likely an event is after another event is known to have occurred. It updates probability using new information.\n\nFormula:\nP(A | B) = P(A ∩ B) / P(B), where P(B) > 0.\n\nWhy it matters:\nMost real-world decisions depend on context. The probability of churn may change after knowing usage level, payment history, or support complaints.\n\nExample:\nThe probability that a flight is late may be higher when it rains than when it does not rain.\n\nData science use:\nUse conditional probability in segmentation, recommendation, risk modeling, Bayesian reasoning, and classification.\n\nPractice:\nGiven customer purchase and email-open data, calculate the probability of purchase given that the customer opened the email.`
  },
  {
    title: 'Bayes Rule',
    theory: `Concept:\nBayes rule reverses conditional probability. It lets you update belief about a cause after observing evidence.\n\nFormula:\nP(A | B) = P(A) P(B | A) / P(B).\n\nWhy it matters:\nBayes rule is central to spam detection, medical testing, fraud detection, diagnostics, and probabilistic machine learning.\n\nExample:\nIf a transaction is flagged as suspicious, Bayes rule helps estimate the probability that it is actually fraud.\n\nData science use:\nUse Bayes rule when you know how likely evidence is under a condition and want the probability of the condition given evidence.\n\nPractice:\nCalculate the probability that a user is high-value given that they clicked three campaign emails.`
  },
  {
    title: 'Independence',
    theory: `Concept:\nTwo events are independent if knowing one event occurred does not change the probability of the other.\n\nFormula:\nA and B are independent if P(A ∩ B) = P(A)P(B).\n\nWhy it matters:\nMany models assume independence to simplify calculations. But false independence assumptions can lead to incorrect conclusions.\n\nExample:\nA mechanical problem in an airplane may be independent of rain, but flight delay may depend on both.\n\nData science use:\nCheck independence assumptions in probability models, Naive Bayes, A/B tests, feature selection, and causal reasoning.\n\nPractice:\nUse a contingency table to check whether purchase behavior depends on device type.`
  },
  {
    title: 'Random Variables',
    theory: `Concept:\nA random variable maps uncertain outcomes to numerical values. It represents a quantity whose value is unknown before observation.\n\nWhy it matters:\nData columns such as age, revenue, delivery time, number of clicks, or churn indicator can be modeled as random variables.\n\nTypes:\nDiscrete random variables take countable values. Continuous random variables take values on intervals.\n\nExample:\nThe number of calls received by a call center in one hour is discrete. Customer waiting time is continuous.\n\nData science use:\nRandom variables are the foundation for distributions, expectation, variance, sampling, inference, and modeling.\n\nPractice:\nIdentify five columns in a dataset and classify each as discrete or continuous.`
  },
  {
    title: 'Discrete Random Variables',
    theory: `Concept:\nDiscrete random variables take finite or countably infinite values. Their behavior is described by a probability mass function.\n\nWhy it matters:\nMany business outcomes are counts: number of purchases, number of calls, number of defects, number of clicks, or number of visits.\n\nKey distributions:\nBernoulli, binomial, geometric, and Poisson.\n\nExample:\nA churn indicator is Bernoulli: 1 if the customer churned, 0 otherwise.\n\nData science use:\nUse discrete distributions for classification targets, count modeling, queue modeling, and experiment results.\n\nPractice:\nModel whether a user converts or not as a Bernoulli random variable.`
  },
  {
    title: 'Continuous Random Variables',
    theory: `Concept:\nContinuous random variables take values on intervals and are described using cumulative distribution functions and probability density functions.\n\nWhy it matters:\nMeasurements such as time, temperature, salary, height, weight, and transaction value are often continuous.\n\nKey ideas:\nCDF gives P(X ≤ x). PDF describes density, and probabilities are calculated over intervals, not exact points.\n\nExample:\nThe probability that delivery time is between 2 and 4 days is found by integrating the density over that interval.\n\nData science use:\nUse continuous distributions in modeling, anomaly detection, confidence intervals, and regression assumptions.\n\nPractice:\nExplain why the probability of an exact delivery time, such as exactly 3.000 days, is effectively zero in a continuous model.`
  },
  {
    title: 'Probability Distributions',
    theory: `Concept:\nA probability distribution describes how probability is spread across possible values of a random variable.\n\nWhy it matters:\nDistributions help data scientists understand uncertainty, detect unusual values, simulate data, and choose statistical models.\n\nExamples:\nBernoulli for yes/no events, binomial for number of successes, Poisson for event counts, normal for many naturally varying measurements.\n\nData science use:\nUse distributions to model customer counts, defect rates, call arrivals, test scores, residuals, and sampling behavior.\n\nPractice:\nChoose a suitable distribution for: ad click, number of daily support tickets, and customer purchase amount.`
  },
  {
    title: 'Expectation',
    theory: `Concept:\nExpectation is the long-run average value of a random variable. It summarizes the central value of uncertainty.\n\nWhy it matters:\nExpected value helps estimate average revenue, expected loss, average demand, and model performance over repeated cases.\n\nExample:\nIf a marketing campaign has different outcomes with different probabilities, expected value estimates average return.\n\nData science use:\nUse expectation in decision-making, risk analysis, loss functions, model evaluation, and simulation.\n\nPractice:\nCalculate expected revenue when a customer has a 20% chance of buying a $500 product.`
  },
  {
    title: 'Mean Variance and Standard Deviation',
    theory: `Concept:\nMean measures central tendency. Variance measures average squared deviation from the mean. Standard deviation is the square root of variance and is easier to interpret in original units.\n\nWhy it matters:\nTwo datasets can have the same mean but very different spread. Spread affects risk, consistency, and model reliability.\n\nExample:\nTwo sales teams may both average ₹50,000 revenue, but one may have much more variation.\n\nData science use:\nUse mean and variance to summarize numeric variables, compare groups, detect instability, and standardize features.\n\nPractice:\nCalculate mean and standard deviation for daily sales and explain whether sales are stable.`
  },
  {
    title: 'Covariance and Correlation',
    theory: `Concept:\nCovariance measures whether two variables move together. Correlation standardizes covariance between -1 and 1.\n\nWhy it matters:\nCorrelation helps identify relationships between variables, but correlation does not prove causation.\n\nExample:\nAdvertising spend and revenue may have positive correlation if revenue tends to increase when ad spend increases.\n\nData science use:\nUse covariance and correlation in EDA, feature selection, multicollinearity checks, and portfolio/risk analysis.\n\nPractice:\nCalculate correlation between marketing spend and sales. Then explain one possible non-causal reason for the relationship.`
  },
  {
    title: 'Multivariate Random Variables',
    theory: `Concept:\nMultivariate random variables describe multiple uncertain quantities together. Their joint distribution captures relationships between variables.\n\nWhy it matters:\nData science rarely studies one variable alone. Customer behavior, sales, price, region, time, and product category often interact.\n\nKey ideas:\nJoint distribution, marginal distribution, conditional distribution, independence, covariance, and correlation.\n\nExample:\nA model may study customer age and spending together to understand buying behavior.\n\nData science use:\nUse multivariate probability in regression, classification, clustering, Bayesian models, and simulations.\n\nPractice:\nCreate a two-variable table of device type and purchase status, then compute marginal and conditional probabilities.`
  },
  {
    title: 'Random Processes',
    theory: `Concept:\nA random process is a collection of random variables indexed by time or another ordered variable.\n\nWhy it matters:\nMany datasets evolve over time: stock prices, website visits, sensor readings, demand, weather, and user activity.\n\nExamples:\nIID sequences, Gaussian processes, Poisson processes, and random walks.\n\nData science use:\nUse random processes for time series, forecasting, traffic modeling, queues, simulations, and sequential decision-making.\n\nPractice:\nDescribe daily website traffic as a random process and list possible sources of randomness.`
  },
  {
    title: 'Law of Large Numbers',
    theory: `Concept:\nThe law of large numbers says that sample averages tend to get closer to the true expected value as sample size increases.\n\nWhy it matters:\nLarge samples give more stable estimates than small samples. This is a foundation of data-driven decision-making.\n\nExample:\nThe average conversion rate from 10 users may be noisy, but the average from 100,000 users is usually more reliable.\n\nData science use:\nUse the law of large numbers to reason about sample size, experiments, dashboards, and simulation accuracy.\n\nPractice:\nSimulate 10, 100, and 10,000 coin flips and compare the observed heads proportion.`
  },
  {
    title: 'Central Limit Theorem',
    theory: `Concept:\nThe central limit theorem says that the distribution of sample means becomes approximately normal as sample size grows, under broad conditions.\n\nWhy it matters:\nThe CLT explains why normal approximations appear in confidence intervals, hypothesis tests, and uncertainty estimates.\n\nExample:\nEven if individual purchase amounts are skewed, the average purchase amount across many customers may be approximately normal.\n\nData science use:\nUse CLT-based reasoning for confidence intervals, A/B testing, dashboard uncertainty, and statistical inference.\n\nPractice:\nTake repeated samples from a skewed dataset and plot the distribution of sample means.`
  },
  {
    title: 'Monte Carlo Simulation',
    theory: `Concept:\nMonte Carlo simulation uses repeated random sampling to estimate probabilities, expectations, and uncertainty.\n\nWhy it matters:\nSome problems are hard to solve analytically but easy to simulate.\n\nExample:\nEstimate expected profit by simulating customer demand, price variation, and cost uncertainty thousands of times.\n\nData science use:\nUse Monte Carlo methods in risk analysis, forecasting, probability estimation, and model validation.\n\nPractice:\nSimulate daily sales under random demand and calculate the average monthly revenue.`
  },
  {
    title: 'Descriptive Statistics',
    theory: `Concept:\nDescriptive statistics summarize observed data using histograms, mean, variance, quantiles, order statistics, covariance, and covariance matrices.\n\nWhy it matters:\nBefore modeling, data scientists must understand the data distribution, spread, outliers, and relationships.\n\nExample:\nA histogram can reveal skewness, multiple groups, unusual values, or data-entry errors.\n\nData science use:\nUse descriptive statistics in EDA, reporting, quality checks, and business interpretation.\n\nPractice:\nCreate a histogram and compute mean, median, variance, and quartiles for a numeric column.`
  },
  {
    title: 'Sampling and Estimation',
    theory: `Concept:\nSampling uses observed data to estimate unknown population quantities. Estimators produce approximate values such as sample mean, variance, or model parameters.\n\nWhy it matters:\nData scientists usually observe samples, not full populations. Understanding sampling helps quantify uncertainty.\n\nKey ideas:\nIID sampling, estimator, bias, variance, mean square error, and consistency.\n\nData science use:\nUse estimation for metrics, surveys, experiments, model parameters, and performance evaluation.\n\nPractice:\nEstimate average order value from a sample and discuss why it may differ from the true population average.`
  },
  {
    title: 'Confidence Intervals',
    theory: `Concept:\nA confidence interval gives a plausible range for an unknown population quantity based on sample data.\n\nWhy it matters:\nA single number hides uncertainty. Confidence intervals communicate estimate reliability.\n\nExample:\nInstead of reporting conversion rate as 8%, report a 95% confidence interval such as 7.6% to 8.4%.\n\nData science use:\nUse confidence intervals in reporting, A/B testing, forecasting, survey estimates, and model evaluation.\n\nPractice:\nCalculate a confidence interval for average order value from a sample.`
  },
  {
    title: 'Frequentist Statistics',
    theory: `Concept:\nFrequentist statistics treats unknown quantities as fixed and uses repeated-sampling behavior to evaluate estimators, confidence intervals, and hypothesis tests.\n\nWhy it matters:\nMost business experimentation and classical reporting tools use frequentist methods.\n\nKey ideas:\nIID samples, mean square error, consistency, confidence intervals, parametric and nonparametric estimation.\n\nData science use:\nUse frequentist methods for A/B tests, confidence intervals, regression diagnostics, and performance evaluation.\n\nPractice:\nCompare two sample means and decide whether the observed difference is practically meaningful.`
  },
  {
    title: 'Bayesian Statistics',
    theory: `Concept:\nBayesian statistics combines prior beliefs with observed data to produce updated posterior beliefs.\n\nWhy it matters:\nBayesian methods are useful when prior knowledge matters or when uncertainty must be updated continuously.\n\nKey ideas:\nPrior, likelihood, posterior, conjugate priors, and Bayesian estimators.\n\nData science use:\nUse Bayesian thinking in recommendation systems, risk estimation, probabilistic modeling, A/B testing, and decision systems.\n\nPractice:\nStart with a prior belief about conversion rate, observe campaign data, and explain how the belief should update.`
  },
  {
    title: 'Hypothesis Testing',
    theory: `Concept:\nHypothesis testing evaluates whether observed data provides enough evidence against a default assumption called the null hypothesis.\n\nWhy it matters:\nTeams use hypothesis tests to decide whether a change, campaign, model, or product experiment likely had an effect.\n\nKey ideas:\nNull hypothesis, alternative hypothesis, test statistic, p-value, significance level, Type I error, Type II error, and power.\n\nData science use:\nUse hypothesis testing in A/B testing, model comparison, quality control, and experiment analysis.\n\nPractice:\nTest whether a new landing page has a higher conversion rate than the old one.`
  },
  {
    title: 'Permutation Tests',
    theory: `Concept:\nA permutation test is a nonparametric hypothesis test that estimates significance by repeatedly shuffling group labels.\n\nWhy it matters:\nPermutation tests require fewer distribution assumptions than parametric tests.\n\nExample:\nShuffle treatment/control labels many times to see how often a difference as large as the observed one occurs by chance.\n\nData science use:\nUse permutation tests when sample sizes are small or normality assumptions are questionable.\n\nPractice:\nRun a permutation test comparing average order value between two groups.`
  },
  {
    title: 'Multiple Testing',
    theory: `Concept:\nMultiple testing occurs when many hypotheses are tested at once. More tests increase the chance of false positives.\n\nWhy it matters:\nDashboards and experiments often test many metrics, segments, or variants. Without correction, teams may overreact to random noise.\n\nKey ideas:\nFalse positives, family-wise error, false discovery rate, and correction methods.\n\nData science use:\nUse multiple-testing awareness in experiment analysis, feature screening, and large-scale metric monitoring.\n\nPractice:\nExplain why testing 100 metrics at 5% significance can produce false alarms even if nothing changed.`
  },
  {
    title: 'Linear Regression Statistics',
    theory: `Concept:\nLinear regression models a response variable as a linear combination of input variables plus error.\n\nWhy it matters:\nLinear regression is one of the most interpretable and foundational statistical models.\n\nKey ideas:\nLinear model, least-squares estimation, residuals, overfitting, coefficients, and model interpretation.\n\nData science use:\nUse linear regression for prediction, explanation, baseline modeling, trend estimation, and feature effect analysis.\n\nPractice:\nBuild a simple model predicting sales from ad spend and interpret the slope.`
  },
  {
    title: 'Set Theory and Linear Algebra Foundations',
    theory: `Concept:\nSet theory supports probability events and operations. Linear algebra supports vectors, matrices, projections, eigendecomposition, and regression geometry.\n\nWhy it matters:\nProbability and machine learning rely on these foundations. Events are sets; datasets can be represented as matrices.\n\nExamples:\nUnion and intersection define event relationships. Vectors and matrices represent features, observations, and model parameters.\n\nData science use:\nUse set theory for probability reasoning and linear algebra for regression, PCA, optimization, and machine learning.\n\nPractice:\nRepresent a small dataset as a matrix and identify rows as observations and columns as features.`
  }
];
