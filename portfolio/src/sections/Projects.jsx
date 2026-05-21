import { motion } from "framer-motion"

function Projects() {

  const projects = [
    {
      title: "Student Placement Prediction System",
      description:
        "Machine learning system that predicts student placement chances using academic performance, internships, projects, and skill-based features.",
      tech: "Python • React • Flask • CatBoost"
    },

    {
      title: "Brain Stroke Detection",
      description:
        "AI-based healthcare prediction system using classification algorithms to detect potential brain stroke cases from medical datasets.",
      tech: "Python • Scikit-learn • Pandas"
    },

    {
      title: "Insurance RAG Chatbot",
      description:
        "Retrieval-Augmented Generation chatbot capable of answering insurance-related queries using intelligent document retrieval and LLM responses.",
      tech: "Python • LangChain • RAG • LLM"
    },

    {
      title: "Face Detection & Recognition System",
      description:
        "Computer vision application capable of detecting faces and identifying individuals while displaying related information dynamically.",
      tech: "OpenCV • Python • Face Recognition"
    }
  ]

  return (
    <section
      id="projects"
      className="bg-black text-white py-24 px-6"
    >

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-cyan-400 transition duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]"
            >

              <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 leading-7 mb-6">
                {project.description}
              </p>

              <p className="text-sm text-gray-500 mb-6">
                {project.tech}
              </p>

              <div className="flex gap-4">

                <button className="bg-cyan-500 hover:bg-cyan-400 text-black px-5 py-2 rounded-xl font-semibold transition">
                  GitHub
                </button>

                <button className="border border-cyan-500 hover:bg-cyan-500 hover:text-black px-5 py-2 rounded-xl font-semibold transition">
                  Live Demo
                </button>

              </div>

            </div>
          ))}

        </div>

      </motion.div>

    </section>
  )
}

export default Projects