import { queryWP } from '@/lib/wp';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Expertise from '@/components/Expertise';
import ProjectCard from '@/components/ProjectCard';

export default async function Home() {
  const data = await queryWP(`
    query GetProjects {
      projects {
        nodes {
          title
          slug
          featuredImage { node { sourceUrl } }
          projectFields {
            technologies
            githubUrl
            liveDemo
          }
        }
      }
    }
  `);

  const projects = data?.projects?.nodes || [];

  return (
    <main className="bg-primary-bg min-h-screen text-white">
      <Navbar />
      <Hero />
      <Stats />
      
      <section id="expertise">
        <Expertise />
      </section>

      <section id="work" className="py-24 container mx-auto px-6">
        <div className="mb-16">
          <span className="text-accent-pink font-mono tracking-[0.5em] text-sm uppercase">Portfolio</span>
          <h2 className="text-5xl font-black mt-2">SELECTED WORK</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project: any) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* Aquí podrías añadir el Footer reciclado de tu HTML */}
    </main>
  );
}