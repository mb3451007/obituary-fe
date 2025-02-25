"use client";
import Layout from "../components/appcomponents/Layout";
import Login from "../components/appcomponents/Login";
import LoginFooter from "../components/appcomponents/LoginFooter";
import Header from "../components/appcomponents/HeaderLogin";

const LoginPage = () => {
  return (
    <div className="flex flex-1 flex-col bg-[#F5F7F9]">
      <Header />
      <Login />
      <LoginFooter />
    </div>
  );
};

export default LoginPage;
