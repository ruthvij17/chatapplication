import React from "react";
const ProfileComponent = () => {
  return (
    <>
      <div className="h-[50%] w-[240px] bg-white mt-3 mr-1 rounded-3xl flex flex-col overflow-hidden">
        <div
          className="h-[70%] flex items-center justify-center"
          style={{
            background: "radial-gradient(circle, #a2c2e6, #e1c6f2)", // Teal to Peachy Pink Radial Gradient
          }}
        >
          <div className="h-[65%] w-[65%] rounded-full bg-white flex items-center justify-center text-8xl font-serif text-blue-900">
            C
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-5">
          <h1 className="text-2xl bg-gradient-to-b from-blue-950 to-blue-400 bg-clip-text text-transparent font-serif font-bold">
            Chethan
          </h1>
          <p className="text-sm text bg-gradient-to-b from-blue-950 to-blue-400 bg-clip-text text-transparent ">
            ruthvijrchandan2004@gmail.com
          </p>
        </div>
      </div>
    </>
  );
};

export default ProfileComponent;
