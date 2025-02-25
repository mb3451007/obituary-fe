"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const images = [
  {
    name: "Elizabeta Škorjanc",
    dates: "29.01.2024",
    image: "/user1.jpeg",
  },
  {
    name: "Marija Špes",
    dates: "29.01.2024",
    image: "/user2.jpeg",
  },
  // 7 October 2024
  {
    name: "Dragi moj Mario",
    dates: "15.01.2024",
    image: "/sveca_gori.avif",
  },
  {
    name: "Mario Danilo Primo",
    dates: "29.01.2024)",
    image: "/mario_danilo_primo.avif",
  },
  {
    name: "Alojz Lavbič",
    dates: "28.01.2024",
    image: "/user4.jpeg",
  },

  {
    name: "Miroslav Vodnik",
    dates: "28.01.2024",
    image: "/user5.jpeg",
  },
];

const SanctifiedComp = ({set_Id, setModal}) => {
  const [currentIndex, setCurrentIndex] = useState(2);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? prevIndex : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? prevIndex : prevIndex + 1
    );
  };

  const ImageSliderBlock = ({ item, index, key }) => {
    return (
      <div
        className={`absolute items-center mobile:px-[26px]    h-full w-full flex object-cover transition-opacity duration-500 ease-in-out 
          ${index === currentIndex
            ? " justify-center "
            : index > currentIndex
              ? "justify-end"
              : "justify-start"
          }
              ${index === currentIndex
            ? "z-30"
            : index === currentIndex + 2 || index === currentIndex - 2
              ?
              "z-10"
              : index === currentIndex + 1 || index === currentIndex - 1
                ? " z-20"
                : "z-0"
          }
              `}
      >
        <div className={`flex flex-row justify-between h-full w-full rounded-lg 
        px-[19px] pt-[20px]
        tablet:px-[24px] tablet:pt-[22px]
        desktop:pl-[22px] desktop:pr-[27px] desktop:pt-[27px] bg-[#FFF1DB] mobile:shadow-custom-light-dark mobile:rounded-lg 
          `
        } >
          <div className="hidden desktop:flex ">
            <Image
              key={index}
              src={images[currentIndex]?.image}
              alt="Description of the image"
              width={1000}
              height={1000}
              className="w-[110px] h-[120px] bg-center  rounded-lg"
            />
          </div>
          <div className="flex flex-col w-full desktop:w-[522px]  ">
            <div className="flex w-full items-center justify-between ">
              <div className="flex desktop:hidden ">
                <Image
                  // src={"/burning_candle.png"}
                  src={images[currentIndex]?.image}
                  alt="Description of the image"
                  width={1000}
                  height={1000}
                  className="w-[88px] h-[88px] bg-center  rounded-lg"
                />
                <div className="hidden tablet:flex mt-[50px] ml-[27px] h-[38px] items-center">
                  <h1 className="text-[#1E2125] text-[32px] font-variation-customOpt32 font-medium ">
                    {images[currentIndex]?.name}
                  </h1>
                </div>

              </div>
              <div className="hidden desktop:flex h-[38px] items-center" >
                <h1 className="text-[#1E2125] text-[32px] font-variation-customOpt32 font-medium ">
                  {images[currentIndex]?.name}
                </h1>
              </div>

              <div className="flex flex-col  h-full items-end">
                <div className="flex h-[19px] items-center">
                  <p className="text-[#1E2125] text-[16px] font-variation-customOpt16">
                    Marija Smrekar
                  </p>
                </div>
                <div className="flex h-[4] items-center mt-[11px]">
                  <p className=" text-[#414141] text-[12px] font-variation-customOpt12 ">
                    {images[currentIndex]?.dates}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex tablet:hidden desktop:hidden mt-4 h-[32px] items-center" >
              <h1 className="text-[#1E2125] text-[24px] font-variation-customOpt24 font-medium ">
                {images[currentIndex]?.name}
              </h1>
            </div>
            <div className="flex w-full  mt-4 tablet:mt-[30px] desktop:mt-[25px] flex-col ">
              <p className="  text-[#414141] text-[16px] font-variation-customOpt16 font-normal ">
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor
                incididunt ut labore Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>

              <p className=" mt-[21px] text-[#414141] text-[16px] font-variation-customOpt16 font-normal">
                Coredolor sit amet, consectetur adipiscing
                elit, sed do eiusmod incididunt ut labore
                Lorem ipsum dolor sit amet, consectetur elit,
                sed do eiusmod tempor incididunt ut labore
                Lorem ipsum dolor sit amet, consectetur elit,
                sed do eiusmod tempor incididunt ut labore
                Ansectetur elit.
              </p>
            </div>

            <div className="w-full h-[14px] flex justify-end items-center mt-4  tablet:mt-[25px] desktop:mt-[21px]  ">
              <p className="flex text-[12px] text-[#414141] font-variation-customOpt12">
                Odpri naprej
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative pt-[118.5px]  tablet:pt-[132px] desktop:pt-[110px] mx-auto pb-[102px]  mb-[20px] max-w-[1920px] w-full overflow-hidden justify-center items-center flex flex-col">

      <div className="flex flex-col justify-center items-center
              w-full mobile:px-[30px]
              tablet:w-[600px]
              desktop:w-[720px] 
             ">
        <div className="flex mobile:h-[33px] h-[47px] items-center" >
          <h className=" mobile:text-[28px] text-[40px] text-[#1E2125] font-variation-customOpt40 font-normal ">
            Posvetilo
          </h>
        </div>
        <div className="flex mt-4 mobile:h-[48px] h-6 items-center ">
          <p className="text-[16px] text-[#414141] font-variation-customOpt16 text-center font-normal leading-[24px] ">
            Delite zgodbe, čarobne trenutke, morda biografijo, zadnji pozdrav
          </p>
        </div>
        <div onClick={() => {
                    set_Id("13");
                    setModal(true);
                  }} className="flex cursor-pointer mt-6 w-full h-[16px] items-center justify-end pr-[11.5px] " >
          <Image
            src={"/round_add.png"}
            alt="Description of the image"
            width={100}
            height={100}
            className="hidden desktop:flex w-[12px] h-[12px] mr-[10px]  "

          />
          <Image
            src={"/pan.png"}
            alt="Description of the image"
            width={100}
            height={100}
            className="flex desktop:hidden w-[12px] h-[12px] mr-[10px]  "

          />
          <p className="text-[#414141] text-[14px] font-variation-customOpt12 font-normal">
            Dodaj Posvetilo
          </p>
        </div>
      </div>
      <div  className="flex flex-col desktop:mb-5 desktop:shadow-custom-light-dark desktop:rounded-lg   mt-[34px] desktop:mt-6 mobile:w-full mobile:h-[720px] tablet:h-[460px] tablet:justify-center desktop:justify-center " >
        <div   className="relative  w-[720px] tablet:shadow-custom-light-dark tablet:rounded-lg  tablet:w-[580px] mobile:w-full h-[350px] tablet:h-[383px] mobile:h-[633px]">
          {images.map((image, index) => (
            <ImageSliderBlock image={image} index={index} key={index} />
          ))}

        </div>
        <div className="mobile:hidden flex absolute mobile:mt-[650px]  w-[150px] tablet:w-[670px]  z-45 self-center items-center 
                justify-between  desktop:w-[1110px]  
                 ">
          <button
            onClick={handlePrev}
            className="flex  w-[60px] h-[60px]
            desktop:h-[148px] desktop:w-[148px]
            items-center justify-center tablet:justify-start
           "
          >
            <Image
              src={"/prev_img_icon.png"}
              alt="Description of the image"
              width={1000}
              height={1000}
              className="flex w-[24px] h-[40px] "
            />
          </button>
          <button
            onClick={handleNext}
            className="flex w-[60px] h-[60px]
            desktop:h-[148px] desktop:w-[148px]
            items-center justify-center tablet:justify-end
             "
          ><Image
              src={"/next_img_icon.png"}
              alt="Description of the image"
              width={1000}
              height={1000}
              className="flex w-[24px] h-[40px] "
            />
          </button>
        </div>
        <div className="hidden mobile:flex justify-between mx-auto mt-[26px] w-[120px] h-[41px]">
          <button
            onClick={handlePrev}
            className={`mobile:flex h-[36px] shadow-custom-light-dark bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFF30] justify-center items-center rounded-lg w-[36px] `}
          >
            {/* <img src="/img_back_mob.png" alt="back" className="h-[13.79px] w-[8.43px]" /> */}
            <Image
              src={"/img_back_mob.png"}
              alt="Description of the image"
              width={1000}
              height={1000}
              className="h-[13.79px] w-[8.43px] "
            />
          </button>

          <button
            onClick={handleNext}
            className={`mobile:flex h-[36px] shadow-custom-light-dark bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFF30] justify-center items-center rounded-lg w-[36px] px-2`}
          >
            <Image
              src={"/img_forward_mob.png"}
              alt="Description of the image"
              width={1000}
              height={1000}
              className="h-[13.79px] w-[8.43px]"
            />
            {/* <img src="/img_forward_mob.png" alt="back" className="h-[13.79px] w-[8.43px]" /> */}
          </button>
        </div>
      </div>


    </div>
  );
};

export default SanctifiedComp;


