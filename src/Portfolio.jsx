import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className={darkMode ? "min-h-screen bg-slate-900 text-slate-100" : "min-h-screen bg-stone-50 text-slate-800"}>
        {/* Navbar */}
        <nav className="flex justify-between items-center px-6 md:px-20 py-4 shadow-sm bg-white/90 dark:bg-slate-800/90 backdrop-blur sticky top-0 z-50 border-b border-slate-200 dark:border-slate-700">
          <h1 className="text-2xl font-bold text-slate-700 dark:text-slate-200">A K M Sazzadul Alam</h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <NavLinks />
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 border rounded-lg border-gray-300 dark:border-gray-700"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div id="mobile-menu" className="flex flex-col items-center md:hidden bg-white dark:bg-gray-800 py-4 border-t border-gray-200 dark:border-gray-700">
            <NavLinks onClick={() => setMenuOpen(false)} />
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="mt-4 p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        )}

        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center py-24 text-center bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white overflow-hidden">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-2 relative z-10"
          >
            <img 
              src="/IMG_5096.JPG" 
              alt="A K M Sazzadul Alam" 
              className="w-48 h-48 rounded-full border-4 border-white shadow-2xl object-cover ring-4 ring-white/20"
            />
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/80 mb-6 relative z-10"
          >
            "Passionate about security and obsessed with data and AI"
          </motion.p>
          
          {/* Side-by-Side Subtitles */}
          <div className="flex justify-between items-start w-full max-w-6xl mt-8 relative z-10">
            {/* Left Side Subtitle */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-left max-w-xs space-y-2"
            >
              <p className="text-lg font-medium text-white/90 flex items-center">
                🔐 Cybersecurity with AI
              </p>
              <p className="text-lg font-medium text-white/90 flex items-center">
                🚗 Autonomous Driving Research
              </p>
              <p className="text-lg font-medium text-white/90 flex items-center">
                ⚡ Full Stack AI/ML
              </p>
              <p className="text-lg font-medium text-white/90 flex items-center">
                🧠 RAG & Agentic AI
              </p>
            </motion.div>

            {/* Right Side Subtitle */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-left max-w-xs space-y-2"
            >
              <p className="text-lg font-medium text-white/90 flex items-center">
                🛡️ Security Architect
              </p>
              <p className="text-lg font-medium text-white/90 flex items-center">
                💻 IT Support & Data Analyst
              </p>
              <p className="text-lg font-medium text-white/90 flex items-center">
                🏢 Data Center Operations
              </p>
              <p className="text-lg font-medium text-white/90 flex items-center">
                📊 Project Management
              </p>
            </motion.div>
          </div>
          
          {/* Expertise Banner */}
          <motion.div 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 relative z-10"
          >
            <div className="flex justify-center items-center mb-4">
              <img 
                src="/expertise-banner.png" 
                alt="Expertise Areas" 
                className="w-96 h-24 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="text-center">
              <p className="text-lg font-medium text-white/90">
                Cybersecurity | Autonomous Driving | AI & ML | Data Analytics
              </p>
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 px-6 md:px-20">
          <h2 className="text-3xl font-semibold mb-6 text-center">About Me</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed mb-6">
              I am a cybersecurity professional with over 13 years of experience, currently pursuing my MS in Cybersecurity at the University of Houston and serving as a Manager at the USDOT Tier-1 UTC Transportation Cybersecurity Center for Advanced Research and Education (CYBER-CARE). 
            </p>
            <p className="text-lg leading-relaxed mb-6">
              My expertise spans from traditional IT security roles as a Senior Security Architect in Bangladesh Government Service to cutting-edge AI/ML research in autonomous vehicles and cybersecurity. I've led teams of 100+ engineers, received national awards for cybersecurity initiatives, and have extensive experience in network security, data analysis, and AI-driven security solutions.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-slate-800 dark:text-slate-100">Current Focus</h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li>• Deep RL for AV Perception Validation</li>
                  <li>• AI-powered Transportation Asset Management</li>
                  <li>• Multi-agent AI Systems for Healthcare</li>
                  <li>• RAG-based Cybersecurity Compliance</li>
                </ul>
              </div>
              <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-slate-800 dark:text-slate-100">Key Achievements</h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li>• 2 National Awards for Cybersecurity Leadership</li>
                  <li>• 3 Published Research Papers</li>
                  <li>• Manager at USDOT CYBER-CARE Center</li>
                  <li>• Led 100+ Engineer Teams</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 px-6 md:px-20 bg-slate-100 dark:bg-slate-800">
          <h2 className="text-3xl font-semibold mb-10 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard 
              title="AI-Powered Cybersecurity Compliance RAG System" 
              description="Developed RAG system using LangChain, Pinecone, and Google Gemini 2.5 Pro for NIST CSF and ISO 27001 compliance queries with 90%+ accuracy. Built full-stack application with FastAPI backend and Streamlit frontend." 
            />
            <ProjectCard 
              title="Deep RL for AV Perception Validation" 
              description="Constructed training data pipeline using PointPillars and YOLOv8 consistency analysis on Waymo dataset. Developing deep RL-based confidence calibration system using PPO algorithm to refine LiDAR detection reliability." 
            />
            <ProjectCard 
              title="Multi-Agent AI System for Healthcare" 
              description="Developed multi-agent AI system with 12+ specialized agents using CrewAI framework for clinical evaluation processing, achieving 95%+ transcription accuracy and 80% reduction in manual processing time." 
            />
            <ProjectCard 
              title="Human-in-the-Loop Pentesting Framework" 
              description="Built LLM-driven pentesting framework that plans actions with Google Gemini/OpenAI/Ollama and executes authorized scans via Nmap/Nuclei with user approval gates and structured evidence store." 
            />
            <ProjectCard 
              title="AI-Powered Transportation Asset Management" 
              description="Designed and deployed AI-powered transportation asset management system using YOLOv8 and CNN that automated traffic infrastructure monitoring, achieving 90%+ accuracy with 2-5s/image processing time." 
            />
            <ProjectCard 
              title="Network Intrusion Detection System" 
              description="Performed end-to-end EDA, dimensionality reduction (PCA), and multiclass classification of attack types using Decision Tree, Random Forest & XGBoost algorithms, achieving 95% classification accuracy." 
            />
          </div>
        </section>

        {/* Experience & Achievements */}
        <section id="achievements" className="py-16 px-6 md:px-20">
          <h2 className="text-3xl font-semibold mb-8 text-center">Professional Experience</h2>
          <div className="max-w-5xl mx-auto space-y-8">
            
            {/* Current Roles */}
            <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-100">Current Positions</h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-slate-700 dark:text-slate-200">Research Assistant: Transportation AI/ML Project</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">CYBER-CARE LAB, University of Houston | Aug 2025 - Present</p>
                  <ul className="mt-2 space-y-1 text-sm text-slate-600 dark:text-slate-300">
                    <li>• Designed and deployed AI-powered transportation asset management system (YOLOv8, CNN) that automated traffic infrastructure monitoring</li>
                    <li>• Implemented and fine-tuned 6 computer vision models for traffic signal/sign detection and damage assessment, achieving 90%+ accuracy with 2-5s/image processing time</li>
                    <li>• <strong>Technologies:</strong> Python, FastAPI, PyTorch, YOLOv8, React, Google Cloud, Docker</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-slate-700 dark:text-slate-200">AI Application Development Intern</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Deepnestai, Baton Rouge, Louisiana | May 2025 - July 2025</p>
                  <ul className="mt-2 space-y-1 text-sm text-slate-600 dark:text-slate-300">
                    <li>• Developed multi-agent AI system with 12+ specialized agents using CrewAI framework for clinical evaluation processing</li>
                    <li>• Achieved 95%+ transcription accuracy and 80% reduction in manual processing time</li>
                    <li>• Architected full-stack application using Asynchronous Quart backend and Next.js frontend, deployed on Google Cloud Platform</li>
                    <li>• <strong>Technologies:</strong> Python, Next.js, CrewAI, Google Cloud Platform, Docker, OAuth 2. Plugin architecture, structured evidence store, PDF reporting, and safe-by-default workflows for production targets</li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-slate-700 dark:text-slate-200">Research Assistant: Autonomous Driving Research</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">CYBER-CARE LAB, University of Houston | Oct 2024 - Present</p>
                  <ul className="mt-2 space-y-1 text-sm text-slate-600 dark:text-slate-300">
                    <li>• Developing machine learning model to reduce LiDAR False Positives via Camera Consistency in Autonomous Driving</li>
                    <li>• Working on The Geometric Validator: Improving Camera Confidence quality via LiDAR Consistency in Autonomous Driving</li>
                    <li>• <strong>Technologies:</strong> OpenPCDet framework, PointPillars, YOLOv8, SLURM, Waymo Open Dataset, TFRecord processing, High Performance Computing (HPC)</li>
                  </ul>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-slate-700 dark:text-slate-200">Manager</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">USDOT Tier-1 UTC Transportation Cybersecurity Center (CYBER-CARE) | Oct 2024 - Present</p>
                  <ul className="mt-2 space-y-1 text-sm text-slate-600 dark:text-slate-300">
                    <li>• Leading strategic initiatives for transportation cybersecurity research and education</li>
                    <li>• Managing research projects and coordinating with government agencies and industry partners</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Previous Experience */}
            <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-100">Previous Experience</h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-slate-700 dark:text-slate-200">Senior Security Architect</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Government Service, Bangladesh | Nov 2020 - Jul 2024</p>
                  <ul className="mt-2 space-y-1 text-sm text-slate-600 dark:text-slate-300">
                    <li>• Designed and implemented security architecture for Headquarters and nationwide branch offices supporting over 10,000 users</li>
                    <li>• Conducted 20+ risk assessments and threat modeling exercises, reducing critical vulnerabilities by 40% over 2 years</li>
                    <li>• Led deployment of security technologies including IDS, Firewalls, WAF and IAM systems, improving incident detection time by 60%</li>
                    <li>• <strong>Technologies:</strong> SIEM, IAM, Firewalls, NIST CSF, Risk Assessment, Threat Modeling</li>
                  </ul>
                </div>

                <div className="border-l-4 border-indigo-500 pl-4">
                  <h4 className="font-semibold text-slate-700 dark:text-slate-200">Security Architect</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Government Service, Bangladesh | Jan 2018 - Oct 2020</p>
                  <ul className="mt-2 space-y-1 text-sm text-slate-600 dark:text-slate-300">
                    <li>• Led the design and implementation of a Security Operations Center (SOC) using Wazuh, Snort, and the ELK Stack</li>
                    <li>• Established centralized log management, real-time threat detection, and incident response capabilities</li>
                    <li>• Enhanced organizational security posture by leveraging Trend Micro Endpoint Agents and Deep Discovery Inspector (DDI)</li>
                    <li>• Automated alerting and correlation across 500+ endpoints, significantly improving threat detection and response</li>
                    <li>• <strong>Technologies:</strong> Wazuh, ELK Stack, SOC, Network Security, Log Management, Threat Detection, Incident Response</li>
                  </ul>
                </div>

                <div className="border-l-4 border-teal-500 pl-4">
                  <h4 className="font-semibold text-slate-700 dark:text-slate-200">IT Support Engineer</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Government Service, Bangladesh | Sep 2015 - Dec 2017</p>
                  <ul className="mt-2 space-y-1 text-sm text-slate-600 dark:text-slate-300">
                    <li>• Provided IT infrastructure support including router/switch configuration, LAN/WAN testing, and centralized Wi-Fi maintenance</li>
                    <li>• Managed data center renovation, operations, and maintenance, improving system reliability and availability</li>
                    <li>• Implemented endpoint security solutions through antivirus and Active Directory management</li>
                    <li>• Reduced user downtime by 99% and improved satisfaction by 40% through proactive IT support</li>
                    <li>• Oversaw PABX system, ERP software, and IT inventory management</li>
                    <li>• <strong>Technologies:</strong> Routers/Switches, LAN/WAN, Wi-Fi, Active Directory, Antivirus/Endpoint Security, PABX, ERP Systems, Data Center Operations</li>
                  </ul>
                </div>

                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold text-slate-700 dark:text-slate-200">Data Analyst</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Government Service, Bangladesh | Jun 2012 - Aug 2015</p>
                  <ul className="mt-2 space-y-1 text-sm text-slate-600 dark:text-slate-300">
                    <li>• Analyzed large communication and financial datasets using Excel and i2 Analyst's Notebook</li>
                    <li>• Performed fraud risk analysis by applying link analysis and pattern recognition to detect irregular activities</li>
                    <li>• Created dashboards and visual reports to summarize findings and support data-driven decision-making for leadership</li>
                    <li>• <strong>Technologies:</strong> Excel, i2 Analyst's Notebook, Data Visualization, Fraud Risk Analysis, Pattern Recognition</li>
                  </ul>
                </div>

                <div className="border-l-4 border-pink-500 pl-4">
                  <h4 className="font-semibold text-slate-700 dark:text-slate-200">Security Engineer</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Grameenphone, Dhaka, Bangladesh | Oct 2010 - May 2012</p>
                  <ul className="mt-2 space-y-1 text-sm text-slate-600 dark:text-slate-300">
                    <li>• Configured, managed, and upgraded Firewall (FW), Intrusion Detection Systems (IDS), and Intrusion Prevention Systems (IPS) appliances</li>
                    <li>• Ensured robust network security infrastructure and threat protection</li>
                    <li>• Troubleshot and optimized VPN performance, reducing latency and improving connection reliability by 30%</li>
                    <li>• <strong>Technologies:</strong> Firewall, IDS, IPS, VPN, IPSec, SSL VPN, Site-to-Site VPN, Network Security, Performance Optimization</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-slate-50 dark:bg-slate-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-100">Technical Expertise</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-slate-700 dark:text-slate-200 mb-2">Cybersecurity Tools</h4>
                  <p className="text-slate-600 dark:text-slate-300">Kali, Wireshark, Nessus, Snort, Nmap, Burp Suite, ELK, Wazuh, Suricata</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700 dark:text-slate-200 mb-2">Machine Learning</h4>
                  <p className="text-slate-600 dark:text-slate-300">Python, PyTorch, TensorFlow, Scikit-learn, XGBoost, Hugging Face, Ollama</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700 dark:text-slate-200 mb-2">Computer Vision</h4>
                  <p className="text-slate-600 dark:text-slate-300">OpenCV, YOLOv8, LiDAR Processing, 3D Object Detection, Sensor Fusion</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700 dark:text-slate-200 mb-2">Cloud & DevOps</h4>
                  <p className="text-slate-600 dark:text-slate-300">GCP, Azure, AWS, Docker, MLOps, Kubernetes</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700 dark:text-slate-200 mb-2">Security Frameworks</h4>
                  <p className="text-slate-600 dark:text-slate-300">NIST CSF, ISO/IEC 27001, CIS Controls</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700 dark:text-slate-200 mb-2">Languages & Databases</h4>
                  <p className="text-slate-600 dark:text-slate-300">Python, R, SQL, MongoDB, ChromaDB, Bash/Shell, PowerShell</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700 dark:text-slate-200 mb-2">Web Development</h4>
                  <p className="text-slate-600 dark:text-slate-300">React, Node.js, FastAPI, Quart, HTML/CSS, JavaScript</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700 dark:text-slate-200 mb-2">Leadership Skills</h4>
                  <p className="text-slate-600 dark:text-slate-300">Team Management, Project Management, Vendor Management, Stakeholder Communication</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education & Certifications */}
        <section className="py-16 px-6 md:px-20 bg-slate-100 dark:bg-slate-800">
          <h2 className="text-3xl font-semibold mb-8 text-center">Education & Certifications</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-slate-700 p-6 rounded-xl border border-slate-200 dark:border-slate-600">
                <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-100">Education</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-700 dark:text-slate-200">Master's in Cybersecurity</h4>
                    <p className="text-slate-600 dark:text-slate-300">University of Houston</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Expected December 2025</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">Relevant Coursework: Network Security, Enterprise Security, Cybersecurity Tools, Data Science, Machine Learning, Applied Cryptography</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-700 dark:text-slate-200">BSc in Electronics & Communication Engineering</h4>
                    <p className="text-slate-600 dark:text-slate-300">Khulna University of Eng. and Tech., Bangladesh</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">2006 - 2010</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">Relevant Coursework: C, C++, Data Structures and Algorithms, Computer Networking, Advanced Statistics</p>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-slate-700 p-6 rounded-xl border border-slate-200 dark:border-slate-600">
                <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-100">Certifications</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <div>
                      <p className="font-medium text-slate-700 dark:text-slate-200">HPE DSI Certifications (2024-25)</p>
                      <p className="text-sm text-slate-600 dark:text-slate-300">Python, R, Machine Learning, Data Management, Excel & Power BI, Cluster Computing: Linux, Shell Scripting</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-blue-500 mt-1">📚</span>
                    <div>
                      <p className="font-medium text-slate-700 dark:text-slate-200">In Progress</p>
                      <p className="text-sm text-slate-600 dark:text-slate-300">CISSP, Pentesting with Kali, RHCSA & RHCE, CCNA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16 bg-slate-800 text-slate-100 text-center">
          <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-lg mb-6">Let's collaborate on cybersecurity, AI/ML research, or autonomous vehicle technologies!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="secondary" asChild>
              <a href="mailto:alamakmsazzadul@gmail.com">Send Email</a>
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-slate-800" asChild>
              <a href="https://linkedin.com/in/a-k-m-sazzadul-alam/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-slate-800" asChild>
              <a href="https://github.com/sazzad2024" target="_blank" rel="noopener noreferrer">GitHub</a>
            </Button>
          </div>
          <div className="mt-6 text-sm text-slate-300">
            <p>📧 alamakmsazzadul@gmail.com</p>
            <p>📱 +1(713) 820-8097</p>
            <p>📍 Houston, Texas, USA</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-6 text-center text-sm text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900">
          © {new Date().getFullYear()} A K M Sazzadul Alam. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

function NavLinks({ onClick }) {
  return (
    <>
      <a href="#about" className="hover:text-slate-600 dark:hover:text-slate-300 transition-colors" onClick={onClick}>About</a>
      <a href="#projects" className="hover:text-slate-600 dark:hover:text-slate-300 transition-colors" onClick={onClick}>Projects</a>
      <a href="#achievements" className="hover:text-slate-600 dark:hover:text-slate-300 transition-colors" onClick={onClick}>Achievements</a>
      <a href="#contact" className="hover:text-slate-600 dark:hover:text-slate-300 transition-colors" onClick={onClick}>Contact</a>
    </>
  );
}

function ProjectCard({ title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white dark:bg-slate-700 p-6 rounded-2xl shadow-md hover:shadow-lg border border-slate-200 dark:border-slate-600"
    >
      <h3 className="text-xl font-semibold mb-3 text-slate-800 dark:text-slate-100">{title}</h3>
      <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 leading-relaxed">{description}</p>
      <Button variant="outline">Learn More</Button>
    </motion.div>
  );
}


