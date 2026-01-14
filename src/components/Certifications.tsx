import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { Award, Star } from "lucide-react";

export default function Certifications() {
  const certifications = [
    {
      title: "Foundations of Modern Machine Learning",
      provider: "IIIT Hyderabad",
      file: "/certificates/FMML CERTIFICATE.jpg",
      featured: true,
    },
    {
      title: "Google Generative AI",
      provider: "Coursera (Google)",
      file: "/certificates/Coursera GEN AI CERTIFICATION.pdf",
      featured: true,
    },
    {
      title: "Google Data Analytics",
      provider: "Coursera",
      file: "/certificates/Google data analytics course certification.pdf",
      featured: false,
    },
    {
      title: "Google Cloud Certification",
      provider: "Coursera",
      file: "/certificates/Coursera GOOGLE CLOUD.pdf",
      featured: false,
    },
    {
      title: "Large Language Models",
      provider: "Coursera (Google)",
      file: "/certificates/Coursera LLM MODELS CERTIFICATIONS.pdf",
      featured: true,
    },
    {
      title: "Responsible AI",
      provider: "Coursera",
      file: "/certificates/Coursera RESPONSIBLE AI.pdf",
      featured: false,
    },
    {
      title: "Meta Backend Development",
      provider: "Meta (Coursera)",
      file: "/certificates/meta backend dev certi 1.pdf",
      featured: true,
    },
    {
      title: "Data Analytics",
      provider: "TATA",
      file: "/certificates/tata certification data analytics.pdf",
      featured: false,
    },
    {
      title: "Data Analytics & Visualization",
      provider: "Accenture",
      file: "/certificates/accenture certificate.pdf",
      featured: false,
    },
    {
      title: "Internship Common Aptitude Test",
      provider: "ICAT",
      file: "/certificates/Priya Mullu - Participation Certificate.pdf",
      featured: false,
    },
  ];

  return (
    <section
      id="certifications"
      className="relative py-24 bg-[#020617] overflow-hidden"
    >
      {/* Neural glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.12),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(99,102,241,0.12),transparent_40%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Certifications
            </h2>

            {/* Animated Count */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-4 text-blue-400 text-lg font-medium"
            >
              {certifications.length}+ Professional Certifications
            </motion.p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.file}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.07 }}
              viewport={{ once: true }}
              className={`group relative rounded-2xl p-6 border
                bg-[#0b1220] transition
                ${
                  cert.featured
                    ? "border-blue-500/40 shadow-[0_0_45px_rgba(59,130,246,0.45)]"
                    : "border-white/10 hover:border-blue-500/30"
                }
                hover:shadow-[0_0_40px_rgba(59,130,246,0.35)]
              `}
            >
              {/* Featured badge */}
              {cert.featured && (
                <div className="absolute top-4 right-4 flex items-center gap-1
                                text-xs px-2 py-1 rounded-full
                                bg-blue-500/20 text-blue-400">
                  <Star size={12} />
                  Featured
                </div>
              )}

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-blue-600/20
                              flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-blue-400" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-2">
                {cert.title}
              </h3>

              {/* Provider */}
              <span className="inline-block text-sm px-3 py-1 rounded-full
                               bg-blue-500/10 text-blue-400">
                {cert.provider}
              </span>

              {/* Hover hint */}
              <p className="mt-4 text-sm text-gray-500
                            group-hover:text-blue-400 transition">
                Tap to view certificate →
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
