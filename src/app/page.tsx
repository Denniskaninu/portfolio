import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';
import DownloadsSection from '@/components/sections/DownloadsSection';
import HeroSection from '@/components/sections/HeroSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <div className="relative z-10 bg-background">
          <AboutSection />
          <ProjectsSection />
          <DownloadsSection />
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
