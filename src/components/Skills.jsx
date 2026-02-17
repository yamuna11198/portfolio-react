function Skills() {
  const skillCategories = [
    {
      name: 'Frontend',
      skills: ['Angular', 'React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Flutter']
    },
    {
      name: 'State Management',
      skills: ['RxJS', 'Angular Signals', 'NgRx', 'React Hooks', 'Context API']
    },
    {
      name: 'Backend & Database',
      skills: ['REST API', 'SQL', 'Spring', 'Node.js']
    },
    {
      name: 'Tools & Platforms',
      skills: ['VS Code', 'Postman', 'Eclipse', 'GitLab', 'GitHub', 'Chrome DevTools', 'Devtoys']
    }
  ];

  return (
 <section id="skills" className="relative py-32 bg-[#0B0F19] text-white overflow-hidden">

      {/* Background Light Layer */}
      <div className="absolute w-[600px] h-[600px] bg-[#7B61FF]/15 blur-[160px] -top-40 -left-40"></div>
      <div className="absolute w-[500px] h-[500px] bg-[#00F5D4]/10 blur-[150px] bottom-0 right-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="mb-24">
          <h2 className="text-5xl font-bold tracking-tight">
            Technical <span className="text-[#7B61FF]">Capability</span>
          </h2>
          <p className="text-gray-400 mt-6 max-w-2xl leading-relaxed">
            A structured approach to frontend architecture, state design, and scalable UI systems built over 4+ years of production experience.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 transition-all duration-500 hover:-translate-y-2 hover:border-[#7B61FF]/40"
            >
              {/* Accent Line */}
              <div className="absolute left-0 top-10 h-12 w-1 bg-[#7B61FF] rounded-r-full opacity-70 group-hover:h-20 transition-all duration-500"></div>

              <h3 className="text-2xl font-semibold mb-8 pl-4 tracking-wide text-gray-200 group-hover:text-white transition">
                {category.name}
              </h3>

              <div className="flex flex-wrap gap-4 pl-4">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-5 py-2 text-sm tracking-wide rounded-full 
                    bg-[#111827] border border-white/10 
                    text-gray-300 
                    hover:border-[#7B61FF]/40 hover:text-white 
                    transition duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;
