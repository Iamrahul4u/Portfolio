
import SparklesPreview from "./Sparkles";
import { TextGenerateEffect } from "../AcertinityComponents/text-generate-effect";
import { BackgroundBeams } from "../AcertinityComponents/background-beams";
import { FlipWords } from "../Magicui/flip-words";

const Hero = () => {
  return (
    <>
      <section className="flex flex-col z-[500] bg-transparent  pt-20 text-center ">
        <SparklesPreview>
          <div className="-mt-16 ">
            <h3 className="text-xl font-bold text-white  font-mono md:text-3xl">
              <FlipWords
                words={["Frontend", "Backend", "Fullstack", "Wordpress"]}
              />
              <span className="mt-4">Developer</span>

            </h3>
            <TextGenerateEffect
              className="text-white bg-transparent "
              words="I'm a Fullstack Developer. I craft seamless web designs and bring
              them to life with robust backend solutions. Let's innovate and
              create something amazing together!"
            />
          </div>
        </SparklesPreview>
        <BackgroundBeams />
      </section>
    </>
  );
};

export default Hero;
