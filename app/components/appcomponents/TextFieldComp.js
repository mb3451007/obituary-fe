"use client";
import React, { useState, useEffect } from "react";

const TextFieldComp = ({
  placeholder,
  value,
  onChange,
  readOnly = false,
  maxLength,
}) => {
  return (
    <div className="h-[40px] rounded-[6px] mt-[4px] bg-[#F2F8FF66] shadow-custom-dark-to-white w-full">
      <input
        type="text"
        value={value || ""}
        onChange={onChange}
        className="w-full px-[19px] h-full  bg-transparent focus:outline-none text-[15px] text-[#1E2125]"
        placeholder={placeholder}
        readOnly={readOnly}
        maxLength={maxLength}
      />
    </div>
  );
};

export default TextFieldComp;
