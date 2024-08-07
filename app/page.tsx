// import "./styles.tsx";
import "./globals.css";
import ContactForm from "./Components/ContactForm";
import CertificatesData from "./Components/CertificatesData";
import Hero from "./Components/Hero";
import { WavyBackground } from "./AcertinityComponents/wavy-background";
import { DockDemo } from "./Components/Dock";
import LetterPullup from "./Magicui/letter-pullup";
import ProjectBentoGrid from "./Components/NewProject";
import dynamic from "next/dynamic";
const GlobeDemo = dynamic(() => import("./AcertinityComponents/GlobeDemo"));
const TechStack = dynamic(() => import("./Components/TechStack"));

export default function Home() {
  return (
    <main className="bg-black overflow-x-hidden ">
      <div className="relative overflow-visible ">
        {/* <div className="-top-56  absolute -right-56 md:-right-72 z-[5000] mx-auto w-[50%]  h-[100%] p-12 bg-transparent "> */}
        <div className="  absolute  -top-72 -right-36 md:-right-96 md:-top-56   z-[50]  w-[100%]  h-[100%] p-12 bg-transparent ">
{/*           <GlobeDemo /> */}
        </div>
        <Hero />
        <DockDemo />
      </div>
      <div className="relative gap-0 -mt-24 md:mt-0">
        <section className="   overflow-hidden ">
          {/* Project Section */}

          <div className="md:mb-24 z-0">
            <WavyBackground className="max-w-4xl mx-auto bg-transparent ">
              <LetterPullup
                words="Project Portfolio"
                className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center"
              />
              <p className="text-base hidden md:block md:text-sm mt-4 text-white font-normal inter-var text-center">
                (Hover over cards to see project videos)
              </p>
              <p className="text-base md:hidden mt-4 text-white font-normal inter-var text-center">
                (Click on cards to see project videos)
              </p>
            </WavyBackground>
            <ProjectBentoGrid />
          </div>
          <div className="md:h-[40rem] h-[30rem] md:my-44 my-10 w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex flex-col items-center ">
            <LetterPullup
              words="Tech Stack"
              className="text-2xl mb:20 md:text-4xl lg:text-7xl text-white font-bold inter-var text-center"
            />
            <TechStack />
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          </div>
          <h1 className="font-mono md:text-8xl text-4xl mt-10 underline mb-20 text-center text-white">
            Certficates
          </h1>

          {/* <Certficates /> */}
          <CertificatesData />
          <footer>
            <ContactForm />
          </footer>
        </section>
      </div>
    </main>
  );
}
