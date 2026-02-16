function Experience() {
  const experiences = [
    {
      company: 'National Informatics Centre (via SILVERTOUCH TECHNOLOGIES LTD)',
      start: 'Oct 2022',
      end: 'Current',
      points: [
        'Implemented authentication & authorization using JSON Web Tokens.',
        'Integrated RESTful APIs and collaborated with backend developers.',
        'Built UI with Angular Material (tables, forms, interactive features).',
        'Debugged client-side issues using Chrome Angular DevTools and VS Code debugger.',
        'Implemented routing guards (AuthGuard, RoleGuard) and lazy-loaded modules.',
        'Used RxJS for reactive flows and built reusable components across projects.'
      ]
    },
    {
      company: 'National Informatics Centre (via AKAL INFORMATION SYSTEMS)',
      start: 'Oct 2021',
      end: 'Sept 2022',
      points: [
        'Developed and maintained Angular applications for government projects.',
        'Participated in code review meetings; provided fixes and improvements.',
        'Implemented dynamic multi-step forms with Angular Material stepper.',
        'Migrated legacy Angular code to newer versions.'
      ]
    },
    {
      company: 'National Informatics Centre, Govt of India',
      start: 'Jan 2021',
      end: 'April 2021',
      points: [
        'Worked on eGov Mobile Apps during MCA final year project.',
        'Contributed to backend development using Spring Boot, API integration, and module enhancements.'
      ]
    }
  ];

  return (
    <section className="relative py-32 bg-[#0B0F19] text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-[#7B61FF]/10 blur-[160px] -top-32 left-0"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">

        {/* Section Header */}
        <div className="mb-24">
          <h2 className="text-5xl font-bold tracking-tight">
            Professional <span className="text-[#7B61FF]">Experience</span>
          </h2>
          <p className="text-gray-400 mt-6 max-w-2xl">
            4+ years building scalable, secure government-grade applications and enterprise UI systems.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-white/10 ml-6">

          {experiences.map((exp, index) => (
            <div key={index} className="mb-16 ml-10 relative group">

              {/* Timeline Dot */}
              <div className="absolute -left-[30px] top-2 w-5 h-5 rounded-full bg-[#7B61FF] border-4 border-[#0B0F19] group-hover:scale-125 transition duration-300"></div>

              {/* Card */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 transition-all duration-500 hover:border-[#7B61FF]/40 hover:-translate-y-1">

                <div className="flex justify-between flex-wrap gap-4 mb-6">
                  <h3 className="text-2xl font-semibold">
                    {exp.company}
                  </h3>

                  <span className="text-sm text-gray-400">
                    {exp.start} — {exp.end}
                  </span>
                </div>

                <ul className="space-y-3 text-gray-400">
                  {exp.points.map((point, i) => (
                    <li key={i} className="leading-relaxed">
                      • {point}
                    </li>
                  ))}
                </ul>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;
