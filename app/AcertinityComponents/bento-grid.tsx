import { cn } from "../utils/cn";
import { AnimatedTooltip } from "./animated-tooltip";
import ProjectButton from "../Components/ProjectButton";
import {
  AiFillCaretRight,
  AiFillLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
import { AnimatedShinyTextDemo } from "../Components/LiveLink";
import { CardBody } from "./3d-card";
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
  id?: number;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[30rem] lg:auto-rows-[35rem]   grid-cols-1 md:grid-cols-2   gap-6 w-[70%]  mx-auto ",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icons,
  linkedIn,
  github,
  liveLink,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icons?: any;
  github: string;
  linkedIn: string;
  liveLink: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl z-50  bg-gray-50 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] h-[30rem] md:h-[35rem] transition duration-200 mx-auto p-6 border  justify-start  flex flex-col   ease-linear",
        className,
      )}
    >
      {header}
      <div className=" transition duration-200 px-4 py-2 ">
        <div className="font-sans font-bold text-[1.8rem]  text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal py-2 text-[1rem] leading-5 text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
        <div className="flex flex-row items-center justify-between mt-5 mb-10 w-full">
          <div className="flex flex-row">
            <AnimatedTooltip items={icons} />
          </div>
          {liveLink && <AnimatedShinyTextDemo link={liveLink} />}
        </div>
        <div className="flex  gap-2">
          <ProjectButton
            name={"Github"}
            href={github}
            icon={<AiOutlineGithub />}
          />
          <ProjectButton
            name={"LinkedIn"}
            href={linkedIn}
            icon={<AiFillLinkedin />}
          />
        </div>
      </div>
    </div>
    // </CardBody>
  );
};
