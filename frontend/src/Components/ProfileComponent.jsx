import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProfileComponent = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const getDetails = async () => {
      try {
        const response = await axios.get(`/get/profile/${id}`);
        console.log(id);
        if (response.status == 200) {
          setName(response.data.user.name);
          setEmail(response.data.user.email);
        } else {
          alert(response.data.message);
        }
      } catch (error) {
        alert("error");
      }
    };
    getDetails();
  }, [id]);

  return (
    <>
      <div className="h-[50%] w-[18vw]  bg-white mt-3 rounded-3xl flex flex-col overflow-hidden">
        <div
          className="h-[70%] flex items-center justify-center"
          style={{
            background: "radial-gradient(circle, #a2c2e6, #e1c6f2)", // Teal to Peachy Pink Radial Gradient
          }}
        >
          <div className="uppercase h-[160px] w-[160px] rounded-full bg-white flex items-center justify-center text-8xl font-serif text-blue-900">
            {name[0]}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-5">
          <h1 className="capitalize text-2xl bg-gradient-to-b from-blue-950 to-blue-400 bg-clip-text text-transparent font-serif font-bold">
            {name}
          </h1>
          <p className="text-sm text bg-gradient-to-b from-blue-950 to-blue-400 bg-clip-text text-transparent ">
            {email}
          </p>
        </div>
      </div>
    </>
  );
};

export default ProfileComponent;
