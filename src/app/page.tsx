import { Navbar } from "@/components/ui/Navbar";
import { CaseStudyHero } from "@/components/ui/CaseStudyHero";
import { ProjectDetails } from "@/components/ui/ProjectDetails";
import { ProjectTimeline } from "@/components/ui/ProjectTimeline";
import { FloatingGallery } from "@/components/ui/FloatingGallery";
import { WhyTechnologies } from "@/components/ui/WhyTechnologies";
import { ResultsImpact } from "@/components/ui/ResultsImpact";
import { Testimonials } from "@/components/ui/Testimonials";

/**
 * Case Study landing page.
 *
 * Section order is intentional for client persuasion:
 * 1. Hero - sets the emotional tone (video background)
 * 2. ProjectDetails - explains the challenge, approach, and outcome
 * 3. ProjectTimeline - 4-week build plan infographic
 * 4. FloatingGallery - visual proof of work by phase
 * 5. WhyTechnologies - justifies key technology choices
 * 6. ResultsImpact - concrete numbers that convince prospects
 * 7. Testimonials - client quotes that build trust
 * 8. Footer - contact CTA
 */
export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <Navbar />
      <CaseStudyHero />
      <ProjectDetails />
      <ProjectTimeline />
      <FloatingGallery />
      <WhyTechnologies />
      <ResultsImpact />
      <Testimonials />

      {/* Footer with CTA */}
      <footer className="relative py-20 text-center bg-neutral-950 border-t border-neutral-900 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-indigo-900/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="relative z-10">
          <p className="text-sm text-neutral-500 mb-3">
            Interested in a similar project?
          </p>
          <a
            href="mailto:info@promediait.co.uk"
            className="inline-block text-lg font-medium text-white hover:text-indigo-400 transition-colors duration-300"
          >
            info@promediait.co.uk
          </a>
          <div className="mt-10 text-xs text-neutral-600">
            &copy; {new Date().getFullYear()} ProMediaIT. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
