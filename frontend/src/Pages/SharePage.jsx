import React from "react";
import DefaultLayout from "../Layouts/DefaultLayout";

const SharePage = () => {
  return (
    <>
      <div className="ml-[80px] p-5 bg-white rounded-3xl m-3 w-[75%] h-[97vh] flex flex-row">
        <div className="w-full flex item-center justify-center">
          <button>
            <img
              className="w-[130px] h-[130px]"
              src="https://www.imghost.net/images/others/features/gMycsL1lj3NBHYv_1673406666.png"
              alt="send"
            />
          </button>
          <button className="transform rotate-180">
            <img
              className="w-[130px] h-[130px]"
              src="https://www.imghost.net/images/others/features/gMycsL1lj3NBHYv_1673406666.png"
              alt="send"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default DefaultLayout(SharePage);
