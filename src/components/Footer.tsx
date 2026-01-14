import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#020617] border-t border-white/10">
      {/* subtle neural glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.10),transparent_60%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Left */}
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="text-white font-medium">
              Lalitha Priyanka Mullu
            </span>{" "}
            · Built with React, Tailwind & 💙
          </p>

          {/* Right – Socials */}
          <div className="flex items-center gap-6">
            <a
              href="mailto:priyamullu999@gmail.com"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              <Mail className="w-5 h-5" />
            </a>

            <a
              href="https://github.com/PRIYANKA-MULLU"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/lalitha-priyanka-mullu-383778286/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
