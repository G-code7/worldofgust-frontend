export default function Stats() {
  const stats = [
    { number: '5+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Completed' },
    { number: '30+', label: 'Happy Clients' },
    { number: '24/7', label: 'Technical Support' },
  ];

  return (
    <section className="py-20 bg-secondary-bg/50 backdrop-blur-sm border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:text-accent-blue transition-colors">
                {stat.number}
              </div>
              <div className="text-accent-purple text-xs uppercase tracking-[0.2em] font-mono font-bold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}