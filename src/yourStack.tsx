import React, { type Dispatch, type SetStateAction } from 'react';
import type { ITechCardProps } from './type';

const componentName = ({ setCart }: { setCart: Dispatch<SetStateAction<ITechCardProps[]>> }) => {
    return <>
         <div className="col-span-3 rounded-2xl border border-gray-100 m-8 p-5 h-[250px] mt-[20px]">
            <p className="text-[20px] font-semibold">Your Stack</p>
            <div className="text-[15px] text-gray-500 mt-2">
              <p className="">No technologies selected yet.</p>
              <p className=" border-1 border-dashed rounded-2xl w-[180px] h-[90px] border-gray-200 m-5 content-center p-2 ">
                Your stack is empty.
              </p>
            </div>
        </div>
         
            </>
        
    
};

export default componentName;