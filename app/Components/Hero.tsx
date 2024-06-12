import { AiFillCaretDown } from "react-icons/ai";
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
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1OiSO5dWko_NcHJkiw0ZalYQA3gASqzPX/view?usp=sharing"
              >
                <button className="inline-flex text-sm ml-2 mb-4 h-10 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-normal text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ">
                  <AiFillCaretDown />
                  Resume
                </button>
              </a>
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
