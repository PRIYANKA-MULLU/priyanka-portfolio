import { useEffect, useState } from "react";

const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "coding", label: "Coding" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-45% 0px -45% 0px",
      }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0b0f19]/80 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo / Name */}
        <h1 className="font-bold text-lg tracking-wide text-white">
          Lalitha Priyanka
        </h1>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {sections.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`relative transition-colors duration-300 ${
                active === item.id
                  ? "text-blue-400"
                  : "text-gray-400 hover:text-blue-400"
              }`}
            >
              {item.label}

              {/* Active underline */}
              <span
                className={`absolute -bottom-1 left-0 h-[2px] bg-blue-400 rounded-full transition-all duration-300 ${
                  active === item.id ? "w-full" : "w-0"
                }`}
              />
            </a>
          ))}

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-6 px-4 py-2 rounded-lg text-sm font-semibold
                       border border-blue-400 text-blue-400
                       hover:bg-blue-400 hover:text-black transition"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
