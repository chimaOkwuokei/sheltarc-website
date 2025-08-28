'use client'

export default function AboutSection() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <img
        src="/background2.jpg"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      {/* Enhanced Gradient Overlay with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/60 to-black/40 z-10"></div>

      <section id="about" className="relative z-20 min-h-screen py-22 px-6 max-w-screen-xl mx-auto">
        {/* Section Header - Centered and Prominent */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E3963E] via-white to-[#E3963E] mb-3">
            About
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#E3963E] to-transparent mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Profile Card */}
          <div className="space-y-6">
            {/* Image with overlay info */}
            <div className="relative group">
              <img
                src="/fidel-profile.jpg"
                alt="Fidel Okwuokei - Managing Director"
                className="rounded-2xl shadow-2xl object-cover w-full h-[500px] transition-transform duration-300 group-hover:scale-[1.02]"
              />
              {/* Overlay with name and title */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 rounded-b-2xl">
                <h3 className="text-2xl font-bold text-white">Fidel Okwuokei</h3>
                <p className="text-[#E3963E] font-medium">Managing Director</p>
                <p className="text-gray-300 text-md mt-1">Shelt+Arc Building Services LLC</p>
              </div>
            </div>

            {/* Quick Stats Card */}
            <div className="bg-black/40 backdrop-blur-md rounded-xl p-6 border border-[#E3963E]/20">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#E3963E]">20+</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#E3963E]">₦3B+</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">Projects Managed</div>
                </div>
              </div>
            </div>

            {/* Credentials Badge */}
            <div className="bg-gradient-to-r from-[#E3963E]/10 to-transparent rounded-lg p-4 border-l-4 border-[#E3963E]">
              <h4 className="text-md font-semibold text-[#E3963E] mb-2">Credentials</h4>
              <ul className="text-md text-gray-300 space-y-1">
                <li>• B.Sc Architecture - University of Jos</li>
                <li>• MBA - Heriot-Watt University, UK</li>
                <li>• M.Sc Facilities Management - Heriot-Watt</li>
                <li>• Licensed Architect | RC: 629186</li>
              </ul>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            {/* Bio Summary - Highlighted */}
            <div className="bg-gradient-to-r from-[#E3963E]/5 to-transparent rounded-xl p-6 border border-[#E3963E]/10">
              <p className="text-lg text-white leading-relaxed">
                Specializing in <span className="text-[#E3963E] font-semibold">architectural design</span>, 
                <span className="text-[#E3963E] font-semibold"> project management</span>, and 
                <span className="text-[#E3963E] font-semibold"> construction excellence</span>, 
                delivering buildings that are structurally sound, culturally significant, and globally relevant.
              </p>
            </div>

            {/* Career Journey - Timeline Style */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                <span className="w-8 h-[2px] bg-[#E3963E]"></span>
                Career Journey
              </h3>
              
              <div className="space-y-3 border-l-2 border-[#E3963E]/30 pl-6 ml-2">
                <div className="relative">
                  <div className="absolute -left-[26px] w-3 h-3 bg-[#E3963E] rounded-full"></div>
                  <div className="text-md text-[#E3963E] font-semibold">2009 - Present</div>
                  <p className="text-gray-300 text-md">Founded <strong className="text-white">Shelt+Arc Building Services</strong>, leading transformative projects across Nigeria and Africa</p>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-[26px] w-3 h-3 bg-[#E3963E]/60 rounded-full"></div>
                  <div className="text-md text-[#E3963E] font-semibold">2002 - 2009</div>
                  <p className="text-gray-300 text-md">Rose from Project Architect to <strong className="text-white">General Manager</strong> at Design Union Consulting LLC</p>
                </div>
              </div>
            </div>

            {/* Notable Projects - Card Grid */}
            <div>
              <h3 className="text-xl font-semibold text-white flex items-center gap-2 mb-4">
                <span className="w-8 h-[2px] bg-[#E3963E]"></span>
                Landmark Projects
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-black/30 backdrop-blur-md rounded-lg p-3 border border-[#E3963E]/10 hover:border-[#E3963E]/30 transition-colors">
                  
                  <h4 className="text-white text-md font-semibold">Shell HQ</h4>
                  <p className="text-gray-400 text-sm">He managed the construction process of Shell’s Corporate Head Office, Lounge/Conference Room upgrade and got them up and running within six months</p>
                </div>
                
                <div className="bg-black/30 backdrop-blur-md rounded-lg p-3 border border-[#E3963E]/10 hover:border-[#E3963E]/30 transition-colors">
                  
                  <h4 className="text-white text-md font-semibold">Notore Chemical</h4>
                  <p className="text-gray-400 text-sm">He coordinated the construction process of Notore Chemical Industries in Onne Port Harcourt.</p>
                </div>
                
                <div className="bg-black/30 backdrop-blur-md rounded-lg p-3 border border-[#E3963E]/10 hover:border-[#E3963E]/30 transition-colors">
                  
                  <h4 className="text-white text-md font-semibold">Funtopia Park</h4>
                  <p className="text-gray-400 text-sm">Amusement Complex</p>
                </div>
                
                <div className="bg-black/30 backdrop-blur-md rounded-lg p-3 border border-[#E3963E]/10 hover:border-[#E3963E]/30 transition-colors">
                  
                  <h4 className="text-white text-md font-semibold">Atlantic Hall</h4>
                  <p className="text-gray-400 text-sm">Rescued After 12 Years</p>
                </div>
              </div>
            </div>

            {/* Achievement Highlight */}
            <div className="bg-gradient-to-r from-[#E3963E]/20 to-[#E3963E]/5 rounded-xl p-4 border border-[#E3963E]/30">
              <div className="flex items-start gap-3">
                <div>
                  <h4 className="text-white font-semibold text-md mb-1">Key Achievement</h4>
                  <p className="text-gray-300 text-md">
                    Led international expansion projects across <span className="text-[#E3963E]">Zambia</span> and <span className="text-[#E3963E]">Congo</span>, 
                    managing nationwide FCMB branch rollouts and receiving NYSC state award for public infrastructure development.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA or Contact
            <div className="pt-4">
              <button className="bg-gradient-to-r from-[#E3963E] to-[#E3963E]/80 text-white px-6 py-3 rounded-lg font-semibold hover:from-[#E3963E]/90 hover:to-[#E3963E]/70 transition-all duration-300 shadow-lg">
                View Full Portfolio →
              </button>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  )
}