import React from "react";


const BannerBottom = () => {
  return (
    <div className="w-full bg-white border-b-[1px] py-4 border-b-gray-200 px-4">
      <div className="max-w-container mx-auto h-20 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-2 w-72 shadow-sm hover:shadow-md duration-300">
          <span className="font-bold font-titleFont w-6 text-center">
   
          </span>
          <p className="text-lightText text-base"></p>
        </div>
        <div className="flex md:w-auto items-center gap-2 w-72 shadow-sm hover:shadow-md duration-300">
          <span className="text-5xl text-center w-10 ml-1 text-orange-500">
            
          </span>
          <p className="text-xl text-lightText text-base">
             
            <span className="text-xs text-lightText text-base">
              
            </span>
          </p>
        </div>
        <div className="flex md:w-auto items-center gap-2 w-72 shadow-sm hover:shadow-md duration-300">
          <span className="text-2xl  text-center w-10">
            
          </span>
          
        </div>
      </div>
    </div>
  );
};

export default BannerBottom;
