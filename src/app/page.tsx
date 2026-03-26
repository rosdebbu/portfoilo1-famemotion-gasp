import Hero from "@/components/Hero";
import About from "@/components/About";
import RecentWork from "@/components/RecentWork";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg">
      <Hero />
      <About />
      <RecentWork />
      <ContactCTA />
      <Footer />
    </main>
  );
}
