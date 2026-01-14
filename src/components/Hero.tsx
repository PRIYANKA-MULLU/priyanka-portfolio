import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import NeuralBackground from "./NeuralBackground";

export default function Hero() {
  const roles = [
    "AIML Undergraduate",
    "Machine Learning Engineer",
    "Full Stack & AI Systems Developer",
  ];

  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: number;

    if (!isDeleting && charIndex < currentRole.length) {
      timeout = window.setTimeout(() => {
        setText(currentRole.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 90);
    } else if (isDeleting && charIndex > 0) {
      timeout = window.setTimeout(() => {
        setText(currentRole.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 60);
    } else if (!isDeleting && charIndex === currentRole.length) {
      timeout = window.setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex, roles]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#020617]"
    >
      {/* 🧠 Neural Network Background */}
      <NeuralBackground />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70 z-[1]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT — TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
              Lalitha Priyanka Mullu
            </span>
          </h1>

          {/* 🔥 Animated Roles */}
          <p className="mt-6 text-lg text-gray-400 h-8">
            {text}
            <span className="ml-1 border-r-2 border-blue-400 animate-pulse" />
          </p>

          <div className="mt-10 flex gap-6">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-blue-600 text-white
                         hover:bg-blue-700 transition shadow-lg shadow-blue-500/30"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg border border-blue-500
                         text-blue-400 hover:bg-blue-500/10 transition"
            >
              View Resume
            </a>
          </div>
        </motion.div>

        {/* RIGHT — STATIC PHOTO WITH BLINKING BORDER */}
        <div className="flex justify-center">
          <div className="relative w-72 h-72 flex items-center justify-center">
            
            {/* Blinking blue border */}
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 0px rgba(59,130,246,0.4)",
                  "0 0 40px rgba(59,130,246,0.9)",
                  "0 0 0px rgba(59,130,246,0.4)",
                ],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 rounded-full border-4 border-blue-500"
            />

            {/* Profile Image */}
            <img
              src="/profile.jpg"
              alt="Lalitha Priyanka Mullu"
              className="relative z-50 w-full h-full rounded-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
