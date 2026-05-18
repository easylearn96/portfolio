export const profile = {
  name: "Muhammad Umar",
  title: "MERN Stack Developer",
  subtitle: "AI / ML Engineer",
  email: "mian.umarshafeeq78692@gmail.com",
  phone: "+92 322 149 0791",
  location: "Lahore, Pakistan",
  linkedin: "https://www.linkedin.com/in/muhammad-umar-786m92",
  github: "https://github.com/easylearn96",
  summary: "Results-driven MERN Stack Developer & AI/ML practitioner with 1+ year of hands-on experience building scalable, production-grade full-stack web applications and intelligent systems. Proficient in MongoDB, Express.js, React, Node.js, TensorFlow, and deep learning — from concept to deployment.",
  cgpa: "3.56",
  university: "Lahore Garrison University",
  degree: "Bachelor of Computer Science (2022–2026)",
};

export const skills = {
  "AI / ML": {
    icon: "🤖",
    primary: "TensorFlow / Keras",
    percent: 85,
    tags: ["Scikit-learn", "OpenCV", "NLP", "Deep Learning", "PyTorch"],
  },
  "Backend": {
    icon: "⚙️",
    primary: "Node.js / Express.js",
    percent: 92,
    tags: ["MongoDB", "PostgreSQL", "REST APIs", "JWT"],
  },
  "Frontend": {
    icon: "🖥️",
    primary: "React.js / Next.js",
    percent: 88,
    tags: ["Tailwind CSS", "JavaScript ES6+", "HTML/CSS"],
  },
  "Databases": {
    icon: "🗄️",
    primary: "MongoDB / SQL",
    percent: 90,
    tags: ["PostgreSQL", "MySQL", "NoSQL", "Query Optimization"],
  },
  "Infra / Tools": {
    icon: "🛠️",
    primary: "Git / GitHub",
    percent: 80,
    tags: ["VS Code", "Postman", "Google Colab", "Figma"],
  },
};

export const projects = [
  {
    title: "AI Glasses for Visually Impaired",
    description: "Final Year Project — AI-powered assistive glasses with real-time object detection and voice feedback for accessibility. Uses deep learning and OpenCV for computer vision.",
    tags: ["Python", "OpenCV", "Deep Learning", "TensorFlow"],
    category: "ML/AI",
    image: "AI_glaases.png",
    featured: true,
  },
  {
    title: "Style Dash",
    description: "Live e-commerce fashion platform serving real users. AI model for fashion style recommendation built with React.js, Node/Express backend, and PostgreSQL.",
    tags: ["React.js", "Node.js", "PostgreSQL", "AI/ML"],
    category: "Full Stack",
    image: "style_dash.PNG",
    featured: true,
  },
  {
    title: "Procteo",
    description: "MERN stack patient management system streamlining daily workflows for a medical practice. Full CRUD with responsive UI.",
    tags: ["MongoDB", "Express.js", "React", "Node.js"],
    category: "Full Stack",
    image: "procteo.png",
    featured: true,
  },
  {
    title: "Lemoz",
    description: "MERN stack rental platform connecting limousine owners with customers for seamless booking management.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    category: "Full Stack",
    featured: true,
  },
  {
    title: "Banking App",
    description: "Full MERN stack banking application with complete CRUD operations, authentication, and account management.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    category: "Full Stack",
    featured: false,
  },
  {
    title: "Photo Converter",
    description: "MERN stack utility that converts images and auto-formats them to passport-size for printing. Real-world productivity tool.",
    tags: ["React", "Node.js", "MongoDB", "Canvas API"],
    category: "Full Stack",
    featured: false,
  },
  {
    title: "Luxora.global",
    description: "WordPress e-commerce site with Elementor Pro, custom payment gateway integration, and full WooCommerce setup.",
    tags: ["WordPress", "WooCommerce", "Elementor Pro"],
    category: "Frontend",
    image: "luxora .png",
    featured: false,
  },
  {
    title: "Thunder Bulls",
    description: "Full MERN stack project delivered ahead of schedule after a month of dedicated development.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    category: "Full Stack",
    image: "thundar_bulls.png",
    featured: false,
    link: "https://easylearn96.github.io/thunder_bulls/",
  },
];

export const experience = [
  {
    role: "Python Developer",
    company: "SmartAI Soft",
    duration: "Aug 2025 – Feb 2026",
    points: [
      "Built Style Dash, an AI-powered fashion web app, handling both backend APIs and frontend with React.js & PostgreSQL",
      "Participated in agile sprints, code reviews, and delivered a capstone CRUD project with responsive UI",
      "Developed and deployed a full WordPress e-commerce site (Luxora.global) with Elementor Pro and payment gateway integration",
    ],
    type: "ML/AI",
  },
  {
    role: "MERN Stack Developer",
    company: "SmartAI Soft",
    duration: "Aug 2024 – Feb 2025",
    points: [
      "Built and maintained full-stack features for Style Dash, a live e-commerce platform serving real users",
      "Designed MongoDB schemas and engineered Node.js/Express REST APIs for seamless data management",
      "Delivered responsive, CRUD-based React.js modules with clean component architecture",
      "Actively participated in agile sprints, code reviews, and cross-functional team standups",
    ],
    type: "MERN",
  },
  {
    role: "MERN Stack Intern",
    company: "Developers Hub",
    duration: "Jun 2024 – Aug 2024",
    points: [
      "Built and tested modular React.js components integrated with RESTful backend APIs",
      "Gained practical experience in MongoDB schema design and Node.js/Express routing",
      "Collaborated in agile team environment with regular peer code reviews and sprint cycles",
    ],
    type: "MERN",
  },
  {
    role: "Computer Instructor",
    company: "Perfect Academy, Lahore",
    duration: "Jan 2022 – Mar 2024",
    points: [
      "Taught MS Office Suite and computer fundamentals to secondary-level students",
      "Prepared students for board-level examinations and built their digital literacy",
    ],
    type: "Other",
  },
];

export const certifications = [
  { name: "ML / Deep Learning", institution: "NAVTTC", grade: "A", year: "2025" },
  { name: "Web Development", institution: "Perfect Academy", grade: "A", year: "2021" },
  { name: "HTML Course", institution: "NCC Computer College", grade: "A", year: "2022" },
  { name: "MS Office", institution: "NCC Computer College", grade: "A", year: "2020" },
  { name: "Graphics Designing", institution: "Perfect Academy", grade: "A", year: "2017" },
  { name: "Video Editing", institution: "Perfect Academy", grade: "A", year: "2017" },
  { name: "English Speaking", institution: "NCC Computer College", grade: "A", year: "2019" },
];

export const education = [
  { degree: "Bachelor of Computer Science", institution: "Lahore Garrison University", grade: "3.56 CGPA", year: "2022–2026" },
  { degree: "FSC Pre-Engineering", institution: "Garrison College For Boys", grade: "1st Division", year: "2021" },
  { degree: "Matriculation", institution: "Garrison Academy Tufail Shaheed", grade: "1st Division", year: "2019" },
];
