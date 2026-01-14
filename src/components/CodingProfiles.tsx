import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { Code2, Terminal, Brain, Trophy } from "lucide-react";

export default function CodingProfiles() {
  const profiles = [
    {
      name: "LeetCode",
      link: "https://leetcode.com/u/Priyanka_mullu/",
      description: "Data Structures & Algorithms practice",
      icon: <Code2 className="w-6 h-6 text-yellow-400" />,
    },
    {
      name: "CodeChef",
      link: "https://www.codechef.com/users/pledge_wish_94",
      description: "Competitive programming challenges",
      icon: <Trophy className="w-6 h-6 text-orange-400" />,
    },
    {
      name: "GeeksforGeeks",
      link: "https://www.geeksforgeeks.org/profile/priyamubzo7",
      description: "DSA, CS fundamentals & problem solving",
      icon: <Brain className="w-6 h-6 text-green-400" />,
    },
    {
      name: "HackerRank",
      link: "https://www.hackerrank.com/profile/226Q1A4202",
      description: "Coding tests & skill certifications",
      icon: <Terminal className="w-6 h-6 text-emerald-400" />,
    },
  ];

  return (
    <section
      id="coding"
      className="relative py-24 bg-[#020617] overflow-hidden"
    >
      {/* 🌌 Neural glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(59,130,246,0.12),transparent_45%),radial-gradient(circle_at_75%_80%,rgba(99,102,241,0.12),transparent_45%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-white">
            Coding Profiles
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-10">
          {profiles.map((profile, index) => (
            <motion.a
              key={index}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="
                group bg-[#0b1220]
                border border-white/10
                rounded-2xl
                p-8
                hover:shadow-[0_0_40px_rgba(59,130,246,0.25)]
                hover:border-blue-500/40
                transition
              "
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-white/5
                              flex items-center justify-center mb-4">
                {profile.icon}
              </div>

              {/* Name */}
              <h3 className="text-xl font-semibold text-white mb-2
                             group-hover:text-blue-400 transition">
                {profile.name}
              </h3>

              {/* Description */}
              <p className="text-gray-400 mb-4">
                {profile.description}
              </p>

              <span className="text-blue-400 font-medium">
                View Profile →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
