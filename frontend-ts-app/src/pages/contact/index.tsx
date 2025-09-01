'use client'

export default function Contact() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/background4.jpg" // make sure background4.jpg is in your public/ folder
          alt="Project Background"
          className="w-full h-full object-cover brightness-75"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Content */}
      <section
        id="contact"
        className="relative z-20 py-20 min-h-screen flex items-center px-6 md:px-12 lg:px-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
          {/* Project Scope */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg max-w-xl">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Project
            </h2>
            <p className="italic text-3xl md:text-4xl text-[#E3963E] mt-2">
              Scope
            </p>

            <ul className="mt-6 space-y-3 text-lg text-gray-200 leading-relaxed">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#E3963E] rounded-full" /> Interior
                design
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#E3963E] rounded-full" /> Project
                Management
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#E3963E] rounded-full" /> Construction
                Works
              </li>
            </ul>

            <div className="mt-10">
              <a
                href="mailto:sheltarc.llc@gmail.com"
                className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-[#E3963E] to-[#E3963E] text-black font-semibold shadow-lg hover:brightness-110 hover:scale-105 transform transition duration-300"
              >
                Contact us today!
              </a>
            </div>
          </div>

          {/* Employment */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg max-w-xl text-gray-100">
            <h3 className="text-3xl font-bold mb-4 text-white">
              Employment
            </h3>
            <p className="text-lg leading-relaxed text-gray-200">
              To apply for a job with{" "}
              <span className="font-semibold text-[#E3963E]">Sheltarc</span>, 
              please send a cover letter together with your C.V. to the following
              email address:
            </p>
            <p className="text-lg mt-4">
              <a
                href="mailto:sheltarc.llc@gmail.com"
                className="text-[#E3963E] font-medium hover:underline hover:text-[#E3963E] transition"
              >
                sheltarc.llc@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
