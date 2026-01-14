import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import Reveal from "./Reveal";

export default function Education() {
  const education = [
    {
      degree:
        "Bachelor of Technology in CSE – Artificial Intelligence and Machine Learning",
      institute: "Kakinada Institute of Engineering and Technology",
      location: "Kakinada, Andhra Pradesh, India",
      duration: "Oct 2022 – April 2026",
      status: "Pursuing",
    },
    {
      degree: "Intermediate in M.P.C",
      institute: "Aditya Junior College",
      location: "Rajamahendravaram, India",
      duration: "June 2020 – May 2022",
      status: "Completed",
    },
    {
      degree: "10th (SSC)",
      institute: "Z. P. High School, Pandalapaka",
      location: "Pandalapaka, India",
      duration: "June 2019 – May 2020",
      status: "Completed",
    },
  ];

  return (
    <section
      id="education"
      className="relative py-24 bg-[#020617] overflow-hidden"
    >
      {/* 🌌 SAME NEURAL GLOW BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.12),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(99,102,241,0.12),transparent_40%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-white">
            Education
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-10">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-[#0b1220] border border-white/10
                         rounded-2xl p-8
                         hover:shadow-[0_0_40px_rgba(59,130,246,0.25)]
                         transition"
            >
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center
                              rounded-xl bg-blue-600/20 mb-6">
                <GraduationCap className="text-blue-400 w-7 h-7" />
              </div>

              {/* Degree */}
              <h3 className="text-lg font-semibold text-white mb-2">
                {edu.degree}
              </h3>

              {/* Institute */}
              <p className="text-gray-400 mb-4">
                {edu.institute}
              </p>

              {/* Location */}
              <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                <MapPin size={14} />
                <span>{edu.location}</span>
              </div>

              {/* Duration */}
              <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                <Calendar size={14} />
                <span>{edu.duration}</span>
              </div>

              {/* Status */}
              <span
                className={`inline-block px-4 py-1 text-xs rounded-full
                  ${
                    edu.status === "Pursuing"
                      ? "bg-blue-500/20 text-blue-400"
                      : "bg-green-500/20 text-green-400"
                  }`}
              >
                {edu.status}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
