import {
  AboutSection,
  Header,
  ServicesSection,
  Contributor,
} from "@/components/sections";
import {
  AboutSection,
  FaqSection,
  Header,
  ServicesSection,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Header />

      <ServicesSection />
      <AboutSection />
      <Contributor />
    </>
  );
}
