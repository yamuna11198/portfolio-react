function Hero() {
  return (
    <section className="min-h-screen bg-[#0B0F19] text-white flex items-center">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
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
            <button className="bg-[#7B61FF] text-indigo-500 px-6 py-3 rounded-xl hover:scale-105 transition">
              View Projects
            </button>
            <button className="border border-gray-600 text-indigo-500 px-6 py-3 rounded-xl hover:border-[#7B61FF] transition">
              Contact
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative">
          <div className="w-72 h-72 bg-[#7B61FF]/20 rounded-full blur-3xl absolute -top-10 -left-10"></div>
          <div className="bg-[#111827] p-8 rounded-2xl shadow-2xl relative">
            <p className="text-gray-400 text-sm mb-2">Currently Working On</p>
            <h3 className="text-xl font-semibold text-[#00F5D4]">
              React Portfolio & Advanced UI Systems
            </h3>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
