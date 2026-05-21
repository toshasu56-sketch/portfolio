import { motion } from "framer-motion"

function About() {
  return (
    <section
      id="about"
      className="bg-black text-white py-24 px-6"
    >

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >

        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
              Data Analyst & AI/ML Enthusiast
            </h3>

            <p className="text-gray-400 leading-8 text-lg">
              I am passionate about transforming raw data into meaningful insights and building intelligent machine learning solutions for real-world problems.
            </p>

            <p className="text-gray-400 leading-8 text-lg mt-6">
              My expertise includes Python, SQL, Data Visualization, Machine Learning, React, and Flask. I enjoy building predictive systems, analytics dashboards, and modern AI-powered applications.
            </p>

            <p className="text-gray-400 leading-8 text-lg mt-6">
              Currently focused on strengthening my skills in Data Analytics, AI Engineering, and Full Stack ML application development.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">

            <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 hover:border-cyan-400 transition">
              <h1 className="text-4xl font-bold text-cyan-400 mb-2">
                4+
              </h1>

              <p className="text-gray-400">
                AI/ML Projects
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 hover:border-cyan-400 transition">
              <h1 className="text-4xl font-bold text-cyan-400 mb-2">
                Python
              </h1>

              <p className="text-gray-400">
                Data Analysis & ML
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 hover:border-cyan-400 transition">
              <h1 className="text-4xl font-bold text-cyan-400 mb-2">
                SQL
              </h1>

              <p className="text-gray-400">
                Querying & Insights
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 hover:border-cyan-400 transition">
              <h1 className="text-4xl font-bold text-cyan-400 mb-2">
                React
              </h1>

              <p className="text-gray-400">
                Frontend Development
              </p>
            </div>

          </div>

        </div>

      </motion.div>

    </section>
  )
}

export default About