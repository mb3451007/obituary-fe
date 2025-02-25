"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Anniversaries = () => {
  const data = [
    {
      img: "/name_sanpaoli.png",
      val1: "86",
      val2: "734",
      val3: "48",
      val4: "25",
      date: "16.04.2028",
      date2: "28.09.2024",
      name: "Angela",
      surname: "Sanpaoli",
      location: "Palermo",
      className: "border-gradient-purple",
    },
    {
      img: "/name_bismarchk.png",
      val1: "62",
      val2: "462",
      val3: "32",
      val4: "18",
      date: "19.06.2025",
      date2: "02.01.2025",
      name: "Otto",
      surname: "von Bismarck",
      location: "Schönhausen",
      className: "border-gradient-purple",
    },
    {
      img: "/name_gonzales.png",
      val1: "28",
      val2: "173",
      val3: "11",
      val4: "3",
      date: "-",
      date2: "25.09.2024",
      name: "Juan Pedro",
      surname: "Gonzales Ochoa",
      location: "Santo Domingo",
      className: "border-gradient-blue",
    },
    {
      img: "/name_marco.png",
      val1: "44",
      val2: "377",
      val3: "6",
      val4: "2",
      date: "14.09.2024",
      date2: "05.10.2024",
      name: "Antonio ",
      surname: "di Marco",
      location: "Verona",
      className: "border-gradient-mix",
    },
    {
      img: "/name_tesla.png",
      val1: "13",
      val2: "112",
      val3: "21",
      val4: "7",
      date: "-",
      date2: "19.02.2025",
      name: "Nikola ",
      surname: "Tesla",
      location: "Belgrade",
      className: "border-gradient-blue",
    },
  ];

  return (
    <div className="flex flex-col mt-[32px] tabletUserAcc:mt-[52px] desktopUserAcc:mt-[62px] ">
      <div className="justify-end hidden mobileUserAcc:flex">
        <Image src={"/scroll_icon.png"} width={64} height={64} />
      </div>
      <div className="flex desktopUserAcc:flex-col w-full flex-row gap-5 pr-[37px] mobileUserAcc:pr-[0]">
        <div className="hidden desktopUserAcc:flex justify-between items-center  w-full ">
          <h1 className="text-[#0A85C2] text-[14px] font-semibold ">
            MOJI SKRBNIKI
          </h1>
          <div className="flex items-center gap-[80px]">
            <div className="text-[#1E2125] text-[14px] font-light ">
              Skupno žalnih vsebin
            </div>
            <div className="text-[#1E2125] text-[14px] font-light">
              Obarvan okvir - spominska ima Skrbnika
            </div>
          </div>
        </div>
        <div
          className="flex desktopUserAcc:flex-col gap-4 mobileUserAcc:gap-3 mt-[50px] mobileUserAcc:mt-5 tabletUserAcc:overflow-x-scroll mobileUserAcc:overflow-x-scroll tabletUserAcc:snap-x mobileUserAcc:snap-x snap-mandatory"
          style={{
            scrollbarWidth: "none",
          }}
        >
          {data.map((item, index) => (
            <React.Fragment key={index}>
              {/* Mobile View */}
              <div className="flex desktopUserAcc:hidden flex-col items-start gap-3">
                {/* First item */}
                {/* 23 October 2024 */}
                <Link
                  href={item.name === "Angela" ? "/memorypage" : ""}
                  className={`flex flex-col justify-center items-center w-[210px] mobileUserAcc:w-[160px] h-[90px] mobileUserAcc:h-[73px] mobileUserAcc:items-center py-[13px] px-[3px] border-[2px] border-[#0A85C2] rounded-[8px] ${item.className}`}
                >
                  <h2 className="text-[16px] text-[#6D778E] font-normal flex flex-col items-center leading-[18.75px] pb-[4px]">
                    {item.name} <br />{" "}
                    <span className="text-[18px] pt-[2px] font-normal text-[#1E2125]">
                      {item.surname}
                    </span>
                  </h2>
                  <p className="text-[14px] text-[#6D778E] font-normal leading-[16.41px]">
                    {item.location}
                  </p>
                </Link>

                {/* Second item */}
                <div className="w-[210px] h-[60px] mobileUserAcc:w-[160px]">
                  <TextView text={"SKUPNO PRISPEVKOV:"} val={item.val1} />
                  <div className="h-1" />
                  <TextView text={"OBISKOV STRANI:"} val={item.val2} />
                </div>

                {/* Third item */}
                <div className="w-[215px] h-[61px] mobileUserAcc:w-[160px]">
                  <TextStyle
                    text={"Tvoj zadnji obisk: " + item.date}
                    size={"text-[14px]"}
                  />
                  <div className="h-1" />
                  <TextView text={"Skupno prižganih svečk:"} val={item.val3} />
                  <div className="h-1" />
                  <TextStyle
                    text={"Zadnja svečka: " + item.date2}
                    size={"text-[14px]"}
                  />
                </div>

                <div className="w-[210px] mobileUserAcc:w-[160px] h-[60px] flex justify-center items-center">
                  <CommonView isLeft={false} val={""} date={item.date} />
                </div>

                {/* fourth item */}
                <div className="flex w-[155px] tabletUserAcc:w-[205px]  mt-[33px]   tabletUserAcc:mt-[38px] ">
                  <div className="h-[73px] tabletUserAcc:h-[90px] w-[100%] bg-gradient-to-b from-[#0D94E8] to-[#1860A3] flex justify-center items-center rounded-tl-[7px] rounded-br-[7px] p-[2px] relative overflow-hidden">
                    <div
                      className="h-[69px] tabletUserAcc:h-[86px] w-[100%] bg-[#FFFFFF] cursor-pointer flex-col
    flex pl-[14px] justify-center rounded-tl-[5px] rounded-br-[5px]"
                    >
                      <TextStyle
                        text={"Naslednja obletnica"}
                        size={"text-[14px]"}
                      />
                      <div
                        className={`text-[16px] ${
                          item.date2 === "22.10.2024" ||
                          item.date2 === "28.09.2024" ||
                          item.date2 === "25.09.2024"
                            ? "text-[#EB1D1D]"
                            : "text-[#6D778E]"
                        } font-medium leading-[18px] mt-[5px]`}
                      >
                        {item.date2}
                      </div>
                      <TextStyle
                        text={item.date === "-" ? "Dan slovesa" : "Dan rojstva"}
                        size={"text-[14px]"}
                      />
                    </div>
                    {/* Ensure the image scrolls along with the card */}
                    <div className="flex justify-center items-center bg-gradient-to-b from-[#237FD4] to-[#1860A3] h-[25px] w-[25px] tabletUserAcc:w-[30px] tabletUserAcc:h-[30px] absolute z-0 bottom-0 right-0 rounded-br-[4px] rounded-tl-[5px]">
                      <Image
                        src={"/ico_arrow_right_popup.png"}
                        height={10}
                        width={10}
                        className="h-5 w-5 tabletUserAcc:w-6 tabletUserAcc:h-6"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop View */}
              {/* 23 October 2024 */}
              <div className="hidden desktopUserAcc:flex items-start justify-between">
                <Link
                  href={item.name === "Angela" ? "/memorypage" : ""}
                  className={`flex flex-col justify-center items-center w-[230px] h-[73px] mobileUserAcc:w-full mobileUserAcc:flex-row mobileUserAcc:justify-around mobileUserAcc:items-center py-[13px] border-[2px] border-[#0A85C2] rounded-[8px] ${item.className}`}
                >
                  <h2 className="text-[16px] text-[#1E2125] font-normal leading-[18.75px] pb-2">
                    {item.name} <span>{item.surname}</span>
                  </h2>
                  <p className="text-[14px] text-[#6D778E] font-normal leading-[16.41px]">
                    {item.location}
                  </p>
                </Link>

                <div className="flex flex-col justify-center pl-[15px] w-[204px] h-[74px]">
                  <TextView text={"ŽALNIH VSEBIN:"} val={item.val1} />
                  <div className="h-[5px]" />
                  <TextView text={"OBISKOV STRANI:"} val={item.val2} />
                </div>

                <div className="flex justify-between gap-2">
                  <div className="w-[105px] h-[73px] flex justify-center items-center">
                    <CommonView isLeft={true} val={item.val3} date={""} />
                  </div>
                  <div className="w-[125px] h-[73px] flex justify-center items-center">
                    <CommonView isLeft={false} val={item.val4} date={""} />
                  </div>
                  <div className="w-[115px] h-[73px] flex justify-center items-center">
                    <CommonView isLeft={false} val={""} date={item.date} />
                  </div>
                </div>

                <div className="w-[153px] rounded-tl-[7px] rounded-br-[7px] ml-2">
                  <div className="border-gradient-blue h-[73px] min-w-[153px] w-full flex justify-center items-center rounded-tl-[7px] rounded-br-[7px] p-[2px]">
                    <div className="cursor-pointer flex-col flex justify-center rounded-tl-[5px] rounded-br-[5px]">
                      <TextStyle
                        text={"Naslednja obletnica"}
                        size={"text-[13px]"}
                      />
                      <div
                        className={`text-[16px] ${
                          item.date2 === "22.10.2024" ||
                          item.date2 === "28.09.2024" ||
                          item.date2 === "25.09.2024"
                            ? "text-[#EB1D1D]"
                            : "text-[#6D778E]"
                        } font-medium leading-[18px] mt-[5px]`}
                      >
                        {item.date2}
                      </div>
                      <TextStyle
                        text={item.date === "-" ? "Dan slovesa" : "Dan rojstva"}
                        size={"text-[12px]"}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Display the heading after the second card */}
              {index === 1 && (
                <div className="text-[#0A85C2] text-[14px] font-semibold mt-[50px] hidden desktopUserAcc:flex">
                  SPOMINSKE, KJER SEM SODELOVAL/A
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className=" justify-end  hidden tabletUserAcc:flex">
        <Image src={"/scroll_icon.png"} width={64} height={64} />
      </div>

      <div className="tabletUserAcc:hidden desktopUserAcc:hidden flex flex-col mt-[20px]  ">
        <div className="flex items-center ml-[90px]">
          <Image src={"/rect_blue_icon.png"} alt="" width={19} height={10} />
          <div className=" ml-3 text-[#717B8C] text-[12px] font-normal ">
            obarvano ozadje - stran ima Skrbnika
          </div>
        </div>
        <div className="flex items-center ml-[90px]">
          <Image src={"/rect_perp_icon.png"} alt="" width={19} height={10} />
          <div className="ml-3 text-[#717B8C] text-[12px] font-normal ">
            vijolični okvir - kjer si ti Skrbnik
          </div>
        </div>
      </div>
    </div>
  );
};

function TextView({ text, val }) {
  return (
    <div className="flex items-center ">
      <TextStyle text={text} size={"text-[14px]"} />
      <div className=" text-[#6D778E] text-[18px] tabletUserAcc:text-[16px] mobileUserAcc:text-[14px] font-bold desktopUserAcc:pb-1  ml-[5px] leading-4 ">
        {val}
      </div>
    </div>
  );
}

function CommonView({ isLeft, val, date }) {
  return (
    <div
      className={`flex flex-row desktopUserAcc:flex-col w-full ${
        isLeft && "items-end"
      } ${date != "" ? "items-center" : ""} `}
    >
      <TextStyle
        text={date == "" ? "Zadnji obisk" : "Skrbnik do:"}
        size={"text-[14px]"}
      />
      <TextStyle text={date == "" ? "09.02.2024" : date} size={"text-[14px]"} />
      {date == "" ? (
        <div className="text-[14px] text-[#6D778E] font-normal">
          Skupno: {val}
        </div>
      ) : null}
    </div>
  );
}

function TextStyle({ text, size }) {
  return (
    <div
      className={`${size}  ${
        text == "14.09.2024" ? "text-[#EB1D1D]" : "text-[#6D778E]"
      }  font-normal leading-[16.41px] mobileUserAcc:text-[12px] pt-1`}
    >
      {text}
    </div>
  );
}

export default Anniversaries;
