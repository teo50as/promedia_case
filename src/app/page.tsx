import { Navbar } from "@/components/ui/Navbar";
import { CaseStudyHero } from "@/components/ui/CaseStudyHero";
import { ProjectDetails } from "@/components/ui/ProjectDetails";
import { FloatingGallery } from "@/components/ui/FloatingGallery";
import { TechImpact } from "@/components/ui/TechImpact";
import { Testimonials } from "@/components/ui/Testimonials";
import { Footer } from "@/components/ui/Footer";

/**
 * Case Study landing page.
 *
 * Section order is intentional for client persuasion:
 * 1. Hero - sets the emotional tone (video background)
 * 2. ProjectDetails - explains the challenge, approach, and 4-week timeline
 * 3. FloatingGallery - visual proof of work by phase
 * 4. TechImpact - each technology choice mapped to its measurable outcome
 * 5. Testimonials - client quotes that build trust
 * 6. Footer - contact CTA + About Us + Map
 */
export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <Navbar />
      <CaseStudyHero />
      <ProjectDetails />
      <FloatingGallery />
      <TechImpact />
      <Testimonials />

      <Footer />
    </main>
  );
}
