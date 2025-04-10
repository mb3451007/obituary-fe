"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Checkbox } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { toast } from "react-hot-toast";
import userService from "@/services/user-service";
import authService from "@/services/auth-service";


const Registration = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const router = useRouter();

  const [inputValueEmail, setInputValueEmail] = useState("");
  const [inputValueGeslo, setInputValueGeslo] = useState("");
  const [inputValueConfirmGeslo, setInputValueConfirmGeslo] = useState("");
  const [inputValueChooseUsername, setInputValueChooseUsername] = useState("");
  const [enableReceiveEmails, setEnableReceiveEmails] = useState(true);
  const [enableTermsOfUse, setEnableTermsOfUse] = useState(false);
  const [enabledRememberMe, setEnabledRememberMe] = useState(true);

  const [activeDiv, setActiveDiv] = useState("login");

  const handleEmailInput = (event) => {
    setInputValueEmail(event.target.value);
  };

  const handleGesloInput = (event) => {
    setInputValueGeslo(event.target.value);
  };

  const handleConfirmGesloInput = (event) => {
    setInputValueConfirmGeslo(event.target.value);
  };

  const handleRegister = async () => {
    if (!inputValueEmail || !inputValueGeslo || !inputValueConfirmGeslo) {
      toast.error("All fields are required");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(inputValueEmail)) {
      toast.error("Please enter a valid email address");
      return;
    }
    const passwordRegex = /^.{6,}$/;
    if (!passwordRegex.test(inputValueGeslo)) {
      toast.error("Password must be at least 6 characters long");
      return;
    }

    if (inputValueGeslo !== inputValueConfirmGeslo) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      const payload = {
        email: inputValueEmail,
        password: inputValueGeslo,
        role: "User",
      };

      const response = await userService.registerUser(payload);
      if (response.status === 409) {
        toast.error("Email Already Exists");
        return;
      }
      if (response.error) {
        toast.error(
          response.error || "Something went wrong. Please try again!"
        );
        return;
      }

      toast.success(
        response.message || "Registration successful! You can now log in."
      );

      setActiveDiv("login");
    } catch (error) {
      toast.error("Registration failed. Please try again.");
    }
  };

  const handleLogin = async () => {
    if (!inputValueEmail || !inputValueGeslo) {
      toast.error("Email and password are required!");
      return;
    }

    try {
      const payload = {
        email: inputValueEmail,
        password: inputValueGeslo,
      };

      const response = await authService.login(payload);
      console.log(response);
      if (response.error) {
        toast.error(
          response.error || "Something went wrong. Please try again!"
        );
        return;
      }

      localStorage.setItem("user", JSON.stringify(response.user));

      toast.success(response.message || "Login successful!");
      router.push("/");
    } catch (error) {
      toast.error("Login failed. Please check your credentials.");
    }
  };

  return (
    <>
      {/* Full screen overlay with blur effect */}
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center"
        onClick={onClose}
      >
        {/* Dialog container that stops event propagation to prevent closing when clicking inside */}
        <div className="relative" onClick={(e) => e.stopPropagation()}>
          <div className="flex flex-col items-center">
            <div className="flex flex-row justify-between items-center w-full px-4 z-10">


              <button
                onClick={() =>
                  setActiveDiv(activeDiv === "login" ? "register" : "login")
                }
                className="h-10 w-40 flex justify-center items-center text-center border border-gray-500 rounded-lg bg-gray-300/30 text-white font-thin text-sm"
              >
                {activeDiv === "login" ? "REGISTRACIJA" : "PRIJAVA"}
              </button>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="w-10 h-10 flex items-center justify-center rounded-full border-4 border-white hover:border-gray-600 transition-all duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-white hover:text-gray-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}  
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>


            </div>

            <div
              className="w-[360px] h-[660px] tablet:pt-[40px] tablet:pb-[40px] desktop:pt-[40px] desktop:pb-[40px] mobile:max-w-[340px] mobile:w-full mobile:mx-2 flex flex-col
              tablet:bg-gray-300/30 desktop:bg-gray-300 desktop:backdrop-blur tablet:backdrop-blur rounded-2xl mobile:bg-gray-300 border-[2px] border-[#FFFFFF] desktop:shadow-lg tablet:shadow-lg mobile:border-[0px] mt-2"
            >
              {/* Container for text inputs and forgot password and checkbox */}
              <div className="w-[300px] h-auto mobile:w-[297px] mobile:h-auto mx-auto flex flex-col">
                {/* Container for email field */}
                <div className="text-[#6D778E] text-[14px] leading-[20px] font-[400px] w-full mt-[10px] h-[62px] flex flex-col justify-start items-start">
                  <div>E-pošta</div>
                  <div className="px-[10px] mt-[4px] h-[38px] rounded-[6px] bg-[#F2F8FF66] shadow-custom-dark-to-white w-full">
                    <input
                      type="email"
                      value={inputValueEmail}
                      onChange={handleEmailInput}
                      className="w-full h-full bg-transparent focus:outline-none text-[#848484]"
                    />
                  </div>
                </div>
                {/* Container for geslo field */}
                <div className="text-[#6D778E] text-[14px] leading-[20px] font-[400px] w-full mt-[10px] h-[62px] flex flex-col justify-start items-start">
                  <div>Geslo</div>
                  <div className="px-[10px] mt-[4px] h-[38px] rounded-[6px] bg-[#F2F8FF66] shadow-custom-dark-to-white w-full">
                    <input
                      type="password"
                      value={inputValueGeslo}
                      onChange={handleGesloInput}
                      className="h-[38px] w-full bg-transparent focus:outline-none text-[#848484]"
                    />
                  </div>
                </div>

                {/* Container for confirm password field */}
                {activeDiv === "register" && (
                  <div className="text-[#6D778E] text-[14px] leading-[20px] font-[400px] w-full mt-[10px] h-[62px] flex flex-col justify-start items-start">
                    <div>Ponovi geslo</div>
                    <div className="px-[10px] mt-[4px] h-[38px] rounded-[6px] bg-[#F2F8FF66] shadow-custom-dark-to-white w-full">
                      <input
                        type="password"
                        value={inputValueConfirmGeslo}
                        onChange={handleConfirmGesloInput}
                        className="w-full h-[38px] bg-transparent focus:outline-none text-[#848484]"
                      />
                    </div>
                  </div>
                )}

                {/* Container for checkboxes */}
                <div className="flex flex-col items-center mt-[25px]">
                  {/* Container for forgot password and remember me */}
                  {activeDiv === "login" && (
                    <div className="flex w-full justify-between items-center mt-[-9px]">
                      {/* Checkbox */}
                      <label className="flex flex-1 justify-start mt-[3px] ml-[2px] font-normal text-[12px] text-[#6D778E]">
                        <Checkbox
                          checked={enabledRememberMe}
                          onCheckedChange={setEnabledRememberMe}
                          className="mr-[12px] w-[18px] h-[18px] rounded-[2px] border-[2px] border-[#6D778E] data-[state=checked]:bg-[#6D778E]"
                        />
                        Zapomni si
                      </label>
                      <Link
                        href="#"
                        className="flex font-normal mt-[3px] text-[12px] leading-[20px] text-[#6D778E] justify-end"
                      >
                        Pozabljeno geslo
                      </Link>
                    </div>
                  )}

                  {/* Checkbox for receive emails*/}
                  {activeDiv === "register" && (
                    <label className="flex flex-1 justify-start mt-[3px] ml-[2px] font-normal text-[12px] text-[#6D778E]">
                      <Checkbox
                        checked={enableReceiveEmails}
                        onCheckedChange={setEnableReceiveEmails}
                        className="mr-[12px] w-[18px] h-[18px] rounded-[2px] border-[2px] border-[#6D778E] data-[state=checked]:bg-[#6D778E]"
                      />
                      <div>
                        Dajem privolitev, da me Firma s.p. preko elektronske pošte, do preklica obvešča o posodobitvah,
                        nadgradnjah, novostih in ugodnostih.
                      </div>
                    </label>
                  )}

                  {/* Checkbox for terms of use and privacy policy*/}
                  {activeDiv === "register" && (
                    <div className="flex w-full items-center mt-[7px]">
                      <label className="flex flex-1 justify-start mt-[3px] ml-[2px] font-normal text-[12px] text-[#6D778E]">
                        <Checkbox
                          checked={enableTermsOfUse}
                          onCheckedChange={setEnableTermsOfUse}
                          className="mr-[12px] w-[18px] h-[18px] rounded-[2px] border-[2px] border-[#6D778E] data-[state=checked]:bg-[#6D778E]"
                        />
                        Strinjam se s{" "}
                        <Link href={"#"} className="underline">
                          {" "}
                          splošnimi pogoji in pravili{" "}
                        </Link>
                      </label>
                    </div>
                  )}
                </div>
              </div>

              {activeDiv === "register" && (
                <div className="w-[300px] mobile:w-[297px] h-[48px] mt-[20px] mx-auto shadow-custom-light-dark-with-white">
                  <button
                    onClick={handleRegister}
                    className="flex w-full h-full items-center justify-center text-[16px] leading-[24px] font-medium text-[#FFFFFF] bg-gradient-to-b from-[#0D94E8] to-[#1860A3] rounded-lg"
                  >
                    Registriraj se
                  </button>
                </div>
              )}

              {activeDiv === "login" && (
                <div className="w-[300px] mobile:w-[297px] h-[48px] mt-[20px] mx-auto shadow-custom-light-dark-with-white">
                  <button
                    onClick={handleLogin}
                    className="flex w-full h-full items-center justify-center text-[16px] leading-[24px] font-medium text-[#FFFFFF] bg-gradient-to-b from-[#0D94E8] to-[#1860A3] rounded-lg"
                  >
                    Prijavi se
                  </button>
                </div>
              )}

              <div className="h-[48px] mx-auto flex justify-center items-end">
                <div className="text-[14px] font-normal text-[#414141]">Ali hitra prijava preko</div>
              </div>

              <div className="w-[320px] mobile:w-[297px] mx-auto mt-[16px] h-[52px] mobile:h-auto mobile:gap-[13px] flex flex-row mobile:flex-col justify-between items-center">
                <Link
                  href={"#"}
                  className="w-[150px] mobile:w-full h-[52px] mobile:py-[12px] shadow-custom-dark-to-white bg-[#E7EBF0] border-[#FFFFFF40] rounded-[10px] border-[0.5px] flex items-center justify-center"
                >
                  <Image src="/ico_fb.png" width={28} height={28} alt="Facebook Icon" />
                  <div className="ml-[8px] text-[16px] leading-[100%] font-medium text-[#414141]">Facebook</div>
                </Link>

                <Link
                  href={"#"}
                  className="w-[150px] mobile:w-full h-[52px] mobile:py-[12px] shadow-custom-dark-to-white bg-[#E7EBF0] border-[#FFFFFF40] border-[0.5px] rounded-[10px] flex items-center justify-center"
                >
                  <Image src="/ico_google.png" width={28} height={28} alt="Google Icon" />
                  <div className="ml-[8px] text-[16px] leading-[100%] font-medium text-[#414141]">Google</div>
                </Link>
              </div>
            </div>

            {activeDiv === "register" && (
              <div
                onClick={() => router.push("/companyregistrationpage")}
                style={{ cursor: "pointer" }}
                className="w-[345px] mobile:w-max-[340px] flex justify-end mobile:justify-start items-center mt-[30px] mobile:w-[310px] h-[43px]"
              >
                <div className="border-[1px] border-[#FFFFFF] rounded-[8px] tablet:shadow-custom-light-dark desktop:shadow-custom-light-dark bg-transparent mobile:border-[0px]">
                  <div className="px-[25px] mobile:px-[10px] py-[12px] text-[16px] text-[#FFFFFF] mobile:text-[#414141] leading-[19px] font-medium">
                    Registracija za podjetja
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
