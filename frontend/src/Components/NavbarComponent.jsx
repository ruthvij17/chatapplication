import React from "react";
import { IoChatboxEllipsesSharp, IoShareSocialOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import MyImage from "../Images/chatLOGO-removebg-preview.png";

const NavbarComponent = () => {
  return (
    <>
      <div className="absolute left-0 h-screen w-[100px] flex items-center flex-col p-2">
        <div className="rounded-full w-[70px] h-[70px]">
          <img src={MyImage} alt="Logo" className="" />
        </div>

        <div class="text-2xl font-bold  flex flex-col items-center">
          <span className="bg-gradient-to-b from-white to-black bg-clip-text text-transparent">
            C
          </span>
          <span className="bg-gradient-to-b from-white to-black bg-clip-text text-transparent">
            H
          </span>
          <span className="bg-gradient-to-b from-white to-black bg-clip-text text-transparent">
            A
          </span>
          <span className="bg-gradient-to-b from-white to-black bg-clip-text text-transparent">
            T
          </span>
          <span className="bg-gradient-to-b from-white to-black bg-clip-text text-transparent">
            M
          </span>
          <span className="bg-gradient-to-b from-white to-black bg-clip-text text-transparent">
            A
          </span>
          <span className="bg-gradient-to-b from-white to-black bg-clip-text text-transparent">
            T
          </span>
          <span className="bg-gradient-to-b from-white to-black bg-clip-text text-transparent">
            E
          </span>
        </div>
        <div className="text-3xl text-white mt-48 ">
          <Link to="/home/:id">
            <div className="relative mb-8 cursor-pointer">
              <IoChatboxEllipsesSharp />
              <span className="text-white text-sm absolute">Chats</span>
            </div>
          </Link>
          <Link to="/share/:id">
            <div className="relative mb-8 cursor-pointer">
              <IoShareSocialOutline />
              <span className="text-white text-sm absolute">Share</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavbarComponent;
