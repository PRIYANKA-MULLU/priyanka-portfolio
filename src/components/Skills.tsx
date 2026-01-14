import { motion } from "framer-motion";
import {
  Code2,
  Brain,
  Database,
  Cpu,
  BarChart3,
  GitBranch,
} from "lucide-react";
import Reveal from "./Reveal";

export default function Skills() {
  const skills = [
    {
      title: "Programming & Development",
      icon: <Code2 className="w-6 h-6 text-blue-400" />,
      items: [
        "Python",
        "Java",
        "JavaScript",
        "TypeScript",
        "SQL",
        "Object-Oriented Programming",
        "Data Structures & Algorithms",
      ],
    },
    {
      title: "AI / Machine Learning",
      icon: <Brain className="w-6 h-6 text-indigo-400" />,
      items: [
        "Machine Learning",
        "Deep Learning",
        "Neural Networks",
        "Natural Language Processing (NLP)",
        "Speech Recognition",
        "Computer Vision",
        "Recommendation Systems",
        "Model Training & Evaluation",
      ],
    },
    {
      title: "Frameworks & Libraries",
      icon: <Cpu className="w-6 h-6 text-cyan-400" />,
      items: [
        "TensorFlow",
        "Scikit-learn",
        "Librosa",
        "Pandas",
        "NumPy",
        "React",
        "Node.js",
        "Express.js",
        "FastAPI",
      ],
    },
    {
      title: "Databases & Analytics",
      icon: <Database className="w-6 h-6 text-emerald-400" />,
      items: [
        "MongoDB",
        "MySQL",
        "Power BI",
        "DAX",
        "Power Query",
        "Data Modeling",
      ],
    },
    {
      title: "Tools & Platforms",
      icon: <GitBranch className="w-6 h-6 text-purple-400" />,
      items: [
        "Git",
        "GitHub",
        "Postman",
        "VS Code",
        "Linux",
        "REST APIs",
      ],
    },
    {
      title: "Data & Visualization",
      icon: <BarChart3 className="w-6 h-6 text-pink-400" />,
      items: [
        "Data Analysis",
        "Exploratory Data Analysis (EDA)",
        "Feature Engineering",
        "Model Evaluation Metrics",
        "Visualization & Dashboards",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-24 bg-[#020617] overflow-hidden"
    >
      {/* 🌌 Neural glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.12),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(99,102,241,0.12),transparent_40%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
            Skills & Expertise
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="
                bg-[#0b1220]
                border border-white/10
                rounded-2xl
                p-8
                hover:shadow-[0_0_45px_rgba(59,130,246,0.35)]
                hover:border-blue-500/30
                transition
              "
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-white/5">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {skill.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-3">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="
                      px-3 py-1 text-sm rounded-full
                      bg-blue-500/10 text-blue-400
                      border border-blue-500/20
                      hover:bg-blue-500/20
                      transition
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
