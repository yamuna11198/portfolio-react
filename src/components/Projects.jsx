function Projects() {
  return (
    <section className="py-24 bg-[#0B0F19] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16">
          Featured <span className="text-[#00F5D4]">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-[#111827] rounded-2xl overflow-hidden shadow-xl hover:scale-[1.02] transition">
            <div className="h-48 bg-gradient-to-r from-[#7B61FF] to-[#00F5D4]"></div>
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-3">
                Bill Splitting App
              </h3>
              <p className="text-gray-400 mb-4">
                Dynamic calculation app built using React hooks and reusable components.
              </p>
              <button className="text-[#7B61FF] hover:underline">
                View Project →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Projects;