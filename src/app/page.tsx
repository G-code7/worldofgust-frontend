import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import HeroSection from '@/components/home/HeroSection'
import ServicesSection from '@/components/home/ServicesSection'
import FeaturedWork from '@/components/home/FeaturedWork'
import CTABanner from '@/components/home/CTABanner'
import { fetchFeaturedProjects } from '@/lib/wp'

export default async function HomePage() {
  // Obtenemos los proyectos con un fallback seguro
  let projects = [];
  try {
    projects = await fetchFeaturedProjects();
  } catch (err) {
    console.error("Critical error fetching projects:", err);
    // projects se queda como [] para que el sitio no explote
  }

  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--color-primary-bg)', minHeight: '100vh' }}>
        <HeroSection />
        <ServicesSection />
        {/* Pasamos los proyectos (ya sea los de WP o el array vacío) */}
        <FeaturedWork projects={projects} />
        <CTABanner />
      </main>
      <Footer />
    </>
  )
}