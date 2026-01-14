import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-28 bg-[#020617] overflow-hidden"
    >
      {/* 🌌 Neural glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.12),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(99,102,241,0.12),transparent_40%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
            I'm always open to discussing new projects, creative ideas,
            internships, or opportunities to build intelligent systems together.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-16">
          {/* LEFT — CONTACT INFO */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4 bg-[#0b1220] border border-white/10
                              rounded-xl p-5">
                <div className="w-12 h-12 rounded-lg bg-blue-600/20 flex items-center justify-center">
                  <Mail className="text-blue-400" />
                </div>
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p className="text-gray-400 text-sm">
                    priyamullu999@gmail.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 bg-[#0b1220] border border-white/10
                              rounded-xl p-5">
                <div className="w-12 h-12 rounded-lg bg-green-600/20 flex items-center justify-center">
                  <Phone className="text-green-400" />
                </div>
                <div>
                  <p className="text-white font-medium">Phone</p>
                  <p className="text-gray-400 text-sm">
                    +91 91535338555
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 bg-[#0b1220] border border-white/10
                              rounded-xl p-5">
                <div className="w-12 h-12 rounded-lg bg-purple-600/20 flex items-center justify-center">
                  <MapPin className="text-purple-400" />
                </div>
                <div>
                  <p className="text-white font-medium">Location</p>
                  <p className="text-gray-400 text-sm">
                    Rajahmundry, Andhra Pradesh – 533103, India
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-10">
              <h4 className="text-white font-semibold mb-4">
                Connect With Me
              </h4>

              <div className="flex gap-4">
                <a
                  href="https://github.com/PRIYANKA-MULLU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-[#0b1220] border border-white/10
                             flex items-center justify-center
                             hover:bg-white/10 transition"
                >
                  <Github className="text-white" />
                </a>

                <a
                  href="https://www.linkedin.com/in/lalitha-priyanka-mullu-383778286/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-[#0b1220] border border-white/10
                             flex items-center justify-center
                             hover:bg-white/10 transition"
                >
                  <Linkedin className="text-blue-400" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT — MESSAGE FORM */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-[#0b1220] border border-white/10 rounded-2xl p-8"
          >
            <h3 className="text-xl font-semibold text-white mb-6">
              Send a Message
            </h3>

            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-black/30 border border-white/10
                           rounded-lg px-4 py-3 text-white
                           placeholder-gray-500 focus:outline-none
                           focus:border-blue-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-black/30 border border-white/10
                           rounded-lg px-4 py-3 text-white
                           placeholder-gray-500 focus:outline-none
                           focus:border-blue-500"
              />

              <textarea
                rows={5}
                placeholder="Tell me about your project or opportunity..."
                className="w-full bg-black/30 border border-white/10
                           rounded-lg px-4 py-3 text-white
                           placeholder-gray-500 focus:outline-none
                           focus:border-blue-500"
              />

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700
                           text-white py-3 rounded-lg font-medium
                           transition shadow-lg shadow-blue-500/30"
              >
                Send Message 
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
