import { motion } from "framer-motion";
import Reveal from "./Reveal";
import NeuralBackground from "./NeuralBackground";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 bg-[#020617] overflow-hidden"
    >
      {/* 🧠 LIVE NEURAL BACKGROUND — DO NOT CHANGE */}
      <NeuralBackground />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60 z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <Reveal>
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="
              bg-[#0b1220]
              border border-white/10
              rounded-2xl
              px-14 py-10
              shadow-[0_0_50px_rgba(59,130,246,0.18)]
            "
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              About Me
            </h2>

            <p className="text-gray-400 leading-relaxed text-lg">
              Hi, I’m{" "}
              <span className="text-blue-400 font-medium">
                Lalitha Priyanka Mullu
              </span>
              , an <span className="text-indigo-400">AIML undergraduate</span>{" "}
              with a strong passion for building intelligent systems and scalable
              applications that solve real-world problems.
              <br /><br />
              My interests span across{" "}
              <span className="text-blue-400">Artificial Intelligence</span>,{" "}
              <span className="text-blue-400">Machine Learning</span>,{" "}
              <span className="text-blue-400">Full-Stack Development</span>, and{" "}
              <span className="text-blue-400">Data Analytics</span>. I enjoy
              designing systems that combine strong backend logic with intuitive
              user experiences.
              <br /><br />
              I have hands-on experience working on finance platforms,
              recommendation systems, speech recognition models, dashboards,
              and data-driven applications through internships and academic
              projects with organizations like{" "}
              <span className="text-indigo-400">IIIT Hyderabad</span>,{" "}
              <span className="text-indigo-400">Swecha Telangana</span>, and{" "}
              <span className="text-indigo-400">IBM</span>.
              <br /><br />
              I am constantly exploring emerging technologies, experimenting
              with AI-driven solutions, and refining my skills to grow as an
              engineer who builds impactful, future-ready systems.
            </p>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
