import { motion } from "framer-motion"

function Skills() {

  const skills = [
    "Python",
    "SQL",
    "Machine Learning",
    "Data Analysis",
    "React",
    "Flask",
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "CatBoost",
    "Power BI",
    "Data Visualization"
  ]

  return (
    <section
      id="skills"
      className="bg-black text-white py-24 px-6"
    >

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 hover:border-cyan-400 rounded-2xl p-6 text-center transition duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(34,211,238,0.3)]"
            >
              <h3 className="text-lg md:text-xl font-semibold text-cyan-400">
                {skill}
              </h3>
            </div>
          ))}

        </div>

      </motion.div>

    </section>
  )
}

export default Skills