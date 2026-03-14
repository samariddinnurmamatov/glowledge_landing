import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import CompanyIntro from "@/components/CompanyIntro";
import Products from "@/components/Products";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Audiences from "@/components/Audiences";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Blog from "@/components/Blog";
import FAQ from "@/components/FAQ";
export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <CompanyIntro />
      <Products />
      <Features />
      <HowItWorks />
      <Audiences />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Blog />
    </main>
  );
}
