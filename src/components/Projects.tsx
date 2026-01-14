import { motion } from "framer-motion";
import Reveal from "./Reveal";
import {
  Wallet,
  Music,
  Hotel,
  BarChart3,
  Mic,
  Sparkles,
  Camera,
  Notebook,
} from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Finance Hive",
      year: "2025",
      description:
        "A full-stack finance management platform to track expenses, EMIs, savings, and financial insights with secure authentication.",
      tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      code: "https://github.com/PRIYANKA-MULLU/Khub-IIIT-Hyd-",
      live: "https://financehive-fh.vercel.app",
      icon: Wallet,
    },
    {
      title: "Hotel Room Booking Management System",
      year: "2024",
      description:
        "A hotel booking system that allows users to manage room availability, reservations, and bookings with database integration.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      code: "https://github.com/PRIYANKA-MULLU/Hotel-Room-Booking-Management",
      live: "https://undoctrinally-unoiling-darnell.ngrok-free.dev/",
      icon: Hotel,
    },
    {
      title: "Spotify Downloader",
      year: "2024",
      description:
        "A utility tool to download audio tracks from Spotify using automation and backend scripting.",
      tech: ["Python", "Automation"],
      code: "https://github.com/PRIYANKA-MULLU/spotify_downloader",
      icon: Music,
    },
    {
      title: "Blinkit Sales Dashboard",
      year: "2024",
      description:
        "A Power BI dashboard analyzing Blinkit sales trends and delivery KPIs using DAX and Power Query.",
      tech: ["Power BI", "DAX", "Power Query"],
      code: "https://github.com/PRIYANKA-MULLU/Data-analytics-POWER-BI-",
      icon: BarChart3,
    },
    {
      title: "Digits – Automated Speech Recognition",
      year: "2025",
      description:
        "Voice digit recognition system using MFCC features and neural networks trained on the FSDD dataset.",
      tech: ["Python", "TensorFlow", "Librosa"],
      code: "https://github.com/PRIYANKA-MULLU/digits-automated-speech-recognisation",
      icon: Mic,
    },
    {
      title: "Product Recommendation System",
      year: "2025",
      description:
        "A recommendation system that suggests products based on user behavior and machine learning techniques.",
      tech: ["Python", "Machine Learning"],
      code: "https://github.com/PRIYANKA-MULLU/Khub-IIIT-Hyd-",
      icon: Sparkles,
    },
    {
      title: "Face Detection System",
      year: "2024",
      description:
        "A computer vision-based face detection system developed as part of robotics and vision experiments.",
      tech: ["Python", "OpenCV", "Computer Vision"],
      code: "https://github.com/PRIYANKA-MULLU/ROBOTICS",
      icon: Camera,
    },
    {
      title: "Note Making Application",
      year: "2024",
      description:
        "A full-stack note-making application using FastAPI and MongoDB with CRUD functionality.",
      tech: ["FastAPI", "MongoDB", "Python"],
      code: "https://github.com/PRIYANKA-MULLU/NOTE-MAKING-USING-FAST-API-AND-MONGO-DB",
      icon: Notebook,
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-24 bg-[#020617] overflow-hidden"
    >
      {/* 🌌 Neural Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.12),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(99,102,241,0.12),transparent_40%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-white">
            Projects
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#0b1220] border border-white/10 rounded-2xl
                           p-8 hover:shadow-[0_0_40px_rgba(59,130,246,0.25)]
                           transition"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-blue-600/20
                                flex items-center justify-center mb-4">
                  <Icon className="text-blue-400 w-6 h-6" />
                </div>

                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <span className="text-sm px-3 py-1 rounded-full
                                   bg-white/10 text-gray-300">
                    {project.year}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full
                                 bg-blue-500/10 text-blue-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 text-sm rounded-lg
                                 bg-blue-600 text-white
                                 hover:bg-blue-700 transition"
                    >
                      Live Demo →
                    </a>
                  )}

                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 text-sm rounded-lg
                               border border-white/20 text-white
                               hover:bg-white/10 transition"
                  >
                    View Code →
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
