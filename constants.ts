
import { Project, Skill, Education, BlogPost } from './types';

export const USER_INFO = {
  name: "Kaung Si Thu",
  title: "Data Analyst | Junior Data Scientist",
  tagline: "Turning raw data into actionable insights through predictive modeling and visualization.",
  about: "Data Scientist with a focus on predictive modeling and business intelligence. I specialize in uncovering hidden patterns within complex datasets to drive smarter, data-backed decision-making using Python, SQL, Tableau and Machine Learning.",
  profileImage: "./assets/my_img.png",
  resumeUrl: "./resume.pdf",
  email: "kaungsithu.sallius@gmail.com",
  linkedin: "https://www.linkedin.com/in/kaung-si-thu01",
  github: "https://github.com/KaungSiThu-Sallius"
};

export const SKILLS: Skill[] = [
  { name: "Python", category: "Core" },
  { name: "R Programming", category: "Core" },
  { name: "SQL", category: "Core" },
  { name: "Machine Learning", category: "Analysis" },
  { name: "Deep Learning (TensorFlow)", category: "Analysis" },
  { name: "Tableau", category: "Tools" },
  { name: "Plotly", category: "Tools" },
  { name: "Excel", category: "Tools" },
  { name: "Pandas/NumPy", category: "Core" },
  { name: "Scikit-Learn", category: "Analysis" },
  { name: "Git", category: "Tools" }
];

export const EDUCATION: Education[] = [
  {
    id: 1,
    degree: "Master in Data Science",
    institution: "Universiti Teknologi Malaysia",
    period: "2025 - 2027",
    description: "Specializing in advanced Predictive Analytics and Deep Learning. My research focuses on Interpretable Machine Learning (XAI) for dynamic pricing in e-commerce, bridging the gap between high-accuracy 'black box' models and business transparency."
  },
  {
    id: 2,
    degree: "Bachelor of Technology in Information Technology",
    institution: "Marwadi University - India",
    period: "2021 - 2025",
    description: "Specialized in Data Science and Analytics, moving beyond standard IT coursework to master data processing pipelines and statistical analysis. Gained practical experience in transforming raw complex datasets into structured, actionable intelligence."
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "HDB Resale Price Prediction and Analysis",
    description: "Built a high-performance regression model to forecast Singapore HDB prices. Using XGBoost, the model explains 97% of price variance (R² 0.97) by analyzing key drivers like floor area, location, and lease tenure to aid financial decision-making.",
    category: "Machine Learning",
    tags: ["python", "Scikit-Learn", "Pandas", "Plotly"],
    imageUrl: "./assets/hdb_project.png",
    githubUrl: "https://github.com/KaungSiThu-Sallius/HDB-Resale-Prices-Prediction.git",
    demoUrl: "https://colab.research.google.com/drive/1UeqtiKtkEo1alQbwRikj_xKMxqP3tpaj?usp=sharing",
    demoLabel: "View Notebook"
  },
  {
    id: 2,
    title: "Unemployment Analysis and Prediction in India and Pakistan",
    description: "A high-precision economic forecasting model for India and Pakistan. Leveraged XGBoost and Random Forest to analyze key indicators like GDP and inflation, achieving a near-perfect Test R² score of 0.96.",
    category: "Machine Learning",
    tags: ["python", "Scikit-Learn", "Plotly", "Pandas"],
    imageUrl: "./assets/unemployment_project.png",
    githubUrl: "https://github.com/KaungSiThu-Sallius/Unemployment-Analysis-and-Prediction-in-India-and-Pakistan.git",
    demoUrl: "https://colab.research.google.com/drive/1XLg8sXlGKpesGzY43TaR6g2eUKzJnKI4?usp=sharing",
    demoLabel: "View Notebook"
  },

  {
    id: 3,
    title: "Spotify Playlist Data Pipeline and Analysis",
    description: "Automated data pipeline that authenticates with the Spotify API to extract playlist track metrics, cleans and structures the data into CSV format, and performs exploratory analysis to identify popularity trends and top-performing artists.",
    category: "Python",
    tags: ["Python", "Pandas", "SQLite3"],
    imageUrl: "./assets/spotify_analysis.png",
    githubUrl: "https://github.com/KaungSiThu-Sallius/Data-Pipeline-From-Spotify-API-to-SQL-with-Python.git",
  },

  {
    id: 4,
    title: "Internet Service Customer Churn Analysis",
    description: "In this analysis, we will explore the Customer Churn dataset to understand the factors that lead to customers discontinuing their internet service. We will also offer recommendations on how to reduce churn and retain customers.",
    category: "Excel",
    tags: ["Excel", "Dashboard", "Pivot Table"],
    imageUrl: "./assets/churn_excel.png",
    githubUrl: "https://github.com/KaungSiThu-Sallius/Customer-Churn-Analysis-Excel.git",
    demoUrl: "https://onedrive.live.com/:x:/g/personal/13648A32A0283FA9/EVwN2r02wU1FjysQeHMfjP0BzjU0xg2Emi3Kti9rNUcgMw?resid=13648A32A0283FA9!sbdda0d5cc136454d8f2b1078731f8cfd&ithint=file%2Cxlsx&e=FIyEhY&migratedtospo=true&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3gvYy8xMzY0OGEzMmEwMjgzZmE5L0VWd04ycjAyd1UxRmp5c1FlSE1malAwQnpqVTB4ZzJFbWkzS3RpOXJOVWNnTXc_ZT1GSXlFaFk",
    demoLabel: "View Template"
  },

  {
    id: 5,
    title: "E Commerce Sales Analysis",
    description: "In this analysis, we will examine key aspects of e-commerce sales data to uncover insights and trends that can inform business strategies and decision-making. ",
    category: "Excel",
    tags: ["Excel", "Dashboard", "Pivot Table"],
    imageUrl: "./assets/ecommerce_excel.png",
    githubUrl: "https://github.com/KaungSiThu-Sallius/E-Commerce-Sales-Analysis-Excel.git",
    demoUrl: "https://1drv.ms/x/c/13648a32a0283fa9/IQA5aQftkDOdSpL2RDVhlZB9AX1-KSCnBcboY7pUS1rQwME?e=glAEpF",
    demoLabel: "View Template"
  },

  {
    id: 6,
    title: "Forecasting Tourism Demand in Singapore",
    description: "A data-driven project leveraging historical tourism data, weather patterns, and major events to predict tourism demand in Singapore. Features regression analysis, forecasting models, and interactive visualizations to provide actionable insights for stakeholders in the tourism industry.",
    category: "Machine Learning",
    tags: ["python", "Scikit-Learn", "Pandas"],
    imageUrl: "./assets/tourism_demand.png",
    githubUrl: "https://github.com/KaungSiThu-Sallius/Forecasting-Tourism-Demand-in-Singapore.git",
    demoUrl: "https://colab.research.google.com/drive/18pqKF34my4QLYlpJ8oxhnXpDIThsk6l4?usp=sharing",
    demoLabel: "View Notebook"
  },

  {
    id: 6,
    title: "Employee Turnover Analysis",
    description: "The goal of this dashboard is to provide a summary of the factors contributing to employee turnover and to deliver detailed information about employees, including their age, gender, education, tenure, performance, and whether they are currently employed or not.",
    category: "Tableau",
    tags: ["Tableau", "Data Visualization", "Dashboard"],
    imageUrl: "./assets/employee_turnover.png",
    demoUrl: "https://public.tableau.com/app/profile/kaung.si.thu4639/viz/EmployeeTurnover_17236326965130/SummaryDashboard",
    githubUrl: "https://github.com/KaungSiThu-Sallius/Employee-Turnover.git",
    demoLabel: "View on Tableau Public"
  },

  {
    id: 7,
    title: "Sleep Disorders Analysis",
    description: "The goal of this dashboard is to provide an overview showing the average sleep hours for each sleep disorder type and the corresponding average sleep quality and also to provide detailed information about individuals affected by various factors.",
    category: "Tableau",
    tags: ["Tableau", "Data Visualization", "Dashboard"],
    imageUrl: "./assets/sleep_disorderr.png",
    demoUrl: "https://public.tableau.com/views/SleepDisorderAnalysis/SleepDisorderDashboard?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    githubUrl: "https://github.com/KaungSiThu-Sallius/Sleep-Disorders-Analysis.git",
    demoLabel: "View on Tableau Public"
  },

  {
    id: 8,
    title: "Video Game Sales Analysis",
    description: "The goal of this project is to analyze video game sales data from various regions around the world. The dataset includes information about game titles, platforms, genres, publishers, and sales figures across different regions.",
    category: "SQL",
    tags: ["SQL"],
    imageUrl: "./assets/game_sales.png",
    demoUrl: "https://colab.research.google.com/drive/1JsrB4XA4hCHK5WEFxLsAJVq1p9l_tSQv?usp=sharing",
    githubUrl: "https://github.com/KaungSiThu-Sallius/Video-Game-Analysis-SQL.git",
    demoLabel: "View Notebook"
  },

];

export const PROJECT_CATEGORIES = ["All", "Machine Learning", "Python", "Tableau", "Excel", "SQL"];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Building My First Data Pipeline: From Spotify API to SQL with Python",
    excerpt: "In a world of ready-made datasets, we often overlook the engineering rigor required to build a reliable ETL pipeline that turns raw API chaos into structured SQL insights.",
    date: "Oct 1, 2025",
    readTime: "5 min read",
    imageUrl: "./assets/etl_article.webp",
    url: "https://medium.com/@kaungsithu.sallius/building-my-first-data-pipeline-from-spotify-api-to-sql-with-python-fff78ca0376e"
  },
];
