export default function Expertise() {
  const skills = [
    { title: 'Frontend Dev', desc: 'React, Next.js, Tailwind', icon: '🚀' },
    { title: 'Backend Dev', desc: 'Python, Django, Node.js', icon: '⚙️' },
    { title: 'Headless CMS', desc: 'WordPress, GraphQL, APIs', icon: '🔌' },
  ];

  return (
    <section className="py-24 container mx-auto px-6">
      <div className="flex flex-col mb-16">
        <span className="text-accent-pink font-mono tracking-widest uppercase text-sm mb-2">Capabilities</span>
        <h2 className="text-4xl font-bold">MY EXPERTISE</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {skills.map((skill, i) => (
          <div key={i} className="p-8 rounded-3xl bg-tertiary-bg border border-white/5 hover:border-accent-purple/50 transition-all">
            <div className="text-4xl mb-6">{skill.icon}</div>
            <h3 className="text-xl font-bold mb-4">{skill.title}</h3>
            <p className="text-gray-400 leading-relaxed">{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}