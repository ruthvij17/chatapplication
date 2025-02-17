import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

const FooterComponent = () => {
  return (
    <>
      <div className="flex flex-col text-white h-[50%] w-[240px] m-3">
        <h1 className="text-2xl font-serif bg-gradient-to-b from-white to-black bg-clip-text text-transparent">
          Developers:
        </h1>
        <hr className="border-t-1 border-gray-400" />
        <div className="">
          <h1 className="text-gray-300 text-xl font-extrabold relative mb-2">
            <span className="relative z-10">RUTHVIJ R CHANDAN</span>
            <span className="absolute top-0 left-0 z-0 text-gray-500 opacity-50 transform translate-x-1 translate-y-1">
              RUTHVIJ R CHANDAN
            </span>
          </h1>

          <div className="flex flex-row gap-4 text-2xl mb-2">
            <div>
              <a
                href="https://www.linkedin.com/in/ruthvij-r-chandan-12675a279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </div>
            <div>
              <a href="https://github.com/ruthvij17" target="_blank">
                <FaGithub />
              </a>
            </div>
            <div>
              <a href="mailto:ruthvijrchandan2004@gmail.com" target="_blank">
                <CgMail />
              </a>
            </div>
          </div>
        </div>
        <hr className="border-t-1 border-gray-400" />
        <div className="">
          <h1 className="text-gray-300 text-xl font-extrabold relative mb-2">
            <span className="relative z-10">CHETHAN T N</span>
            <span className="absolute top-0 left-0 z-0 text-gray-500 opacity-50 transform translate-x-1 translate-y-1">
              CHETHAN T N
            </span>
          </h1>

          <div className="flex flex-row gap-4 text-2xl mb-2">
            <div>
              <a
                href="https://www.linkedin.com/in/chethan-t-n-3b0603291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </div>
            <div>
              <a href="https://github.com/ChethanTN7" target="_blank">
                <FaGithub />
              </a>
            </div>
            <div>
              <a href="https://chethantn947@gmail.com" target="_blank">
                <CgMail />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterComponent;
