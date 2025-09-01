'use client'
import { Link } from 'react-scroll'

export default function AboutSection() {
  return (
    <div className="relative min-h-screen lg:p-10">
      {/* Background */}
      <img
        src="/background2.jpg"
        alt="About Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/50 z-10"></div>

      <section
        id="about"
        className="relative z-20 min-h-screen py-20 px-6 max-w-screen-xl mx-auto"
      >
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E3963E] via-white to-[#E3963E] mb-3">
            About Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#E3963E] to-transparent mx-auto"></div>
        </div>
        {/* Intro Text */}
        <div className="max-w-4xl mb-2">
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug">
            At <span className="text-[#E3963E]">Shelt+Arc</span>, we specialize
            in delivering reliable, innovative, and high-quality construction
            services.
          </h2>
          <p className="text-gray-300 mt-4 text-lg">
            With a dedicated team of architects, engineers and quantity
            surveyors, we turn visions into durable, functional spaces—on time
            and on budget. From residential to commercial builds, Shelt+Arc
            stands for precision, trust, and excellence in every project.
          </p>
        </div>

        {/* Stats + Text */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Circles */}
          <div className="flex flex-wrap gap-6 justify-center md:justify-start">
            <div className="w-40 h-40 flex flex-col items-center justify-center rounded-full bg-white/10 border border-[#E3963E]/40 text-center">
              <div className="text-3xl font-bold text-[#E3963E]">10+</div>
              <div className="text-xs uppercase text-gray-300 mt-1">
                Years of Experience
              </div>
            </div>

            <div className="w-40 h-40 flex flex-col items-center justify-center rounded-full bg-[#E3963E] text-center">
              <div className="text-3xl font-bold text-black">
                98%
              </div>
              <div className="text-xs uppercase text-black mt-1">
                Client Satisfaction
              </div>
            </div>

            <div className="w-40 h-40 flex flex-col items-center justify-center rounded-full bg-black text-center">
              <div className="text-3xl font-bold text-white">100+</div>
              <div className="text-xs uppercase text-gray-300 mt-1">
                Projects Completed
              </div>
            </div>
          </div>

          {/* Text + CTA */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">
              Proven Performance, Trusted Results
            </h3>
            <p className="text-gray-300 text-lg mb-6">
              We bring experience, excellence, and client satisfaction to every
              project we take on.
            </p>
            <Link
              to="projects"
              smooth={true}
              duration={600}
              offset={-80}
              className="inline-block cursor-pointer bg-gradient-to-r from-[#E3963E] to-[#E3963E]/80 text-white px-6 py-3 rounded-lg font-semibold hover:from-[#E3963E]/90 hover:to-[#E3963E]/70 transition-all duration-300 shadow-lg"
            >
              View Our Work →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
