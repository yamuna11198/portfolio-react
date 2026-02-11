function Skills() {
  const skills = [
    "React",
    "Angular",
    "TailwindCSS",
    "JavaScript",
    "TypeScript",
    "Git",
  ];

  return (
    <section className="py-24 bg-[#0B0F19] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16">
          My <span className="text-[#7B61FF]">Skills</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-[#111827] p-8 rounded-2xl hover:-translate-y-2 transition duration-300 border border-transparent hover:border-[#7B61FF]"
            >
              <h3 className="text-xl font-semibold">{skill}</h3>
              <p className="text-gray-400 mt-3 text-sm">
                Experienced in building scalable and reusable components.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Skills;