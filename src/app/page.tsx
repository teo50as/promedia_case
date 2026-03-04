import { Navbar } from "@/components/ui/Navbar";
import { CaseStudyHero } from "@/components/ui/CaseStudyHero";
import { ProjectDetails } from "@/components/ui/ProjectDetails";
import { FloatingGallery } from "@/components/ui/FloatingGallery";
import { WhyTechnologies } from "@/components/ui/WhyTechnologies";
import { ResultsImpact } from "@/components/ui/ResultsImpact";
import { Testimonials } from "@/components/ui/Testimonials";
import { Footer } from "@/components/ui/Footer";

/**
 * Case Study landing page.
 *
 * Section order is intentional for client persuasion:
 * 1. Hero - sets the emotional tone (video background)
 * 2. ProjectDetails - explains the challenge, approach, outcome, and 4-week timeline
 * 3. FloatingGallery - visual proof of work by phase
 * 4. WhyTechnologies - justifies key technology choices
 * 5. ResultsImpact - concrete numbers that convince prospects
 * 6. Testimonials - client quotes that build trust
 * 7. AboutUs - intro to the team
 * 8. Footer - contact CTA
 */
export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <Navbar />
      <CaseStudyHero />
      <ProjectDetails />
      <FloatingGallery />
      <WhyTechnologies />
      <ResultsImpact />
      <Testimonials />

      <Footer />
    </main>
  );
}
