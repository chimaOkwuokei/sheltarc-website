'use client'

import { Card, CardContent } from "@/components/ui/card"

export default function LeadershipSection() {
  const md = {
    name: "Fidel Okwuokei",
    role: "Managing Director, Shelt+Arc Building Services",
    image: "/md.jpg",
    location: "Lagos, Nigeria",
    bio: `Fidel Okwuokei is the Managing Director of Shelt+Arc Building Services LLC. He holds degrees in Architecture (B.Sc, M.Sc) from the University of Jos, an MBA in Business Administration, and a Master’s in Facilities Management from Heriot Watt University, UK. He is also a licensed Architect.
          Fidel began his career at Design Union Consulting LLC, where he worked for seven years, rising from Project Architect to GM of Contract Administration. He has delivered several landmark projects such as:
          - Grand Hotel, Asaba – Pioneer contractor/consultant.  
          - Terminus Market, Jos – Remodeling after the 2001 fire.  
          - NYSC Orientation Camp, Keffi – Earned a state award for post-fire restoration.  
          - Nationwide projects for Oando and FCMB.  
          - Major educational and recreational facilities including Atlantic Hall Secondary School and Funtopia Amusement Park.  
          - Shell Corporate Head Office upgrades within 6 months.  
          - ₦3 Billion projects for Notore Chemical Industries and Access Bank expansions in Zambia and Congo.  
            In 2009, he founded Shelt+Arc Building Services (RC 629186), bringing over two decades of experience in architecture, construction, and project management.`
  }


  return (
    <div className="relative min-h-screen lg:p-10">
      {/* Background */}
      <img
        src="/background3.jpg"
        alt="About Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/80 to-transparent z-10"></div>

      <section
        id="leadership"
        className="relative z-20 py-20 px-6 max-w-screen-xl mx-auto"
      >
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E3963E] to-[#E3963E]">
            Meet the Managing Director
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#E3963E] to-transparent mx-auto mt-4"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-start">
          {/* Left: Profile */}
          <div className="flex flex-col items-center text-center space-y-6">
            <img
              src={md.image}
              alt={md.name}
              className="w-82 h-135 rounded-2xl object-fit shadow-lg"
            />
            <div>
              <h3 className="text-2xl font-semibold text-white">{md.name}</h3>
              <p className="text-white">{md.role}</p>
              <p className="text-sm text-gray-300">{md.location}</p>
            </div>
          </div>

          {/* Right: Bio */}
          <Card className="bg-white/10 backdrop-blur-md rounded-2xl border-transparent shadow-lg text-white">
            <CardContent className="p-8">
              <div className="space-y-4 text-gray-200 leading-relaxed">
                {md.bio.split("\n").map((line, idx) =>
                  line.trim().startsWith("-") ? (
                    <li key={idx} className="ml-6 list-disc">{line.replace("-", "").trim()}</li>
                  ) : line.trim() === "" ? (
                    <br key={idx} />
                  ) : (
                    <p key={idx}>{line}</p>
                  )
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
