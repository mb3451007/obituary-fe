"use client";
import Image from "next/image";
import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const FuneralInFewDays = () => {

  const list1 = [
    {
      time: "11:00",
      name: "Elizabeta Škorjanc",
    },
    {
      time: "13:00",
      name: "Marija Špes",
    },
    {
      time: "15:00",
      name: "Tatjana Štruc",
    },
    {
      time: "15:30",
      name: "Alojz Lavbič",
    },
  ];
  const list2 = [
    {
      time: "09:00",
      name: "Franc Novak",
    },
    {
      time: "11:00",
      name: "Ivan Toplišek",
    },
    {
      time: "12:00",
      name: "Franja Venc",
    },
    {
      time: "15:30",
      name: "Lucija Lokan",
    },
  ];

  return (
    <div className="w-full flex justify-center items-center mobile:bg-[#DAEBF140]">
      <div className="flex w-full h-[723px] mobile:self-center tablet:h-[729px] mobile:w-[360px] mobile:h-[684px] flex-col items-center tablet:bg-[#DAEBF140] tablet:border-t-[1px] tablet:border-b-[1px] tablet:border-b-[#D4D4D4] tablet:border-t-[#D4D4D4]">
        <div className="flex flex-col desktop:w-[1087px] desktop:h-[159px] desktop:pl-[85px] tablet:w-[598px] tablet:h-[626px] tablet:mt-[45px] mobile:w-[321px] mobile:h-[590px] mobile:mt-[28px]">
          {/*Header text*/}
          <div className="flex h-12 items-center desktop:pt-[53.65px] desktop:pb-[30px] desktop:pl-[2px] tablet:pr-[21px]">
            <div className="text-[#1E2125] text-[40px] font-variation-customOpt40 font-normal mobile:text-[28px] mobile:font-variation-customOpt28">
              Pogrebi v prihodnjih dneh
            </div>
          </div>

          {/*Input field container for desktop*/}
          <div className="flex flex-row h-12 mt-[30px] tablet:hidden mobile:hidden">
            <SearchFunc label={"Išči po imenu"} />
            <div className="w-6" />
            <SearchFunc label={"Išči po pokopališču"} />
          </div>

          <div className="flex w-[598px] h-[48px] mobile:w-[321px] tablet:block desktop:hidden mt-[38px] mobile:mt-[28px]">
            <SearchFunc label={"Išči po imenu"} />
          </div>

          {/*Torek container*/}
          <div className=" w-[598px] h-[445px] desktop:hidden mobile:w-[321px] bg-black mt-[48px] mobile:mt-[32px]">
            <div className="bg-[#CAF0F8]">
              <div className="h-[89px] w-full flex items-center border-t-[1px] justify-between">
                <div className="flex h-6 items-center pl-[31px] mobile:pl-[15px]">
                  <div className="text-[#000000] text-[28px] font-variation-customOpt28 font-light mobile:text-[24px] mobile:truncate">
                    Torek, 04.01.
                  </div>
                </div>

                <div className="flex w-[152px] h-[48px] mobile:w-[90px] mobile:h-[41px] justify-center items-center mr-7 mobile:mr-[7px]">
                  <button
                    onClick={() => scroll("left")}
                    className="hidden mobile:flex tablet:flex w-[48px] h-[48px] mobile:w-[36px] mobile:h-[36px] rounded-lg text-black justify-center items-center shadow-custom-light-dark bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF]"
                  >
                    <img
                      src="/icon_left.png"
                      alt="imgPrevious"
                      className=" w-[8.43px] h-[13.79px]"
                    />
                  </button>

                  <button
                    onClick={() => scroll("right")}
                    className="hidden mobile:flex tablet:flex ml-[52px] w-[48px] h-[48px] mobile:w-[36px] mobile:ml-[18px] mobile:h-[36px] rounded-lg text-black justify-center items-center shadow-custom-light-dark bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF]"
                  >
                    <img
                      src="/icon_right.png"
                      alt="imgPrevious"
                      className=" w-[8.43px] h-[13.79px]"
                    />
                  </button>
                </div>
              </div>

              {list1?.map((item, index) => (
                <ListView item={item} key={index} />
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-row desktop:w-[1090px] desktop:pt-[53px] tablet:h-[451px] tablet:hidden mobile:hidden ">
          <div className="mt-[29px]">
            <Image
              src="/left_gray_icon.png"
              alt="Description of the image"
              width={25}
              height={59}
              className=""
            />
          </div>
          <div className="ml-[62px] w-[420px] h-[445px] bg-black">
            <div className="  bg-[#CAF0F8]">
              <div className="h-[89px] w-full flex items-center border-t-[1px] ">
                <div className="flex h-6 items-center pl-[27px] ">
                  <div className="text-[#000000] text-[28px] font-variation-customOpt28 font-light">
                    Torek, 04.01.
                  </div>
                </div>
              </div>
              {list1?.map((item, index) => (
                <ListView item={item} key={index} />
              ))}
            </div>
          </div>
          <div className="w-[420px] h-[445px] bg-[#FFE5B4] ml-[70px]">
            <div className="  bg-transparent">
              <div className="h-[89px] w-full flex items-center border-t-[1px] ">
                <div className="flex h-6 items-center pl-[27px] ">
                  <div className="text-[#000000] text-[28px] font-variation-customOpt28 font-light">
                    Sreda, 05.01.
                  </div>
                </div>
              </div>
              {list2?.map((item, index) => (
                <ListView item={item} key={index} />
              ))}
            </div>
          </div>
          <div className="ml-[69px] mt-[29px]">
            <Image
              src="/right_gray_icon.png"
              alt="Description of the image"
              width={25}
              height={59}
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
const ListView = ({ item, key }) => {
  return (
    <div className="h-[89px] w-full flex items-center justify-between px-[20px] tablet:px-[21px] border-t-[1px] border-[#C3C6C8] ">
      <div className="flex h-6 items-center p-[1px] ">
        <p className="text-[#333333] mobile:ml-[-4px] text-[24px] font-variation-customOpt24 font-light">
          {item?.time}
        </p>
        <p className="ml-[22px] mobile:ml-[16px] text-[#333333] text-[18px] font-light">
          {item?.name}
        </p>
      </div>
      <div className="flex h-6 w-6 mobile:mr-[-5px] items-center justify-center">
        <Image
          src="/next_img.png"
          alt="Description of the image"
          width={6}
          height={9}
          className=""
        />
      </div>
    </div>
  );
};
const SearchFunc = ({ label }) => {
  return (
    <div className="flex w-[444px] h-full tablet:w-[598px] mobile:w-[321px] mobile:h-[48px] justify-between">
      <div>
        <input
          type="email"
          placeholder={label}
          className="text-[16px] leading-[24px] w-[380px] h-[100%] mobile:w-[257px] tablet:w-[490px] border-[1px] border-[#7C7C7C] rounded-lg pl-[20.8px] pr-[20.8px] tablet:pl-[22.8px] text-[#7C7C7C] bg-white font-variation-customOpt16"
        />
      </div>
      <div
        className="hidden mobile:flex desktop:flex tablet:flex justify-center w-12 tablet:w-[84px] tablet:mr-[8px] items-center h-full desktop:aspect-square
                        shadow-custom-light-dark-box 
                        rounded-lg bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF]"
      >
        <MagnifyingGlassIcon className="w-5 h-5 text-[#414141] hidden desktop:block tablet:block mobile:block" />
      </div>
    </div>
  );
};

export default FuneralInFewDays;
