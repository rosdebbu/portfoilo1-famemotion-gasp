import ContactPage from "@/components/ContactPage";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact — Debjit Das",
  description: "Let's start a project together. Get in touch for design and development work.",
};

export default function Contact() {
  return (
    <main className="min-h-screen bg-bg pt-24">
      <ContactPage />
      <Footer />
    </main>
  );
}
