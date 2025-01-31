import React from "react";
import DefaultLayout from "../Layouts/DefaultLayout";
import RecipientsComponents from "../Components/RecipientsComponents";
import ChatComponent from "../Components/ChatComponent";

const HomePage = () => {
  return (
    <>
      <div className="ml-[80px] p-5 bg-white rounded-3xl m-3 w-[75%] h-[97vh] flex flex-row">
        <RecipientsComponents />
        <ChatComponent />
      </div>
    </>
  );
};

export default DefaultLayout(HomePage);
