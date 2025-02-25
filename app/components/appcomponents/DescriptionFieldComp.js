"use client";
import React, { useState } from "react";

const DescriptionFieldComp = ({placeholder, height}) => {
  const [inputValueMessage, setInputValueMessage] = useState("");

  const handleValueMessageInput = (event) => {
    setInputValueMessage(event.target.value);
  };

  return (
    <div className={`h-[${height}] rounded-[6px] bg-[#F2F8FF66] shadow-custom-dark-to-white w-full py-3 px-4`}>
      <textarea
        value={inputValueMessage}
        onChange={handleValueMessageInput}
        className="w-full h-full bg-transparent focus:outline-none text-[#1E2125] resize-none"
        placeholder={placeholder}
      />
    </div>
  );
};

export default DescriptionFieldComp;
