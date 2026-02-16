export const personalInfo = {
  name: "Anurag Wazarkar",
  role: "Web Developer & AI Automation Engineer",
  tagline: "I build fast, modern websites and AI-powered automations",
  pimage: "/images/Secretary.jpg",
  bio: `Hi, I'm Anurag! I'm a passionate web developer and AI automation engineer dedicated to creating elegant digital solutions. With expertise in modern web technologies and AI integration, I help businesses transform their ideas into powerful, user-friendly applications.

I specialize in building responsive, high-performance websites and automating workflows to boost productivity. My approach combines clean code, intuitive design, and cutting-edge technology to deliver solutions that make a real impact.

When I'm not coding, I'm exploring new technologies, contributing to open-source projects, and helping others learn to code.`,
  email: "anuragwazarkar123@gmaill.com",
  github: "https://github.com/Siyue216",
  linkedin: "https://www.linkedin.com/in/anurag-wazarkar",
  resumeUrl: "/images/resume.pdf"
};

export const projects = [
  {
    id: 1,
    title: "Bird Detection",
    description: "Audio classification using deep learning",
    thumbnail: "/images/bird-detection.jpg",
    tags: ["CNN", "Deep Learning", "Next.js", "Flask", "Python"],
    problem: "Identifying bird species from audio recordings requires manual expertise and is time-consuming.",
    solution: "Built a CNN-based audio classification model using mel-spectrogram and MFCC features to identify bird species.",
    stack: ["Next.js", "Flask", "Python", "TensorFlow", "Librosa"],
    role: "ML Engineer",
    results: "Deployed a prototype with a Next.js frontend and Flask API backend for audio upload and prediction.",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example"
  },
  {
    id: 2,
    title: "Emotion Detection using EEG Signals",
    description: "Machine learning for emotion recognition",
    thumbnail: "/images/eeg-emotion.jpg",
    tags: ["Machine Learning", "KNN", "Naive Bayes", "Decision Tree", "Python"],
    problem: "Emotion recognition from brain signals is complex and requires efficient models for portable devices.",
    solution: "Developed an ensemble model (KNN, Naive Bayes, Decision Tree) for EEG-based emotion recognition.",
    stack: ["Python", "scikit-learn", "NumPy", "Pandas"],
    role: "ML Researcher",
    results: "Optimized features and model complexity for potential use on portable, low-resource devices.",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example"
  },
  {
    id: 3,
    title: "Protein Function Prediction using Deep Learning",
    description: "A Study on the CAFA-6 Dataset",
    thumbnail: "/images/protein-prediction.jpg",
    tags: ["Deep Learning", "ESMFold", "Bioinformatics", "Python"],
    problem: "Predicting protein functions from sequences is critical for understanding biological processes.",
    solution: "Integrated ESMFold to generate and visualize 3D protein structures, developed an end-to-end system.",
    stack: ["Python", "ESMFold", "PyTorch", "BioPython"],
    role: "Research Developer",
    results: "Created a comprehensive system for protein structure prediction and functional analysis.",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example"
  }
];

export const services = [
  {
    id: 1,
    title: "Custom Business Websites",
    description: "Professional, responsive websites tailored to your brand and business goals",
    icon: "🌐"
  },
  {
    id: 2,
    title: "AI Workflow Automation",
    description: "Smart automation solutions that save time and reduce operational costs",
    icon: "🤖"
  },
  {
    id: 3,
    title: "Landing Page Development",
    description: "High-converting landing pages optimized for performance and SEO",
    icon: "🚀"
  },
  {
    id: 4,
    title: "Full-Stack Web Apps",
    description: "Scalable web applications with modern tech stacks and clean architecture",
    icon: "💻"
  }
];

export const skills = {
  frontend: ["HTML/CSS/JS", "TypeScript", "React", "Next.js"],
  styling: ["Tailwind CSS", "CSS Modules"],
  backend: ["Node.js", "FastAPI", "Flask"],
  database: ["MongoDB", "PostgreSQL", "MySQL"],
  AI: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision"],
  tools: ["Git/GitHub", "REST APIs", "Vercel"]
};

export const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Founder, TechStart Solutions",
    company: "TechStart Solutions",
    feedback: "Anurag transformed our outdated website into a modern, high-performance platform. Our conversion rate increased by 35% in just two months!",
    rating: 5,
    avatar: "PS"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    role: "CEO, AutoFlow Inc",
    company: "AutoFlow Inc",
    feedback: "The AI automation tools Anurag built saved our team 20+ hours every week. His technical expertise and attention to detail are exceptional.",
    rating: 5,
    avatar: "RK"
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "Growth Marketing Co",
    feedback: "We needed a landing page fast, and Anurag delivered beyond expectations. Professional, responsive, and exactly what we needed.",
    rating: 5,
    avatar: "SJ"
  }
];
