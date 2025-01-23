import React from "react";
import MessagesComponent from "./MessagesComponent";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import MyImage from "../Images/chatLOGO-removebg-preview.png";
import { IoSend } from "react-icons/io5";
import { IoAttachSharp } from "react-icons/io5";

const ChatComponent = () => {
  const messages = [
    {
      id: 1,
      type: "send", // Indicates a sent message
      content: "Hi bro, how are you?", // Message text
    },
    {
      id: 2,
      type: "receive", // Indicates a received message
      content: "I'm good, what about you?", // Message text
    },
    {
      id: 3,
      type: "send",
      content: "I'm doing well! Let's catch up soon.",
    },
    {
      id: 4,
      type: "receive",
      content:
        "Sure, let me know when you're free! COme with me to play cricket in the evening if you are free then we will go to eat chinies in the night",
    },
  ];

  return (
    <>
      <div className="flex flex-col w-full pl-3">
        <div className="flex flex-row justify-between items-center mb-2">
          <div className="flex flex-row items-center">
            <div className="w-[40px] h-[40px] bg-blue-400 rounded-lg flex items-center justify-center mr-3">
              <p className="text-white text-3xl font-bold font-serif">C</p>
            </div>
            <p className="text-2xl font-serif text-black">Chethan</p>
          </div>
          <div className="mr-3">
            <Menu>
              <MenuButton>
                <GiHamburgerMenu className="text-2xl" />
              </MenuButton>
              <MenuItems anchor="bottom" className="bg-white p-3 shadow-md rounded-lg">
                <MenuItem>
                  <a
                    className="block data-[focus]:bg-blue-100"
                    href="/settings"
                  >
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a className="block data-[focus]:bg-blue-100" href="/support">
                    Support
                  </a>
                </MenuItem>
                <MenuItem>
                  <a className="block data-[focus]:bg-blue-100" href="/license">
                    License
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
        <hr />

        <div
          className="h-full w-full relative"
          style={{
            backgroundImage: `url('${MyImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="h-full w-full pt-5 pb-9 flex flex-col gap-2">
            {messages.map((ele) => {
              return <MessagesComponent message={ele} />;
            })}
          </div>
          <div className="absolute w-full bottom-0 left-1/2 transform -translate-x-1/2 p-2 rounded-md shadow-lg flex flex-row items-center justify-between">
            <div className="flex flex-row items-center">
              <IoAttachSharp className="text-2xl" />
              <input
                type="text"
                className="border-none outline-none w-[700px]"
                placeholder="Type your message..."
              />
            </div>
            <IoSend className="text-2xl" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatComponent;
