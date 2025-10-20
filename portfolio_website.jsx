import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={darkMode ? "min-h-screen bg-gray-900 text-white" : "min-h-screen bg-gray-50 text-gray-800"}>
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 md:px-20 py-4 shadow-sm bg-white/80 dark:bg-gray-800/80 backdrop-blur sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">A.K.M. Sazzadul Alam</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <NavLinks />
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 border rounded-lg border-gray-300 dark:border-gray-700"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="flex flex-col items-center md:hidden bg-white dark:bg-gray-800 py-4 border-t border-gray-200 dark:border-gray-700">
          <NavLinks onClick={() => setMenuOpen(false)} />
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="mt-4 p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      )}

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-24 text-center bg-gradient-to-b from-indigo-600 to-blue-500 text-white">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-4"
        >
          A.K.M. Sazzadul Alam
        </motion.h1>
        <p className="text-lg max-w-2xl">
          Cybersecurity Professional | AI & ML Researcher | National Awardee
        </p>
        <div className="mt-6 flex gap-4">
          <Button variant="secondary" asChild>
            <a href="#projects">View Projects</a>
          </Button>
          <Button asChild>
            <a href="mailto:sazzad@example.com">Contact Me</a>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-semibold mb-6 text-center">About Me</h2>
        <p className="max-w-3xl mx-auto text-center text-lg leading-relaxed">
          I am a Bangladeshi Police Officer with over 11 years of experience, including 6 years in practical cybersecurity. My work spans national-level communication networks, data centers, and cybercrime investigation. Currently pursuing my MS in Cybersecurity at the University of Houston, I am passionate about AI-driven security systems and LLM-based threat intelligence.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 md:px-20 bg-gray-100 dark:bg-gray-800">
        <h2 className="text-3xl font-semibold mb-10 text-center">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <ProjectCard title="LLM Domain Adaptation via QLoRA Finetuning" description="Finetuned Falcon3-7B model on medical dataset using QLoRA and PEFT techniques for efficient adaptation." />
          <ProjectCard title="RAG-based Compliance Assistant" description="Developed LangChain + Pinecone + Gemini RAG system for NIST CSF and ISO 27001 compliance queries with 90%+ accuracy." />
          <ProjectCard title="Smart Coach for LiDAR Confidence Refinement" description="Built ML model to calibrate LiDAR detection reliability using multi-modal camera context on Waymo dataset." />
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-semibold mb-8 text-center">Achievements</h2>
        <ul className="max-w-2xl mx-auto list-disc list-inside text-lg">
          <li>Honored with two national awards for cybersecurity and IT leadership during COVID-19 pandemic.</li>
          <li>Led national-level incident response and infrastructure modernization initiatives.</li>
          <li>Collaborated on AI-driven security research integrating LLM and RAG frameworks.</li>
        </ul>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-gray-900 text-white text-center">
        <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
        <p className="text-lg mb-6">Let's collaborate on cybersecurity or AI-driven research!</p>
        <Button variant="secondary" asChild>
          <a href="mailto:sazzad@example.com">Send Email</a>
        </Button>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} A.K.M. Sazzadul Alam. All rights reserved.
      </footer>
    </div>
  );
}

function NavLinks({ onClick }) {
  return (
    <>
      <a href="#about" className="hover:text-indigo-500" onClick={onClick}>About</a>
      <a href="#projects" className="hover:text-indigo-500" onClick={onClick}>Projects</a>
      <a href="#achievements" className="hover:text-indigo-500" onClick={onClick}>Achievements</a>
      <a href="#contact" className="hover:text-indigo-500" onClick={onClick}>Contact</a>
    </>
  );
}

function ProjectCard({ title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-md hover:shadow-lg"
    >
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">{description}</p>
      <Button variant="outline">Learn More</Button>
    </motion.div>
  );
}
