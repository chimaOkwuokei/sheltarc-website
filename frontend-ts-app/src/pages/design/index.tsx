'use client'

import { Card } from "@/components/ui/card"

export default function Design() {
  const designs = [
    {
      // category: "Residential",
      image: "/design2.png",
      // title: "Modern Residential Villa",
      // description: "Minimalist architecture with eco-friendly materials and smart home integration.",
      // location: "Bandung, Indonesia",
      // date: "Jan – Aug 2024",
    },
    {
      // category: "Residential",
      image: "/design3.jpg",
      // title: "Retail Renovation design",
      // description: "Full interior remodel to enhance space functionality and brand presence.",
      // location: "Surabaya, Indonesia",
      // date: "Mar – May 2024",
    },
    {
      // category: "Residential",
      image: "/design4.jpg",
      // title: "Retail Renovation design",
      // description: "Full interior remodel to enhance space functionality and brand presence.",
      // location: "Surabaya, Indonesia",
      // date: "Mar – May 2024",
    },
    {
      // category: "Residential",
      image: "/design5.jpg",
      // title: "Retail Renovation design",
      // description: "Full interior remodel to enhance space functionality and brand presence.",
      // location: "Surabaya, Indonesia",
      // date: "Mar – May 2024",
    },
    {
      // category: "Residential",
      image: "/design6.jpg",
      // title: "Retail Renovation design",
      // description: "Full interior remodel to enhance space functionality and brand presence.",
      // location: "Surabaya, Indonesia",
      // date: "Mar – May 2024",
    },
    {
      // category: "Residential",
      image: "/design7.jpg",
      // title: "Retail Renovation design",
      // description: "Full interior remodel to enhance space functionality and brand presence.",
      // location: "Surabaya, Indonesia",
      // date: "Mar – May 2024",
    },
    {
      // category: "Residential",
      image: "/design8.jpg",
      // title: "Retail Renovation design",
      // description: "Full interior remodel to enhance space functionality and brand presence.",
      // location: "Surabaya, Indonesia",
      // date: "Mar – May 2024",
    },
    {
      // category: "Residential",
      image: "/design9.jpg",
      // title: "Retail Renovation design",
      // description: "Full interior remodel to enhance space functionality and brand presence.",
      // location: "Surabaya, Indonesia",
      // date: "Mar – May 2024",
    },
  ]

  return (
    <div className="relative min-h-screen lg:p-10">
      {/* Background */}
      {/* <img
        src="/background3.jpg"
        alt="About Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      /> */}

      {/* Gradient Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent z-10"></div> */}

      <section id="designs" className="relative z-20 py-20 px-6 max-w-screen-xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E3963E] to-[#E3963E] mb-3">
            Architectural Designs
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#E3963E] to-transparent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {designs.map((design, index) => (
            <Card
              key={index}
              className="rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative ">
                <img
                  src={design.image}
                  // alt={design.title}
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                {/* <span className="absolute top-4 left-4 bg-white text-orange-500 text-sm font-medium px-3 py-1 rounded-full shadow"> */}
                  {/* {design.category} */}
                {/* </span> */}
              </div>

              {/* <CardContent className="p-6">
                <div className="pb-6 space-y-2 ">
                  <h3 className="text-lg font-semibold text-gray-900">{design.title}</h3>
                  <p className="text-gray-600 text-sm">{design.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>
                      {design.location} &nbsp; · &nbsp; {design.date}
                    </span>
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </div>

              </CardContent> */}
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
