import Hero from "@/components/Hero";
import TrackRecord from "@/components/TrackRecord";
import ClientLogos from "@/components/ClientLogos";
import AccredianEdge from "@/components/AccredianEdge";
import DomainExpertise from "@/components/DomainExpertise";
import CourseSegmentation from "@/components/CourseSegmentation";
import CATFramework from "@/components/CATFramework";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrackRecord />
      <ClientLogos />
      <AccredianEdge />
      <DomainExpertise />
      <CourseSegmentation />
      <CATFramework />
      <FAQ />
      <Testimonials />
      <ContactForm />
    </main>
  );
}
