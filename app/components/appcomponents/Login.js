"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Checkbox } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { toast } from "react-hot-toast";
import authService from "@/services/auth-service";

const Login = () => {
  const router = useRouter();

  const [inputValueEmail, setInputValueEmail] = useState("");
  const [inputValueGeslo, setInputValueGeslo] = useState("");
  const [enabledRememberMe, setEnabledRememberMe] = useState(true);

  const handleEmailInput = (event) => {
    setInputValueEmail(event.target.value);
  };

  const handleGesloInput = (event) => {
    setInputValueGeslo(event.target.value);
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
    <div
      className="relative max-w-[1920px] min-h-screen mobile:pb-[41px] mobile:pt-[71px] desktop:bg-[url('/login_ozadje.avif')] tablet:bg-[url('/ozadje_klop_tablica.avif')]
      mobile:bg-[url('/mobi_ozadje.avif')]
      bg-cover bg-center w-full desktop:mt-[92.02px] mobile:mt-[72px] tablet:mt-[79px] flex justify-end mx-auto"
    >
      <div className="w-screen h-screen fixed top-0 left-0 z-30 bg-gray-900 opacity-90"></div>
      <div className="flex flex-col desktop:mx-16 tablet:mx-16">
        <div
          onClick={() => router.push("/registrationpage")}
          style={{ cursor: "pointer" }}
          className="w-[360px] mobile:w-max-[340px] flex justify-between mobile:justify-between items-center my-[30px] mobile:w-[310px] h-[43px] z-40"
        >
          <div
            link
            className="border-[1px] border-[#FFFFFF] rounded-[8px] shadow-custom-light-dark bg-transparent"
          >
            <div className="px-[25px] mobile:px-[10px] py-[12px] text-[16px] text-[#FFFFFF] leading-[19px] font-variation-customOpt16">
              REGISTRACIJA
            </div>
          </div>
        </div>

        <div
          className="w-[360px] p-8 pt-5 tablet:pb-[54px] desktop:pb-[54px] mobile:w-full flex flex-col
       bg-white desktop:backdrop-blur tablet:backdrop-blur rounded-2xl border-[2px] border-[#FFFFFF] desktop:shadow-lg tablet:shadow-lg mobile:border-[0px] z-40"
        >
          {/* Content goes here */}
          <div
            className="text-[32px] font-variation-customOpt32 mt-[17px] mx-auto text-[#1E2125] font-semibold mobile:text-[28px] 
        mobile:font-variation-customOpt28 mobile:font-[600px]"
          >
            Prijava
          </div>
          <div className="text-[16px] font-semibold leading-[24px] font-[400px] mx-auto text-[#414141] mobile:text-[14px]">
            v uporabniški račun
          </div>
          <div className="text-[12px] text-[#414141] text-center mt-2">
            Prijava je potrebna, da se ohrani pieteta do pokojnih in prepreči
            smetenje na spominski strani (spam).{" "}
          </div>

          {/* Container for text inputs and forgot password and checkbox */}
          <div className="w-full h-auto mobile:w-full mobile:h-auto mt-[10px] mx-auto flex flex-col ">
            {/* <div className=" text-[#6D778E] text-[14px] leading-[20px] font-[400px] w-full h-[62px] flex flex-col justify-start items-start">
              <div>Ime</div>
              <div className="px-[10px] mt-[4px] h-[38px] rounded-[6px] bg-[#F2F8FF66] shadow-custom-dark-to-white w-full">
                <input
                  type="email"
                  value={inputValueName}
                  onChange={handleNameInput}
                  className="w-full h-full bg-transparent focus:outline-none text-[#848484]"
                />
              </div>
            </div> */}

            {/* Container for email field */}
            <div className=" text-[#6D778E] text-[14px] leading-[20px] font-[400px] w-full mt-[10px] h-[62px] flex flex-col justify-start items-start">
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

            {/* Container for checkboxes */}
            <div className=" flex flex-col items-center mt-[25px]">
              {/* Container for forgot password and remember me */}
              <div className=" flex w-full justify-between items-center mt-[-9px]">
                {/* Checkbox */}
                <label className="flex flex-1 justify-start mt-[3px] ml-[2px] font-custom400 text-[12px] text-[#6D778E]">
                  <Checkbox
                    checked={enabledRememberMe}
                    onChange={setEnabledRememberMe}
                    className="mr-[12px] justify-center items-center group w-[18px] h-[18px] rounded-[2px] border-[2px] border-[#6D778E] bg-white/10 ring-white/15 ring-inset data-[checked]:bg-[#6D778E]"
                  >
                    <CheckIcon className="hidden ml-[-1px] size-4 rotate-6 fill-white group-data-[checked]:block" />
                  </Checkbox>
                  Zapomni si
                </label>
                {/*  */}
                <Link
                  href="#"
                  className="flex font-custom400 mt-[3px] text-[12px] leading-[20px] font-variation-customOpt12 text-[#6D778E] justify-end "
                >
                  Pozabljeno geslo
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full mobile:w-full h-[48px] mt-[20px] mx-auto shadow-custom-light-dark-with-white">
            <button
              onClick={handleLogin}
              className="flex w-full h-full bg-white items-center justify-center text-[16px] leading-[24px] font-variation-customOpt16 text-[#FFFFFF] bg-gradient-to-b from-[#0D94E8] to-[#1860A3] rounded-lg"
            >
              Prijavi se
            </button>
          </div>

          <div className="h-[48px] mx-auto flex justify-center items-end">
            <div className="text-[14px] font-[400px] text-[#414141]">
              Ali hitra prijava preko
            </div>
          </div>
          <div className="w-full mobile:w-full mx-auto mt-[16px] h-[52px] mobile:h-auto mobile:gap-[13px] flex flex-row mobile:flex-col justify-between items-center gap-4">
            <Link
              href={"#"}
              className="w-[200px] mobile:w-full h-[52px] mobile:py-[12px] shadow-custom-dark-to-white bg-[#E7EBF0] border-[#FFFFFF40] rounded-[10px] border-[0.5px] flex items-center justify-center"
            >
              <Image
                src={"/ico_fb.png"}
                width={28}
                height={28}
                alt="Facebook Icon"
              />
              <div className="ml-[8px] text-[16px] leading-[100%] font-variation-customOpt16 text-[#414141]">
                Facebook
              </div>
            </Link>

            <Link
              href={"#"}
              className="w-[200px] mobile:w-full h-[52px] mobile:py-[12px] shadow-custom-dark-to-white bg-[#E7EBF0] border-[#FFFFFF40] border-[0.5px] rounded-[10px] flex items-center justify-center"
            >
              <Image
                src={"/ico_google.png"}
                width={28}
                height={28}
                alt="Google Icon"
              />
              <div className="ml-[8px] text-[16px] leading-[100%] font-variation-customOpt16 text-[#414141]">
                Google
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
