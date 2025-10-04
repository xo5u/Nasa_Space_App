import React from 'react'

function AboutHeader() {
  return (
    <>
     <div className="sm:flex items-center max-w-screen-xl mx-auto">
      {/* Image Section */}
      <div className="sm:w-1/2 p-10">
        <div className="image object-center text-center">
          <img
            src="https://i.imgur.com/WbQnbas.png"
            alt="About Us"
            className="mx-auto"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="sm:w-1/2 p-5">
        <div className="text">
          <span className="text-white border-b-2 border-blue-light uppercase">
            About us
          </span>
          <h2 className="my-4 font-bold text-3xl sm:text-4xl">
            About <span className="bg-gradient-to-r capitalize from-blue-gradient via-blue-light to-blue-dark bg-clip-text text-transparent">
  the Project
</span>

          </h2>
          <p className="text-white">
          Air aware is more than just a platform — it is a vision. Born from NASA’s call to action, we use cutting-edge satellite data and artificial intelligence to turn invisible air pollution into clear, actionable knowledge. Our team believes that awareness sparks change, and change saves lives. By merging science, technology, and community, we aim to create a future where every breath is cleaner, safer, and healthier.
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default AboutHeader