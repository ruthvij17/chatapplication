import React, { useState } from "react";
import DefaultLayout from "../Layouts/DefaultLayout";
import RecipientsComponents from "../Components/RecipientsComponents";
import ChatComponent from "../Components/ChatComponent";

const HomePage = () => {
  const [recipientDetails, setRecipientDetails] = useState();

  return (
    <>
      <div className="ml-[80px] p-5 bg-white rounded-3xl m-3 w-[75%] h-[97vh] flex flex-row">
        <RecipientsComponents
          recipientDetails={recipientDetails}
          setRecipientDetails={setRecipientDetails}
        />
        <ChatComponent
          recipientDetails={recipientDetails}
          setRecipientDetails={setRecipientDetails}
        />
      </div>
    </>
  );
};

export default DefaultLayout(HomePage);
