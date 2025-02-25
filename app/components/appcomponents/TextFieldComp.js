"use client";
import React, { useState } from "react";

const TextFieldComp = ({placeholder}) => {
  const [inputValueEmail, setInputValueEmail] = useState("");

  const handleEmailInput = (event) => {
    setInputValueEmail(event.target.value);
  };

  return (
    <div className="h-[40px] rounded-[6px] mt-[4px] bg-[#F2F8FF66] shadow-custom-dark-to-white w-full">
      <input
        type="text"
        value={inputValueEmail}
        onChange={handleEmailInput}
        className="w-full px-[19px] h-full  bg-transparent focus:outline-none text-[15px] text-[#1E2125]"
        placeholder={placeholder}
        
      />
    </div>
  );
};

export default TextFieldComp;
