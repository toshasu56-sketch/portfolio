import { useState } from "react"

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-2.5 left-1/2 transform -translate-x-1/2 w-[92%] md:w-[85%] bg-white/5 backdrop-blur-xl text-white z-50 border border-white/10 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.3)]">

      <div className="flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide">
          Asutosh
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm md:text-base">

          <a href="#home">
            <li className="hover:text-cyan-400 cursor-pointer transition">
              Home
            </li>
          </a>

          <a href="#about">
            <li className="hover:text-cyan-400 cursor-pointer transition">
              About
            </li>
          </a>

          <a href="#skills">
            <li className="hover:text-cyan-400 cursor-pointer transition">
              Skills
            </li>
          </a>

          <a href="#projects">
            <li className="hover:text-cyan-400 cursor-pointer transition">
              Projects
            </li>
          </a>

          <a href="#contact">
            <li className="hover:text-cyan-400 cursor-pointer transition">
              Contact
            </li>
          </a>

        </ul>

        {/* Mobile Button */}
        <div
          className="md:hidden text-white text-3xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          ☰
        </div>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-gray-800">

          <ul className="flex flex-col items-center gap-6 py-6">

            <a href="#home" onClick={() => setOpen(false)}>Home</a>
            <a href="#about" onClick={() => setOpen(false)}>About</a>
            <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
            <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contact</a>

          </ul>

        </div>
      )}

    </nav>
  )
}

export default Navbar