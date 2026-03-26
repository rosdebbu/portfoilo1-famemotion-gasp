import AboutPage from "@/components/AboutPage";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About — Debjit Das",
  description: "Freelance Designer & Developer based in India. Passionate about design, code & interaction.",
};

export default function About() {
  return (
    <main className="min-h-screen bg-bg pt-24">
      <AboutPage />
      <Footer />
    </main>
  );
}
