import React, { useState } from "react";
import Image from "next/image";
import ButtonBlue from "./ButtonBlue";
import ButtonGreen from "./ButtonGreen";
import ButtonBlueBorder from "./ButtonBlueBorder";
import DescriptionFieldComp from "./DescriptionFieldComp";
import TextFieldComp from "./TextFieldComp";
import ModalDropBox from "./ModalDropBox";
import ButtonBlueCustom from "./ButtonBlueCustom";
import TextFieldCompSixtyHeight from "./TextFieldCompSixtyHeight";
import SayingsOfCondolenceField from "./SayingsOfCondolenceField";
import strings from "../../strings";
import plus_icon from "@/public/plus_icon.png";
import img_light_candle from "@/public/img_light_candle.png";
import add_photo_place from "@/public/add_photo_place.png";
import check_ico from "@/public/check_ico.png";
import ico_gradient from "@/public/ico_gradient.png";
import ico_gradient_last from "@/public/ico_gradient_last.png";
import user6 from "@/public/mario_danilo_primo.avif";
import img_placeholder from "@/public/img_placholder.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getYear, getMonth } from "date-fns"; // To extract year and month info

const Modals = ({ select_id, set_Id, selectedImage }) => {
  const musicList = [
    "BREZ glasbe",
    "Prva izbira",
    "Druga izbira",
    "Tretja izbira",
    "Četrta izbira",
    "Peta izbira",
  ];

  const [startDate, setStartDate] = useState(new Date()); // Store selected date
  const [openPicker, setOpenPicker] = useState(null); // Manage which dropdown is open: day, month, or year
  const [select, setSelect] = useState(1); // Manage which dropdown is select or not
  const [selectedHour, setSelectedHour] = useState(null);
  const [selectedMinute, setSelectedMinute] = useState(null);

  // Toggle function for each dropdown
  const togglePicker = (type) => {
    console.log("button is clicked!!");
    setSelect(!select);
    setOpenPicker(openPicker === type ? null : type); // Close if already open
  };

  const [showHoursDropdown, setShowHoursDropdown] = useState(false);
  const [showMinutesDropdown, setShowMinutesDropdown] = useState(false);

  const hours = Array.from({ length: 19 }, (_, i) => i + 1);
  const minutes = Array.from({ length: 4 }, (_, i) => i * 15);

  const [selectMusic, setSelectMusic] = useState("");

  const customButtonData = [
    {
      placeholder: "Spremeni osmrtnico",
    },
    {
      placeholder: "Dodaj glavno fotografijo",
    },
    {
      placeholder: "Dodaj religiozni simbol",
    },
    {
      placeholder: "Dodaj nov dogodek",
    },
    {
      placeholder: "Dodaj verz, misel",
    },
    {
      placeholder: "Dodaj fotografije",
      color: "yellowBorder",
    },
    {
      placeholder: "Napiši poljubno sožalje",
      color: "yellowBorder",
    },
    {
      placeholder: "Spremeni ozadje",
    },
    {
      placeholder: "Dodaj glasbo",
    },
    {
      placeholder: "Napiši poudarjeno posvetilo",
      color: "yellowBackground",
    },
    {
      placeholder: "Napiši  Zahvalo",
      color: "yellowBackground",
    },
    {
      placeholder: "Napiši  Zadnji klic",
      color: "yellowBackground",
    },
    {
      placeholder: "Nastavi zasebnost / skrij stran",
      color: "redBackground",
    },
    {
      placeholder: "Povabi dodatnega Skrbnika",
      color: "greenBackground",
    },
  ];

  const arrCondolenceSayings = [
    {
      name: "Iskreno sožalje.",
    },
    {
      name: "RIP",
    },
    {
      name: "Počivaj v miru.",
    },
    {
      name: "Žalostni so dnevi brez tebe. V mojem srcu boš vedno.",
    },
    {
      name: "Če imaš nekoga rad, nikoli ne umre, le daleč, daleč je.",
    },
    {
      name: "Nekoč, nekje se ponovno srečamo! Tam za mavrico, kjer pravijo, da ni trpljenja in ne slovesa.",
    },
    {
      name: "Ni smrt tisto, kar nas loči in življenje ni, kar druži nas. So vezi močnejše, brez pomena zanje so razdalje, kraj in čas.",
    },
  ];
  const nameData = [
    {
      name: "Kim Primo Vanc, nečakinja",
      smallName: "KPV",
      color: "pinkBorder",
    },
    {
      name: "Elizabeta Novy, soseda",
      smallName: "EN",
      color: "purpleBorder",
    },
    {
      name: "Frenk, sodelavec",
      smallName: "F",
      color: "orangeBorder",
    },
    {
      name: "Albin Drago Završnik",
      smallName: "ADZ",
      color: "blueBorder",
    },
    {
      name: "K.F., sorodnik",
      smallName: "KF",
      color: "redBorder",
    },
    {
      name: "Maja Cvetka Koritnik, soseda",
      smallName: "MCK",
      color: "greenBorder",
    },
    {
      name: "Snežana Radojić Knežić",
      smallName: "SRK",
    },
    {
      name: "Mare z družino",
      smallName: "MZD",
      color: "whiteBorder",
    },
    {
      name: "Ilija z družino",
      smallName: "IZD",
    },
    {
      name: "K.",
      smallName: "K",
    },
    {
      name: "Janez Cveto Švarc",
      smallName: "JCŠ",
    },
  ];
  const modelOption = (index) => {
    switch (index) {
      case 0:
        set_Id("change_obituary");
        break;
      case 1:
        set_Id("add_photo");
        break;
      case 2:
        set_Id("religious_symbol");
        break;
      case 3:
        set_Id("add_event");
        break;
      case 4:
        set_Id("add_thought");
        break;
      case 7:
        set_Id("change_background");
        break;
      case 8:
        set_Id("add_music");
        break;
      case 12:
        set_Id("hide_page");
        break;
      case 13:
        set_Id("invite_admin");
        break;
      // default:
      //   set_Id("");
    }
  };

  const [placeholderName, setPlaceholderName] = useState("");
  const [isSelectedRelegion, setIsSelectedReligion] = useState("");
  return (
    <div className="w-full bg-[#E1E6EC] py-8 px-[12px] mobile:px-[8px] rounded-2xl border-[1px] border-[#6D778E] ">
      {select_id == "religious_symbol" ? (
        <div>
          <div className="mobile:text-[20px] text-[24px] leading-[28px] text-[#1E2125] mobile:leading-[23px] mobile:font-variation-customOpt20 font-variation-customOpt24 font-[500px]">
            Dodaj religiozni simbol
          </div>
          <div className="flex flex-row flex-wrap gap-x-[22px] gap-y-[30px] mobile:gap-x-[20px] items-center mt-[32px]">
            <div
              onClick={() => {
                setIsSelectedReligion("1");
              }}
              className={`p-[10px] ${
                isSelectedRelegion === "1" ? "shadow-custom-dark-to-white" : ""
              }`}
            >
              <Image
                src={"/icon_cross.png"}
                alt="cross_img"
                width={57}
                height={70}
              />
            </div>

            <div
              onClick={() => {
                setIsSelectedReligion("2");
              }}
              className={`p-[10px] ${
                isSelectedRelegion === "2" ? "shadow-custom-dark-to-white" : ""
              }`}
            >
              <Image
                src={"/img_plus2.png"}
                alt="cross_img"
                width={57}
                height={70}
              />
            </div>

            <div
              onClick={() => {
                setIsSelectedReligion("3");
              }}
              className={`py-[20px] px-[10px] ${
                isSelectedRelegion === "3" ? "shadow-custom-dark-to-white" : ""
              }`}
            >
              <Image
                src={"/img_moon_star.png"}
                alt="cross_img"
                width={57}
                height={70}
              />
            </div>

            <div
              onClick={() => {
                setIsSelectedReligion("4");
              }}
              className={`p-[10px] ${
                isSelectedRelegion === "4" ? "shadow-custom-dark-to-white" : ""
              }`}
            >
              <Image
                src={"/img_plus3.png"}
                alt="cross_img"
                width={57}
                height={70}
              />
            </div>

            <div
              onClick={() => {
                setIsSelectedReligion("5");
              }}
              className={`p-[10px] ${
                isSelectedRelegion === "5" ? "shadow-custom-dark-to-white" : ""
              }`}
            >
              <Image
                src={"/img_star.png"}
                alt="cross_img"
                width={57}
                height={70}
              />
            </div>
          </div>
          <div className="flex mobile:hidden text-[#3C3E41] mobile:leading-[16px] leading-[24px] text-[15px] font-variation-customOpt16  mt-[32px]">
            Izberi simbol. Prikazan bo v seznamu osmrtnic in na spominski
            strani.
          </div>
          <div className="hidden mobile:flex text-[#3C3E41]  mobile:leading-[16px] leading-[24px] text-[15px] font-variation-customOpt16  mt-[32px]">
            Prikazan bo v seznamu osmrtnic in na spominski strani.
          </div>
          <div className="mobile:w-[100%] w-[254px] mt-6">
            <ButtonBlueBorder placeholder={"Objavi"} />
          </div>
        </div>
      ) : null}
      {select_id == "add_photo" ? (
        <div className="flex flex-col w-full items-center ">
          <div
            className="text-[#1E2125] text-[24px] leading-[28px] font-variation-customOpt24 font-medium mobile:text-[20px] mobile:leading-[23px]
          mobile:font-variation-customOpt20"
          >
            Dodaj glavno sliko za osmrtnico
          </div>
          <div className="mt-6 mobile:mt-4">
            <Image
              src={add_photo_place}
              alt="place photo"
              width={85}
              height={120}
            />
          </div>
          <div className="flex mt-6 ">
            <div
              className={
                "flex flex-col rounded-[6px] bg-[#F2F8FF66] shadow-custom-dark-to-white w-full py-7 px-[80px] mobile:px-5 items-center justify-center "
              }
            >
              <div className=" flex mobile:hidden">
                <ButtonBlue placeholder={"Poišči sliko in jo prenesi"} />
              </div>
              <div className="hidden mobile:flex">
                <ButtonBlue placeholder={"Izberi sliko in jo prenesi"} />
              </div>
              <div className="text-[#939393] font-normal text-xs mt-3 self-center ">
                Format: jpg, png, webp
              </div>
            </div>
          </div>
          <div className="mobile:w-[100%] w-[254px] mt-8">
            <ButtonBlueBorder placeholder={"Objavi"} />
          </div>
        </div>
      ) : null}
      {select_id == "change_obituary" ? (
        <div className="flex flex-col w-full">
          <div
            className="text-[#1E2125] mobile:text-[20px] mobile:leading-[23px] leading-[28px] font-variation-customOpt24 
          mobile:font-variation-customOpt20 text-2xl font-medium "
          >
            Dopolni osmrtnico
          </div>

          <div className="flex mt-6 text-[15px] font-normal text-[#6D778E] ">
            Sestavi bolj osebno, toplejšo osmrtnico; lahko deliš življenjsko
            pot, zanimive zgodbe, čarobne trenutke, poezijo. Omejitev je 5.000
            znakov.
          </div>
          <div className="flex mobile:hidden mt-6  ">
            <DescriptionFieldComp
              placeholder={
                "Sporočamo žalostno vest, da je nas je v 76. letu starosti zapustil naša predragi Mario Danilo Primo. Vsi njegovi. "
              }
              height={"191px"}
            />
          </div>
          <div className="hidden mobile:flex mt-6 h-[306px] ">
            <DescriptionFieldComp
              placeholder={
                "Sporočamo žalostno vest, da je nas je v 76. letu starosti zapustil naša predragi Mario Danilo Primo. Vsi njegovi. "
              }
              height={"306px"}
            />
          </div>
          <div className="w-[254px] mobile:w-[100%] mt-[42px]">
            <ButtonBlueBorder placeholder={"Objavi"} />
          </div>
        </div>
      ) : null}
      {select_id == "add_event" ? (
        <div className="flex flex-col w-full ">
          <div
            className="text-[#1E2125] mobile:text-[20px] mobile:leading-[23px] leading-[28px] font-variation-customOpt24 
          mobile:font-variation-customOpt20 text-2xl font-medium "
          >
            Dodaj nov dogodek
          </div>

          <div className="mt-[42px]">
            <TextFieldComp placeholder={"Poimenuj dogodek"} />
          </div>
          <div className="mt-4">
            <TextFieldComp placeholder={"Kje poteka"} />
          </div>
          <div className="text-[#1E2125] text-[14px] leading-[24px] font-variation-customOpt14  font-normal mt-[32px] ">
            DATUM
          </div>


          <div className="flex flex-row mobile:gap-x-[11px] gap-x-[32px] gap-y-[8px] flex-wrap">
            <ModalDropBox
              placeholder={`Dan:`}
              onClick={() => {
                setShowMinutesDropdown(false);
                setShowHoursDropdown(false);
                togglePicker("day");
              }}
              isSelectText={startDate ? startDate.getDate() : ""}
            />

            {openPicker === "day" && (
              <div className="absolute mt-12 bg-white border rounded shadow-lg z-10">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => {
                    setStartDate(date); // Update only day
                    setOpenPicker(null); // Close picker after selection
                  }}
                  dateFormat="d" // Show only day
                  showDayPicker // Show only day selection
                  inline // Display as dropdown
                  minDate={new Date()} // Prevent selecting past days
                  maxDate={
                    new Date(
                      new Date().setFullYear(new Date().getFullYear(), 11, 31)
                    )
                  } // Restrict to current year
                  onClickOutside={() => {
                    setOpenPicker(null);
                  }}
                />
              </div>
            )}

            <div className="flex relative">
              <ModalDropBox
                placeholder={`Mesec:`}
                onClick={() => {
                  setShowMinutesDropdown(false);
                  setShowHoursDropdown(false);
                  togglePicker("month");
                }}
                isSelectText={startDate ? getMonth(startDate) + 1 : ""}
              />

              {openPicker === "month" && (
                <div className="absolute mt-12 bg-white border rounded shadow-lg z-10">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => {
                      const updatedDate = new Date(
                        startDate.getFullYear(),
                        date.getMonth(),
                        startDate.getDate()
                      );
                      setStartDate(updatedDate); // Update only month
                      setOpenPicker(null); // Close picker after selection
                    }}
                    dateFormat="MM" // Show only month
                    showMonthYearPicker // Show only month selection
                    inline
                    minDate={new Date()} // Prevent selecting past months of the current year
                    maxDate={
                      new Date(
                        new Date().setFullYear(new Date().getFullYear(), 11, 31)
                      )
                    } // Restrict to current year
                    onClickOutside={() => {
                      setOpenPicker(null);
                    }}
                  />
                </div>
              )}
            </div>

            <ModalDropBox
              placeholder={`Leto:`}
              onClick={() => {
                setShowMinutesDropdown(false);
                setShowHoursDropdown(false);
                togglePicker("year");
              }}
              isSelectText={startDate ? getYear(startDate) : ""}
            />

            {openPicker === "year" && (
              <div className="absolute mt-12 left-[56%] bg-white border rounded shadow-lg z-10">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => {
                    const updatedDate = new Date(
                      date.getFullYear(),
                      startDate.getMonth(),
                      startDate.getDate()
                    );
                    setStartDate(updatedDate); // Update only year
                    setOpenPicker(null); // Close picker after selection
                  }}
                  dateFormat="yyyy" // Show only year
                  showYearPicker // Show only year selection
                  inline
                  minDate={
                    new Date(
                      new Date().setFullYear(new Date().getFullYear(), 0, 1)
                    )
                  } // Restrict to current year (start of the year)
                  maxDate={
                    new Date(
                      new Date().setFullYear(new Date().getFullYear(), 11, 31)
                    )
                  } // Restrict to current year (end of the year)
                  onClickOutside={() => {
                    setOpenPicker(null);
                  }}
                />
              </div>
            )}
          </div>

          <div className="text-[#1E2125] text-[14px] leading-[24px] font-variation-customOpt14  font-normal mt-[32px] ">
            ČAS
          </div>

          <div className="flex flex-row mobile:gap-x-[11px] gap-x-[32px] gap-y-[8px] flex-wrap">
            <ModalDropBox
              placeholder={"Ura"}
              onClick={() => {
                setOpenPicker(false);
                setShowHoursDropdown(!showHoursDropdown);
                setShowMinutesDropdown(false); // Hide minutes dropdown if open
              }}
              isSelectText={
                selectedHour
                  ? `${selectedHour.toString().padStart(2, "0")}`
                  : "Ura:"
              }
            />

            {showHoursDropdown && (
              <div className="bg-white border overflow-y-scroll mt-12 h-[210px] absolute border-gray-300 rounded-md m-2 w-32 z-10">
                <div className="flex p-2 flex-col">
                  {hours.map((hour) => (
                    <div
                      key={hour}
                      className="cursor-pointer hover:bg-gray-100 px-2 py-1 text-black"
                      onClick={() => {
                        setShowHoursDropdown(false);
                        setSelectedHour(hour);
                      }}
                    >
                      {hour.toString().padStart(2, "0")}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex relative ">
              <ModalDropBox
                placeholder={"Min"}
                onClick={() => {
                  setOpenPicker(false);
                  setShowMinutesDropdown(!showMinutesDropdown);
                  setShowHoursDropdown(false); // Hide hours dropdown if open
                }}
                isSelectText={
                  selectedMinute !== null && selectedMinute !== undefined
                    ? `${selectedMinute}`
                    : "Min:"
                }
              />

              {showMinutesDropdown && (
                <div className="bg-white border absolute z-10 mt-12 overflow-y-scroll h-[150px] text-black border-gray-300 rounded-md p-2 w-32">
                  {minutes.map((minute) => (
                    <div
                      key={minute}
                      className="cursor-pointer hover:bg-gray-100 px-2 py-1"
                      onClick={() => {
                        console.log(`Selected minute: ${minute}`);
                        setShowMinutesDropdown(false);
                        setSelectedMinute(minute);
                      }}
                    >
                      {minute}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="w-[254px] mt-[42px]">
            <ButtonBlueBorder placeholder={"Objavi"} />
          </div>
        </div>
      ) : null}
      {select_id == "add_thought" ? (
        <div className="flex flex-col w-full">
          <div
            className="text-[#1E2125] text-[24px] leading-[28px] font-variation-customOpt24 font-medium mobile:text-[20px] mobile:leading-[23px]
          mobile:font-variation-customOpt20"
          >
            Dodaj lepo misel, verz
          </div>
          <div className="mt-8 text-[15px] font-normal text-[#3C3E41] ">
            Prikazana bo na levi strani pod sliko.
          </div>
          <div className=" mt-8 ">
            <DescriptionFieldComp
              placeholder={"Omejitev je 60 znakov."}
              height={"80px"}
            />
          </div>
          <div className="mobile:w-[100%] w-[254px] mt-8">
            <ButtonBlueBorder placeholder={"Objavi"} />
          </div>
        </div>
      ) : null}
      {select_id == "add_music" ? (
        <div className="flex flex-col w-full  ">
          <div
            className="text-[#1E2125] text-[24px] leading-[28px] font-variation-customOpt24 font-medium mobile:text-[20px] mobile:leading-[23px]
          mobile:font-variation-customOpt20"
          >
            Dodaj glasbo
          </div>
          <div className="flex flex-col mt-9 ">
            {musicList?.map((item, index) => (
              <CommonView
                text={item}
                key={index}
                onPress={() => {
                  setSelectMusic(item);
                }}
                selectMusic={selectMusic}
              />
            ))}
          </div>
          <div className="mobile:w-[100%] w-[254px] mt-12">
            <ButtonBlueBorder placeholder={"Potrdi"} />
          </div>
        </div>
      ) : null}
      {select_id == "change_background" ? (
        <div className="flex flex-col w-full">
          <div
            className="text-[#1E2125] text-[24px] leading-[28px] font-variation-customOpt24 font-medium mobile:text-[20px] mobile:leading-[28px]
              mobile:font-variation-customOpt20"
          >
            Spremeni ozadje
          </div>

          <div className="flex flex-row flex-wrap w-full items-center mt-8 gap-x-[30px] gap-y-[25px]">
            <div className="bg-[#ECF0F3] w-[60px] h-[60px] rounded-full"></div>

            <div className="bg-gradient-to-b from-[#F8ECDA] to-[#B2E6E3] w-[60px] h-[60px] rounded-full"></div>

            <div className="bg-gradient-to-b from-[#FFDCB8] to-[#C7FFD0] w-[60px] h-[60px] rounded-full"></div>

            <div className="bg-gradient-to-b from-[#F8ECDA] to-[#B2E6E3] w-[60px] h-[60px] rounded-full">
              <Image
                src={ico_gradient}
                width={60}
                height={60}
                alt="Gradient icon"
              />
            </div>
            <div className="bg-gradient-to-b from-[#F8ECDA] to-[#B2E6E3] w-[60px] h-[60px] rounded-full">
              <Image
                src={ico_gradient_last}
                width={60}
                height={60}
                alt="Gradient icon"
              />
            </div>
          </div>

          <div
            className="text-[#414141] text-[16px] mt-8 leading-[24px] font-variation-customOpt16 font-normal mobile:text-[16px] 
               whitespace-nowrap mobile:whitespace-normal"
          >
            Izberi barvno kombinacijo (prvi izbor je povrnitev v prvotno stanje)
          </div>

          <div className="mobile:w-[100%] w-[254px] mt-6">
            <ButtonBlueBorder placeholder={"Potrdi"} />
          </div>
        </div>
      ) : null}
      {select_id == "hide_page" ? (
        <div className="flex flex-col w-full  ">
          <div
            className="text-[#1E2125] text-[24px] leading-[28px] font-variation-customOpt24 font-medium mobile:text-[18px] mobile:leading-[23px]
          mobile:font-variation-customOpt20"
          >
            Omejitev dostopa do spominske strani
          </div>
          <div className="mt-3 text-[#414141] text-base mobile:text-sm font-normal font-variation-customOpt16 mobile:font-variation-customOpt14 ">
            Stran lahko umakneš za javnost. Dostopna bo samo tistim, ki jim boš
            sam poslal geslo.
          </div>
          <div className="mt-8 text-[#414141] text-base mobile:text-sm font-normal font-variation-customOpt16 mobile:font-variation-customOpt14 ">
            IZBERI GESLO
          </div>
          <div className="mt-3 flex ">
            <TextFieldComp placeholder={"Vsaj 6 znakov"} />
          </div>
          <div className="mt-8 text-[#414141] text-base mobile:text-sm font-normal font-variation-customOpt16 mobile:font-variation-customOpt14 ">
            POTRDI GESLO
          </div>
          <div className="mt-3 flex ">
            <TextFieldComp placeholder={"Ponovi geslo"} />
          </div>
          <div className="relative flex justify-center mt-3 h-[50px] items-center">
            <div className="bg-[#989898] h-[1px] w-full" />

            <div className="absolute w-[60px] mobile:h-[35px] mobile:w-[54px] h-[50px] rounded-[4px] shadow-custom-dark-bottom">
              <div
                className="h-[50px] mobile:h-[35px] bg-gradient-to-b from-[#0D94E8] to-[#0A85C2] border-[1px] border-[#FFFFFF40] 
        flex justify-center items-center rounded-[4px]"
              >
                <div
                  className="w-full mx-[2px] h-full my-[2px] text-base  text-[#FFFFFF]
            font-variation-customOpt16 font-normal leading-[24px] flex justify-center items-center "
                >
                  ALI
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <CommonView
              text={"Stran naj bo dostopna vsem"}
              index={6}
              onPress={() => {
                setSelectMusic("Stran naj bo dostopna vsem");
              }}
              selectMusic={selectMusic}
            />
          </div>

          <div className="mt-4">
            <ButtonGreen
              placeholder={"Potrdi nastavitev"}
              bg={"bg-[#F95948]"}
            />
          </div>
          <div className="flex self-center mt-6 text-[#6D778E] text-sm font-normal">
            Na e-naslov ti bomo poslali povezavo za dokončno potrditev.
          </div>
        </div>
      ) : null}
      {select_id == "invite_admin" ? (
        <div className="flex flex-col w-full  ">
          <div
            className="text-[#1E2125] text-[24px] leading-[28px] font-variation-customOpt24 font-medium mobile:text-[20px] mobile:leading-[23px]
          mobile:font-variation-customOpt20"
          >
            Povabi še drugega Skrbnika
          </div>
          <div className="mt-8 flex ">
            <TextFieldComp placeholder={"Njegov / njen e-naslov"} />
          </div>
          <div className=" mt-4 ">
            <DescriptionFieldComp
              placeholder={"Lahko mu napišeš nekaj besed ali pustiš prazno"}
              height={"101px"}
            />
          </div>
          <div className="mt-4">
            <ButtonGreen placeholder={"Pošlji povabilo"} bg={"bg-[#09C1A3]"} />
          </div>
          <div className="mt-8 text-[#414141] text-base font-normal">
            Prejel/a bo e-pošto za potrditev.
          </div>
        </div>
      ) : null}
      {select_id == "error_report" ? (
        <div className="flex flex-col w-full">
          <div className="text-[#1E2125] mobile:text-xl text-2xl font-medium ">
            Prijava napak
          </div>
          <div className="mt-6">
            <TextFieldComp
              placeholder={"Spominska stran:  Mario Danilo Primo, Colombo"}
            />
          </div>
          <div className="flex mt-6 w-[70%] mobile:w-[100%] ">
            <DescriptionFieldComp placeholder={"Tvoje ime"} height={"48px"} />
          </div>
          <div className="flex mobile:hidden mt-6 h-[140px] ">
            <DescriptionFieldComp
              placeholder={"Opis napake"}
              height={"140px"}
            />
          </div>
          <div className="hidden mobile:flex mt-6 h-[153px]">
            <DescriptionFieldComp
              placeholder={"Opis napake"}
              height={"153px"}
            />
          </div>
          <div className="mobile:w-[100%] desktop:w-[254px] tablet:w-[254px] mt-6">
            <ButtonBlueBorder placeholder={"Pošlji"} />
          </div>
        </div>
      ) : null}
      {select_id == "sayings_condolence" ? (
        <div className="text-[15px] leading-[24px] font-variation-customOpt14 text-[#3C3E41]">
          <div
            className="text-[24px] leading-[28px] font-variation-customOpt24 text-[#1E2125] 
         mobile:text-[20px] mobile:leading-[23px] mobile:font-variation-customOpt20 font-medium"
          >
            Izreki sožalja
          </div>
          <div className="text-[16px] mt-[10px] leading-[20px] font-variation-customOpt16 text-[#3C3E41]">
            Izberi eno od možnosti.
          </div>
          <div className="mt-[32px]">
            {arrCondolenceSayings.map((item, index) => {
              return (
                <div key={index}>
                  {index !== 0 && <div className="h-[10px]" />}
                  <SayingsOfCondolenceField
                    name={item.name}
                    key={index}
                    onPress={async () => {
                      await setPlaceholderName(item?.name);
                      set_Id("selected_condolences");

                      //  setModal(true);
                    }}
                  />
                </div>
              );
            })}
          </div>

          <div className="text-[16px] mobile:text-[14px] leading-[20px] mt-[32px] mobile:font-variation-customOpt14 font-variation-customOpt16 text-[#3C3E41]">
            Če ima spominska stran Skrbnika, boš lahko na naslednji strani
            napisal/a poljubno sožalje.
          </div>
        </div>
      ) : null}
      {select_id == "selected_condolences" ? (
        <div>
          <div className="text-[20px] leading-[23px] font-variation-customOpt20 text-[#1E2125]">
            Izbrano sožalje
          </div>

          <div className="mt-[22px]">
            <TextFieldComp placeholder={placeholderName} />
          </div>

          <div className="text-[14px] leading-[20px] font-variation-customOpt14 text-[#1E2125] mt-[32px]">
            Samo, če ima spominska stran Skrbnika:
          </div>

          <div className="h-[134px] w-full mt-[12px]">
            <DescriptionFieldComp
              placeholder={
                "Napiši poljubno sožalje (do 250 znakov) \n( bo povozilo prejšnjo izbiro ). \nČe pustiš prazno, bo objavljeno izbrano sožalje zgoraj. "
              }
              height={"134px"}
            />
          </div>

          <div className="text-[14px] mt-[32px] leading-[24px] font-variation-customOpt24 text-[#414141]">
            Dodaj svoje ime in povezavo. npr vnuk, stric, sodelavec, sošolec,
            itd
          </div>

          <div className="mt-[12px]">
            <TextFieldComp placeholder={"Napiši svoje ime ali vzdevek"} />
          </div>

          <div className="mt-[12px]">
            <TextFieldComp placeholder={"Dodaj še povezavo (ni obvezno)"} />
          </div>

          <div className="mt-[32px] w-[254px]">
            <ButtonBlueBorder placeholder={"Objavi"} />
          </div>

          <div className="mt-[22px] flex flex-col text-[13px] leading-[20px] font-variation-customOpt12 text-[#6D778E] mobile:hidden">
            <div>
              Če si izbral eno od 8 predloženih možnosti, bo tvoje sporočilo
              objavljeno takoj.
            </div>

            <div>
              Če si napisal poljubno besedilo, ga mora pred objavo potrditi
              Skrbnik
            </div>
          </div>
        </div>
      ) : null}

      {select_id == "2" ? (
        <div>
          <div
            className="text-[24px] text-[#1E2125] leading-[28px] font-variation-customOpt24
      mobile:text-[20px] mobile:leading-[23px] mobile:font-variation-customOpt20"
          >
            {strings.PozabljenoGeslo}
          </div>

          <div
            className="text-[#3C3E41] mobile:font-[400px] text-[14px] leading-[20px] desktop:font-variation-customOpt14 
      tablet:font-variation-customOpt14 mt-[32px]"
          >
            {strings.VnesiNaslov}
          </div>

          <div className="mt-[10px]">
            <TextFieldComp placeholder={"Email naslov"} />
          </div>

          <div className="mt-[32px]">
            {/* 23 October 2024 */}
            <ButtonBlue placeholder={"Izberi sliko in jo prenesi"} isFor="Moj Račun" />
          </div>

          <div className="mt-[32px] mobile:text-[13px] text-[#6D778E] mobile:leading-[20px] mobile:font-[400px]">
            Če imaš težave pri obnovitvi računa, lahko pošlješ sporočilo na{" "}
            <span className="text-[#0A85C2]">Pomoč uporabnikom.</span> Običajno
            odgovorimo še isti dan.
          </div>
        </div>
      ) : null}
      {select_id == "3" ? (
        <div>
          <Image
            src={img_light_candle}
            alt=""
            width={300}
            height={153}
            className="mx-auto hidden mobile:block"
          />

          <Image
            src={img_light_candle}
            alt=""
            width={392}
            height={200}
            className="mx-auto mobile:hidden block"
          />

          <div
            className="text-[#1E2125] flex justify-center mt-[16px] mobile:text-[20px] text-[24px] mobile:leading-[23px]
           leading-[28px] mobile:font-variation-customOpt20 font-variation-customOpt24
           font-medium"
          >
            {strings.SvečkaJeZagorela}
          </div>

          <div className="text-[16px] mt-[12px] text-center leading-[24px] text-[#1E2125] font-variation-customOpt16">
            To so dnevne svečke. Gorijo en dan.
          </div>
          <div className="text-[16px] text-center leading-[24px] text-[#1E2125] font-variation-customOpt16">
            Novo lahko prižgeš čez:
          </div>

          <div className="text-[16px] mt-2 leading-[19px] text-[#1E2125] text-center flex justify-center font-variation-customOpt16">
            23:12:57
          </div>
          <div className="flex mobile:w-[100%] w-[254px] mt-8 justify-center mx-auto">
            <ButtonBlueBorder placeholder={"Zapri"} />
          </div>

          <div className="mt-[45px] flex flex-row justify-center mobile:hidden">
            <div className="text-[14px] text-[#1E2125] leading-[16px] font-variation-customOpt14 mr-[10px]">
              {strings.ZadnjaPrižganaSvečka}
            </div>

            <div className="text-[14px] text-[#1E2125] leading-[16px] font-variation-customOpt14 font-medium">
              12.10.2024 13:32
            </div>
          </div>
        </div>
      ) : null}
      {select_id == "4" ? (
        <div className="flex flex-col w-full">
          <div className="text-[#1E2125] mobile:text-xl text-2xl font-medium ">
            Obvesti sorodnike, prijatelje, znance
          </div>
          <div className="hidden mobile:flex mt-6">
            <TextFieldComp placeholder={"Njihov e-mail naslov"} />
          </div>
          <div className=" flex mobile:hidden mt-6">
            <TextFieldComp placeholder={"Dodaj naslov prijatelja"} />
          </div>
          <div className="flex mobile:hidden mt-2">
            <TextFieldComp
              placeholder={"Dodaj e-naslov še drugega prijatelja, znanca"}
            />
          </div>
          <div className="flex w-full mt-2 tablet:items-center desktop:items-center ">
            {/* //icon_plus_round */}
            <Image
              src={"/icon_plus_round.png"}
              alt="plus icon"
              width={57}
              height={70}
              className="w-6 h-6"
            />
            <div className="flex mobile:flex-col">
              <div className="text-[#1E2125] mobile:text-sm text-base font-medium ml-3 ">
                Dodaj še en naslov
              </div>
              <div className="text-[#ACAAAA] mobile:text-xs text-sm font-medium ml-3 ">
                (lahko pošlješ večim hkrati)
              </div>
            </div>
          </div>
          <div className="flex mobile:hidden mt-6">
            <DescriptionFieldComp
              placeholder={"Tvoje sporočilo"}
              height={"80px"}
            />
          </div>
          <div className="hidden mobile:flex h-[112px] mt-6">
            <DescriptionFieldComp
              placeholder={"Tvoje sporočilo"}
              height={"112px"}
            />
          </div>
          <div className=" flex mt-2 text-[#6D778E] text-xs font-normal">
            Op. ne pozabi dopisati svoje ime, morda tudi priimek, da bodo
            vedeli, kdo pošilja
          </div>
          <div className=" flex mobile:hidden mt-6 text-[#6D778E] text-xs font-normal">
            K sporočilu bo spodaj dodana še povezava do te strani:
          </div>
          <div className="hidden mobile:flex mt-8 text-[#6D778E] text-xs font-normal">
            Da bodo lažje našli stran in informacije, bo k sporočilu spodaj
            dodano še tole:
          </div>
          <div
            className={
              "flex  flex-col mobile:flex-row rounded-[6px] bg-[#E8F0F6] shadow-custom-dark-to-white w-full px-6 py-3 mt-3 "
            }
          >
            <div className="flex mobile:hidden text-base font-normal text-[#6D778E] ">
              Osmrtnica in več informacij na strani:
            </div>
            <div className="flex mobile:hidden text-base font-normal text-[#0A85C2] mt-1 underline ">
              www.osmrtnica.com/sl/mariodaniloprimo3753
            </div>
            <div className="hidden mobile:flex text-sm font-medium text-[#6D778E] ">
              Osmrtnica in več informacij na strani:
            </div>
            <div className="hidden mobile:flex text-sm font-normal text-[#0A85C2] ml-1 underline ">
              tukaj
            </div>
          </div>
          <div className="mobile:w-[100%] w-[254px] mt-8">
            <ButtonBlueBorder placeholder={"Pošlji"} />
          </div>
        </div>
      ) : null}

      {select_id == "6" ? (
        <div className="flex flex-col w-full">
          <div className="text-[#1E2125] mobile:text-xl text-2xl font-medium ">
            Dodaj fotografije
          </div>
          <div className="flex mt-6 text-[#3D3D3D] text-base ">
            Vsak lahko doda slike, za objavo pa jih mora potrditi Skrbnik
          </div>
          {/* <div className="mt-6">
            <TextFieldComp placeholder={"Napiši naslov"} />
          </div> */}
          <div className="flex mt-6 ">
            <div
              className={
                "flex flex-col rounded-[6px] bg-[#F2F8FF66] shadow-custom-dark-to-white w-full py-7 px-[80px] mobile:px-5 items-center justify-center "
              }
            >
              <ButtonBlue placeholder={"Izberi sliko in jo prenesi"} />
              <div className="text-[#939393] font-normal text-xs mt-3 self-center ">
                Format: jpg, png, webp
              </div>
            </div>
          </div>
          <div className="flex mt-4 items-center">
            <Image src={plus_icon} alt="imgCall" className="w-4 h-4 " />
            <div className=" text-[#1E2125] text-sm ml-2">
              {"Dodaj še eno sliko".toUpperCase()}
            </div>
          </div>

          <div className="mobile:w-[100%] w-[254px] mt-6">
            <ButtonBlueBorder placeholder={"Objavi"} />
          </div>
        </div>
      ) : null}

      {select_id == "13" ? (
        <div className="flex flex-col w-full">
          <div
            className="text-[#1E2125] text-[24px] leading-[28px] font-variation-customOpt24 font-medium mobile:text-[20px] mobile:leading-[23px]
          mobile:font-variation-customOpt20"
          >
            Dodaj posvetilo
          </div>
          <div className="mt-[24px] flex mobile:hidden">
            <TextFieldComp
              placeholder={
                "Napiši naslov, npr  Posvetilo, Zadnji pozdrav, Zahvala, Nepozabni trenutki, Dragi..."
              }
            />
          </div>
          <div className=" hidden mobile:flex mt-[24px]">
            <TextFieldComp placeholder={"Napiši naslov"} />
          </div>
          <div className="hidden mobile:flex mt-6 text-[14px] font-normal text-[#6D778E] ">
            npr Posvetilo, Zadnji pozdrav, Zahvala, Nepozabni trenutki, Dragi...
          </div>
          <div className="flex mobile:hidden h-[170px] mt-[24px]">
            <DescriptionFieldComp
              placeholder={"Dodaj tekst. Omejitev je 10.000 znakov."}
              height={"170px"}
            />
          </div>
          <div className="mobile:w-[100%] w-[254px] mt-[24px]">
            <div className="hidden mobile:flex mt-[24px] h-[423px]">
              <DescriptionFieldComp
                placeholder={`Dodaj tekst.${"\n"}Omejitev je 10.000 znakov.`}
                height={"423px"}
              />
            </div>
            <div className="mobile:w-[100%] w-[254px] mt-[24px]">
              <ButtonBlueBorder placeholder={"Objavi"} />
            </div>
          </div>
        </div>
      ) : null}
      {select_id == "14" ? (
        <div className="flex flex-col w-full ">
          <div
            className="text-[#1E2125] text-[24px] leading-[28px] font-variation-customOpt24 text-center font-medium mobile:text-[20px] mobile:leading-[28px]
          mobile:font-variation-customOpt20"
          >
            Dopolni spominsko stran
          </div>

          <div
            className="text-[#1E2125] text-[32px] mt-3 leading-[28px] font-variation-customOpt32 text-center font-semibold mobile:text-[24px] mobile:leading-[23px]
          mobile:font-variation-customOpt24"
          >
            Mario Danilo Primo
          </div>

          <div
            className="text-[#1E2125] text-[20px] mt-8 leading-[28px] font-variation-customOpt20 text-center font-normal mobile:text-[16px] 
          mobile:font-variation-customOpt16"
          >
            Možnosti za Skrbnika
          </div>
          <div className=" w-full mt-8 flex-col">
            {customButtonData?.map((item, index) => {
              return (
                <ButtonBlueCustom
                  key={index}
                  placeholder={item.placeholder}
                  color={item?.color}
                  onPress={() => {
                    modelOption(index);
                  }}
                />
              );
            })}
          </div>

          <div
            className="text-[#1E2125] text-[16px] mt-8 leading-[22px] font-variation-customOpt16 text-center font-medium mobile:text-[13px] 
          mobile:font-variation-customOpt13"
          >
            Ko stran dobi svojega Skrbnika, pridobijo tudi preostali uporabniki
            možnost opcij, ki so označene z belo
          </div>
        </div>
      ) : null}

      {select_id == "16" ? (
        <div>
          <div className="flex flex-col gap-y-[12px] text-[16px] font-light leading-[18px] text-[#000000] font-variation-customOpt16 italic">
            <div>Name of Florist</div>
            <div>Tel. 012-994-285</div>

            <div>Their website</div>
          </div>

          <div
            className="mobile:text-[20px] text-[24px] mt-[24px] mobile:leading-[23px] leading-[28px] font-variation-customOpt24
 mobile:font-variation-customOpt20 text-[#1E2125] font-medium"
          >
            Kontaktiraj cvetličarno
          </div>

          <div
            className="mobile:text-[14px] text-[16px] leading-[24px] mt-[24px] mobile:font-variation-customOpt14
 font-variation-customOpt16 text-[#414141]"
          >
            Običajno odgovorijo v nekaj urah. Lahko pa jih tudi pokličeš po
            telefonu.
          </div>

          <div className="mt-[24px]">
            <TextFieldComp placeholder={"Tvoje ime"} />
          </div>

          <div className="mt-[24px]">
            <TextFieldComp placeholder={"Tvoj E-naslov"} />
          </div>

          <div className="mt-[24px] h-[207px] hidden mobile:block">
            <DescriptionFieldComp
              placeholder={"Napiši jim sporočilo"}
              height={"207px"}
            />
          </div>

          <div className="mt-[24px] h-[116px] block mobile:hidden">
            <DescriptionFieldComp
              placeholder={"Napiši jim sporočilo"}
              height={"116px"}
            />
          </div>

          <div className="mobile:w-[100%] w-[254px] mt-6">
            <ButtonBlueBorder placeholder={"Pošlji"} />
          </div>
        </div>
      ) : null}
      {select_id == "17" ? (
        <div>
          <div
            className="text-[24px] leading-[28px] font-variation-customOpt24 text-[#1E2125] mobile:text-[20px] mobile:leading-[23px]
  mobile:font-variation-customOpt20 font-medium"
          >
            Vpis v Žalno knjigo
          </div>

          <div className="mt-[22px]">
            <TextFieldCompSixtyHeight placeholder={"Dodaj svoje ime *"} />
          </div>

          <div className="text-[13px] leading-[24px] mt-[6px] whitespace-nowrap overflow-hidden text-ellipsis font-variation-customOpt12 text-[#6D778E]">
            {"(lahko tudi priimek, vzdevek, tvoja Mari, družina Majcen...)"}
          </div>

          <div className="mt-[6px]">
            <TextFieldCompSixtyHeight
              placeholder={"Dodaj povezavo s pokojnim/no "}
            />
          </div>

          <div className="text-[13px] leading-[24px] mt-[6px] whitespace-nowrap text-ellipsis overflow-hidden font-variation-customOpt12 text-[#6D778E]">
            {"(hči, stric, sosed, sošolec, frend... lahko pustiš tudi prazno)"}
          </div>

          <div className="mt-[22px]">
            <ButtonBlueBorder placeholder={"Objavi"} />
          </div>
        </div>
      ) : null}

      {select_id == "20" ? (
        <div className="flex flex-col w-full">
          <div className="rounded-md self-center mb-[10px]">
            <Image
              src={user6}
              alt="mario_danilo_primo"
              className="rounded-md w-[97px] aspect-[3.5/4.5]"
            />
          </div>

          <div
            className="text-[#1E2125] mobile:text-nowrap text-[36px] mt-[32px] leading-[42px] font-variation-customOpt36 mobile:font-variation-customOpt24 text-center font-light mobile:text-[24px] 
                "
          >
            Mario Danilo Primo
          </div>

          <div
            className="text-[#414B5A] text-[24px] mt-2 mobile:mt-1 leading-[38px] font-variation-customOpt36 mobile:font-variation-customOpt16 text-center font-semibold mobile:text-[24px] 
                "
          >
            Žalna knjiga
          </div>

          <div className="flex w-full mt-8 flex-col px-[20px] mobile:px-0">
            {nameData.map((item, index) => (
              <CommonStyle item={item} index={index} key={index} />
            ))}
          </div>

          <div className=" w-[328px] mobile:w-full rounded-[10px] self-center mt-8 shadow-custom-dark-bottom">
            <div
              className="h-[60px] w-full bg-gradient-to-b from-[#D8A800] to-[#F48F5370] border-[1.5px] border-[#D8A800] 
        flex justify-center items-center rounded-[10px]"
            >
              <div
                className="w-full m-[2px] h-full text-[20px]  text-[#414B5A]
            font-variation-customOpt20 font-medium leading-[24px] flex justify-center items-center"
              >
                {"Vpis v Žalno knjigo"}
              </div>
            </div>
          </div>

          <div className="w-[328px] mobile:w-full rounded-[10px] self-center mt-8 shadow-custom-dark-bottom">
            <div
              className="h-[60px] bg-gradient-to-b from-[#0000000] to-[#1860A3] border-[1px] border-[#D8A800] 
                flex justify-center items-center rounded-[10px]"
            >
              <div
                onClick={() => {
                  set_Id("sayings_condolence");
                  // set_Id("18");
                  setModal(true);
                }}
                className="w-full mx-[2px] h-full my-[2px] text-[20px]  text-[#D8A800]
                    font-variation-customOpt20 font-normal leading-[24px] flex justify-center items-center cursor-pointer"
              >
                {"Napiši sožalje"}
              </div>
            </div>
          </div>

          <div className="flex mx-[20px] mobile:mx-0 mt-8 items-end flex-col">
            <div className=" flex text-[32px] mobile:text-[20px] text-[#414B5A] font-greatVibes font-normal">
              The song is ended but the melody lingers on.
            </div>
            <div className=" flex text-[20px] text-[#414B5A] font-greatVibes font-normal">
              Irving Berlin
            </div>
          </div>

          <div className="rounded-[6px] mt-8 bg-[#F2F8FF66] shadow-custom-dark-to-white w-full py-[17px]">
            <div className="flex mobile:hidden text-[16px] text-[#1E2125] justify-center items-center font-normal  text-center">
              K vpisu v Žalno knjigo lahko povabiš tudi druge
            </div>

            <div className="hidden mobile:block text-[14px] self-center text-[#1E2125] font-normal  text-center">
              K vpisu v Žalno knjigo povabi tudi druge
            </div>

            <div className="flex px-[73px] mobile:px-2 w-full gap-2 mobile:gap-1 mt-[27.5px]">
              <div className=" w-[160px] mobile:w-[145px] rounded-[10px] shadow-custom-dark-bottom">
                <div
                  className="h-[50px] bg-gradient-to-b from-[#0D94E8] to-[#0A85C2] border-[1px] border-[#FFFFFF40] 
        flex justify-center items-center rounded-[10px]"
                >
                  <div
                    onClick={() => {
                      set_Id("4");
                      setModal(true);
                    }}
                    className="w-full mx-[2px] h-full my-[2px] text-[16px]  text-[#FFFFFF]
            font-variation-customOpt16 font-normal leading-[24px] mobile:text-[14px] flex justify-center items-center cursor-pointer"
                  >
                    {"Pošlji sporočilo"}
                  </div>
                </div>
              </div>

              <div className="w-[160px] mobile:w-[145px] rounded-[10px] shadow-custom-dark-bottom">
                <div
                  className="h-[50px] bg-gradient-to-b from-[#4E71BA] to-[#3B5998] border-[1px] border-[#FFFFFF40] 
        flex justify-center items-center rounded-[10px]"
                >
                  <div
                    className="w-full mx-[2px] h-full my-[2px] text-[16px]  text-[#FFFFFF]
            font-variation-customOpt16 font-normal leading-[24px] mobile:text-[14px] flex justify-center items-center "
                  >
                    {"Povabi preko FB"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {select_id == "21" ? (
        <div className="flex flex-col w-full">
          <div className="rounded-md self-center">
            <Image
              src={selectedImage ? selectedImage : img_placeholder}
              width={300}
              height={300}
              alt="User Icon"
              className="rounded-md"
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

function CommonStyle({ item, index, key }) {
  return (
    <div
      key={key}
      className={` ${
        index % 2 !== 0 ? "bg-[#E8F0F6]" : "bg-white popup-custom-shadow"
      }  h-14 flex-row flex items-center border-b-[1px] border-[#D4D4D4] mobile:flex-row-reverse mobile:justify-between mobile:pr-[4px] relative `}
    >
      <div
        className={`py-[10px] border-2 text-[#6D778E]
       ${
         item.color === "pinkBorder"
           ? "border-[#F1A5F3] bg-gradient-to-r from-[#F1A5F340] to-[#FFFFFF30]"
           : item.color === "purpleBorder"
           ? "border-[#A6A5F3] bg-gradient-to-r from-[#A6A5F340] to-[#FFFFFF30]"
           : item.color === "orangeBorder"
           ? "border-[#EDCBAB] bg-gradient-to-r from-[#EDCBAB40] to-[#FFFFFF30]"
           : item.color === "blueBorder"
           ? "border-[#ABEDED] bg-gradient-to-r from-[#ABEDED40] to-[#FFFFFF30]"
           : item.color === "redBorder"
           ? "border-[#F3A5B3] bg-gradient-to-r from-[#F3A5B340] to-[#FFFFFF30]"
           : item.color === "greenBorder"
           ? "border-[#D0EDAB] bg-gradient-to-r from-[#ABEDED40] to-[#FFFFFF30]"
           : item.color === "whiteBorder"
           ? "border-[#FFFFFF] bg-gradient-to-r from-[#FFFFFF40] to-[#FFFFFF30]"
           : " border-[#B9D1DF] bg-gradient-to-r from-[#B9D1DF40] to-[#FFFFFF30"
       } w-11 h-11 ml-8 mobile:ml-4 rounded-full text-center`}
      >
        {item.smallName}
      </div>

      <div className="text-[16px] mobile:absolute whitespace-nowrap text-[#000000] font-variation-customOpt16 font-light ml-[31.5px] mobile:left-[7px] mobile:ml-[7px]">
        {item.name}
      </div>
    </div>
  );
}

function CommonView({ text, key, onPress, selectMusic }) {
  return (
    <div
      onClick={onPress}
      key={key}
      className={
        "flex mt-3 rounded-[6px] bg-[#F2F8FF66] shadow-custom-dark-to-white w-full py-3 px-4 items-center "
      }
    >
      <div className="flex w-6 h-6 border-[1px] border-[#D4D4D4] justify-center items-center ">
        {selectMusic == text ? (
          <Image src={check_ico} alt="check icon" width={14} height={10} />
        ) : null}
      </div>
      <div className="text-[#767676] text-[16px] font-normal font-variation-customOpt16 ml-4 ">
        {text}
      </div>
    </div>
  );
}
export default Modals;