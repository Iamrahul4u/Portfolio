import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import deved from "../public/dev-ed-wave.png";
import "./styles.css";
import "./globals.css";
import ProjectsData from "../app/Components/ProjectsData";
import ContactForm from "./Components/ContactForm";
import Heading from "./Components/Heading";
import Videocard from "./Components/Videocard";
import Certficates from "./Components/Certficates";
import CertificatesData from "./Components/CertificatesData";
export default function Home() {
  return (
    <main>
      <section className='min-h-screen px-10 md:px-20 lg:px-40 text-black overflow-hidden '>
        <nav className='flex justify-center md:justify-between p-10'>
          <a
            href='/'
            className='md:text-3xl hidden  md:block text-xl font-bold font-mono '
          >
            RahulGupta
          </a>
          <ul className='flex '>
            <li className='md:ml-5 -mt-4 '>
              <a
                target='_blank'
                href='https://github.com/Iamrahul4u'
                className='relative inline-block text-sm md:text-lg group'
              >
                <span className='relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white'>
                  <span className='absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50'></span>
                  <span className='absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease'></span>
                  <span className='relative flex gap-1'>
                    <AiFillGithub />
                    Github
                  </span>
                </span>
                <span
                  className='absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0'
                  data-rounded='rounded-lg'
                ></span>
              </a>
            </li>
            <li className='ml-5 -mt-4'>
              <a
                target='_blank'
                href='https://www.linkedin.com/in/iamrahul4u'
                className='relative inline-block text-sm md:text-lg group'
              >
                <span className='relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white'>
                  <span className='absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50'></span>
                  <span className='absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease'></span>
                  <span className='relative flex gap-1'>
                    <AiFillLinkedin className='mt-0' />
                    LinkedIn
                  </span>
                </span>
                <span
                  className='absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0'
                  data-rounded='rounded-lg'
                ></span>
              </a>
            </li>
          </ul>
        </nav>
        <section className='flex flex-col p-2 text-center'>
          <div className='text md:mt-20 md:mb-20  mt-20 '>
            <div className='wrapper'>
              <div
                id='R'
                className='letter -mr-2 -ml-2 md:m-0 font-mono  md:text-8xl text-3xl'
              >
                R
              </div>
            </div>
            <div className='wrapper'>
              <div
                id='A'
                className='letter -mr-2 -ml-2 md:m-0 font-mono text-3xl  md:text-8xl'
              >
                A
              </div>
            </div>
            <div className='wrapper'>
              <div
                id='H'
                className='letter -mr-2 -ml-2 md:m-0 font-mono text-3xl  md:text-8xl'
              >
                H
              </div>
            </div>
            <div className='wrapper'>
              <div
                id='U'
                className='letter -mr-2 -ml-2 md:m-0 font-mono text-3xl  md:text-8xl'
              >
                U
              </div>
            </div>
            <div className='wrapper'>
              <div
                id='L'
                className='letter -mr-2 -ml-2 md:m-0 font-mono text-3xl  md:text-8xl'
              >
                L
              </div>
            </div>
            <div className='wrapper'>
              <div
                id='&nbsp; '
                className='letter -mr-2 -ml-2 md:m-0 font-mono text-3xl  md:text-8xl'
              >
                &nbsp;
              </div>
            </div>
            <div className='wrapper'>
              <div
                id='G'
                className='letter -mr-2 -ml-2 md:m-0 font-mono text-3xl  md:text-8xl'
              >
                G
              </div>
            </div>
            <div className='wrapper'>
              <div
                id='U'
                className='letter -mr-2 -ml-2 md:m-0 font-mono text-3xl  md:text-8xl'
              >
                U
              </div>
            </div>
            <div className='wrapper'>
              <div
                id='P'
                className='letter -mr-2 -ml-2 md:m-0 font-mono text-3xl  md:text-8xl'
              >
                P
              </div>
            </div>
            <div className='wrapper'>
              <div
                id='T'
                className='letter -mr-2 -ml-2 md:m-0 font-mono text-3xl  md:text-8xl'
              >
                T
              </div>
            </div>{" "}
            <div className='wrapper'>
              <div
                id='A'
                className='letter -mr-2 -ml-2 md:m-0 font-mono text-3xl  md:text-8xl'
              >
                A
              </div>
            </div>
          </div>
          <h3 className='text-xl  md:mt-32 mt-10  font-bold font-mono md:text-3xl'>
            FullStack Developer
          </h3>
          <p className='text-md py-5 leading-8 md:max-w-lg mx-auto'>
            I'm a Fullstack Developer.I craft seamless web designs and bring
            them to life with robust backend solutions. Let's innovate and
            create something amazing together!
          </p>
        </section>
        <div className='bg-gradient-to-b from-teal-400 to-white rounded-full h-80 w-80 relative overflow-hidden mx-auto pt-4  '>
          <Image alt={"img"} src={deved} layout='fill' objectFit='cover' />
        </div>

        {/* Project Section */}
        <div>
          <h1 className='font-mono md:text-8xl text-4xl mt-32 underline text-center text-black'>
            Projects
          </h1>
          <ProjectsData />
        </div>
        <h1 className='font-mono md:text-8xl text-4xl mt-10 underline mb-20 text-center text-black'>
          Certficates
        </h1>
        {/* <Certficates /> */}
        <CertificatesData />
        <footer>
          <ContactForm />
        </footer>
      </section>
    </main>
  );
}
