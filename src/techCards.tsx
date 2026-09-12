import { use } from "react";
import { TechCard } from "./techCard";
import type { ITechCardProps } from "./type";

export function TechCards({
  techstackPromise,
}: {
  techstackPromise: Promise<ITechCardProps[]>;
}) {
  const techStacks = use(techstackPromise);
  return (
    <>
      <div className="mb-6 container mx-auto p-3">
        <div className="">
          <h1 className="text-[40px] font-extrabold leading-none">
            Explore the <span className="text-[#DB2777]">Technologies</span>
          </h1>
          <p className="text-[20px] text-[#475569] mt-2">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>
        <div className="grid grid-cols-12">
          <div className="grid grid-cols-3 col-span-9 gap-5 items-stretch">
            {techStacks.map((techStack) => (
              <TechCard techStack={techStack} key={techStack.id}></TechCard>
            ))}
          </div>
          <div className="col-span-3 rounded-2xl border border-gray-100 m-8 p-5 h-[250px] mt-[20px]">
            <p className="text-[20px] font-semibold">Your Stack</p>
            <div className="text-[15px] text-gray-500 mt-2">
              <p className="">No technologies selected yet.</p>
              <p className=" border-1 border-dashed rounded-2xl w-[180px] h-[90px] border-gray-200 m-5 content-center p-2 ">
                Your stack is empty.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
