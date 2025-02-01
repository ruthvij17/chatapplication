import React from "react";
import SearchComponent from "./SearchComponent";

const RecipientsComponents = () => {
  let i = 0;
  const colors = [
    "#1E1E1E", // Dark Gray
    "#2D3748", // Charcoal
    "#4A5568", // Slate Gray
    "#0A0A0A", // Black
    "#2C3E50", // Midnight Blue
    "#4B0082", // Indigo
    "#FF5733", // Vibrant Orange
    "#3498DB", // Bright Blue
    "#27AE60", // Green
    "#8E44AD", // Purple
    "#F39C12", // Sunflower Yellow
    "#E74C3C", // Red
    "#16A085", // Greenish Blue
    "#F39C12", // Golden Yellow
    "#D35400", // Dark Orange
  ];

  const recipients = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Alice Johnson" },
    { id: 4, name: "Bob Brown" },
    { id: 5, name: "Charlie Davis" },
    { id: 6, name: "Emily Johnson" },
    { id: 7, name: "Liam Smith" },
    { id: 8, name: "Sophia Brown" },
    { id: 9, name: "David Taylor" },
    { id: 10, name: "Olivia White" },
    { id: 11, name: "Charlie Hall" },
    { id: 12, name: "Alice King" },
    { id: 13, name: "Jane Adams" },
    { id: 14, name: "John Clark" },
    { id: 15, name: "Bob Davis" },
    { id: 16, name: "Emily Smith" },
    { id: 17, name: "Liam Johnson" },
    { id: 18, name: "Sophia Brown" },
    { id: 19, name: "David White" },
    { id: 20, name: "Olivia Taylor" },
    { id: 21, name: "Charlie Adams" },
    { id: 22, name: "Alice Hall" },
    { id: 23, name: "Jane King" },
    { id: 24, name: "John Davis" },
    { id: 25, name: "Bob Clark" },
    { id: 26, name: "Emily Adams" },
    { id: 27, name: "Liam Brown" },
    { id: 28, name: "Sophia Smith" },
    { id: 29, name: "David Hall" },
    { id: 30, name: "Olivia King" },
    { id: 31, name: "Charlie Davis" },
    { id: 32, name: "Alice Clark" },
    { id: 33, name: "Jane White" },
    { id: 34, name: "John Taylor" },
    { id: 35, name: "Bob Adams" },
    { id: 36, name: "Emily King" },
    { id: 37, name: "Liam Clark" },
    { id: 38, name: "Sophia Hall" },
    { id: 39, name: "David Davis" },
    { id: 40, name: "Olivia Smith" },
    { id: 41, name: "Charlie Taylor" },
    { id: 42, name: "Alice White" },
    { id: 43, name: "Jane Brown" },
    { id: 44, name: "John Hall" },
    { id: 45, name: "Bob King" },
    { id: 46, name: "Emily Davis" },
    { id: 47, name: "Liam Adams" },
    { id: 48, name: "Sophia Taylor" },
    { id: 49, name: "David Brown" },
    { id: 50, name: "Olivia Hall" },
    { id: 51, name: "Charlie White" },
    { id: 52, name: "Alice Smith" },
    { id: 53, name: "Jane Clark" },
    { id: 54, name: "John Adams" },
    { id: 55, name: "Bob Hall" },
  ];

  return (
    <>
      <div className="w-[20%] flex flex-col overflow-hidden h-full">
        <SearchComponent />
        <div
          className="flex flex-col mt-2 h-full overflow-y-auto gap-1"
          id="scroll"
        >
          {/*  */}
          {recipients.map((ele, index) => {
            if (i == 15) {
              i = 0;
            }
            return (
              <div
                className="flex flex-row bg-[rgba(220,220,220,0.5)] rounded-lg p-1 items-center shadow-sm shadow-gray-800"
                key={index}
              >
                <div
                  className="w-[40px] h-[40px] rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: colors[i++] }}
                >
                  <p className="text-white text-3xl font-bold font-serif">
                    {ele.name[0]}
                  </p>
                </div>
                <p className="text-black ml-1 text-md font-serif">{ele.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RecipientsComponents;
