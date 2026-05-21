import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

function Contact() {
  return (
    <section
      id="contact"
      className="bg-black text-white py-24 px-6"
    >

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >

        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Let’s Connect
        </h2>

        <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
          Interested in AI, Data Analytics, Machine Learning, or collaboration opportunities? Feel free to connect with me.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">

          <a
            href="https://github.com/"
            target="_blank"
            className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 hover:border-cyan-400 px-6 py-4 rounded-2xl transition hover:-translate-y-1"
          >
            <FaGithub className="text-2xl text-cyan-400" />
            <span>GitHub</span>
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 hover:border-cyan-400 px-6 py-4 rounded-2xl transition hover:-translate-y-1"
          >
            <FaLinkedin className="text-2xl text-cyan-400" />
            <span>LinkedIn</span>
          </a>

          <a
            href="mailto:yourmail@gmail.com"
            className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 hover:border-cyan-400 px-6 py-4 rounded-2xl transition hover:-translate-y-1"
          >
            <FaEnvelope className="text-2xl text-cyan-400" />
            <span>Email</span>
          </a>

        </div>

      </motion.div>

    </section>
  )
}

export default Contact