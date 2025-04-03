"use client";
import Login from "../components/appcomponents/Login";
import HeaderRegistration from "../components/appcomponents/HeaderRegistration";

const RegistrationPage = () => {
  return (
    <div className="flex flex-1 flex-col bg-[#F5F7F9]">
      <HeaderRegistration />
      <Login />
    </div>
  );
};

export default RegistrationPage;
