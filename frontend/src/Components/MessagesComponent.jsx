import React from "react";

const MessagesComponent = (props) => {
  const message = props.message;
  return (
    <div
      className={`${message.type === "send" ? "flex flex-col items-end" : ""} `}
    >
      <div
        className={`${
          message.type === "send"
            ? "bg-[rgb(68,68,173)] "
            : "bg-[rgb(107,107,131)] "
        } rounded-xl p-1 px-2 w-fit text-white max-w-[60%]`}
      >
        {message.content}
      </div>
    </div>
  );
};

export default MessagesComponent;
// bg - ;
