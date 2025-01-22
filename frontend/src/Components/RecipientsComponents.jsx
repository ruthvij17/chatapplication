import React from "react";
import SearchComponent from "./SearchComponent";

const RecipientsComponents = () => {
  return (
    <>
      <div className="w-[20%] flex flex-col overflow-hidden h-full">
        <SearchComponent />
        <div className="flex flex-col mt-2 h-full overflow-y-auto gap-1" id="scroll">
          <div className="flex flex-row  bg-[rgba(220,220,220,0.5)] rounded-lg p-1 items-center">
            <div className="w-[40px] h-[40px] bg-black rounded-lg flex items-center justify-center">
              <p className="text-white text-3xl font-bold font-serif">C</p>
            </div>
            <p className="text-black ml-1 text-xl font-serif">Chethan</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipientsComponents;
