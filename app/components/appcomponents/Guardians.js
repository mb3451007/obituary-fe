"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Guardians = () => {
  const cardsData = [
    {
      title: "432",
      content: "Skupno obiskov",
      image: "/Total.png",
      price: "Skupno obiskovalcev:",
      cost: "156",
      background: "linear-gradient(180deg, #0D94E8 0%, #10579B 100%)",
      size: { width: "64px", height: "42.67px" },
    },
    {
      title: "1335",
      time: "min",
      content: "Čas preživet na strani",
      image: "/Time.svg",
      price: "Minut v maju:",
      cost: "236",
      background: "linear-gradient(180deg, #63B8F3 0%, #1F6BB2 100%)",
      size: { width: "42px", height: "40px" },
    },
    {
      title: "22",
      content: "Žalnih vsebin",
      image: "/magnifier.svg",
      price: "Darovalcev:",
      cost: "16",
      background: "linear-gradient(180deg, #A5DAFF 0%, #5BA8DE 100%)",
      size: { width: "42px", height: "42px" },
    },
    {
      title: "191",
      content: "Dnevnih svečk",
      image: "/img_candle_users_acc.png",
      price: "Premium svečk:",
      cost: "6",
      background: "linear-gradient(180deg, #81D6F1 0%, #419CBE 100%)",
      size: { width: "46px", height: "50px" },
    },
  ];

  const [activeTab, setActiveTab] = useState("John Doe");

  const [isTableVisible, setIsTableVisible] = useState(false);

  const toggleTableVisibility = () => {
    setIsTableVisible((prev) => !prev);
  };

  return (
    <div className="flex flex-col w-full">
      <div
        // 21 october 2024 - desktopUserAcc:pr-[20px]
        className="flex mt-[86px] tabletUserAcc:mt-[46px] gap-y-5 mobileUserAcc:gap-y-3 flex-col pr-0
              mobileUserAcc:mt-[27px] desktopUserAcc:w-[975px] w-[100%]"
      >
        <div className="flex tabletUserAcc:flex-col-reverse mobileUserAcc:flex-col flex-row justify-between">
          <div className="flex flex-wrap gap-[16px]">
            <button
              className={`px-4 py-2 h-12 rounded-lg p-6 min-w-[116px] ${
                activeTab === "John Doe"
                  ? "bg-gradient-to-t from-[#530CC6] to-[#0D94E8] text-white"
                  : "bg-white text-[#6D778E] border-gradient"
              }`}
              onClick={() => setActiveTab("John Doe")}
            >
              John Doe
            </button>
            <button
              className={`px-4 py-2 h-12 rounded-lg p-6 min-w-[116px] ${
                activeTab === "Juan Pedro Ochoa"
                  ? "bg-gradient-to-t from-[#530CC6] to-[#0D94E8] text-white"
                  : "bg-white text-[#6D778E] border-gradient"
              }`}
              onClick={() => setActiveTab("Juan Pedro Ochoa")}
            >
              Juan Pedro Ochoa
            </button>
            <button
              className={`px-4 py-2 h-12 rounded-lg p-6 min-w-[116px] ${
                activeTab === "Albert Einstein"
                  ? "bg-gradient-to-t from-[#530CC6] to-[#0D94E8] text-white"
                  : "bg-white text-[#6D778E] border-gradient"
              }`}
              onClick={() => setActiveTab("Albert Einstein")}
            >
              Albert Einstein
            </button>
          </div>
          {/* 17 October 2024 - tabletUserAcc:max-w-[950px] */}
          <div className="ml-[49px] tabletUserAcc:mb-5 tabletUserAcc:max-w-[950px] mobileUserAcc:mt-5 md:m-2 flex justify-end items-end mobileUserAcc:ml-[22px] h-[25px] text-[18px] font-normal text-[#0D94E8]">
            <p className="border-b-2 border-[#0D94E8]">Dodaj novega Skrbnika</p>
          </div>
        </div>

        <div className="flex justify-between items-center gap-[26px] mt-7 ">
          {/* 22 October 2024 */}
          <div className="flex desktopUserAcc:w-[403px] w-full flex-col tabletUserAcc:flex-row justify-between mobileUserAcc:flex-col">
            {/* 22 October 2024 mobileUserAcc:items-start */}
            <div className="flex w-full justify-between items-center mobileUserAcc:items-start mobileUserAcc:flex-col">
              <h1
                className="text-[32px] m-0 leading-[38px] font-variation-customOpt32 font-semibold text-[#530CC6] "
                style={{
                  fontVariationSettings: "'wdth' 50,'wght' 600,'opsz' 32",
                }}
              >
                {/* 25 October 2024 */}
                {activeTab}
              </h1>

              <div className="text-[16px] text-[#6D778E] font-variation-customOpt16 mt-[2px] mobileUserAcc:mt-3 hidden tabletUserAcc:flex">
                Status Skrbnika traja do:
                <span
                  style={{
                    // this is for tablet
                    color: "#530CC6",
                    fontWeight: 500,
                    fontSize: "20px",
                    lineHeight: "18px",
                    fontVariationSettings: "'opsz' 20",
                    fontVariationSettings: "'wdth' 50",
                    marginLeft: "4px",
                  }}
                >
                  22.05.2026
                </span>
              </div>

              <div className="text-[16px] text-[#6D778E] font-variation-customOpt16 mobileUserAcc:mt-3 hidden mobileUserAcc:flex">
                Status Skrbnika traja do:
                <span
                  style={{
                    // this text is for mobile to show
                    color: "#6D778E",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "23px",
                    fontVariationSettings: "'opsz' 16",
                    fontVariationSettings: "'wdth' 50",
                    marginLeft: "8px",
                  }}
                >
                  22.05.2026
                </span>
              </div>
            </div>

            <div className="mobileUserAcc:flex flex-row justify-end hidden">
              <Image
                src="/scroll_icon.png"
                className="w-16 h-16 object-cover"
                width={64}
                height={64}
              />
            </div>
          </div>
          <div className="hidden desktopUserAcc:flex justify-center items-center border-gradient rounded-lg bg-white desktopUserAcc:w-[300px] h-[60px] w-full">
            <Link href={"/memorypage"} className="flex items-center">
              <p
                className=" p-2 m-0 font-variation-customOpt14 flex text-[#0A85C2] text-[24px] font-semibold"
                style={{
                  fontVariationSettings: "'wdth' 50,'wght' 600,'opsz' 24",
                }}
              >
                Dopolni / uredi to stran
              </p>
              <Image
                src="/img_left_arrow.png"
                className="w-6 h-6 object-cover"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>

        <div
          // 25 October 2024 - gap-[28px]
          className="ml-[10px] flex overflow-y-hidden desktopUserAcc:justify-between mobileUserAcc:mt-[24px] gap-[24px] tabletUserAcc:overflow-x-scroll tabletUserAcc:ml-3 mobileUserAcc:ml-3 mobileUserAcc:overflow-x-scroll mobileUserAcc:space-x-1 tabletUserAcc:space-x-1 py-4 pb-6 tabletUserAcc:snap-x mobileUserAcc:snap-x snap-mandatory"
          style={{ scrollbarWidth: "none" }}
        >
          {cardsData.map((card, index) => (
            // 22 October 2024 - mobileUserAcc:pl-[10px]
            <div
              className="snap-start mobileUserAcc:pl-[10px] relative pl-[10px]"
              key={index}
            >
              <div
                className="flex flex-col items-center text-center rounded-[40px] shadow-lg"
                style={{
                  // 21 October 2024 - width: "224px",
                  width: "206px",
                  height: "330.14px",
                  background:
                    "linear-gradient(90deg, #FFFFFF 0%, #E6E6E6 100%)",
                  boxShadow:
                    "#CCCCCC -13px 10px 4px -2px, #CCCCCC 3px 11px 14px -4px",
                }}
              >
                <div
                  // 22 October 2024 - rounded-t-[40px]
                  className="w-full py-6 rounded-t-[40px] h-[84.55px]"
                  style={{
                    background: card.background,
                    clipPath: "ellipse(100% 55% at 48% 44%)",
                  }}
                >
                  <h2 className="text-[40px] leading-[46.88px] font-normal text-white">
                    {card.title}{" "}
                    <span className="text-[32px]">{card.time}</span>
                  </h2>
                </div>
                <div
                  className="w-full py-3 rounded-b-3xl flex flex-col justify-around items-center h-[236.16px]"
                  style={{
                    background:
                      "linear-gradient(90deg, #FFFFFF 0%, #E6E6E6 100%)",
                  }}
                >
                  {/* 21 October 2024 */}
                  <p
                    className="text-[#808080] text-nowrap text-[18px] font-normal px-2 h-5 leading-6"
                    style={{
                      fontVariationSettings: "'wdth' 75,'wght' 400,'opsz' 18",
                    }}
                  >
                    {card.content}
                  </p>
                  {card.image && (
                    <img
                      src={card.image}
                      alt={card.title}
                      className="mt-2"
                      style={{
                        width: card.size.width,
                        height: card.size.height,
                      }}
                    />
                  )}

                  <p
                    className="text-[#FFFFFF] text-sm font-light w-full h-[30px] flex justify-center items-center"
                    style={{
                      background: card.background,
                    }}
                  >
                    {card.price}{" "}
                    <span className="text-[16px] font-bold pl-1">
                      {card.cost}
                    </span>
                  </p>
                </div>
              </div>
              <img
                src={"/shadow.svg"}
                alt="shadow"
                className="absolute inset-x-0 bottom-[-25px] ml-3 w-[200px] h-[10.13px] object-contain"
              />
            </div>
          ))}
        </div>

        <div className="hidden desktopUserAcc:flex justify-end text-[16px] font-normal text-[#6D778E] text-end mt-[10.87px]">
          Status Skrbnika traja do:{" "}
          <span className="text-[#530CC6] font-medium">22.05.2026</span>
        </div>

        <div className="flex desktopUserAcc:hidden justify-between items-center w-full mt-7">
          <Link
            href={"/memorypage"}
            style={{
              color: "#0A85C2",
              fontWeight: 600,
              fontSize: "24px",
              lineHeight: "28px",
              fontVariationSettings: "'opsz' 24",
              fontVariationSettings: "'wdth' 50",
            }}
            // 22 October 2024 - mobileUserAcc:w-full
            className="border-gradient p-3 m-0 h-[60px] mobileUserAcc:w-full tabletUserAcc:w-[334px] tabletUserAcc:justify-between items-center mobileUserAcc:justify-between font-variation-customOpt14 flex rounded-lg bg-white text-[#0A85C2] text-[24px] font-semibold border-2 border-[#0D94E8]"
          >
            Dopolni / uredi to stran
            <Image
              src="/img_left_arrow.png"
              className="w-8 h-10 object-cover"
              width={28}
              height={32}
            />
          </Link>

          <div className="tabletUserAcc:flex hidden">
            <Image
              src="/scroll_icon.png"
              className="w-16 h-16 object-cover"
              width={64}
              height={64}
            />
          </div>
        </div>

        {/* 25 October 2024 */}
        <div className="flex flex-col mt-[20px] tabletUserAcc:w-full desktopUserAcc:mt-[103px] tabletUserAcc:mt-[30px] justify-between w-full  mobileUserAcc:w-full  items-start ">
          {/* 22 October 2024 - mobileUserAcc:w-full bg-[#FFFFFFCC] mobileUserAcc:rounded-[8px]  */}
          <div className="flex justify-between w-full  bg-[#FFFFFFCC] desktopUserAcc:bg-transparent rounded-[8px] items-center mb-3 desktopUserAcc:max-w-[326px] tabletUserAcc:max-w-[334px]">
            <div
              style={{
                color: "#0A85C2",
                fontWeight: 600,
                fontSize: "24px",
                lineHeight: "28px",
                fontVariationSettings: "'opsz' 24",
                fontVariationSettings: "'wdth' 50",
              }}
              className="text-[24px] md:text-[24px] text-[#0A85C2] tabletUserAcc:shadow-custom-light-dark mobileUserAcc:shadow-custom-light-dark justify-between font-semibold rounded-lg h-[60px] flex items-center p-3 desktopUserAcc:bg-transparent  desktopUserAcc:border-none w-full "
              onClick={toggleTableVisibility}
            >
              <span>Vse objave na tej strani</span>
              {/*For Mobile-only*/}
              {!isTableVisible ? (
                <Image
                  src="/img_left_arrow.png"
                  className="w-8 h-10 object-cover"
                  width={28}
                  height={32}
                />
              ) : (
                <Image
                  src="/img_down_arrow.png"
                  className="w-7 h-7 border-2 mx-1 border-[#EB1D1D] p-2 px-1.5" // Only show on mobile when visible
                  width={32}
                  height={32}
                />
              )}
            </div>

            {/* <Image
              src="/img_down_arrow.png"
              className="w-7 h-7 ml-7 border-2 border-[#EB1D1D] p-2 px-1.5 hidden tabletUserAcc:block desktopUserAcc:block"
              width={32}
              height={32}
            /> */}
          </div>

          <div
            className={`overflow-x-auto w-full ${
              isTableVisible ? "block" : "hidden"
            }`}
          >
            <table className="w-full tabletUserAcc:max-w-[950px]">
              <thead>
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#3C3E41] border-b border-[#A1B1D4] w-[180px]">
                    DAN
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#3C3E41] border-b border-[#A1B1D4]">
                    PRISPEVKI
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-[#FFFFFF80]">
                  <td className="px-6 py-2 border-b border-[#A1B1D4] text-sm font-normal text-[#3C3E41]">
                    21.12.2023 14:22
                  </td>
                  <td className="px-6 py-2 border-b border-[#A1B1D4] text-base font-normal text-[#3C3E41]">
                    <strong className="text-[#6D778E] text-sm font-normal">
                      Sistem
                    </strong>
                    <br /> Spominska stran izdelana
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-2 border-b border-[#A1B1D4] text-sm font-normal text-[#3C3E41]">
                    21.12.2023 14:26
                  </td>
                  <td className="px-6 py-2 border-b border-[#A1B1D4] text-base font-normal text-[#3C3E41]">
                    <strong className="text-[#6D778E] text-sm font-normal">
                      John Wayne
                    </strong>
                    <br />
                    Sožalje
                  </td>
                </tr>

                <tr className="bg-[#FFFFFF80] border-b border-[#A1B1D4]">
                  <td className="px-6 py-2 text-sm font-normal text-[#3C3E41]">
                    22.12.2023 14:22
                  </td>
                  <td className="px-6 py-2 text-base font-normal text-[#EB1D1D]">
                    <strong className="text-[#6D778E] text-sm font-normal">
                      Christina V.
                    </strong>
                    <br />
                    Aktivacija Skrbnika
                  </td>
                </tr>

                <tr className="bg-[#FFFFFF80] border-b border-[#A1B1D4]">
                  <td className="px-6 py-2 text-sm font-normal text-[#3C3E41]">
                    24.12.2023 12:22
                  </td>
                  <td className="px-6 py-2 text-base font-normal text-[#EB1D1D]">
                    <strong className="text-[#6D778E] text-sm font-normal">
                      John Wayne
                    </strong>
                    <br />
                    Premium svečka
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guardians;
