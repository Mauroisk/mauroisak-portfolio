import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Tech from "@/components/Tech";
import Experience from "@/components/Experience";
import PetProjects from "@/components/PetProjects";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Tech />
        <Experience />
        <PetProjects />
        <Education />
      </main>
      <Footer />
    </>
  );
}
