"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import SideMenuAdmin from "../components/appcomponents/SideMenuAdmin";
import RevenueComp from "../components/appcomponents/RevenueComp";
import Dropdown from "../components/appcomponents/Dropdown";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const UsersAdmin = () => {
  const [whichScreen, setWhichScreen] = useState(1);
  const [whichTab, setWhichTab] = useState("");

  useEffect(() => {
    if (whichScreen == 1) {
      setWhichTab("Daily - Gifts to Users");
    } else if (whichScreen == 2) {
      setWhichTab("Users - Account Stats");
    } else if (whichScreen == 3) {
      setWhichTab("All Stats - Users");
    } else {
      setWhichTab("Users");
    }
  }, [whichScreen]);

  const tableData = [
    {
      date: "03.05.2024",
      FCA: "C",
      gifted: "Best Florist",
      city: "Belo Horizonte",
      whom: { name: "Chris Jackson", email: "ttmynewemailaddress@yahoo.com" },
      memoryPage: "Mario Danilo Primo",
      activatedDate: "03.05.2024",
      monthlyKeepers: true,
      funeralInfo: true,
      thankyouNote: true,
      condoLences: true,
      tributesETC: true,
    },
    {
      date: "03.05.2024",
      FCA: "C",
      gifted: "Best Florist",
      city: "Belo Horizonte",
      whom: { name: "Chris Jackson", email: "ttmynewemailaddress@yahoo.com" },
      memoryPage: "Mario Danilo Primo",
      activatedDate: "03.05.2024",
      monthlyKeepers: true,
      funeralInfo: false,
      thankyouNote: true,
      condoLences: false,
      tributesETC: false,
    },
    {
      date: "03.05.2024",
      FCA: "A",
      gifted: "Best Florist",
      city: "Belo Horizonte",
      whom: { name: "Chris Jackson", email: "ttmynewemailaddress@yahoo.com" },
      memoryPage: "Mario Danilo Primo",
      activatedDate: "03.05.2024",
      monthlyKeepers: true,
      funeralInfo: false,
      thankyouNote: true,
      condoLences: false,
      tributesETC: false,
    },
    {
      date: "03.05.2024",
      FCA: "F",
      gifted: "Best Florist",
      city: "Belo Horizonte",
      whom: { name: "Chris Jackson", email: "ttmynewemailaddress@yahoo.com" },
      memoryPage: "Mario Danilo Primo",
      activatedDate: "03.05.2024",
      monthlyKeepers: true,
      funeralInfo: false,
      thankyouNote: true,
      condoLences: false,
      tributesETC: false,
    },
  ];

  return (
    <div className="w-[1920px] bg-[#ECF0F3] min-h-screen pt-[80px] flex flex-row justify-start">
      <div>
        <SideMenuAdmin
          whichtab={whichTab}
          headerCheck={5}
          setWhichScreen={setWhichScreen}
        />
      </div>

      <div className="w-full bg-[#e5eaf1] pt-[60px]  py-[2px] px-[20px] flex flex-col">
        <div className="w-full py-[2px] grid grid-cols-5 justify-end items-start">
          <div
            className={`rounded-[8px] my-2 w-[310px] ounded-[8px] px-[16px] py-[14px] bg-[#fafbfc]" border-[#0A85C2] border-[2px]
               h-[110px] flex flex-row justify-between bg-[#fff]`}
          >
            <div className="flex flex-col justify-between h-[79px] w-[57%]">
              <div className="w-[200px] text-[40px] leading-[47px] font-variation-customOpt40 font-bold text-[#6D778E]">
                33
              </div>
              <div className="min-w-[50px] text-[16px] text-[#1E2125] font-medium font-variation-customOpt14 leading-[18.75px]">
                Monthly Keepers
              </div>
            </div>

            <div className="text-right">
              <div className="text-[12px] leading-[14px]  font-normal font-variation-customOpt12 text-[#6D778E] flex flex-row items-center justify-end gap-x-[4px] mt-[10px]">
                <div className=" font-normal">Monthly Keepers:</div>
                <div className="text-[16px] leading-[19px] font-variation-customOpt16 text-[#5EAE91]">
                  99
                </div>
              </div>
              <div className="text-[12px] leading-[14px]  font-normal font-variation-customOpt12 text-[#6D778E] flex flex-row items-center justify-end gap-x-[4px] mt-[10px]">
                <div className=" font-normal">Mobile Notifications:</div>
                <div className="text-[16px] leading-[19px] font-variation-customOpt16 text-[#6D778E]">
                  74
                </div>
              </div>
            </div>
          </div>

          <div
            className={`rounded-[8px] my-2 w-[310px] ounded-[8px] px-[16px] py-[14px] bg-[#fafbfc]" border-[#0A85C2] border-[2px]
               h-[110px] flex flex-row justify-between bg-[#fff]`}
          >
            <div className="flex flex-col justify-between h-[79px] w-[57%]">
              <div className="w-[200px] text-[40px] leading-[47px] font-variation-customOpt40 font-bold text-[#6D778E]">
                35
              </div>
              <div className="min-w-[50px] text-[16px] text-[#1E2125] font-medium font-variation-customOpt14 leading-[18.75px]">
                MOBI - Funeral info
              </div>
            </div>

            <div className="text-right">
              <div className="text-[12px] leading-[14px]  font-normal font-variation-customOpt12 text-[#6D778E] flex flex-row items-center justify-end gap-x-[4px] mt-[10px]">
                <div className=" font-normal">By florists:</div>
                <div className="text-[16px] leading-[19px] font-variation-customOpt16 text-[#5EAE91]">
                  26
                </div>
              </div>
              <div className="text-[12px] leading-[14px]  font-normal font-variation-customOpt12 text-[#6D778E] flex flex-row items-center justify-end gap-x-[4px] mt-[10px]">
                <div className=" font-normal"># florists:</div>
                <div className="text-[16px] leading-[19px] font-variation-customOpt16 text-[#6D778E]">
                  7
                </div>
              </div>
            </div>
          </div>

          <div
            className={`rounded-[8px] my-2 w-[310px] ounded-[8px] px-[16px] py-[14px] bg-[#fafbfc]" border-[#0A85C2] border-[2px]
               h-[110px] flex flex-row justify-between bg-[#fff]`}
          >
            <div className="flex flex-col justify-between h-[79px] w-[57%]">
              <div className="w-[200px] text-[40px] leading-[47px] font-variation-customOpt40 font-bold text-[#6D778E]">
                8
              </div>
              <div className="min-w-[50px] text-[16px] text-[#1E2125] font-medium font-variation-customOpt14 leading-[18.75px]">
                MOBI - Thank You
              </div>
            </div>

            <div className="text-right">
              <div className="text-[12px] leading-[14px]  font-normal font-variation-customOpt12 text-[#6D778E] flex flex-row items-center justify-end gap-x-[4px] mt-[10px]">
                <div className=" font-normal">By florists:</div>
                <div className="text-[16px] leading-[19px] font-variation-customOpt16 text-[#5EAE91]">
                  6
                </div>
              </div>
              <div className="text-[12px] leading-[14px]  font-normal font-variation-customOpt12 text-[#6D778E] flex flex-row items-center justify-end gap-x-[4px] mt-[10px]">
                <div className=" font-normal"># florists:</div>
                <div className="text-[16px] leading-[19px] font-variation-customOpt16 text-[#6D778E]">
                  2
                </div>
              </div>
            </div>
          </div>

          <div
            className={`rounded-[8px] my-2 w-[310px] ounded-[8px] px-[16px] py-[14px] bg-[#fafbfc]" border-[#0A85C2] border-[2px]
               h-[110px] flex flex-row justify-between bg-[#fff]`}
          >
            <div className="flex flex-col justify-between h-[79px] w-[57%]">
              <div className="w-[200px] text-[40px] leading-[47px] font-variation-customOpt40 font-bold text-[#6D778E]">
                21
              </div>
              <div className="min-w-[50px] text-[16px] text-[#1E2125] font-medium font-variation-customOpt14 leading-[18.75px]">
                MOBI - Condolences
              </div>
            </div>

            <div className="text-right">
              <div className="text-[12px] leading-[14px]  font-normal font-variation-customOpt12 text-[#6D778E] flex flex-row items-center justify-end gap-x-[4px] mt-[10px]">
                <div className=" font-normal">By florists:</div>
                <div className="text-[16px] leading-[19px] font-variation-customOpt16 text-[#5EAE91]">
                  20
                </div>
              </div>
              <div className="text-[12px] leading-[14px]  font-normal font-variation-customOpt12 text-[#6D778E] flex flex-row items-center justify-end gap-x-[4px] mt-[10px]">
                <div className=" font-normal"># florists:</div>
                <div className="text-[16px] leading-[19px] font-variation-customOpt16 text-[#6D778E]">
                  4
                </div>
              </div>
            </div>
          </div>

          <div
            className={`rounded-[8px] my-2 w-[310px] ounded-[8px] px-[16px] py-[14px] bg-[#fafbfc]" border-[#0A85C2] border-[2px]
               h-[110px] flex flex-row justify-between bg-[#fff]`}
          >
            <div className="flex flex-col justify-between h-[79px] w-[57%]">
              <div className="w-[200px] text-[40px] leading-[47px] font-variation-customOpt40 font-bold text-[#6D778E]">
                21
              </div>
              <div className="min-w-[50px] text-[16px] text-[#1E2125] font-medium font-variation-customOpt14 leading-[18.75px]">
                Tributes
              </div>
            </div>

            <div className="text-right">
              <div className="text-[12px] leading-[14px]  font-normal font-variation-customOpt12 text-[#6D778E] flex flex-row items-center justify-end gap-x-[4px] mt-[10px]">
                <div className=" font-normal">By florists:</div>
                <div className="text-[16px] leading-[19px] font-variation-customOpt16 text-[#5EAE91]">
                  2
                </div>
              </div>
              <div className="text-[12px] leading-[14px]  font-normal font-variation-customOpt12 text-[#6D778E] flex flex-row items-center justify-end gap-x-[4px] mt-[10px]">
                <div className=" font-normal"># florists:</div>
                <div className="text-[16px] leading-[19px] font-variation-customOpt16 text-[#6D778E]">
                  1
                </div>
              </div>
            </div>
          </div>

          <div
            className={`rounded-[8px] my-2 w-[310px] ounded-[8px] px-[16px] py-[14px] bg-[#fafbfc]" border-[#0A85C2] border-[2px]
               h-[110px] flex flex-row justify-between bg-[#fff]`}
          >
            <div className="flex flex-col justify-between h-[79px] w-[57%]">
              <div className="w-[200px] text-[40px] leading-[47px] font-variation-customOpt40 font-bold text-[#6D778E]">
                21
              </div>
              <div className="min-w-[50px] text-[16px] text-[#1E2125] font-medium font-variation-customOpt14 leading-[18.75px]">
                Tributes
              </div>
            </div>

            <div className="text-right">
              <div className="text-[12px] leading-[14px]  font-normal font-variation-customOpt12 text-[#6D778E] flex flex-row items-center justify-end gap-x-[4px] mt-[10px]">
                <div className=" font-normal">By florists:</div>
                <div className="text-[16px] leading-[19px] font-variation-customOpt16 text-[#5EAE91]">
                  2
                </div>
              </div>
              <div className="text-[12px] leading-[14px]  font-normal font-variation-customOpt12 text-[#6D778E] flex flex-row items-center justify-end gap-x-[4px] mt-[10px]">
                <div className=" font-normal"># florists:</div>
                <div className="text-[16px] leading-[19px] font-variation-customOpt16 text-[#6D778E]">
                  1
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[70px] ">
          <div
            className="flex flex-row
           items-center justify-between"
          >
            <h3 className="text-[32px] text-[#0A85C2] font-bold">
              October 2024
            </h3>
            <div
              className="flex flex-row
           items-center justify-between gap-2"
            >
              <div className="flex flex-row space-x-[16px] ">
                <Dropdown
                  label={"Month"}
                  isFromNotification={false}
                  isFromFlower={false}
                  isFrom={""}
                  isFromFlowerGreenBgTablet={false}
                />
                <Dropdown
                  label={"Company"}
                  isFromNotification={false}
                  isFromFlower={false}
                  isFrom={""}
                  isFromFlowerGreenBgTablet={false}
                />
                <Dropdown
                  label={"City (Company)"}
                  isFromNotification={false}
                  isFromFlower={false}
                  isFrom={""}
                  isFromFlowerGreenBgTablet={false}
                />
                <Dropdown
                  label={"Memory page"}
                  isFromNotification={false}
                  isFromFlower={false}
                  isFrom={""}
                  isFromFlowerGreenBgTablet={false}
                />
                <div className="flex h-[16px] w-[360px] tablet:hidden desktop:hidden" />
                <Dropdown
                  label={"Show all gifts"}
                  isFromNotification={false}
                  isFromFlower={false}
                  isFrom={""}
                  isFromFlowerGreenBgTablet={false}
                />
              </div>
              <div className="hidden desktop:flex justify-center w-12 items-center h-full desktop:aspect-square rounded-lg bg-[#414141]">
                <MagnifyingGlassIcon className="w-5 h-5 text-white hidden desktop:block" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[50px] w-full ">
          <table className="min-w-full border-b-[0.5px] border-[#A1B1D4] ">
            <thead className="  ">
              <tr className="">
                <th className=" py-2 text-right border-r ">
                  <div className="flex flex-row items-center justify-center text-center text-[13px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]">
                    <div className="">WHEN</div>
                    <Image
                      src={"/ico_down_arrow_memory.png"}
                      alt=""
                      width={24}
                      height={24}
                    />
                  </div>
                </th>

                <th className=" py-2 text-left border-r">
                  <div className="flex justify-center gap-2 text-[13px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]">
                    F <span className="text-[#1FBE11]">C</span>{" "}
                    <span className="text-[#EB1D1D]">A</span>
                  </div>
                </th>

                <th className=" py-2 text-right border-r ">
                  <div className="flex flex-row items-center text-center justify-center text-[13px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]">
                    <div className="">WHO GIFTED</div>
                    <Image
                      src={"/ico_down_arrow_memory.png"}
                      alt=""
                      width={24}
                      height={24}
                    />
                  </div>
                </th>
                <th className=" py-2 text-right border-r ">
                  <div className="flex flex-row items-center text-center justify-center text-[13px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]">
                    <div className="">CITY</div>
                    <Image
                      src={"/ico_down_arrow_memory.png"}
                      alt=""
                      width={24}
                      height={24}
                    />
                  </div>
                </th>
                <th className=" py-2 text-right border-r ">
                  <div className="flex flex-row items-center text-center justify-center text-[13px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]">
                    <div className="">WHOM</div>
                    <Image
                      src={"/ico_down_arrow_memory.png"}
                      alt=""
                      width={24}
                      height={24}
                    />
                  </div>
                </th>
                <th className=" py-2 text-right border-r ">
                  <div className="flex flex-row items-center text-center justify-center text-[13px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]">
                    <div className="">MEMORY PAGE</div>
                    <Image
                      src={"/ico_down_arrow_memory.png"}
                      alt=""
                      width={24}
                      height={24}
                    />
                  </div>
                </th>
                <th className=" py-2 text-right border-r ">
                  <div className="flex flex-row items-center text-center justify-center text-[13px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]">
                    <div className="">WHEN ACTIVATED</div>
                    <Image
                      src={"/ico_down_arrow_memory.png"}
                      alt=""
                      width={24}
                      height={24}
                    />
                  </div>
                </th>

                <th className=" py-2 text-center border-r text-[13px] leading-[16px] font-variation-customOpt12 font-semibold text-[#5EAE91]">
                  MONTHLY <br /> KEEPERS
                </th>
                <th className=" py-2 text-center border-r text-[13px] leading-[16px] font-variation-customOpt12 font-semibold text-[#5EAE91]">
                  FUNERAL <br /> INFO
                </th>
                <th className=" py-2 text-center border-r text-[13px] leading-[16px] font-variation-customOpt12 font-semibold text-[#5EAE91]">
                  THANK YOU <br /> NOTE
                </th>
                <th className=" py-2 text-center border-r text-[13px] leading-[16px] font-variation-customOpt12 font-semibold text-[#5EAE91]">
                  CONDO <br /> LENCES
                </th>
                <th className=" py-2 text-center border-r text-[13px] leading-[16px] font-variation-customOpt12 font-semibold text-[#5EAE91]">
                  TRIBUTES <br /> ETC
                </th>
              </tr>
            </thead>
            <tbody className="">
              {tableData.map((data, index) => (
                <tr
                  key={index}
                  className={`border-[0.5px] border-[#A1B1D4] max-h-[64px] ${
                    index === 0 ? "bg-[#F7F9FA70]" : ""
                  }`}
                >
                  <td className=" text-[12px] py-6 text-center font-normal text-[#3C3E41]">
                    {data.date}
                  </td>
                  <td
                    className={`text-[14px] font-semibold py-6 text-center font-normal ${
                      data.FCA.toUpperCase() == "F" && "text-[#3C3E41]"
                    } ${data.FCA.toUpperCase() == "C" && "text-[#1FBE11]"} ${
                      data.FCA.toUpperCase() == "A" && "text-[#EB1D1D]"
                    }`}
                  >
                    {data.FCA}
                  </td>
                  <td className=" text-[12px] py-6 text-center font-normal text-[#3C3E41]">
                    {data.gifted}
                  </td>
                  <td className=" text-[12px] py-6 text-center font-normal text-[#3C3E41]">
                    {data.city}
                  </td>
                  <td className="flex flex-col  text-[12px] py-6 text-center font-normal text-[#3C3E41]">
                    <div className="text-[12px] text-[#6D778E]">
                      {data.whom.name}
                    </div>
                    <div className="text-[8px]">{data.whom.email}</div>
                  </td>
                  <td className=" text-[12px] py-6 text-center font-normal text-[#3C3E41]">
                    {data.memoryPage}
                  </td>
                  <td className=" text-[12px] py-6 text-center font-normal text-[#3C3E41]">
                    {data.activatedDate}
                  </td>
                  <td className="text-[12px] py-6 text-center font-normal text-[#3C3E41]">
                    {data.monthlyKeepers ? (
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="m-auto"
                      >
                        <circle cx="6" cy="6" r="6" fill="#3DA34D" />
                      </svg>
                    ) : (
                      ""
                    )}
                  </td>
                  <td className="text-[12px] py-6 text-center font-normal text-[#3C3E41]">
                    {data.funeralInfo ? (
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="m-auto"
                      >
                        <circle cx="6" cy="6" r="6" fill="#3DA34D" />
                      </svg>
                    ) : (
                      ""
                    )}
                  </td>
                  <td className="text-[12px] py-6 text-center font-normal text-[#3C3E41]">
                    {data.thankyouNote ? (
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="m-auto"
                      >
                        <circle cx="6" cy="6" r="6" fill="#3DA34D" />
                      </svg>
                    ) : (
                      ""
                    )}
                  </td>
                  <td className="text-[12px] py-6 text-center font-normal text-[#3C3E41]">
                    {data.condoLences ? (
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="m-auto"
                      >
                        <circle cx="6" cy="6" r="6" fill="#3DA34D" />
                      </svg>
                    ) : (
                      ""
                    )}
                  </td>
                  <td className="text-[12px] py-6 text-center font-normal text-[#3C3E41]">
                    {data.tributesETC ? (
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="m-auto"
                      >
                        <circle cx="6" cy="6" r="6" fill="#3DA34D" />
                      </svg>
                    ) : (
                      ""
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UsersAdmin;
