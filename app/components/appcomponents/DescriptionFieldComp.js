"use client";
import React, { useEffect, useState } from "react";

const DescriptionFieldComp = ({
  placeholder,
  height,
  value,
  onChange,
  readOnly = false,
}) => {
  return (
    <div
      className={`h-[${height}] rounded-[6px] bg-[#F2F8FF66] shadow-custom-dark-to-white w-full py-3 px-4`}
    >
      <textarea
        value={value || ""}
        onChange={onChange}
        className="w-full h-full bg-transparent focus:outline-none text-[#1E2125] resize-none"
        placeholder={placeholder}
        readOnly={readOnly}
      />
    </div>
  );
};

export default DescriptionFieldComp;
