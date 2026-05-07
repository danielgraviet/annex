import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Spaces from "@/components/Spaces";
import WhyAnnex from "@/components/WhyAnnex";
import Hosts from "@/components/Hosts";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problem />
      <Spaces />
      <WhyAnnex />
      <Hosts />
      <Waitlist />
      <Footer />
    </main>
  );
}
