import React from "react";
import MessagesComponent from "./MessagesComponent";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import MyImage from "../Images/chatLOGO-removebg-preview.png";
import { IoSend } from "react-icons/io5";
import { IoAttachSharp } from "react-icons/io5";

const ChatComponent = () => {
  let date,
    prevDate = new Date(0);
  const messages = [
    {
      id: 1,
      type: "send",
      content: "Hi bro, how are you?",
      date: 1738324883641,
    },
    {
      id: 2,
      type: "receive",
      content: "I'm good, what about you?",
      date: 1738324884641,
    },
    {
      id: 3,
      type: "send",
      content: "I'm doing well! Let's catch up soon.",
      date: 1738324885641,
    },
    {
      id: 4,
      type: "receive",
      content:
        "Sure, let me know when you're free! Come with me to play cricket in the evening if you are free then we will go to eat Chinese in the night.",
      date: 1738324886641,
    },
    {
      id: 5,
      type: "send",
      content: "That sounds like a plan! I'll check my schedule.",
      date: 1738324887641,
    },
    {
      id: 6,
      type: "receive",
      content: "Great! Let me know what time works for you.",
      date: 1738325983641,
    },
    {
      id: 7,
      type: "send",
      content: "How about 5 PM for cricket?",
      date: 1738325984641,
    },
    {
      id: 8,
      type: "receive",
      content: "5 PM works! I'll see you then.",
      date: 1738325985641,
    },
    {
      id: 9,
      type: "send",
      content: "Awesome! Can't wait to catch up.",
      date: 1738325986641,
    },
    {
      id: 10,
      type: "receive",
      content: "Same here, it's been a while!",
      date: 1738325987641,
    },
    {
      id: 11,
      type: "send",
      content: "By the way, did you watch the game last night?",
      date: 1738327083641,
    },
    {
      id: 12,
      type: "receive",
      content: "Yes! It was insane. The last-minute goal was crazy!",
      date: 1738327084641,
    },
    {
      id: 13,
      type: "send",
      content: "I know, right? I couldn't believe it.",
      date: 1738327085641,
    },
    {
      id: 14,
      type: "receive",
      content: "Totally! I was on the edge of my seat.",
      date: 1738327086641,
    },
    {
      id: 15,
      type: "send",
      content: "We should get together and watch the next match.",
      date: 1738328083641,
    },
    {
      id: 16,
      type: "receive",
      content: "Definitely! Let me know when it's on.",
      date: 1738328084641,
    },
    {
      id: 17,
      type: "send",
      content: "Will do! How's everything else going?",
      date: 1738328085641,
    },
    {
      id: 18,
      type: "receive",
      content: "All good, just been busy with work. How about you?",
      date: 1738328086641,
    },
    {
      id: 19,
      type: "send",
      content: "Same here, work's been hectic. But I'm managing.",
      date: 1738329083641,
    },
    {
      id: 20,
      type: "receive",
      content:
        "That's good to hear. Hopefully, we'll both get some free time soon.",
      date: 1738329084641,
    },
    {
      id: 21,
      type: "send",
      content: "For sure! Let's plan something for the weekend.",
      date: 1738330083641,
    },
    {
      id: 22,
      type: "receive",
      content: "Sounds perfect! I'll check my calendar.",
      date: 1738330084641,
    },
    {
      id: 23,
      type: "send",
      content: "Great! Talk soon then.",
      date: 1738330085641,
    },
    {
      id: 24,
      type: "receive",
      content: "Alright, take care!",
      date: 1738331083641,
    },
    {
      id: 25,
      type: "send",
      content: "You too, bro. Catch you later!",
      date: 1738331084641,
    },
    {
      id: 26,
      type: "receive",
      content: "Later!",
      date: 1738332083641,
    },
    {
      id: 27,
      type: "send",
      content: "Hey, I was thinking about a weekend trip. Are you in?",
      date: 1738333083641,
    },
    {
      id: 28,
      type: "receive",
      content: "That sounds fun! Where are we going?",
      date: 1738333084641,
    },
    {
      id: 29,
      type: "send",
      content:
        "I'm thinking of a road trip to the mountains. What do you think?",
      date: 1738333085641,
    },
    {
      id: 30,
      type: "receive",
      content: "Mountains sound great! Let's do it.",
      date: 1738333086641,
    },
    {
      id: 31,
      type: "send",
      content: "Awesome! I'll book the tickets today.",
      date: 1738334083641,
    },
    {
      id: 32,
      type: "receive",
      content: "Perfect, let's finalize the details soon.",
      date: 1738334084641,
    },
    {
      id: 33,
      type: "send",
      content: "Looking forward to it!",
      date: 1738334085641,
    },
    {
      id: 34,
      type: "receive",
      content: "Same here! It's going to be amazing.",
      date: 1738334086641,
    },
  ];

  return (
    <>
      <div className="flex flex-col w-full pl-3">
        <div className="flex flex-row justify-between items-center mb-2">
          <div className="flex flex-row items-center">
            <div className="w-[40px] h-[40px] bg-blue-400 rounded-lg flex items-center justify-center mr-3 shadow-sm shadow-black">
              <p className="text-white text-3xl font-bold font-serif">C</p>
            </div>
            <p className="text-2xl font-serif text-black">Chethan</p>
          </div>
          <div className="mr-3">
            <Menu>
              <MenuButton>
                <GiHamburgerMenu className="text-2xl" />
              </MenuButton>
              <MenuItems
                anchor="bottom"
                className="bg-white p-3 shadow-md rounded-lg"
              >
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

        <div className="h-full w-full flex flex-col items-center">
          <div
            className="h-[88%] w-full pt-5 pb-9 flex flex-col gap-2 overflow-scroll"
            id="scroll"
            style={{
              backgroundImage: `url('${MyImage}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {messages.map((ele, index) => {
              date = new Date(ele.date);
              if (date.toLocaleDateString() !== prevDate.toLocaleDateString()) {
                // console.log(
                //   prevDate.toLocaleDateString(),
                //   date.toLocaleDateString()
                // );
                prevDate = date;
                return (
                  <MessagesComponent message={ele} key={index} date={true} />
                );
              }

              return (
                <MessagesComponent message={ele} key={index} date={false} />
              );
            })}
          </div>
          <div className=" w-[80%] h-[5%] p-2 rounded-md flex flex-row items-center justify-between bg-blue-200 mt-2 shadow-sm shadow-gray-800">
            <div className="flex flex-row items-center">
              <IoAttachSharp className="text-2xl" />
              <input
                type="text"
                className="border-none outline-none bg-transparent"
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
