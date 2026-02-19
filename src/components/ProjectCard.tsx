import Image from 'next/image';

interface ProjectProps {
  project: any;
}

export default function ProjectCard({ project }: ProjectProps) {
  return (
    <article className="group relative bg-tertiary-bg rounded-3xl overflow-hidden border border-white/5 shadow-2xl transition-all hover:border-accent-blue/30">
      <div className="relative h-[300px] md:h-[450px] w-full">
        {project.featuredImage?.node?.sourceUrl && (
          <Image 
            src={project.featuredImage.node.sourceUrl} 
            alt={project.title} 
            fill 
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-bg via-transparent to-transparent opacity-90" />
      </div>
      
      <div className="absolute bottom-0 left-0 p-8 w-full">
        <div className="flex flex-wrap gap-2 mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          {project.projectFields?.technologies?.split(',').map((tech: string) => (
            <span key={tech} className="text-[10px] font-bold bg-white/10 text-white px-3 py-1 rounded-full backdrop-blur-md border border-white/10">
              {tech.trim()}
            </span>
          ))}
        </div>
        <h4 className="text-3xl font-bold mb-4">{project.title}</h4>
        <div className="flex gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {project.projectFields?.githubUrl && (
            <a href={project.projectFields.githubUrl} target="_blank" className="text-xs font-mono text-accent-blue hover:underline tracking-widest">/ GITHUB</a>
          )}
          {project.projectFields?.liveDemo && (
            <a href={project.projectFields.liveDemo} target="_blank" className="text-xs font-mono text-accent-pink hover:underline tracking-widest">/ LIVE DEMO</a>
          )}
        </div>
      </div>
    </article>
  );
}