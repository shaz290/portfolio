import { Navbar } from '@/components/ui/Navbar'
import { HeroSection } from '@/components/sections/HeroSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { TechStackSection } from '@/components/sections/TechStackSection'
import { CertificationsSection } from '@/components/sections/CertificationsSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { Footer } from '@/components/ui/Footer'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <TechStackSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
