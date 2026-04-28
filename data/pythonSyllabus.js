export const pythonSubtopics = [
  {
    title: 'Python for Data Analysis Overview',
    theory: `Concept:\nPython for data analysis focuses on manipulating, processing, cleaning, and crunching structured data. The practical goal is not only learning Python syntax, but learning the Python tools used to turn messy data into useful analysis.\n\nWhy it matters:\nMost real datasets arrive as CSV files, spreadsheets, database tables, JSON records, time series, or multiple related tables. Python gives you one environment for loading, cleaning, analyzing, visualizing, and preparing that data for models.\n\nKey tools:\nNumPy, pandas, matplotlib, IPython, Jupyter, SciPy, scikit-learn, and statsmodels.\n\nData science use:\nUse Python to prepare datasets, create summaries, transform columns, merge data, generate charts, build features, and connect data to statistical or machine learning models.\n\nPractice:\nWrite down three datasets you use in real life and identify whether each one is tabular, time series, relational, or text-based.`
  },
  {
    title: 'Python Setup and Environment',
    theory: `Concept:\nA correct Python environment gives you Python, package management, notebooks, and the libraries needed for analysis. A common setup is Miniconda or Anaconda with Jupyter, pandas, NumPy, and matplotlib.\n\nWhy it matters:\nMany beginner errors are not coding errors; they are environment errors. If packages are installed in the wrong environment, notebooks and scripts may fail even when the code is correct.\n\nExample:\nconda create -n pydata python=3.10\nconda activate pydata\nconda install pandas jupyter matplotlib numpy\n\nData science use:\nUse isolated environments for each project so dependencies stay stable and reproducible.\n\nPractice:\nCreate a new environment, install pandas and Jupyter, then launch a notebook and run import pandas as pd.`
  },
  {
    title: 'IPython and Jupyter Notebooks',
    theory: `Concept:\nIPython is an enhanced interactive Python shell. Jupyter Notebook is a browser-based environment where code, text, markdown, charts, and outputs can live together.\n\nWhy it matters:\nData analysis is exploratory. You usually load data, inspect it, test transformations, visualize results, and revise your approach. Jupyter supports this execute-and-explore workflow.\n\nExample:\nimport pandas as pd\ndf = pd.read_csv('sales.csv')\ndf.head()\n\nData science use:\nUse notebooks for EDA, experiments, reporting, teaching, and portfolio projects. Convert stable logic into reusable Python scripts later.\n\nPractice:\nCreate a notebook with markdown headings, load a sample CSV, and display the first five rows.`
  },
  {
    title: 'Variables and Scalar Types',
    theory: `Concept:\nVariables store values. Scalar types are single values such as integers, floats, booleans, strings, None, dates, and times.\n\nWhy it matters:\nData columns are made from scalar values. Understanding types helps you clean datasets, convert columns, and prevent calculation errors.\n\nExample:\nprice = 199.99\nquantity = 3\nis_paid = True\ncustomer = 'Amit'\n\nData science use:\nCheck whether a column is numeric, text, boolean, or datetime before cleaning or modeling.\n\nPractice:\nCreate variables for product price, quantity, discount, and customer name. Calculate final amount.`
  },
  {
    title: 'Operators and Expressions',
    theory: `Concept:\nOperators perform arithmetic, comparison, logical, membership, and assignment operations. Expressions combine values and operators to produce results.\n\nWhy it matters:\nOperators are used in filtering, feature creation, validation rules, and business logic.\n\nExample:\nrevenue = price * quantity\nis_high_value = revenue > 10000\nvalid_city = city in ['Mumbai', 'Pune', 'Delhi']\n\nData science use:\nUse operators to create calculated columns, filter records, and classify data.\n\nPractice:\nGiven revenue and cost, calculate profit and check whether profit margin is above 20%.`
  },
  {
    title: 'Conditional Statements',
    theory: `Concept:\nConditional statements let Python make decisions using if, elif, and else.\n\nWhy it matters:\nData analysis often requires rules: classify sales as high or low, flag missing values, label risk levels, or choose different cleaning logic for different cases.\n\nExample:\nif revenue >= 100000:\n    segment = 'Enterprise'\nelif revenue >= 25000:\n    segment = 'Mid Market'\nelse:\n    segment = 'Small Business'\n\nData science use:\nUse conditions for feature engineering, validation, and rule-based segmentation.\n\nPractice:\nWrite a condition that labels marks as Distinction, First Class, Pass, or Fail.`
  },
  {
    title: 'Loops and Iteration',
    theory: `Concept:\nLoops repeat actions. for loops iterate over known sequences; while loops continue until a condition changes.\n\nWhy it matters:\nLoops automate repetitive work such as reading many files, cleaning many columns, running experiments, or processing API pages.\n\nExample:\nfiles = ['jan.csv', 'feb.csv', 'mar.csv']\nfor file in files:\n    print('Loading', file)\n\nData science use:\nUse loops to process folders, generate reports, evaluate multiple models, or apply transformations across columns.\n\nPractice:\nCreate a list of five CSV filenames and print a loading message for each file.`
  },
  {
    title: 'Functions',
    theory: `Concept:\nFunctions package reusable logic. They take inputs, execute code, and return outputs.\n\nWhy it matters:\nFunctions make analysis repeatable and reduce copy-paste mistakes. A good data project uses functions for loading, cleaning, transformation, visualization, and evaluation.\n\nExample:\ndef profit_margin(revenue, cost):\n    return (revenue - cost) / revenue\n\nData science use:\nCreate reusable functions for cleaning names, converting dates, calculating metrics, and validating data.\n\nPractice:\nWrite a function that takes revenue and cost and returns profit category: Loss, Low, Medium, or High.`
  },
  {
    title: 'Lists and Tuples',
    theory: `Concept:\nLists and tuples store ordered collections. Lists are mutable; tuples are immutable.\n\nWhy it matters:\nFeature names, column lists, model results, selected filters, and ordered records are often stored in lists or tuples.\n\nExample:\ncolumns = ['date', 'customer', 'revenue']\nshape = (1000, 3)\n\nData science use:\nUse lists to select columns from a DataFrame and tuples to represent fixed pairs such as dataset shape.\n\nPractice:\nCreate a list of five column names and use it to select those columns from a DataFrame.`
  },
  {
    title: 'Dictionaries and Sets',
    theory: `Concept:\nDictionaries store key-value pairs. Sets store unique unordered values.\n\nWhy it matters:\nDictionaries are useful for mappings, configurations, renamed columns, JSON-like data, and lookup tables. Sets are useful for uniqueness and membership checks.\n\nExample:\nrename_map = {'cust_id': 'customer_id', 'amt': 'amount'}\nunique_cities = {'Mumbai', 'Pune', 'Delhi'}\n\nData science use:\nUse dictionaries to rename columns and map category labels. Use sets to compare column names or remove duplicates.\n\nPractice:\nCreate a dictionary that maps short column names to clean business-friendly names.`
  },
  {
    title: 'String Handling',
    theory: `Concept:\nStrings store text. Python string methods help clean, search, split, replace, and format text.\n\nWhy it matters:\nReal-world text data is messy. Names, cities, product categories, emails, and comments often require cleaning before analysis.\n\nExample:\nname = '  rahul sharma  '\nclean = name.strip().title()\n\nData science use:\nClean whitespace, standardize capitalization, extract codes, split full names, and process categorical labels.\n\nPractice:\nClean a list of customer names by removing spaces and converting them to title case.`
  },
  {
    title: 'Files and Operating System Basics',
    theory: `Concept:\nPython can read and write files and interact with the operating system using file paths and directory tools.\n\nWhy it matters:\nData projects require loading source files, saving cleaned outputs, managing folders, and automating repeated file tasks.\n\nExample:\nfrom pathlib import Path\nfolder = Path('data')\nfor file in folder.glob('*.csv'):\n    print(file.name)\n\nData science use:\nAutomate reading many files, save reports, and organize raw, processed, and output folders.\n\nPractice:\nCreate raw_data and clean_data folders, then list all CSV files in raw_data.`
  },
  {
    title: 'Exception Handling',
    theory: `Concept:\nException handling uses try and except to handle runtime errors gracefully.\n\nWhy it matters:\nData pipelines often face missing files, invalid values, bad formats, failed API calls, or unexpected columns. Exception handling prevents the entire workflow from crashing.\n\nExample:\ntry:\n    df = pd.read_csv('sales.csv')\nexcept FileNotFoundError:\n    print('File not found. Check path.')\n\nData science use:\nUse exception handling in file loading, data type conversion, API calls, and automated jobs.\n\nPractice:\nWrite code that safely reads a CSV and prints a helpful message if the file does not exist.`
  },
  {
    title: 'NumPy Arrays',
    theory: `Concept:\nNumPy provides the ndarray, a fast multidimensional array object for numerical computing. Arrays support vectorized operations, meaning calculations can happen across many values at once.\n\nWhy it matters:\nNumPy arrays are more efficient than Python lists for numerical data and form the computational foundation for many scientific and machine learning libraries.\n\nExample:\nimport numpy as np\narr = np.array([10, 20, 30])\narr * 2\n\nData science use:\nUse NumPy for numerical transformations, matrix operations, random numbers, simulations, and model input preparation.\n\nPractice:\nCreate a NumPy array of monthly sales and calculate total, mean, minimum, and maximum sales.`
  },
  {
    title: 'NumPy Indexing and Slicing',
    theory: `Concept:\nIndexing selects individual elements. Slicing selects ranges. NumPy supports simple slicing, boolean indexing, and fancy indexing.\n\nWhy it matters:\nAnalysis often requires selecting subsets of data: specific rows, filtered values, or selected columns from arrays.\n\nExample:\narr = np.array([5, 10, 15, 20])\narr[arr > 10]\n\nData science use:\nUse boolean indexing to filter numerical values and isolate records that meet conditions.\n\nPractice:\nCreate an array of 10 scores and select only scores greater than 70.`
  },
  {
    title: 'NumPy Mathematical and Statistical Methods',
    theory: `Concept:\nNumPy includes mathematical and statistical methods such as sum, mean, min, max, standard deviation, sorting, and unique values.\n\nWhy it matters:\nThese operations help summarize numerical data quickly and support exploratory analysis.\n\nExample:\nsales = np.array([120, 150, 90, 200])\nsales.mean()\nsales.std()\n\nData science use:\nUse NumPy to compute fast summaries, detect spread, normalize arrays, and prepare features.\n\nPractice:\nCalculate mean, median, standard deviation, and sorted values for an array of product prices.`
  },
  {
    title: 'pandas Series',
    theory: `Concept:\nA pandas Series is a one-dimensional labeled array. It has values and an index.\n\nWhy it matters:\nMany DataFrame columns are Series. Understanding Series helps you manipulate columns, compute statistics, and apply transformations.\n\nExample:\nimport pandas as pd\ns = pd.Series([100, 200, 300], index=['A', 'B', 'C'])\n\nData science use:\nUse Series for single-column operations such as value counts, missing value checks, and transformations.\n\nPractice:\nCreate a Series of product sales indexed by product name and calculate total sales.`
  },
  {
    title: 'pandas DataFrames',
    theory: `Concept:\nA DataFrame is a two-dimensional table with rows and columns. It is the main pandas object for structured data analysis.\n\nWhy it matters:\nMost business datasets are tabular: customers, sales, transactions, products, employees, or events. DataFrames make this data easy to filter, transform, join, summarize, and export.\n\nExample:\ndf = pd.DataFrame({'product': ['A', 'B'], 'sales': [100, 200]})\ndf.head()\n\nData science use:\nUse DataFrames for almost every step of analysis: loading data, cleaning, EDA, feature engineering, and reporting.\n\nPractice:\nCreate a DataFrame with product, region, sales, and profit columns. Display the first rows.`
  },
  {
    title: 'Indexing Selection and Filtering',
    theory: `Concept:\npandas supports selecting columns, rows, and subsets using brackets, loc, iloc, boolean masks, and query-style conditions.\n\nWhy it matters:\nFiltering is one of the most common analysis operations. You often need only certain columns, date ranges, customers, regions, or categories.\n\nExample:\nhigh_sales = df[df['sales'] > 10000]\nselected = df.loc[:, ['customer', 'sales']]\n\nData science use:\nUse filtering to create analysis-ready subsets and isolate important business segments.\n\nPractice:\nFilter a sales DataFrame to show only rows where region is West and sales are above 5000.`
  },
  {
    title: 'Descriptive Statistics in pandas',
    theory: `Concept:\npandas provides summary methods such as describe, mean, median, std, min, max, correlation, value_counts, and unique.\n\nWhy it matters:\nBefore modeling, you must understand the shape, central tendency, spread, missingness, and category distributions in your data.\n\nExample:\ndf.describe()\ndf['category'].value_counts()\n\nData science use:\nUse descriptive statistics to detect outliers, skewed distributions, incorrect values, and important patterns.\n\nPractice:\nRun describe on a dataset and write three observations about the numeric columns.`
  },
  {
    title: 'Reading CSV Excel JSON and Text Files',
    theory: `Concept:\npandas can read many file formats: CSV, Excel, JSON, HTML tables, and text files. It can also write results back to files.\n\nWhy it matters:\nData rarely starts inside Python. Analysts must load data from external files, databases, APIs, and web sources.\n\nExample:\ndf = pd.read_csv('sales.csv')\norders = pd.read_excel('orders.xlsx')\n\nData science use:\nUse file-loading tools to bring raw data into Python for cleaning and analysis.\n\nPractice:\nLoad a CSV file, inspect its shape, columns, first rows, and data types.`
  },
  {
    title: 'JSON Web APIs and Databases',
    theory: `Concept:\nJSON is a common format for web data. APIs return data from external services. Databases store structured data and can be queried from Python.\n\nWhy it matters:\nModern analytics often combines local files with API data and database tables.\n\nExample:\nimport requests\nresponse = requests.get('https://api.example.com/data')\ndata = response.json()\n\nData science use:\nUse APIs for live data, databases for company data, and JSON parsing for nested records.\n\nPractice:\nFetch sample JSON from a public API and convert it into a pandas DataFrame.`
  },
  {
    title: 'Handling Missing Data',
    theory: `Concept:\nMissing data appears as blank cells, NaN values, None values, or special placeholder values. pandas provides isna, dropna, and fillna to detect and handle it.\n\nWhy it matters:\nMissing values can distort summaries and break models. The correct strategy depends on context: remove, fill, flag, or investigate.\n\nExample:\ndf.isna().sum()\ndf['age'] = df['age'].fillna(df['age'].median())\n\nData science use:\nUse missing data handling before EDA, dashboards, and machine learning.\n\nPractice:\nFind missing values in a DataFrame and fill numeric columns with median values.`
  },
  {
    title: 'Data Transformation',
    theory: `Concept:\nData transformation changes data into a cleaner or more useful form. This includes removing duplicates, replacing values, renaming columns, binning, mapping, and creating new columns.\n\nWhy it matters:\nRaw data is rarely analysis-ready. Transformation converts raw input into meaningful features and business metrics.\n\nExample:\ndf = df.drop_duplicates()\ndf['profit'] = df['revenue'] - df['cost']\n\nData science use:\nUse transformations to prepare metrics, features, reports, and model-ready data.\n\nPractice:\nCreate a profit column and a profit_margin column from revenue and cost.`
  },
  {
    title: 'String Manipulation and Regular Expressions',
    theory: `Concept:\nString manipulation cleans text data. Regular expressions search for text patterns such as phone numbers, emails, codes, or product IDs.\n\nWhy it matters:\nText fields are often inconsistent. Cleaning strings improves grouping, filtering, matching, and feature extraction.\n\nExample:\ndf['email_domain'] = df['email'].str.split('@').str[-1]\n\nData science use:\nUse string methods for customer names, addresses, product codes, reviews, and logs.\n\nPractice:\nExtract email domains from a customer email column.`
  },
  {
    title: 'Categorical Data',
    theory: `Concept:\nCategorical data represents labels such as gender, region, product type, status, or customer segment. pandas has category data types and categorical methods.\n\nWhy it matters:\nCategorical columns are common in business data. They need cleaning, ordering, encoding, and summarization.\n\nExample:\ndf['region'] = df['region'].astype('category')\ndf['region'].value_counts()\n\nData science use:\nUse categorical data handling for group analysis, dashboards, and machine learning encoding.\n\nPractice:\nConvert a region column to category and count records per region.`
  },
  {
    title: 'Combining Merging and Joining Data',
    theory: `Concept:\nCombining data connects multiple datasets using concat, merge, join, and combine operations.\n\nWhy it matters:\nReal projects often use many related tables: customers, orders, products, payments, and marketing campaigns. Analysis requires joining them correctly.\n\nExample:\nmerged = orders.merge(customers, on='customer_id', how='left')\n\nData science use:\nUse joins to build complete analysis datasets from multiple sources.\n\nPractice:\nMerge an orders table with a customers table using customer_id.`
  },
  {
    title: 'Reshaping Pivoting and Hierarchical Indexing',
    theory: `Concept:\nReshaping changes data layout. Pivoting converts long data to wide format or wide data to long format. Hierarchical indexing supports multiple index levels.\n\nWhy it matters:\nSome analyses need tidy long data, while reports may need wide summary tables.\n\nExample:\npivot = df.pivot_table(values='sales', index='region', columns='month', aggfunc='sum')\n\nData science use:\nUse pivot tables for dashboards, summaries, and comparison reports.\n\nPractice:\nCreate a pivot table showing monthly sales by region.`
  },
  {
    title: 'Data Aggregation and GroupBy',
    theory: `Concept:\nGroupBy applies split-apply-combine logic: split data into groups, apply calculations, and combine results.\n\nWhy it matters:\nMost business questions are grouped questions: sales by region, churn by segment, profit by product, or orders by month.\n\nExample:\ndf.groupby('region')['sales'].sum()\n\nData science use:\nUse GroupBy to create KPIs, summaries, category comparisons, and aggregate features.\n\nPractice:\nCalculate total sales and average profit by product category.`
  },
  {
    title: 'Apply Transform and Advanced Group Operations',
    theory: `Concept:\napply runs custom logic on rows, columns, or groups. transform returns results aligned to the original data shape.\n\nWhy it matters:\nStandard aggregations are not enough for every problem. Custom logic helps with advanced cleaning, scoring, and group-specific calculations.\n\nExample:\ndf['region_avg'] = df.groupby('region')['sales'].transform('mean')\n\nData science use:\nUse transform for group-normalized features and apply for custom business rules.\n\nPractice:\nCreate a column showing each row's sales compared with its region average.`
  },
  {
    title: 'Time Series Basics',
    theory: `Concept:\nTime series data is indexed or ordered by time. pandas supports datetime parsing, date ranges, time indexing, shifting, resampling, and rolling windows.\n\nWhy it matters:\nSales, website traffic, stock prices, sensor readings, and user activity are time-based. Time handling is essential for trend analysis and forecasting.\n\nExample:\ndf['date'] = pd.to_datetime(df['date'])\ndf.set_index('date').resample('M')['sales'].sum()\n\nData science use:\nUse time series tools for monthly summaries, moving averages, lag features, and trend analysis.\n\nPractice:\nConvert a date column to datetime and calculate monthly revenue.`
  },
  {
    title: 'Moving Windows and Resampling',
    theory: `Concept:\nResampling changes the frequency of time series data. Moving windows calculate rolling statistics such as moving averages.\n\nWhy it matters:\nTime series often need smoothing, aggregation, and trend extraction.\n\nExample:\ndf['rolling_7_day_sales'] = df['sales'].rolling(7).mean()\n\nData science use:\nUse rolling averages for trend detection, anomaly checks, and forecasting features.\n\nPractice:\nCreate a 7-day moving average of daily sales.`
  },
  {
    title: 'Plotting with matplotlib',
    theory: `Concept:\nmatplotlib is a core Python library for creating static charts such as line plots, bar charts, scatter plots, and histograms.\n\nWhy it matters:\nCharts help reveal patterns that tables hide. Visualization is essential for EDA, reporting, and communication.\n\nExample:\nimport matplotlib.pyplot as plt\ndf['sales'].plot(kind='hist')\nplt.show()\n\nData science use:\nUse matplotlib to visualize distributions, trends, comparisons, and relationships.\n\nPractice:\nCreate a line chart of monthly revenue and a histogram of order values.`
  },
  {
    title: 'Plotting with pandas and seaborn',
    theory: `Concept:\npandas provides quick plotting methods, while seaborn builds statistical charts with clean defaults.\n\nWhy it matters:\nStatistical plots such as boxplots, heatmaps, scatter plots, and category plots help compare groups and inspect relationships.\n\nExample:\nimport seaborn as sns\nsns.boxplot(data=df, x='region', y='sales')\n\nData science use:\nUse seaborn for EDA, correlation heatmaps, distribution plots, and categorical comparisons.\n\nPractice:\nCreate a boxplot of sales by region and explain which region has more variation.`
  },
  {
    title: 'Preparing Data for Modeling',
    theory: `Concept:\nModel preparation converts cleaned data into numerical features and target variables usable by modeling libraries.\n\nWhy it matters:\nMachine learning models require consistent numeric inputs, no unsupported missing values, and correct train-test separation.\n\nExample:\nX = df[['age', 'income']]\ny = df['churn']\n\nData science use:\nUse feature selection, encoding, scaling, and splitting before applying scikit-learn models.\n\nPractice:\nChoose feature columns and target column from a customer dataset.`
  },
  {
    title: 'scikit-learn Introduction',
    theory: `Concept:\nscikit-learn is Python's general-purpose machine learning library. It includes models for classification, regression, clustering, dimensionality reduction, preprocessing, and model selection.\n\nWhy it matters:\nAfter cleaning and preparing data, scikit-learn lets you train, evaluate, and compare models using a consistent API.\n\nExample:\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LogisticRegression\n\nData science use:\nUse scikit-learn to build predictive models and evaluate them with appropriate metrics.\n\nPractice:\nSplit a dataset into train and test sets and train a simple classification model.`
  },
  {
    title: 'statsmodels Introduction',
    theory: `Concept:\nstatsmodels focuses on statistical modeling and inference. It provides regression models, time series models, ANOVA, nonparametric methods, and statistical summaries.\n\nWhy it matters:\nscikit-learn focuses more on prediction, while statsmodels provides p-values, uncertainty estimates, and statistical interpretation.\n\nExample:\nimport statsmodels.api as sm\nmodel = sm.OLS(y, X).fit()\nprint(model.summary())\n\nData science use:\nUse statsmodels when you need interpretability, statistical inference, or regression diagnostics.\n\nPractice:\nFit a simple linear regression model and interpret the coefficient direction.`
  },
  {
    title: 'Real-World Data Analysis Projects',
    theory: `Concept:\nReal projects combine loading, cleaning, transformation, visualization, aggregation, time series, and modeling into one workflow.\n\nWhy it matters:\nPortfolio projects prove that you can solve complete problems, not just run isolated commands.\n\nExample projects:\nSales analysis, MovieLens ratings analysis, baby names trend analysis, food database analysis, election donation analysis, and website traffic analysis.\n\nData science use:\nUse projects to demonstrate problem framing, cleaning strategy, analysis, visualization, and conclusions.\n\nPractice:\nBuild a sales analysis notebook with data cleaning, monthly revenue, top products, regional performance, and three charts.`
  },
  {
    title: 'Notebook and Project Best Practices',
    theory: `Concept:\nA professional notebook should be readable, reproducible, and logically organized. It should explain the problem, data, cleaning steps, analysis, charts, and conclusions.\n\nWhy it matters:\nA messy notebook is hard to trust. Clean structure makes your analysis easier to review, present, and convert into production workflows.\n\nRecommended structure:\n1. Problem statement\n2. Imports and settings\n3. Data loading\n4. Data inspection\n5. Cleaning\n6. EDA\n7. Feature engineering\n8. Modeling or analysis\n9. Results and conclusions\n\nData science use:\nUse notebook best practices for portfolio projects, internships, client work, and team collaboration.\n\nPractice:\nRefactor an old notebook into clear sections with markdown explanations.`
  }
];
