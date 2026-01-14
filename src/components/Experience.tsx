import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function Experience() {
  const experiences = [
    {
      role: "Junior Developer Intern",
      company: "IIIT Hyderabad – KIET RCTS",
      duration: "Aug 2024 – Apr 2025",
      location: "Hyderabad, India",
      certificate: "/certificates/iiith internship certificate khub.jpg",
      points: [
        "Engineered a full-stack Finance Hive platform using the MERN stack for expense, EMI, and savings management.",
        "Designed secure REST APIs with JWT authentication and role-based access control.",
        "Worked with MongoDB Atlas and built interactive dashboards for real-time financial insights.",
      ],
    },
    {
      role: "Android Developer Intern",
      company: "Google (EduSkills Program)",
      duration: "Apr 2024 – Jun 2024",
      location: "Remote",
      certificate: "/certificates/google android priya.pdf",
      points: [
        "Developed Android applications using Java/Kotlin following Material UI design principles.",
        "Integrated REST APIs and implemented authentication, navigation, and data persistence.",
        "Gained hands-on experience with Android Studio, activity lifecycle, and app deployment workflows.",
      ],
    },
    {
      role: "AIML Intern",
      company: "Swecha Telangana",
      duration: "May 2024 – Aug 2024",
      location: "Remote",
      certificate: "/certificates/SWECHA INTERNSHIP CERTIFICATE.pdf",
      points: [
        "Contributed to building regional language datasets for Telugu NLP applications.",
        "Applied machine learning and NLP techniques using Python for language processing tasks.",
        "Performed data cleaning, annotation, and validation for open-source AI initiatives.",
      ],
    },
    {
      role: "Artificial Intelligence & Machine Learning Intern",
      company: "APSSDC – IBM SkillsBuild (Edunet Foundation)",
      duration: "May 2024 – Jun 2024",
      location: "Remote",
      certificate: "/certificates/APSSDC AIML INTERNSHIP.pdf",
      points: [
        "Completed a 6-week internship focused on core AI and ML concepts using IBM SkillsBuild.",
        "Built and evaluated machine learning models with supervised learning techniques.",
        "Gained practical exposure to AI workflows, datasets, and model evaluation strategies.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-24 bg-[#020617] overflow-hidden"
    >
      {/* 🌌 Neural Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.12),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(99,102,241,0.12),transparent_40%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-white">
            Work Experience
          </h2>
        </Reveal>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-[#0b1220] border border-white/10 rounded-2xl
                         p-8 hover:shadow-[0_0_45px_rgba(59,130,246,0.3)]
                         transition"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-5">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {exp.role}
                  </h3>
                  <p className="text-blue-400">{exp.company}</p>
                </div>

                <div className="mt-2 md:mt-0 text-sm text-gray-400 md:text-right">
                  <p>{exp.duration}</p>
                  <p>{exp.location}</p>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="list-disc list-inside space-y-2 text-gray-400 mb-6">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              {/* Certificate Button */}
              <a
                href={exp.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 text-sm rounded-lg
                           border border-blue-500/40 text-blue-400
                           hover:bg-blue-500/10 transition"
              >
                View Certificate →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
