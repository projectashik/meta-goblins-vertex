import {
  AboutSection,
  Contributor,
  FaqSection,
  Header,
  ServicesSection,
} from "@/components/sections"

export default function Home() {
  return (
    <>
      <Header />

      <ServicesSection />
      <AboutSection />
      <FaqSection />
      <Contributor />
    </>
  )
}
