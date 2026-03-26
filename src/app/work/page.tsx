import Work from "@/components/Work";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Work — Debjit Das",
  description: "Creating next level digital products. View my portfolio of design and development projects.",
};

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-bg pt-24">
      <Work />
      <Footer />
    </main>
  );
}
