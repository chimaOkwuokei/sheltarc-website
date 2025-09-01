"use client"

import { Card, CardContent } from "@/components/ui/card"

export default function Project() {
  const projects = [
    {
      category: "Residential",
      image: "/project1.jpg",
      title: "Residential Building",
      description:
        "A modern residential development designed with efficiency, sustainability, and contemporary aesthetics in mind.",
      location: "Delta, Nigeria",
    },
    {
      category: "Residential",
      image: "/project2.jpg",
      title: "Residential Building",
      description:
        "A luxury development featuring a duplex with elegantly furnished interiors, two spacious apartments, and a premium penthouse suite.",
      location: "Lagos, Nigeria",
    },
    {
      category: "Renovation",
      image: "/project4.png",
      title: "Residential Building",
      description:
        "A full-scale interior and exterior renovation project that modernized the residence, blending functionality with enhanced architectural appeal for long-term comfort and value.",
      location: "Abuja, Nigeria",
    },
    {
      category: "Renovation",
      image: "/project3.jpg",
      title: "Citadel Nominee Project",
      description:
        "Extensive exterior renovation focused on elevating the property’s image and strengthening its brand presence through refined design and structural upgrades.",
      location: "Lagos, Nigeria",
    },
    {
      category: "Renovation",
      image: "/project5.jpg",
      title: "NGX Project",
      description:
        "Completed a high-traffic carpet installation for the NGX Group, delivering a durable and aesthetically pleasing flooring solution suited for continuous corporate use.",
      location: "Lagos, Nigeria",
    },

  ]

  const corporateProjects = [
    {
      title: "Shell Nigeria – Freeman House, Marina Lagos",
      description:
        "Extensive rehabilitation works across multiple floors, including complete redesign of interior spaces, production of as-built drawings, and phased upgrades. Key highlights include the full restoration of the 20th floor after fire damage (completed within four weeks) and subsequent rehabilitation of floors 15, 17, 14, 13, 12, 11, 8, 7, 6, 5, and 4 following the same high-quality prototype design. The project received commendation from Shell’s Vice President of Civil Infrastructure.",
    },
    {
      title: "Nigerian Institute of Welding (NIW) – Edo State",
      description:
        "Commissioned as part of Shell’s social responsibility program, involving a full upgrade of laboratory facilities and security infrastructure. Completed within 18 months and officially commissioned by the MD of Shell.",
    },
    {
      title: "Nigerian Stock Exchange (NSE) Headquarters – Lagos",
      description:
        "Provided design and construction works across multiple floors. Delivered a state-of-the-art ground floor reception, rehabilitated the 15th and 11th floors for CSCS, redesigned and executed lift lobby upgrades across 23 floors, and renovated the ED & CEO’s offices as part of a broader rebranding effort. Successfully produced complete as-built drawings and non-destructive testing reports for the 26-storey building.",
    },
    {
      title: "HP Nigeria – Corporate Head Office, Victoria Island",
      description:
        "Interior office remodel and upgrade of the head office facilities to meet modern corporate standards.",
    },
    {
      title: "Greenwich Trust Limited – Lagos",
      description:
        "Comprehensive interior office rehabilitation, transforming a poorly finished space into a fully functional, high-quality head office environment.",
    },
    {
      title: "Novartis Pharmaceuticals – Lagos",
      description:
        "Successfully won and executed the competitive bid for a full corporate office upgrade. Delivered the complete interior package within six weeks at the highest level of finishing.",
    },
    {
      title: "Citadel Nominee – Lagos (2017)",
      description:
        "Renovation of a five-storey, long-abandoned commercial property with a total floor area of 330 sqm per floor. Commissioned for a ₦75 million total rehabilitation, including full dilapidation assessment and renovation works.",
    },
    {
      title: "Bank of Industry (BOI) – Shell Office Upgrade (2019)",
      description:
        "Commissioned to redesign and rehabilitate multiple floors (5A, 5C, 6A, 7C, 8A, 8B, 8C, 9C, 10B, 10C) within the 10-storey BOI building leased by Shell. Each floor spans approximately 300 sqm, requiring detailed redesign, dilapidation schedules, and phased renovation.",
    },
  ]

  return (
    <div className="relative min-h-screen lg:p-10">
      <section id="projects" className="relative z-20 py-20 px-6 max-w-screen-xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E3963E] to-[#E3963E] mb-5">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#E3963E] to-transparent mx-auto"></div>
        </div>

        {/* Highlighted Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <Card key={index} className="rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative bottom-6">
                <img
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-64 object-fill"
                />
                <span className="absolute top-4 left-4 bg-white text-orange-500 text-sm font-medium px-3 py-1 rounded-full shadow">
                  {project.category}
                </span>
              </div>
              <CardContent>
                <div className="pb-6 space-y-2">
                  <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{project.location}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Corporate & Institutional Projects */}
        <div className="space-y-12">
          <h3 className="text-3xl font-bold text-gray-900 text-center">Major Corporate & Institutional Projects</h3>
          <div className="mt-10 space-y-8">
            {corporateProjects.map((proj, i) => (
              <div key={i} className="bg-white shadow rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{proj.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{proj.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
