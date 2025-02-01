import React from "react";

const MessagesComponent = (props) => {
  const message = props.message;
  const date = props.date;
  return (
    <>
      {date ? (
        <div className="text-[13px] grid place-content-center">
          <span className="px-1 bg-sky-300 rounded text-white">
            {new Date(message.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </span>
        </div>
      ) : (
        ""
      )}
      <div
        className={`${
          message.type === "send" ? "flex flex-col items-end" : ""
        } `}
      >
        <div
          className={`${
            message.type === "send"
              ? "bg-[rgb(68,68,173)] "
              : "bg-[rgb(107,107,131)] "
          } rounded-xl p-1 px-2 w-fit text-white max-w-[60%] flex flex-col`}
        >
          {message.content}
          <span
            className={`text-[10px] ${
              message.type === "send" ? "text-right" : ""
            }`}
          >
            {new Date(message.date).toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: true, // Use 12-hour format (false for 24-hour)
            })}
          </span>
        </div>
      </div>
    </>
  );
};

export default MessagesComponent;
// bg - ;
