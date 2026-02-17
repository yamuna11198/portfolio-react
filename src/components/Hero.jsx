

function Hero() {
  return (
    <section id="home" className="min-h-screen pt-24 bg-[#0B0F19] text-white flex items-center">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        
        {/* LEFT SIDE */}
        <div>
          <p className="text-[#00F5D4] mb-4 tracking-widest uppercase text-sm">
            Frontend Developer
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Hi, I’m <span className="text-[#7B61FF]">Yamuna</span>.
            <br />
            I build clean & scalable UI.
          </h1>

          <p className="text-gray-400 mt-6 text-lg">
            4+ years of experience in Angular. Currently mastering React and building modern UI systems.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-[#7B61FF]  px-6 py-3 rounded-xl hover:scale-105 transition hover:bg-white hover:text-[#7B61FF]">
              View Projects
            </button>
            <button className="border border-gray-600 hover:text-indigo-500  px-6 py-3 rounded-xl hover:border-[#7B61FF] transition">
              Contact
            </button>
            
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex justify-center items-center">
          <div className="absolute w-80 h-80 bg-[#7B61FF]/20 rounded-full blur-3xl"></div>
            <img className="relative w-100 h-110 object-fit rounded-full 
                   hover:scale-105 transition duration-500" src="/portfolio-react/assets/images/mypic1.png" ></img>
        </div>

      </div>
      
    </section>
    
  );
}

export default Hero;
