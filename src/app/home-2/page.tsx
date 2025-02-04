import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features-section";
import { Features2 } from "@/components/features-section-2";
import { Hero2 } from "@/components/hero-2";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home2Page() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Features2 />
      <Hero2 />
      <CtaSection />
      <Footer />
    </>
  );
}
