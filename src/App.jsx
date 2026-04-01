import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import ProjectShowcase from "./components/ProjectShowcase.jsx";
import LogoMarquee from "./components/LogoMarquee.jsx";
import StatsStrip from "./components/StatsStrip.jsx";
import ProblemSolution from "./components/ProblemSolution.jsx";
import FeatureGrid from "./components/FeatureGrid.jsx";
import DeepDive from "./components/DeepDive.jsx";
import UseCaseTabs from "./components/UseCaseTabs.jsx";
import Testimonials from "./components/Testimonials.jsx";
import NewsletterCTA from "./components/NewsletterCTA.jsx";
import { showTestimonials } from "./siteConfig.js";
import FAQ from "./components/FAQ.jsx";
import FinalCTA from "./components/FinalCTA.jsx";
import Footer from "./components/Footer.jsx";
import CookieBanner from "./components/CookieBanner.jsx";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ProjectShowcase />
        <LogoMarquee />
        <StatsStrip />
        <ProblemSolution />
        <FeatureGrid />
        <DeepDive />
        <UseCaseTabs />
        {showTestimonials ? <Testimonials /> : null}
        <NewsletterCTA />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
