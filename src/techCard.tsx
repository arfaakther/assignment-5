import type { ITechCardProps } from "./type";

export const TechCard = ({ techStack }: { techStack: ITechCardProps }) => {
  return (
    <>
      <div className="container mx-auto mt-5">
        <div className="border rounded-2xl border-gray-100 p-5">
          <div className="flex justify-between">
            <img src={techStack.icon} width={30} alt="" />
            <button className="text-purple-500 font-semibold text-[12px] border-[1px] px-2 rounded-[8px] bg-purple-200">
              {techStack.badge}
            </button>
          </div>
          <h1 className="text-[20px] font-bold py-2">{techStack.name}</h1>
          <p className="text-[14px] text-[#475569]">{techStack.description}</p>
          <div className="flex justify-between text-[14px] text-[#475569] font-medium py-2">
            <button className="border-1 border-gray-100 rounded-[4px] px-1 bg-gray-100">
              {techStack.category}
            </button>
            <p>{techStack.difficulty}</p>
            <p>
              <span className="text-amber-400">★</span> {techStack.rating}
            </p>
          </div>
          <button className="border-1 w-full text-white bg-gray-800 rounded-[8px] py-[5px] mt-1">
            Add to Stack
          </button>
        </div>
      </div>
    </>
  );
};
