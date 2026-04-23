import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import FloatingContactButton from "@/components/FloatingContactButton";
import CookieBanner from "@/components/CookieBanner";

interface LegalLayoutProps {
  title: string;
  children: ReactNode;
}

const LegalLayout = ({ title, children }: LegalLayoutProps) => (
  <>
    <Navbar />
    <main className="pt-32 md:pt-40 pb-20 bg-primary-dark min-h-screen">
      <div className="container max-w-3xl">
        <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-accent mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Volver al inicio
        </Link>
        <h1 className="font-heading font-extrabold text-3xl md:text-4xl text-white mb-8 text-shadow-soft">{title}</h1>
        <div className="prose prose-invert max-w-none text-white/90 space-y-4 leading-relaxed [&_h2]:text-white [&_h2]:text-shadow-soft [&_a]:text-accent [&_strong]:text-white">
          {children}
        </div>
      </div>
    </main>
    <Footer />
    <FloatingContactButton />
    <MobileCTA />
    <CookieBanner />
  </>
);

export default LegalLayout;
