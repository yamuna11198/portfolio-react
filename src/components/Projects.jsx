function Projects() {

  const projects = [
    {
      title: 'FSIS',
      subtitle: 'Foreign Student Information System - A web platform for tracking foreign students enrolled in Indian institutions.',
      description: 'Built responsive, dynamic dashboards for student and institution-level data tracking. Integrated multi-step registration and verification forms with Angular Reactive Forms. Worked on role-based access and data visualization modules.',
      tech: ['Angular', 'RxJS', 'REST APIs', 'Angular Material', 'JSON'],
      image: 'src/assets/project/fsis.jpg',
      link: 'https://indianfrro.gov.in/fsis/#/sessions/signin'
    },
    {
      title: 'eFRRO Online',
      subtitle: 'An online portal providing 30+ services for foreign nationals such as Visa Extension, Exit Permit, and Long-Term Visa (LTV).',
      description: 'Designed and implemented dynamic multi-step forms with real-time validations. Managed complex workflows and service-specific validation logic using Reactive Forms. Collaborated with backend teams to handle high-volume API data securely.',
      tech: ['Angular', 'RxJS', 'REST APIs', 'Angular Material', 'JWT'],
      image: 'src/assets/project/project2.jpg',
      link: 'https://indianfrro.gov.in/efrro/home'
    }
  ];

  return (
    <section className="relative py-32 bg-[#0B0F19] text-white overflow-hidden">

      {/* Background glow */}
      <div className="absolute w-[600px] h-[600px] bg-[#7B61FF]/10 blur-[160px] -top-40 right-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        <div className="mb-24">
          <h2 className="text-5xl font-bold tracking-tight">
            Selected <span className="text-[#7B61FF]">Projects</span>
          </h2>
          <p className="text-gray-400 mt-6 max-w-2xl">
            Production-grade applications focused on scalable UI architecture, enterprise workflows, and secure API integrations.
          </p>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group grid md:grid-cols-2 gap-16 items-center"
            >
              
              {/* Image */}
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div>

                <h3 className="text-3xl font-semibold mb-4">
                  {project.title}
                </h3>

                <p className="text-[#00F5D4] text-sm tracking-wide mb-4">
                  {project.subtitle}
                </p>

                <p className="text-gray-400 leading-relaxed mb-8">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 text-sm rounded-full bg-[#111827] border border-white/10 text-gray-300 hover:border-[#7B61FF]/40 hover:text-white transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 rounded-xl border border-[#7B61FF] text-[#7B61FF] hover:bg-[#7B61FF] hover:text-white transition duration-300"
                >
                  View Project →
                </a>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;
