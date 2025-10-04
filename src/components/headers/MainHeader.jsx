import React from 'react'

function MainHeader() {
  return (
    <>
   {/* <div className="relative min-h-[100vh] overflow-hidden flex items-center justify-center bg-[#0A0A0A]"> */}
      {/* Background Elements */}
      {/* <div className="fixed inset-0"> */}
        {/* Gradient Mesh */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-transparent to-cyan-600/20 opacity-50"></div> */}

        {/* Animated Shapes */}
        {/* <div className="absolute top-1/4 -left-20 w-[20rem] sm:w-[30rem] lg:w-[40rem] h-[20rem] sm:h-[30rem] lg:h-[40rem] bg-gradient-to-br from-violet-600/30 to-fuchsia-600/30 rounded-full blur-3xl animate-float"></div> */}
        {/* <div className="absolute bottom-1/4 -right-20 w-[20rem] sm:w-[30rem] lg:w-[40rem] h-[20rem] sm:h-[30rem] lg:h-[40rem] bg-gradient-to-br from-cyan-600/30 to-blue-600/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "-6s" }}></div> */}

        {/* Glass Layer */}
        {/* <div className="absolute inset-0 backdrop-blur-[50px] sm:backdrop-blur-[100px]"></div> */}
      {/* </div> */}

      {/* Content Container */}
      <div className=" w-full mx-auto px-4 sm:px-6  py-10 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Badge */}
            

            {/* Main Title */}
            <div className="animate-reveal" style={{ animationDelay: "0.4s" }}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                <span className="inline-block bg-gradient-to-r from-violet-300 via-cyan-300 to-violet-300 bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent">
                  Nasa earth
                </span>
                <span className="block mt-2 text-white">observation dashboard</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-white/60 max-w-xl mx-auto lg:mx-0 animate-reveal" style={{ animationDelay: "0.6s" }}>
            Explore the invisible patterns of our atmosphere. Track pollution, understand climate impacts, and empower a healthier world—all in real-time.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-reveal" style={{ animationDelay: "0.8s" }}>
              {/* Primary */}
              <button className="group relative w-full sm:w-auto px-6 py-3 min-w-[160px]">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-lg"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-lg blur-lg group-hover:opacity-60 transition-opacity duration-500"></div>
                <div className="relative flex items-center justify-center gap-2">
                  <span className="text-white font-medium">Documentation</span>
                  <svg className="w-5 h-5 text-white transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                  </svg>
                </div>
              </button>
            </div>
          </div>

          {/* Right Column - Morphing Visual */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] mt-8 lg:mt-0 animate-reveal" style={{ animationDelay: "1s" }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[280px] sm:w-[350px] lg:w-[400px] h-[280px] sm:h-[350px] lg:h-[400px] animate-morph">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-[inherit] border border-white/10 shadow-2xl"></div>

                {/* Floating Elements */}
                <div className="absolute inset-4 sm:inset-6 flex flex-col justify-between p-4 sm:p-6">
                  <div className="space-y-3 sm:space-y-4">
                    <div className="w-8 sm:w-12 h-8 sm:h-12 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 animate-pulse"></div>
                    <div className="h-1.5 sm:h-2 w-20 sm:w-24 bg-white/20 rounded-full"></div>
                    <div className="h-1.5 sm:h-2 w-24 sm:w-32 bg-white/10 rounded-full"></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="space-y-2">
                      <div className="h-6 sm:h-8 w-20 sm:w-24 rounded-lg bg-gradient-to-r from-violet-500/20 to-cyan-500/20"></div>
                      <div className="h-1.5 sm:h-2 w-12 sm:w-16 bg-white/20 rounded-full"></div>
                    </div>
                    <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-gradient-to-r from-violet-500/30 to-cyan-500/30 animate-float"></div>
                  </div>

                  <div className="space-y-2 sm:space-y-3">
                    <div className="h-1.5 sm:h-2 w-full bg-white/10 rounded-full"></div>
                    <div className="h-1.5 sm:h-2 w-3/4 bg-white/20 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    {/* </div> */}
    </>

  )
}

export default MainHeader