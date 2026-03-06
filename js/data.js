// Dados dos Projetos e Habilidades

// Dados dos Projetos
const projectsData = [
    {
        id: 1,
        title: "Análise de Sentimentos com BERT",
        description: "Modelo de NLP para análise de sentimentos em reviews de produtos utilizando transformers e fine-tuning do BERT em português.",
        tags: [
            { name: "NLP", color: "cyan" },
            { name: "Deep Learning", color: "purple" }
        ],
        tech: "PyTorch",
        metric: "98% Acc",
        icon: "fa-robot",
        gradient: "from-cyan-500/20 to-purple-600/20",
        textColor: "text-cyan-400",
        hoverColor: "group-hover:text-cyan-400",
        link: "#",
        github: "https://github.com/LuIsEDMK/sentiment-analysis-bert"
    },
    {
        id: 2,
        title: "Previsão de Demanda com LSTM",
        description: "Sistema de forecasting para previsão de vendas utilizando LSTM e Prophet, com redução de 25% no erro de previsão.",
        tags: [
            { name: "Time Series", color: "purple" },
            { name: "Forecasting", color: "pink" }
        ],
        tech: "TensorFlow",
        metric: "MAPE 3.2%",
        icon: "fa-chart-line",
        gradient: "from-purple-500/20 to-pink-600/20",
        textColor: "text-purple-400",
        hoverColor: "group-hover:text-purple-400",
        link: "#",
        github: "https://github.com/LuIsEDMK/demand-forecasting-lstm"
    },
    {
        id: 3,
        title: "Detecção de Objetos em Tempo Real",
        description: "Sistema de visão computacional para detecção e classificação de objetos em vídeo utilizando YOLOv8 e OpenCV.",
        tags: [
            { name: "Computer Vision", color: "pink" },
            { name: "YOLO", color: "orange" }
        ],
        tech: "OpenCV",
        metric: "30 FPS",
        icon: "fa-eye",
        gradient: "from-pink-500/20 to-orange-600/20",
        textColor: "text-pink-400",
        hoverColor: "group-hover:text-pink-400",
        link: "#",
        github: "https://github.com/LuIsEDMK/object-detection-yolo"
    },
    {
        id: 4,
        title: "Detecção de Fraude em Transações",
        description: "Modelo ensemble para detecção de fraudes em cartões de crédito com técnicas de balanceamento e feature engineering.",
        tags: [
            { name: "Classification", color: "cyan" },
            { name: "XGBoost", color: "blue" }
        ],
        tech: "Scikit-learn",
        metric: "F1-Score 0.94",
        icon: "fa-credit-card",
        gradient: "from-cyan-500/20 to-blue-600/20",
        textColor: "text-cyan-400",
        hoverColor: "group-hover:text-cyan-400",
        link: "#",
        github: "https://github.com/LuIsEDMK/fraud-detection-ml"
    },
    {
        id: 5,
        title: "Chatbot Inteligente com RAG",
        description: "Assistente virtual utilizando Retrieval-Augmented Generation com LangChain e embeddings para consulta de documentos.",
        tags: [
            { name: "LLM", color: "purple" },
            { name: "RAG", color: "indigo" }
        ],
        tech: "LangChain",
        metric: "Latência < 2s",
        icon: "fa-comments",
        gradient: "from-purple-500/20 to-indigo-600/20",
        textColor: "text-purple-400",
        hoverColor: "group-hover:text-purple-400",
        link: "#",
        github: "https://github.com/LuIsEDMK/chatbot-rag-langchain"
    },
    {
        id: 6,
        title: "Predição de Risco Cardíaco",
        description: "Modelo preditivo para identificação de risco de doenças cardíacas baseado em dados clínicos e estilo de vida.",
        tags: [
            { name: "Healthcare", color: "pink" },
            { name: "Random Forest", color: "rose" }
        ],
        tech: "SHAP",
        metric: "AUC-ROC 0.92",
        icon: "fa-heartbeat",
        gradient: "from-pink-500/20 to-rose-600/20",
        textColor: "text-pink-400",
        hoverColor: "group-hover:text-pink-400",
        link: "#",
        github: "https://github.com/LuIsEDMK/heart-disease-prediction"
    }
];

// Dados das Habilidades
const skillsData = [
    {
        category: "Linguagens",
        icon: "fa-code",
        iconColor: "cyan",
        skills: [
            { name: "Python", level: 95 },
            { name: "SQL", level: 90 },
            { name: "R", level: 75 }
        ]
    },
    {
        category: "ML & Deep Learning",
        icon: "fa-brain",
        iconColor: "purple",
        items: ["Scikit-Learn", "TensorFlow", "PyTorch", "Keras", "XGBoost", "LightGBM", "NLP", "Computer Vision"]
    },
    {
        category: "Engenharia de Dados",
        icon: "fa-server",
        iconColor: "pink",
        items: ["Apache Spark", "Pandas", "NumPy", "ETL Pipelines", "Airflow", "Kafka"]
    },
    {
        category: "Visualização",
        icon: "fa-chart-pie",
        iconColor: "cyan",
        items: ["Matplotlib", "Seaborn", "Plotly", "Tableau", "Power BI", "Dash"]
    },
    {
        category: "Cloud & MLOps",
        icon: "fa-cloud",
        iconColor: "purple",
        items: ["AWS", "Google Cloud", "Docker", "Kubernetes", "MLflow", "Git"]
    },
    {
        category: "Estatística & Matemática",
        icon: "fa-calculator",
        iconColor: "pink",
        items: [
            "Estatística Inferencial",
            "Testes A/B e Experimentação",
            "Séries Temporais",
            "Otimização Matemática",
            "Álgebra Linear"
        ]
    }
];

// Dados para o efeito de digitação
const typingTexts = [
    'Insights Estratégicos',
    'Soluções de ML',
    'Visualizações Impactantes',
    'Valor de Negócio'
];

// Exportar para uso global
window.projectsData = projectsData;
window.skillsData = skillsData;
window.typingTexts = typingTexts;
