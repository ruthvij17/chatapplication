import React from "react";
import DefaultLayout from "../Layouts/DefaultLayout";
import RecipientsComponents from "../Components/RecipientsComponents";
import ChatComponent from "../Components/ChatComponent";

const HomePage = () => {
  return (
    <>
      <div className="ml-[100px] p-5 bg-white rounded-3xl m-3 w-[73%] h-screen flex flex-row">
        <RecipientsComponents />
        <ChatComponent />
      </div>
    </>
  );
};

export default DefaultLayout(HomePage);
