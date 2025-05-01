import AnimationContainer from "@/components/global/animation-container";
import MaxWidthWrapper from "@/components/global/max-width-wrapper";
import { currentUser } from "@clerk/nextjs/server";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";

const HomePage = async () => {
  const user = await currentUser();

  return (
    <div className="scrollbar-hide size-full overflow-x-hidden">
      <MaxWidthWrapper>
        <div
          id="home"
          className="flex w-full flex-col items-center justify-center bg-gradient-to-t from-background text-center"
        >
          <AnimationContainer className="flex w-full flex-col items-center justify-center text-center">
            <button className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
              <span>
                <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
              </span>
              <span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900" />
              <span className="absolute inset-x-0 bottom-0 h-full w-full bg-gradient-to-tr from-primary/20 blur-md"></span>
              <span className="z-10 flex items-center justify-center gap-1 py-0.5 text-neutral-100 text-sm">
                ✨ Introduction Writora AI
                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </span>
            </button>
          </AnimationContainer>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default HomePage;
