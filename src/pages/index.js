import { Footer } from "@/components/sections/Distributor";
import {
  AboutSection,
  Contributor,
  FaqSection,
  Header,
  ServicesSection,
} from "@/components/sections/Index";
import { Auth } from "@/components/ui";
import DashboardLayout from "@/layouts/DashboardLayout";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [currentView, setCurrentView] = useState("register");
  return (
    <>
      <Header setOpen={setOpen} />

      <ServicesSection />
      <AboutSection setOpen={setOpen} />
      <FaqSection />
      <Contributor />
      <Footer />

      <Auth open={open} setOpen={setOpen} view={currentView} />
    </>
  );
}
