import React, { useState, useEffect } from "react";
import {
  X,
  Phone,
  Mail,
  Sparkles,
  Code2,
  FolderGit2,
  Award,
  ShoppingBag,
  Activity,
  Truck,
  Smartphone,
  CreditCard,
  ExternalLink,
  User,
  Home,
  GraduationCap,
  Briefcase,
  Users,
  Moon,
  Sun,
  Layers,
  ChevronRight,
  Laptop,
  CheckCircle2,
  Send,
  MapPin,
  Globe,
  Bot,
  BrainCircuit,
  FileText,
  Download,
  Languages,
  Trophy,
  Cpu,
  Terminal,
  GitBranch,
  HeartPulse,
  Target,
  MessageSquare,
} from "lucide-react";

// Social & Tech Icons
const GithubIcon = ({ size = 18, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const InstagramIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedinIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const YoutubeIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.56 49.56 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3v6z" />
  </svg>
);

const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedProfileModal, setSelectedProfileModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeSkillTab, setActiveSkillTab] = useState("All Skills");
  const [activeAboutTab, setActiveAboutTab] = useState("personal");
  const [activeNavTab, setActiveNavTab] = useState("home");
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Chatbot Widget State
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    {
      sender: "bot",
      text: "ة (). كيف يمكنني مساعدتك اليوم؟",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const profileImageUrl = "https://i.postimg.cc/C5H15KYx/my-img32.jpg";

  const scrollToSection = (id) => {
    setActiveNavTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "milestones",
        "about",
        "education",
        "experience",
        "skills",
        "projects",
        "vision",
        "contact",
      ];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveNavTab(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //  const handleDownloadCV = () => {
  //alert("Uploading and preparing the CV of Engineer Israa Al-Daroubi");
  // };
  const handleDownloadCV = () => {
    const cvUrl = "/Esraa_AlDaroubi_CV.pdf";

    // 2. إنشاء عنصر رابط (link) برمجياً
    const link = document.createElement("a");
    link.href = cvUrl;

    link.download = "Esraa_AlDaroubi_CV.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSendChat = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userText = inputMessage;
    const newMessages = [...chatMessages, { sender: "user", text: userText }];
    setChatMessages(newMessages);
    setInputMessage("");
  };

  const skillsData = [
    {
      name: "Flutter",
      category: "Mobile",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    },
    {
      name: "Dart",
      category: "Mobile",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
    },
    {
      name: "Android Studio",
      category: "Tools",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg",
    },
    {
      name: "Python",
      category: "AI & Data",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "Machine Learning",
      category: "AI & Data",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    },
    {
      name: "PyTorch",
      category: "AI & Data",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
    },
    {
      name: "React.js",
      category: "Frontend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Node.js",
      category: "Backend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "JavaScript",
      category: "Frontend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "HTML5",
      category: "Frontend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      category: "Frontend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "C#",
      category: "Backend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    },
    {
      name: "ASP.NET Core",
      category: "Backend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
    },
    {
      name: "SQL Server",
      category: "Backend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
    },
    {
      name: "Visual Studio",
      category: "Tools",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg",
    },
    {
      name: "XAMPP",
      category: "Tools",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg",
    },
    {
      name: "FileZilla",
      category: "Tools",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/filezilla/filezilla-original.svg",
    },
    {
      name: "Git",
      category: "Tools",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "GitHub",
      category: "Tools",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "VS Code",
      category: "Tools",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
  ];

  const filteredSkills =
    activeSkillTab === "All Skills"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeSkillTab);

  const methodologies = [
    {
      title: "Clean Architecture",
      desc: "Isolating business logic from UI and data layers for highly maintainable code.",
    },
    {
      title: "BLoC & Provider Pattern",
      desc: "Predictable state management for complex, high-performance applications.",
    },
    {
      title: "Agile / Scrum Methodology",
      desc: "Collaborative workflow, sprinting, task management, and iterative delivery.",
    },
    {
      title: "RESTful APIs Integration",
      desc: "Seamless backend communication, secure endpoints, and JSON parsing.",
    },
  ];

  const certifications = [
    {
      title: "Deep Learning Specialization",
      org: "DeepLearning.AI (Andow Ang)",
      imgUrl: "https://i.postimg.cc/RZ9p4TQK/Coursera-deep.png",
    },
    {
      title: "Python for Data Science, AI & Development",
      org: "IBM",
      imgUrl: "https://i.postimg.cc/NGkpbXwD/Coursera-V09OLLYVE8UO.png",
    },
    {
      title: "Introduction to Artificial Intelligence (AI)",
      org: "IBM",
      imgUrl: "https://i.postimg.cc/RZ9p4TQK/Coursera-deep.png",
    },
    {
      title: "Sequence Models",
      org: "DeepLearning.AI(Androw Ang)",
      imgUrl: "https://i.postimg.cc/PqN1bLQL/Sequence-Models.png",
    },
    ////////
    {
      title: "Generative AI: Prompt Engineering Basics",
      org: "IBM",
      imgUrl:
        "https://i.postimg.cc/q7LM7Q32/Generative-AIPrompt-Engineering.png",
    },
    {
      title: "Deep Learning with PyTorch : Generative Adversarial Network",
      org: "Coursera(Training AI)",
      imgUrl:
        "https://i.postimg.cc/Nfzd3wCC/Deep-Learning-with-Py-Torch-Generative-Adversarial-Network.png",
    },
    {
      title: "Fake News Detection with Machine Learning",
      org: "Coursera(Training AI)",
      imgUrl:
        "https://i.postimg.cc/PxS7NvKn/Fake-News-Detection-with-Machine-Learning.png",
    },
    {
      title: "Facial Expression Recognition with PyTorch",
      org: "Coursera(Training AI)",
      imgUrl:
        "https://i.postimg.cc/G3JFP11p/Facial-Expression-Recognition-with-Py-Torch.png",
    },
    {
      title: "Tweet Emotion Recognition with TensorFlow",
      org: "Coursera(Training AI)",
      imgUrl:
        "https://i.postimg.cc/N0FDpGcG/Tweet-Emotion-Recognition-with-Tensor-Flow.png",
    },
  ];

  const credlyBadgesAndVolunteering = [
    {
      title: "Credly Badge: Android & AI Track Completion",
      org: "Credly / Professional Certification",
      imgUrl: "https://i.postimg.cc/xCrtR2pB/1787767022576.jpg",
      badgeText: "Verified Credly Badge",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "Self Care Web  Platform (Graduation Project)",
      tech: "React.js / Node.js / Interactive AI Chatbot",
      category: "Graduation Project",
      icon: <HeartPulse className="w-6 h-6 text-blue-500" />,
      desc: "An integrated self-care platform built with React and Node.js. Features outstanding interactive UI designs and an embedded smart AI chatbot to guide users through personalized wellness routines.",

      liveUrl: "https://selfcare-fe9v.onrender.com/",
      githubUrl: "https://github.com/israaaldroubi122/SelfCare-ECommerce",
    },
    {
      id: 2,
      title: "Doctor's Clinic Mobile App (Frontend)",
      tech: "Flutter / GetX / Medical UI/UX Design",
      category: "Mobile App Frontend",
      icon: <HeartPulse className="w-6 h-6 text-red-500" />,
      desc: "A modern and responsive doctor's clinic and appointment booking mobile application (Frontend-only) built with Flutter and GetX. Features an intuitive patient booking flow, clean medical dashboards, sleek state management, and an interactive UI tailored for healthcare services.",

      liveUrl: "https://web-iota-ten-29.vercel.app/",
      githubUrl: "https://github.com/israaaldroubi122/Doctor-s_Clinic_Mobile",
    },
    {
      id: 3,
      title: "Smart Food Delivery Mobile App (Frontend)",
      tech: "Flutter / GetX / UI/UX Design",
      category: "Mobile App Frontend",
      icon: <Truck className="w-6 h-6 text-pink-500" />,
      desc: "A stunning and responsive cross-platform food delivery mobile application (Frontend-only) built with Flutter and GetX. Features an interactive customer ordering flow, dynamic product catalogs, sleek state management, and a fully designed admin panel interface for category and product management.",
      liveUrl: "https://web-1-eight-nu.vercel.app/",
      githubUrl: "https://github.com/israaaldroubi122/Food_Delivery_App",
    },
    {
      id: 4,
      title: "Complete Full-Stack E-Commerce Mobile App",
      tech: "Flutter / RESTful APIs / Modern UI/UX",
      category: "Full-Stack Mobile App",
      icon: <ShoppingBag className="w-6 h-6 text-purple-500" />,
      desc: "A fully integrated, end-to-end E-Commerce mobile application built from scratch with Flutter. Features ultra-modern interactive user interfaces, seamless integration with a robust RESTful API backend, secure user authentication, dynamic product browsing, and a complete, production-ready shopping workflow.",
      liveUrl: "https://github.com/israaaldroubi122",
      githubUrl:
        "https://github.com/israaaldroubi122/ecommerce-flutter-frontend",
    },
  ];

  const languages = [
    { name: "Arabic", level: "Native ", percent: "100%" },
    {
      name: "English",
      level: "Advanced Technical ",
      percent: "85%",
    },
  ];

  const navItems = [
    { id: "home", label: "Home", icon: <Home size={18} /> },
    { id: "milestones", label: "Milestones", icon: <Target size={18} /> },
    { id: "about", label: "About", icon: <User size={18} /> },
    { id: "education", label: "Education", icon: <GraduationCap size={18} /> },
    { id: "experience", label: "Experience", icon: <Briefcase size={18} /> },
    { id: "skills", label: "Skills", icon: <Code2 size={18} /> },
    { id: "projects", label: "Projects", icon: <Layers size={18} /> },
    { id: "vision", label: "AI Vision", icon: <Bot size={18} /> },
    { id: "contact", label: "Contact", icon: <Mail size={18} /> },
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    alert(
      `Thank you ${contactForm.name || "Guest"}! Your message has been sent successfully.`,
    );
    setContactForm({ name: "", email: "", message: "" });
  };

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-500 pb-36 ${isDarkMode ? "bg-slate-950 text-slate-100" : "bg-[#F8F9FD] text-slate-800"}`}
    >
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: 200%;
          animation: marquee 20s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        .glow-effect {
          box-shadow: 0 0 35px -5px rgba(168, 85, 247, 0.25);
        }
      `}</style>

      {/* Lightbox Preview */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className={`relative max-w-3xl w-full rounded-3xl p-4 border shadow-2xl ${isDarkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"}`}
          >
            <button
              className="absolute top-4 right-4 bg-slate-100 dark:bg-slate-800 p-2 rounded-full text-slate-600 dark:text-slate-300 hover:rotate-90 transition-transform duration-300"
              onClick={() => setSelectedImage(null)}
            >
              <X size={20} />
            </button>
            <img
              src={selectedImage}
              alt="Verification"
              className="w-full h-auto rounded-2xl max-h-[80vh] object-contain shadow-xl"
            />
          </div>
        </div>
      )}

      {/* Modal - Profile Image Fullscreen Preview */}
      {selectedProfileModal && (
        <div
          onClick={() => setSelectedProfileModal(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 cursor-pointer"
        >
          <div
            className="relative max-w-4xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={profileImageUrl}
              alt="Esraa Al-Droubi Full"
              className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl border-4 border-white"
            />
            <button
              onClick={() => setSelectedProfileModal(false)}
              className="absolute -top-4 -right-4 bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold shadow-lg hover:bg-red-700 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Modal - Project Details */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className={`border rounded-3xl p-6 max-w-lg w-full space-y-6 relative shadow-2xl text-center transform transition-all scale-100 ${isDarkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 dark:hover:text-white bg-slate-100 dark:bg-slate-800 p-1.5 rounded-full transition-transform hover:rotate-90"
              onClick={() => setSelectedProject(null)}
            >
              <X size={18} />
            </button>
            <div className="flex flex-col items-center gap-3">
              <div className="p-3 bg-purple-500/10 rounded-2xl animate-bounce">
                {selectedProject.icon}
              </div>
              <span className="text-xs font-semibold text-purple-500 uppercase tracking-wide">
                {selectedProject.category}
              </span>
              <h3
                className={`text-xl font-bold ${isDarkMode ? "text-white" : "text-slate-900"}`}
              >
                {selectedProject.title}
              </h3>
            </div>
            <p
              className={`text-sm leading-relaxed ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}
            >
              {selectedProject.desc}
            </p>
            <div
              className={`p-3 rounded-2xl border ${isDarkMode ? "bg-slate-950 border-slate-800" : "bg-slate-50 border-slate-100"}`}
            >
              <span className="text-xs text-slate-400 font-medium block mb-1">
                Tech Stack:
              </span>
              <p className="text-xs font-bold text-purple-400">
                {selectedProject.tech}
              </p>
            </div>
            <div className="flex items-center justify-center gap-3 pt-2">
              <a
                href={selectedProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold text-xs hover:opacity-95 transition-all shadow-md shadow-purple-500/20 hover:scale-105"
              >
                <GithubIcon size={15} /> GitHub Repository (Demo)
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Floating Interactive Chatbot Widget */}

      {/* Header */}
      <header className="max-w-5xl mx-auto px-6 pt-6 flex justify-between items-center">
        <div
          className="flex items-center gap-2 group cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          <span
            className={`text-xl font-extrabold tracking-wide transition-colors group-hover:text-purple-500 ${isDarkMode ? "text-white" : "text-slate-900"}`}
          >
            Esraa Al-Droubi
          </span>
          <span className="bg-purple-500/10 text-purple-500 text-[11px] font-bold px-3 py-1 rounded-full border border-purple-500/25 shadow-sm">
            Flluter & AI Engineer
          </span>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/israaaldroubi122"
            target="_blank"
            rel="noreferrer"
            className={`p-2.5 rounded-full border hover:scale-110 hover:shadow-lg transition-all ${isDarkMode ? "bg-slate-900 border-slate-800 text-white" : "bg-white border-slate-200 text-slate-800 shadow-sm"}`}
            title="GitHub"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/esraaaldroubi"
            target="_blank"
            rel="noreferrer"
            className={`p-2.5 rounded-full border text-blue-500 hover:scale-110 hover:shadow-lg transition-all ${isDarkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200 shadow-sm"}`}
            title="LinkedIn Profile"
          >
            <LinkedinIcon size={18} />
          </a>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-4xl mx-auto px-6 mt-16 space-y-28 text-center">
        {/* SECTION 1: HOME */}
        <section
          id="home"
          className="flex flex-col items-center space-y-8 pt-4"
        >
          <div
            onClick={() => setSelectedProfileModal(true)}
            className="relative group p-1.5 rounded-full bg-gradient-to-tr from-purple-600 via-pink-500 to-indigo-500 shadow-2xl glow-effect cursor-pointer"
            title="Click to view the full image"
          >
            <img
              src={profileImageUrl}
              alt="Esraa Al-Droubi"
              className="w-64 h-64 sm:w-72 sm:h-72 object-cover rounded-full border-4 border-white dark:border-slate-950 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-3 right-3 bg-emerald-500 text-white p-1.5 rounded-full border-2 border-white dark:border-slate-900 shadow-md">
              <span className="block w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
            </div>
          </div>

          <div className="space-y-4 max-w-2xl">
            <h1
              className={`text-4xl sm:text-6xl font-black tracking-tight leading-tight ${isDarkMode ? "text-white" : "text-slate-900"}`}
            >
              Hi, I'm Esraa <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 animate-pulse">
                Flutte & AI Developer
              </span>
            </h1>
            <p
              className={`text-base sm:text-lg leading-relaxed ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}
            >
              Specialized in building high-performance applications with{" "}
              <strong className="text-purple-500 font-bold">Flutter </strong>
              Possess extensive experience in web applications using{" "}
              <strong className="text-purple-500 font-bold">React </strong>
              and integrating advanced{" "}
              <strong className="text-purple-500 font-bold">
                Artificial Intelligence
              </strong>{" "}
              chatbots and models.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold text-xs hover:opacity-95 transition-all shadow-lg shadow-purple-500/25 flex items-center gap-2 hover:scale-105"
            >
              <Layers size={15} /> View Projects
            </button>
            <button
              onClick={handleDownloadCV}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-xs hover:opacity-95 transition-all shadow-lg shadow-indigo-500/25 flex items-center gap-2 hover:scale-105"
            >
              <Download size={15} /> Download CV
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`px-6 py-3 rounded-full font-bold text-xs transition-all border flex items-center gap-2 hover:scale-105 ${isDarkMode ? "bg-slate-900 border-slate-700 text-slate-200 hover:bg-slate-800" : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50 shadow-sm"}`}
            >
              <Mail size={15} /> Get in Touch
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-xl pt-4">
            <div
              className={`p-4 rounded-2xl border text-center shadow-sm hover:border-purple-500 transition-colors ${isDarkMode ? "bg-slate-900/60 border-slate-800" : "bg-white border-slate-200/80"}`}
            >
              <div className="text-2xl font-extrabold text-purple-500">
                Self Care
              </div>
              <div className="text-xs text-slate-400 font-medium mt-1">
                Graduation Project
              </div>
            </div>
            <div
              className={`p-4 rounded-2xl border text-center shadow-sm hover:border-purple-500 transition-colors ${isDarkMode ? "bg-slate-900/60 border-slate-800" : "bg-white border-slate-200/80"}`}
            >
              <div className="text-2xl font-extrabold text-purple-500">
                Credly
              </div>
              <div className="text-xs text-slate-400 font-medium mt-1">
                IBM & Generative AI
              </div>
            </div>
            <div
              className={`p-4 rounded-2xl border text-center shadow-sm hover:border-purple-500 transition-colors ${isDarkMode ? "bg-slate-900/60 border-slate-800" : "bg-white border-slate-200/80"}`}
            >
              <div className="text-2xl font-extrabold text-purple-500">
                flutter dart
              </div>
              <div className="text-xs text-slate-400 font-medium mt-1">
                Flutter Tech
              </div>
            </div>
            <div
              className={`p-4 rounded-2xl border text-center shadow-sm hover:border-purple-500 transition-colors ${isDarkMode ? "bg-slate-900/60 border-slate-800" : "bg-white border-slate-200/80"}`}
            >
              <div className="text-2xl font-extrabold text-purple-500">
                100%
              </div>
              <div className="text-xs text-slate-400 font-medium mt-1">
                AI Chatbot UI
              </div>
            </div>
          </div>
        </section>

        {/* MARQUEE SKILLS BANNER */}
        <div className="w-full overflow-hidden py-6 border-y border-purple-500/20 bg-purple-500/5 backdrop-blur-sm rounded-3xl">
          <div className="animate-marquee flex gap-8 items-center text-xs font-bold tracking-widest text-purple-500 uppercase">
            <span>✨ Flutter & dart </span> •
            <span>🤖 Credly Androw Ang & AI Badge</span> •
            <span>🐍 Python & PyTorch</span> •
            <span>💻 Visual Studio & XAMPP</span> •
            <span>⚡ FileZilla & Android Studio</span> •
            <span>📱 Interactive Chatbot UI</span> •<span>✨ React </span> •
            <span>💻 vs code &</span> •
          </div>
        </div>

        {/* SECTION 2: KEY ACHIEVEMENTS */}
        <section
          id="milestones"
          className="flex flex-col items-center space-y-8 pt-8"
        >
          <div className="space-y-3 max-w-xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-500 text-xs font-bold border border-purple-500/20 shadow-sm">
              🏆 KEY ACHIEVEMENTS & MILESTONES
            </span>
            <h2
              className={`text-3xl sm:text-4xl font-black tracking-tight ${isDarkMode ? "text-white" : "text-slate-900"}`}
            >
              Highlights of My{" "}
              <span className="text-purple-500">Professional Path</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 w-full text-left">
            <div
              className={`p-6 rounded-3xl border shadow-sm space-y-3 hover:border-purple-500 transition-all ${isDarkMode ? "bg-slate-900/60 border-slate-800" : "bg-white border-slate-200/80"}`}
            >
              <div className="p-3 bg-purple-500/10 text-purple-500 rounded-2xl w-fit">
                <Award size={22} />
              </div>
              <h3
                className={`text-sm font-bold ${isDarkMode ? "text-white" : "text-slate-900"}`}
              >
                Credly Certification
              </h3>
              <p
                className={`text-xs leading-relaxed ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}
              >
                Successfully completed the Androw Ang and Artificial
                Intelligence track, earning an official verified badge on
                Credly.
              </p>
            </div>

            <div
              className={`p-6 rounded-3xl border shadow-sm space-y-3 hover:border-purple-500 transition-all ${isDarkMode ? "bg-slate-900/60 border-slate-800" : "bg-white border-slate-200/80"}`}
            >
              <div className="p-3 bg-purple-500/10 text-purple-500 rounded-2xl w-fit">
                <HeartPulse size={22} />
              </div>
              <h3
                className={`text-sm font-bold ${isDarkMode ? "text-white" : "text-slate-900"}`}
              >
                Self Care Graduation Project
              </h3>
              <p
                className={`text-xs leading-relaxed ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}
              >
                Designed and developed a fully integrated self-care platform
                using React and With the help of my colleagues they created the
                backend with Node.js featuring an interactive smart AI chatbot
                UI.
              </p>
            </div>

            <div
              className={`p-6 rounded-3xl border shadow-sm space-y-3 hover:border-purple-500 transition-all ${isDarkMode ? "bg-slate-900/60 border-slate-800" : "bg-white border-slate-200/80"}`}
            >
              <div className="p-3 bg-purple-500/10 text-purple-500 rounded-2xl w-fit">
                <GraduationCap size={22} />
              </div>
              <h3
                className={`text-sm font-bold ${isDarkMode ? "text-white" : "text-slate-900"}`}
              >
                Academic Progression
              </h3>
              <p
                className={`text-xs leading-relaxed ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}
              >
                Completed BAIT degree from SVU (March 2026) and transitioned
                smoothly into pursuing a Master's in Web Science and Artificial
                Intelligence.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: ABOUT */}
        <section
          id="about"
          className="flex flex-col items-center space-y-8 pt-8"
        >
          <div className="space-y-3 max-w-xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-500 text-xs font-bold border border-purple-500/20 shadow-sm">
              ✨ ABOUT ME
            </span>
            <h2
              className={`text-3xl sm:text-4xl font-black tracking-tight ${isDarkMode ? "text-white" : "text-slate-900"}`}
            >
              Bridging{" "}
              <span className="text-purple-500">
                Flutter Development & AI Chatbots
              </span>
            </h2>
          </div>

          <div
            className={`w-full p-8 sm:p-10 rounded-3xl border shadow-xl space-y-8 text-center ${isDarkMode ? "bg-slate-900/60 border-slate-800 backdrop-blur-md" : "bg-white border-slate-200/80"}`}
          >
            <div className="flex justify-center gap-2 border-b pb-4 border-slate-200/60 dark:border-slate-800">
              <button
                onClick={() => setActiveAboutTab("personal")}
                className={`px-5 py-2.5 rounded-2xl text-xs font-bold transition-all ${activeAboutTab === "personal" ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-md shadow-purple-500/25 scale-105" : isDarkMode ? "text-slate-400 hover:text-white hover:bg-slate-800" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"}`}
              >
                Background
              </button>
              <button
                onClick={() => setActiveAboutTab("professional")}
                className={`px-5 py-2.5 rounded-2xl text-xs font-bold transition-all ${activeAboutTab === "professional" ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-md shadow-purple-500/25 scale-105" : isDarkMode ? "text-slate-400 hover:text-white hover:bg-slate-800" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"}`}
              >
                Experience
              </button>
              <button
                onClick={() => setActiveAboutTab("vision")}
                className={`px-5 py-2.5 rounded-2xl text-xs font-bold transition-all ${activeAboutTab === "vision" ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-md shadow-purple-500/25 scale-105" : isDarkMode ? "text-slate-400 hover:text-white hover:bg-slate-800" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"}`}
              >
                Vision & AI
              </button>
            </div>

            <div
              className={`text-sm sm:text-base leading-relaxed max-w-2xl mx-auto ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}
            >
              {activeAboutTab === "personal" && (
                <p>
                  I am a proud graduate of the Syrian Virtual University (SVU)
                  with a Bachelor's degree in Business Administration and
                  Information Technology (BAIT), completed in March 2026.
                  Currently, I am expanding my expertise by pursuing a Master's
                  degree in Web Science and Artificial Intelligence.
                </p>
              )}
              {activeAboutTab === "professional" && (
                <p>
                  I have worked as a freelance Flutter creator for a year and a
                  half, I have built robust full-stack applications using
                  Flutter & dart & getX and a lot of tools, and I have
                  Experience react (such as my Self Care graduation project
                  featuring an interactive chatbot). I also hold an official
                  Android & AI Credly badge and am completing a professional AI
                  internship at Coder Company (Tamkeen)
                </p>
              )}
              {activeAboutTab === "vision" && (
                <p>
                  My unique strength lies in bridging mobile development and
                  machine learning—seamlessly embedding intelligent
                  conversational chatbots and AI models into intuitive user
                  interfaces.
                </p>
              )}
            </div>

            <div className="pt-6 border-t border-slate-200/60 dark:border-slate-800">
              <h4
                className={`text-sm font-bold mb-4 flex items-center justify-center gap-2 ${isDarkMode ? "text-white" : "text-slate-900"}`}
              >
                <Languages size={16} className="text-purple-500" /> Languages
              </h4>
              <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto">
                {languages.map((lang, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-2xl border text-xs flex justify-between items-center ${isDarkMode ? "bg-slate-950/40 border-slate-800" : "bg-slate-50 border-slate-200"}`}
                  >
                    <span
                      className={`font-bold ${isDarkMode ? "text-slate-200" : "text-slate-700"}`}
                    >
                      {lang.name}
                    </span>
                    <span className="text-purple-500 font-semibold">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: EDUCATION & CERTIFICATIONS */}
        <section
          id="education"
          className="flex flex-col items-center space-y-8 pt-8"
        >
          <div className="flex items-center justify-center gap-3">
            <GraduationCap className="text-purple-500 w-7 h-7 animate-bounce" />
            <h2
              className={`text-2xl sm:text-3xl font-bold tracking-tight ${isDarkMode ? "text-white" : "text-slate-900"}`}
            >
              Education, Credly Badges & Volunteering
            </h2>
          </div>

          <div className="w-full space-y-4 text-left">
            <div
              className={`p-6 rounded-3xl border shadow-sm hover:border-purple-500 transition-all ${isDarkMode ? "bg-slate-900/60 border-slate-800" : "bg-white border-slate-200/80"}`}
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <div>
                  <h3
                    className={`text-base font-bold ${isDarkMode ? "text-white" : "text-slate-900"}`}
                  >
                    Master’s in Web Science and Artificial Intelligence
                  </h3>
                  <span className="text-xs text-purple-500 font-semibold">
                    Current Postgraduate Studies
                  </span>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-purple-500/10 text-purple-500 border border-purple-500/20">
                  Ongoing
                </span>
              </div>
            </div>

            <div
              className={`p-6 rounded-3xl border shadow-sm hover:border-purple-500 transition-all ${isDarkMode ? "bg-slate-900/60 border-slate-800" : "bg-white border-slate-200/80"}`}
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <div>
                  <h3
                    className={`text-base font-bold ${isDarkMode ? "text-white" : "text-slate-900"}`}
                  >
                    Bachelor in Business Administration and Information
                    Technology (BAIT)
                  </h3>
                  <span className="text-xs text-purple-500 font-semibold">
                    Syrian Virtual University (SVU)
                  </span>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                  Graduated: March 2026
                </span>
              </div>
            </div>
          </div>

          <div className="w-full text-left pt-4">
            <h3
              className={`text-lg font-bold mb-4 flex items-center gap-2 ${isDarkMode ? "text-white" : "text-slate-900"}`}
            >
              <Award className="text-purple-500 w-5 h-5" /> Credly Badges &
              Volunteering / Workshops Certificates
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {credlyBadgesAndVolunteering.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImage(item.imgUrl)}
                  className={`p-5 rounded-3xl border cursor-pointer transition-all flex items-center justify-between text-left group hover:scale-[1.02] shadow-sm ${isDarkMode ? "bg-slate-900/60 border-slate-800 hover:border-purple-500" : "bg-white border-slate-200/80 hover:shadow-md hover:border-purple-300"}`}
                >
                  <div>
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-500 border border-purple-500/20 inline-block mb-1.5">
                      {item.badgeText}
                    </span>
                    <h4
                      className={`text-xs sm:text-sm font-bold ${isDarkMode ? "text-white" : "text-slate-800"}`}
                    >
                      {item.title}
                    </h4>
                    <span className="text-[11px] text-purple-400 block mt-1 font-medium">
                      {item.org} (Click to View Image)
                    </span>
                  </div>
                  <div className="p-2.5 rounded-2xl bg-purple-500/10 text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-all shrink-0 ml-3">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full text-left pt-4">
            <h3
              className={`text-lg font-bold mb-4 flex items-center gap-2 ${isDarkMode ? "text-white" : "text-slate-900"}`}
            >
              <Award className="text-purple-500 w-5 h-5" /> Professional
              Certifications (Coursera & IBM)
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImage(cert.imgUrl)}
                  className={`p-5 rounded-3xl border cursor-pointer transition-all flex items-center justify-between text-left group hover:scale-[1.02] shadow-sm ${isDarkMode ? "bg-slate-900/60 border-slate-800 hover:border-purple-500" : "bg-white border-slate-200/80 hover:shadow-md hover:border-purple-300"}`}
                >
                  <div>
                    <h4
                      className={`text-xs sm:text-sm font-bold ${isDarkMode ? "text-white" : "text-slate-800"}`}
                    >
                      {cert.title}
                    </h4>
                    <span className="text-[11px] text-purple-400 block mt-1 font-medium">
                      {cert.org}
                    </span>
                  </div>
                  <div className="p-2.5 rounded-2xl bg-purple-500/10 text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-all shrink-0 ml-3">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: EXPERIENCE */}
        <section
          id="experience"
          className="flex flex-col items-center space-y-8 pt-8"
        >
          <div className="flex items-center justify-center gap-3">
            <Briefcase className="text-purple-500 w-7 h-7" />
            <h2
              className={`text-2xl sm:text-3xl font-bold tracking-tight ${isDarkMode ? "text-white" : "text-slate-900"}`}
            >
              Professional Experience & Methodologies
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 w-full text-left">
            <div
              className={`p-7 rounded-3xl border shadow-sm space-y-4 hover:border-purple-500 transition-all ${isDarkMode ? "bg-slate-900/60 border-slate-800" : "bg-white border-slate-200/80"}`}
            >
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-purple-500/10 text-purple-500 border border-purple-500/20">
                  Current Internship
                </span>
                <Bot className="w-5 h-5 text-purple-500" />
              </div>
              <div>
                <h3
                  className={`text-base font-bold ${isDarkMode ? "text-white" : "text-slate-900"}`}
                >
                  AI Engineering Trainee
                </h3>
                <span className="text-xs text-slate-400 font-medium">
                  Coder Company(Tamkeen)
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Training on advanced artificial intelligence models, data
                processing workflows, and exploring integration architectures
                between modern applications and AI systems.
              </p>
            </div>

            <div
              className={`p-7 rounded-3xl border shadow-sm space-y-4 hover:border-purple-500 transition-all ${isDarkMode ? "bg-slate-900/60 border-slate-800" : "bg-white border-slate-200/80"}`}
            >
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-purple-500/10 text-purple-500 border border-purple-500/20">
                  Full-Stack & Mobile
                </span>
                <Smartphone className="w-5 h-5 text-purple-500" />
              </div>
              <div>
                <h3
                  className={`text-base font-bold ${isDarkMode ? "text-white" : "text-slate-900"}`}
                >
                  Full-Stack & Flutter Developer
                </h3>
                <span className="text-xs text-slate-400 font-medium">
                  Freelance & Graduation Projects
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Developed complete mobile solutions using Flutter, and I have
                Experience web Developed using react , featuring interactive
                UI/UX and integrated AI chatbots.
              </p>
            </div>
          </div>

          <div className="w-full text-left pt-4">
            <h3
              className={`text-lg font-bold mb-4 flex items-center gap-2 ${isDarkMode ? "text-white" : "text-slate-900"}`}
            >
              <GitBranch className="text-purple-500 w-5 h-5" /> Work
              Methodologies & Architecture Standards
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {methodologies.map((method, idx) => (
                <div
                  key={idx}
                  className={`p-5 rounded-3xl border shadow-sm space-y-1.5 ${isDarkMode ? "bg-slate-900/60 border-slate-800" : "bg-white border-slate-200/80"}`}
                >
                  <h4 className={`text-xs font-bold text-purple-500`}>
                    {method.title}
                  </h4>
                  <p
                    className={`text-xs ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}
                  >
                    {method.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6: SKILLS */}
        <section
          id="skills"
          className="flex flex-col items-center space-y-8 pt-8"
        >
          <div className="space-y-2">
            <h2
              className={`text-2xl sm:text-3xl font-bold tracking-tight ${isDarkMode ? "text-white" : "text-slate-900"}`}
            >
              Skills & Expertise
            </h2>
            <p className="text-xs text-slate-400">
              React, Mobile Development, AI Chatbots, and Dev Tools
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-2">
            {[
              "All Skills",
              "Mobile",
              "AI & Data",
              "Frontend",
              "Backend",
              "Tools",
            ].map((tab) => {
              const isActive = activeSkillTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveSkillTab(tab)}
                  className={`px-5 py-2.5 rounded-2xl text-xs font-semibold transition-all duration-300 ${isActive ? "bg-gradient-to-r from-purple-600 via-pink-500 to-fuchsia-500 text-white shadow-md shadow-pink-500/20 scale-105" : isDarkMode ? "bg-slate-900 text-slate-400 hover:text-white border border-slate-800" : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"}`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 pt-4 w-full">
            {filteredSkills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2.5 group cursor-pointer"
              >
                <div
                  className={`w-18 h-18 sm:w-20 sm:h-20 rounded-3xl border shadow-sm flex items-center justify-center p-4 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 ${isDarkMode ? "bg-slate-900 border-slate-800 group-hover:border-purple-500" : "bg-white border-slate-200 group-hover:border-purple-300"}`}
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span
                  className={`text-xs font-bold transition-colors ${isDarkMode ? "text-slate-300 group-hover:text-purple-400" : "text-slate-700 group-hover:text-purple-600"}`}
                >
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 7: PROJECTS */}
        <section
          id="projects"
          className="flex flex-col items-center space-y-8 pt-8"
        >
          <div className="flex items-center justify-center gap-3">
            <Layers className="text-purple-500 w-7 h-7" />
            <h2
              className={`text-2xl sm:text-3xl font-bold tracking-tight ${isDarkMode ? "text-white" : "text-slate-900"}`}
            >
              Project Portfolio (GitHub)
            </h2>
          </div>
          <p className="text-xs text-slate-400 max-w-md">
            Here are my featured projects including my Self Care graduation
            project. Click any card to inspect details.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 w-full text-left">
            {projects.map((proj) => (
              <div
                key={proj.id}
                onClick={() => setSelectedProject(proj)}
                className={`p-7 rounded-3xl border shadow-sm hover:shadow-xl transition-all cursor-pointer space-y-4 flex flex-col justify-between group hover:scale-[1.02] ${isDarkMode ? "bg-slate-900/60 border-slate-800 hover:border-purple-500" : "bg-white border-slate-200/80 hover:border-purple-300"}`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-purple-500/10 text-purple-500 border border-purple-500/20">
                    {proj.category}
                  </span>
                  <div className="p-2 rounded-2xl bg-purple-500/5 group-hover:bg-purple-500/15 transition-all">
                    {proj.icon}
                  </div>
                </div>
                <div className="space-y-2">
                  <h3
                    className={`text-lg font-bold ${isDarkMode ? "text-white" : "text-slate-800"}`}
                  >
                    {proj.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                    {proj.desc}
                  </p>
                </div>
                <div className="pt-2 text-xs font-semibold text-purple-500 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  View on GitHub & Details <ExternalLink size={12} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 8: AI VISION */}
        <section
          id="vision"
          className="flex flex-col items-center space-y-6 pt-8"
        >
          <div className="flex items-center justify-center gap-3">
            <BrainCircuit className="text-purple-500 w-7 h-7 animate-pulse" />
            <h2
              className={`text-2xl sm:text-3xl font-bold tracking-tight ${isDarkMode ? "text-white" : "text-slate-900"}`}
            >
              AI Chatbot & Application Integration Vision
            </h2>
          </div>
          <div
            className={`w-full p-8 sm:p-10 rounded-3xl border shadow-xl ${isDarkMode ? "bg-slate-900/60 border-slate-800 text-slate-300" : "bg-white border-slate-200/80 text-slate-600"}`}
          >
            <p className="text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              My vision focuses on revolutionizing user applications by
              embedding smart conversational AI chatbots and machine learning
              intelligence directly into web and mobile environments. By
              combining{" "}
              <strong className="text-purple-500">React & Flutter</strong> with{" "}
              <strong className="text-purple-500">
                TensorFlow, PyTorch and Advanced Chatbots
              </strong>
              , I design applications that interact naturally and provide
              personalized user experiences instantly.
            </p>
          </div>
        </section>

        <section
          id="vision"
          className="flex flex-col items-center space-y-6 pt-8"
        >
          <div className="flex items-center justify-center gap-3">
            <Layers className="text-purple-500 w-10 h-10 animate-pulse" />
            <h2
              className={`text-2xl sm:text-3xl font-bold tracking-tight ${isDarkMode ? "text-white" : "text-slate-900"}`}
            >
              Founder of an educational tech community helping IT students
              across the Arab world.
            </h2>
          </div>
          <div
            className={`w-full p-8 sm:p-10 rounded-3xl border shadow-xl ${isDarkMode ? "bg-slate-900/60 border-slate-800 text-slate-300" : "bg-white border-slate-200/80 text-slate-600"}`}
          >
            <p className="text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              Alongside development, I founded and run an educational tech
              community across WhatsApp and social media for Information
              Technology students. What started as a small group has grown into
              a space where thousands of students get help, share resources, and
              follow AI and tech news — and I've personally helped over 2,000
              students along the way
            </p>
          </div>
        </section>

        {/* SECTION 9: CONTACT */}
        <section
          id="contact"
          className="flex flex-col items-center space-y-10 pt-8"
        >
          <div className="space-y-3 max-w-xl">
            <div className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-500 text-xs font-bold border border-purple-500/20 shadow-sm">
              Let's Connect
            </div>
            <h2
              className={`text-3xl sm:text-4xl font-black tracking-tight ${isDarkMode ? "text-white" : "text-slate-900"}`}
            >
              Get In Touch
            </h2>
            <p
              className={`text-sm ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}
            >
              Looking for a Full-Stack & AI Developer? My inbox is always open
              for opportunities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 w-full text-left">
            <div
              className={`p-8 rounded-3xl border shadow-sm space-y-8 flex flex-col justify-between ${isDarkMode ? "bg-slate-900/60 border-slate-800" : "bg-white border-slate-200/80"}`}
            >
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-600" />
                <h3
                  className={`text-lg font-bold ${isDarkMode ? "text-white" : "text-slate-900"}`}
                >
                  Contact Details
                </h3>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div
                    className={`p-3.5 rounded-2xl ${isDarkMode ? "bg-slate-800 text-purple-400" : "bg-purple-50 text-purple-600"}`}
                  >
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="text-[11px] font-medium text-slate-400 block">
                      Email
                    </span>
                    <a
                      href="mailto:israaaldroubi2@gmail.com"
                      className={`text-xs sm:text-sm font-semibold hover:text-purple-500 transition-colors ${isDarkMode ? "text-slate-200" : "text-slate-800"}`}
                    >
                      israaaldroubi2@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div
                    className={`p-3.5 rounded-2xl ${isDarkMode ? "bg-slate-800 text-purple-400" : "bg-purple-50 text-purple-600"}`}
                  >
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="text-[11px] font-medium text-slate-400 block">
                      Phone
                    </span>
                    <a
                      href="tel:+963936718948"
                      className={`text-xs sm:text-sm font-semibold ${isDarkMode ? "text-slate-200" : "text-slate-800"}`}
                    >
                      +963 936 718 948
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div
                    className={`p-3.5 rounded-2xl ${isDarkMode ? "bg-slate-800 text-purple-400" : "bg-purple-50 text-purple-600"}`}
                  >
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="text-[11px] font-medium text-slate-400 block">
                      Location
                    </span>
                    <span
                      className={`text-xs sm:text-sm font-semibold ${isDarkMode ? "text-slate-200" : "text-slate-800"}`}
                    >
                      Damascus, Syria
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 dark:border-slate-800 space-y-3 text-center">
                <span className="text-xs font-medium text-slate-400 block">
                  Find me online
                </span>
                <div className="flex justify-center items-center gap-3">
                  <a
                    href="https://github.com/israaaldroubi122"
                    target="_blank"
                    rel="noreferrer"
                    className={`p-2.5 rounded-full border hover:scale-110 transition-all ${isDarkMode ? "bg-slate-800 border-slate-700 text-white" : "bg-slate-50 border-slate-200 text-slate-800 shadow-sm"}`}
                    title="GitHub"
                  >
                    <GithubIcon size={16} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/esraaaldroubi"
                    target="_blank"
                    rel="noreferrer"
                    className={`p-2.5 rounded-full border hover:scale-110 transition-all ${isDarkMode ? "bg-slate-800 border-slate-700 text-blue-400" : "bg-slate-50 border-slate-200 text-blue-600 shadow-sm"}`}
                    title="LinkedIn"
                  >
                    <LinkedinIcon size={16} />
                  </a>
                </div>
              </div>
            </div>

            <div
              className={`p-8 rounded-3xl border shadow-sm space-y-6 ${isDarkMode ? "bg-slate-900/60 border-slate-800" : "bg-white border-slate-200/80"}`}
            >
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-600" />
                <h3
                  className={`text-lg font-bold ${isDarkMode ? "text-white" : "text-slate-900"}`}
                >
                  Send Me a Message
                </h3>
              </div>

              <form onSubmit={handleSendMessage} className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-slate-400 block mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={contactForm.name}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, name: e.target.value })
                    }
                    required
                    className={`w-full px-4 py-3 rounded-2xl border text-xs outline-none transition-all ${isDarkMode ? "bg-slate-950 border-slate-800 text-white focus:border-purple-500" : "bg-slate-50/50 border-slate-200 text-slate-800 focus:border-purple-400"}`}
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-400 block mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    placeholder="John@example.com"
                    value={contactForm.email}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, email: e.target.value })
                    }
                    required
                    className={`w-full px-4 py-3 rounded-2xl border text-xs outline-none transition-all ${isDarkMode ? "bg-slate-950 border-slate-800 text-white focus:border-purple-500" : "bg-slate-50/50 border-slate-200 text-slate-800 focus:border-purple-400"}`}
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-400 block mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Hello Esraa, I'd like to talk about an opportunity..."
                    value={contactForm.message}
                    onChange={(e) =>
                      setContactForm({
                        ...contactForm,
                        message: e.target.value,
                      })
                    }
                    required
                    className={`w-full px-4 py-3 rounded-2xl border text-xs outline-none transition-all resize-none ${isDarkMode ? "bg-slate-950 border-slate-800 text-white focus:border-purple-500" : "bg-slate-50/50 border-slate-200 text-slate-800 focus:border-purple-400"}`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 text-white font-bold text-xs hover:opacity-95 transition-all shadow-lg shadow-purple-500/25 flex items-center justify-center gap-2 hover:scale-[1.02]"
                >
                  Send Message <Send size={14} />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Floating Bottom Dock Navigation */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
        <nav
          className={`border shadow-2xl rounded-full px-4 py-2 flex items-center gap-1 sm:gap-2 backdrop-blur-md transition-colors ${isDarkMode ? "bg-slate-900/90 border-slate-800" : "bg-white/90 border-slate-200/90"}`}
        >
          {navItems.map((item) => {
            const isActive = activeNavTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex flex-col items-center justify-center transition-all duration-300 ${isActive ? "text-white" : isDarkMode ? "text-slate-400 hover:text-white" : "text-slate-500 hover:text-slate-800"}`}
              >
                {isActive ? (
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center text-white shadow-md shadow-purple-500/30 scale-110">
                    {item.icon}
                  </div>
                ) : (
                  <div
                    className={`p-2 rounded-full transition-transform hover:scale-110 ${isDarkMode ? "hover:bg-slate-800" : "hover:bg-slate-100"}`}
                  >
                    {item.icon}
                  </div>
                )}
                <span
                  className={`text-[10px] font-medium tracking-tight mt-0.5 ${isActive ? "text-purple-500 font-bold" : "text-slate-400"}`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
          <div
            className={`w-px h-6 mx-1 ${isDarkMode ? "bg-slate-800" : "bg-slate-200"}`}
          />
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-2.5 rounded-full transition-all hover:scale-110 ${isDarkMode ? "text-yellow-400 hover:bg-slate-800" : "text-slate-700 hover:bg-slate-100"}`}
            title="Toggle Dark/Light Mode"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>
      </div>
    </div>
  );
};

export default App;
