import { motion } from "framer-motion"

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-black text-white flex items-center justify-center px-6 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500 rounded-full blur-[120px] opacity-20"></div>

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500 rounded-full blur-[120px] opacity-20"></div>
       <div className="absolute inset-0 flex justify-center items-center">
    <div className="w-[400px] h-[400px] bg-cyan-500/10 blur-3xl rounded-full"></div>
  </div>
      {/* particles */}
<div className="absolute inset-0">
  {Array.from({ length: 20 }).map((_, i) => (
    <span
      key={i}
      className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-float opacity-40"
      style={{
        left: Math.random() * 100 + "%",
        top: Math.random() * 100 + "%",
        animationDuration: 3 + Math.random() * 5 + "s"
      }}
    />
  ))}
</div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center md:text-left max-w-5xl space-y-6 mx-auto"
      >

        <p className="text-cyan-400 text-lg font-medium tracking-wide uppercase">
          Data Analyst & AI/ML Developer
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
          Turning raw data into actionable insights and intelligent AI solutions.
        </h1>

        <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl">
          Passionate about Machine Learning, Data Analytics, and building real-world intelligent systems using Python, SQL, React, and AI technologies.
        </p>

        <p className="text-cyan-400 text-lg mt-6">
          Analyzed 80K+ raw data records to uncover trends, generate insights, and build intelligent AI-driven solutions.
        </p>

        <div className="flex justify-center md:justify-start gap-4 flex-wrap pt-4">

          <a
            href="#projects"
            className="border border-cyan-500 hover:bg-cyan-500 hover:text-black px-6 py-3 rounded-xl font-semibold transition"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            download
            className="border border-cyan-500 hover:bg-cyan-500 hover:text-black px-6 py-3 rounded-xl font-semibold transition"
          >
            Download Resume
          </a>

        </div>

      </motion.div>
    </section>
  )
}

export default Hero