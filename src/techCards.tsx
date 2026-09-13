import { use, useState } from "react";
import { TechCard } from "./techCard";
import type { ITechCardProps } from "./type";
import { toast } from "react-toastify";



export interface ITechProps{
  techstackPromise: Promise<ITechCardProps[]>,
  
  
}

export function TechCards({ techstackPromise }: ITechProps) {
  const [cart, setCart] = useState<ITechCardProps[]>([]);
  const handleAddToCart = (techStack: ITechCardProps): void => {
    const newCart = [...cart, techStack];
    if (cart.includes(techStack)) {
      toast.error("Technology already in stack!");
    }
    else {
      toast.success("Added to Stack!");
   
      setCart(newCart);
    }
   
  };
  const handleRemoveStack = (techStack: ITechCardProps): void => {
    const newCart = cart.filter((item) => item.id !== techStack.id);
    setCart(newCart);
    toast("Technology removed from stack");
  };
  const handleRemoveAll = (): void => {
    setCart([]);
    toast("All technologies removed from stack");
  };
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
              <TechCard techStack={techStack} key={techStack.id} handleAddToCart={handleAddToCart} ></TechCard>
            ))}
          </div>
          <div>
              <div className="col-span-3 rounded-2xl border border-gray-100 m-8 p-5 h-mx mt-[20px] w-[300px]">
              <p className="text-[20px] font-semibold">Your Stack</p>
              {cart.length === 0 ? (
                <div className="text-[15px] text-gray-500 mt-2">
              <p className="">No technologies selected yet.</p>
              <p className=" border-1 border-dashed rounded-2xl w-[180px] h-[90px] border-gray-200 m-5 content-center p-2 "> Your stack is empty.</p>
              </div>):(
              <div>
                <h4 className="text-[15px] text-gray-400 mt-2">{cart.length} Technology Selected</h4>
                <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col gap-2">
                  {cart.map((techStack) => (
                    <div key={techStack.id} className="border rounded-2xl border-gray-100 p-2 w-[250px] mt-4">
                      <div className="flex justify-between">
                        <img src={techStack.icon} width={25} alt="" />
                        <p className="font-medium">{techStack.name}</p>
                        
                        <button onClick={() => handleRemoveStack(techStack)} className="text-gray-500 cursor-pointer hover:text-red-700 font-bold text-[15px]">✕</button>
                        </div>
                      <button className="border-1 text-[10px] border-gray-100 rounded-[4px] px-1 bg-gray-100">
                          {techStack.category}
                      </button>
                    </div>
                  ))}
        
                  </div>
                </div>
                <button onClick={handleRemoveAll} className="border-1 cursor-pointer w-full mt-[30px] p-1 text-red-400 rounded-[6px] hover:text-red-700 font-bold">Remove All</button>
              </div>)}
        </div>
          </div>
        </div>
      </div>
    </>
  );
}
