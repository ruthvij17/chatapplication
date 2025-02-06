import React, { useEffect, useState } from "react";
import MessagesComponent from "./MessagesComponent";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import MyImage from "../Images/chatLOGO-removebg-preview.png";
import { IoSend } from "react-icons/io5";
import { IoAttachSharp } from "react-icons/io5";
import io from "socket.io-client";
import { useParams } from "react-router-dom";

const ChatComponent = ({ recipientDetails, setRecipientDetails }) => {
  const { id } = useParams();

  const [socket, setSocket] = useState();

  let date,
    prevDate = new Date(0);
  const messages = [
    // Group 1: January 1, 2024 (2 messages)
    {
      id: 1,
      type: "send",
      content: "Hi bro, how are you?",
      date: 1738324800000, // January 1, 2024, 12:00:00 PM
    },
    {
      id: 2,
      type: "receive",
      content: "I'm good, what about you?",
      date: 1738325160000, // January 1, 2024, 12:06:00 PM
    },

    // Group 2: January 2, 2024 (3 messages)
    {
      id: 3,
      type: "send",
      content: "I'm doing well! Let's catch up soon.",
      date: 1738411200000, // January 2, 2024, 12:00:00 PM
    },
    {
      id: 4,
      type: "receive",
      content:
        "Sure, let me know when you're free! Come with me to play cricket in the evening if you are free then we will go to eat Chinese in the night.",
      date: 1738411500000, // January 2, 2024, 12:05:00 PM
    },
    {
      id: 5,
      type: "send",
      content: "That sounds like a plan! I'll check my schedule.",
      date: 1738411800000, // January 2, 2024, 12:10:00 PM
    },

    // Group 3: January 3, 2024 (4 messages)
    {
      id: 6,
      type: "receive",
      content: "Great! Let me know what time works for you.",
      date: 1738497600000, // January 3, 2024, 12:00:00 PM
    },
    {
      id: 7,
      type: "send",
      content: "How about 5 PM for cricket?",
      date: 1738497900000, // January 3, 2024, 12:05:00 PM
    },
    {
      id: 8,
      type: "receive",
      content: "5 PM works! I'll see you then.",
      date: 1738498200000, // January 3, 2024, 12:10:00 PM
    },
    {
      id: 9,
      type: "send",
      content: "Awesome! Can't wait to catch up.",
      date: 1738498500000, // January 3, 2024, 12:15:00 PM
    },

    // Group 4: January 4, 2024 (5 messages)
    {
      id: 10,
      type: "receive",
      content: "Same here, it's been a while!",
      date: 1738584000000, // January 4, 2024, 12:00:00 PM
    },
    {
      id: 11,
      type: "send",
      content: "By the way, did you watch the game last night?",
      date: 1738584300000, // January 4, 2024, 12:05:00 PM
    },
    {
      id: 12,
      type: "receive",
      content: "Yes! It was insane. The last-minute goal was crazy!",
      date: 1738584600000, // January 4, 2024, 12:10:00 PM
    },
    {
      id: 13,
      type: "send",
      content: "I know, right? I couldn't believe it.",
      date: 1738584900000, // January 4, 2024, 12:15:00 PM
    },
    {
      id: 14,
      type: "receive",
      content: "Totally! I was on the edge of my seat.",
      date: 1738585200000, // January 4, 2024, 12:20:00 PM
    },

    // Group 5: January 5, 2024 (3 messages)
    {
      id: 15,
      type: "send",
      content: "We should get together and watch the next match.",
      date: 1738670400000, // January 5, 2024, 12:00:00 PM
    },
    {
      id: 16,
      type: "receive",
      content: "Definitely! Let me know when it's on.",
      date: 1738670700000, // January 5, 2024, 12:05:00 PM
    },
    {
      id: 17,
      type: "send",
      content: "Will do! How's everything else going?",
      date: 1738671000000, // January 5, 2024, 12:10:00 PM
    },

    // Group 6: January 6, 2024 (4 messages)
    {
      id: 18,
      type: "receive",
      content: "All good, just been busy with work. How about you?",
      date: 1738756800000, // January 6, 2024, 12:00:00 PM
    },
    {
      id: 19,
      type: "send",
      content: "Same here, work's been hectic. But I'm managing.",
      date: 1738757100000, // January 6, 2024, 12:05:00 PM
    },
    {
      id: 20,
      type: "receive",
      content:
        "That's good to hear. Hopefully, we'll both get some free time soon.",
      date: 1738757400000, // January 6, 2024, 12:10:00 PM
    },
    {
      id: 21,
      type: "send",
      content: "For sure! Let's plan something for the weekend.",
      date: 1738757700000, // January 6, 2024, 12:15:00 PM
    },

    // Group 7: January 7, 2024 (5 messages)
    {
      id: 22,
      type: "receive",
      content: "Sounds perfect! I'll check my calendar.",
      date: 1738843200000, // January 7, 2024, 12:00:00 PM
    },
    {
      id: 23,
      type: "send",
      content: "Great! Talk soon then.",
      date: 1738843500000, // January 7, 2024, 12:05:00 PM
    },
    {
      id: 24,
      type: "receive",
      content: "Alright, take care!",
      date: 1738843800000, // January 7, 2024, 12:10:00 PM
    },
    {
      id: 25,
      type: "send",
      content: "You too, bro. Catch you later!",
      date: 1738844100000, // January 7, 2024, 12:15:00 PM
    },
    {
      id: 26,
      type: "receive",
      content: "Later!",
      date: 1738844400000, // January 7, 2024, 12:20:00 PM
    },

    // Group 8: January 8, 2024 (2 messages)
    {
      id: 27,
      type: "send",
      content: "Hey, I was thinking about a weekend trip. Are you in?",
      date: 1738929600000, // January 8, 2024, 12:00:00 PM
    },
    {
      id: 28,
      type: "receive",
      content: "That sounds fun! Where are we going?",
      date: 1738929900000, // January 8, 2024, 12:05:00 PM
    },

    // Group 9: January 9, 2024 (3 messages)
    {
      id: 29,
      type: "send",
      content:
        "I'm thinking of a road trip to the mountains. What do you think?",
      date: 1739016000000, // January 9, 2024, 12:00:00 PM
    },
    {
      id: 30,
      type: "receive",
      content: "Mountains sound great! Let's do it.",
      date: 1739016300000, // January 9, 2024, 12:05:00 PM
    },
    {
      id: 31,
      type: "send",
      content: "Awesome! I'll book the tickets today.",
      date: 1739016600000, // January 9, 2024, 12:10:00 PM
    },

    // Group 10: January 10, 2024 (4 messages)
    {
      id: 32,
      type: "receive",
      content: "Perfect, let's finalize the details soon.",
      date: 1739102400000, // January 10, 2024, 12:00:00 PM
    },
    {
      id: 33,
      type: "send",
      content: "Looking forward to it!",
      date: 1739102700000, // January 10, 2024, 12:05:00 PM
    },
    {
      id: 34,
      type: "receive",
      content: "Same here! It's going to be amazing.",
      date: 1739103000000, // January 10, 2024, 12:10:00 PM
    },
  ];

  const [recipient, setRecipient] = useState("");
  const [recipientId, setRecipientId] = useState("");
  const [messageInput, setMessageInput] = useState("");

  useEffect(() => {
    if (recipientDetails) {
      setRecipient(recipientDetails.name);
      setRecipientId(recipientDetails._id);
    }
  }, [recipientDetails]);

  useEffect(() => {
    if (recipientId) {
      socket && socket.disconnect();
      const s = io("http://localhost:5000", {
        path: "/socket/chat",
        query: { id: id, rid: recipientId },
      });
      setSocket(s);
    }
  }, [recipientId]);

  const handleSend = () => {
    socket.emit("message", { msg: messageInput, date: Date.now() });
    setMessageInput("");
  };

  return (
    <>
      <div
        className="flex flex-col w-full pl-3"
        style={{
          backgroundImage: `url('${MyImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {recipientDetails && (
          <div className="flex flex-row justify-between items-center mb-2">
            <div className="flex flex-row items-center">
              <div className="w-[40px] h-[40px] bg-blue-400 rounded-lg flex items-center justify-center mr-3 shadow-sm shadow-black">
                <p className="text-white text-3xl font-bold font-serif uppercase">
                  {recipient && recipient[0]}
                </p>
              </div>
              <p className="text-2xl font-serif text-black capitalize">
                {recipient}
              </p>
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
                    <a
                      className="block data-[focus]:bg-blue-100"
                      href="/support"
                    >
                      Support
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      className="block data-[focus]:bg-blue-100"
                      href="/license"
                    >
                      License
                    </a>
                  </MenuItem>
                </MenuItems>
              </Menu>
            </div>
          </div>
        )}
        <hr />

        {recipientDetails && (
          <div className="h-full w-full flex flex-col items-center">
            <div
              className="h-[88%] w-full pt-5 pb-9 flex flex-col gap-2 overflow-scroll"
              id="scroll"
            >
              {messages.map((ele, index) => {
                date = new Date(ele.date);
                if (
                  date.toLocaleDateString() !== prevDate.toLocaleDateString()
                ) {
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
              <div className="flex flex-row items-center w-[95%]">
                <IoAttachSharp className="text-2xl" />
                <input
                  type="text"
                  className="border-none outline-none bg-transparent w-[95%]"
                  placeholder="Type your message..."
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                />
              </div>
              <IoSend className="text-2xl" onClick={() => handleSend()} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ChatComponent;
