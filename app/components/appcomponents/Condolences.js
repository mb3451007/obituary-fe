"use client";
import React, { useState } from "react";
import { format } from "date-fns";

const ProgressBar = ({ currentSlide, totalSlides }) => {
  return (
    <div className="flex mobile:hidden justify-center mt-[41px] items-center h-[40px]">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <div
          key={index}
          className={`w-4 h-4 rounded-full mx-1 ${
            index === currentSlide
              ? "shadow-custom-light-dark bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFF30]"
              : "bg-gradient-to-r from-[#C3C6C8] to-[#E3E5E5]"
          }`}
        ></div>
      ))}
    </div>
  );
};

const PersonCard = ({ name, date, relation, Condolence }) => {
  return (
    <div className="w-[310px] tablet:w-[288px] mobile:w-[288px] mobile:h-[100px] shadow-custom-light-dark flex flex-col h-[133px] tablet:h-[100px] rounded-lg bg-gradient-to-r from-[#E3E8EC] to-[#FFFFFF] mx-2">
      <div className="flex flex-row justify-between items-center mt-[19px] tablet:mt-[12px] mobile:mt-[12px] ml-[16.13px] tablet:ml-[22px] mobile:ml-[22px] mr-[17px]">
        <div className="w-[59px] h-[24px] leading-[24px] text-[14px] font-variation-customOpt16 text-[#1E2125]">
          {name}
        </div>
        <div className="font-variation-customOpt12 tablet:ml-[-9px] mobile:ml-[-9px] text-[#414141] text-[12px]">
          {date}
        </div>
      </div>
      {relation ? (
        <div className="ml-[16.13px] tablet:ml-[22px] mobile:ml-[22px] text-[#414141] text-[12px] mobile:text-[10px] tablet:text-[10px]">
          {relation}
        </div>
      ) : (
        <div className="ml-[16.13px] tablet:ml-[22px] mobile:ml-[22px] h-[12px]"></div>
      )}
      <div className="ml-[16.13px] tablet:ml-[20px] mobile:ml-[20px] mt-[21px] tablet:mt-[14px] mobile:mt-[14px] text-[#414141] text-[16px]">
        {Condolence}
      </div>
    </div>
  );
};

const PersonList = ({ currentSlide, setCurrentSlide, persons }) => {
  const [visibleIndices, setVisibleIndices] = useState([0, 1]);
  const [visibleIndicesDesktop, setVisibleIndicesDesktop] = useState([0, 2]);
  const handleNextTablet = () => {
    if (currentSlide < persons.length - 2) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handleNextDesktop = () => {
    if (currentSlide < persons.length - 3) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrevTablet = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };
  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleString("sl-SI", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };
  return (
    <div>
      {/* Buttons for Tablet */}
      <div className="w-full desktop:hidden mobile:mt-[5px] h-[100px] mobile:h-[248px] mobile:gap-[32px] mobile:flex mobile:flex-col tablet:flex flex-row justify-center items-center relative">
        <button
          onClick={handlePrevTablet}
          className={`tablet:flex hidden absolute -left-[30px] ${
            visibleIndices[0] === 0 ? "hidden" : ""
          }`}
        >
          <img src="/img_back.png" alt="back" className="h-[40px] w-[17px]" />
        </button>

        <PersonCard
          key={currentSlide}
          name={persons[currentSlide]?.name}
          date={formatDate(persons[currentSlide]?.createdTimestamp)}
          relation={persons[currentSlide]?.relation}
          Condolence={persons[currentSlide]?.message}
        />

        <button
          onClick={handleNextTablet}
          className={`tablet:flex hidden absolute -right-[30px] ${
            currentSlide === persons.length - 1 ? "hidden" : ""
          }`}
        >
          <img
            src="/img_forward.png"
            alt="Next"
            className="h-[40px] w-[17px]"
          />
        </button>
      </div>

      {/* Buttons for mobile*/}
      <div className="hidden mobile:flex justify-between mx-auto mt-[26px] w-[168px] h-[41px]">
        <button
          onClick={handlePrevTablet}
          className={`mobile:flex h-[36px] shadow-custom-light-dark bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFF30] justify-center items-center rounded-lg w-[36px] px-2 ${
            visibleIndices[0] === 0 ? "hidden" : ""
          }`}
        >
          <img
            src="img_back_mob.png"
            alt="back"
            className="h-[13.79px] w-[8.43px]"
          />
        </button>

        <button
          onClick={handleNextTablet}
          className={`mobile:flex h-[36px] shadow-custom-light-dark bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFF30] justify-center items-center rounded-lg w-[36px] px-2 ${
            visibleIndices[1] === persons.length - 1 ? "hidden" : ""
          }`}
        >
          <img
            src="/img_forward_mob.png"
            alt="back"
            className="h-[13.79px] w-[8.43px]"
          />
        </button>
      </div>

      <div className="w-full desktop:flex hidden h-[133px] flex-row justify-center items-center relative">
        <button
          onClick={handlePrevTablet}
          className={`desktop:flex hidden absolute -left-[30px] ${
            visibleIndices[0] === 0 ? "hidden" : ""
          }`}
        >
          <img src="/img_back.png" alt="back" className="h-[40px] w-[17px]" />
        </button>

        <PersonCard
          key={currentSlide}
          name={persons[currentSlide]?.name}
          date={formatDate(persons[currentSlide]?.createdTimestamp)}
          relation={persons[currentSlide]?.relation}
          Condolence={persons[currentSlide]?.message}
        />

        <button
          onClick={handleNextDesktop}
          className={`desktop:flex hidden absolute -right-[30px] ${
            currentSlide + 3 === persons.length - 1 ? "hidden" : ""
          }`}
        >
          <img
            src="/img_forward.png"
            alt="Next"
            className="h-[40px] w-[17px]"
          />
        </button>
      </div>
    </div>
  );
};

const Condolences = ({ set_Id, setModal, data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = Math.ceil(data?.length / 2);

  return (
    <div className="max-w-[1920px] h-[661px] tablet:h-[590px] mobile:h-[571px] w-full mx-auto flex flex-col justify-center items-center overflow-hidden">
      <div className="w-[1024px] tablet:w-[678.78px] mobile:w-[341px] mobile:h-[450px]  tablet:h-[287px] dekstop:h-[336px] flex flex-col items-center ">
        <div className="flex flex-row h-[47px] items-center">
          <div className="font-variation-customOpt40 text-[40px] leading-[46.88px] mr-[8px] mobile:text-[28px] mobile:leading-[32.9px] mobile:font-variation-customOpt28 text-[#1E2125] ">
            Sožalja
          </div>
          <div className="font-variation-customOpt24 text-[24px] mobile:text-[22px] leading-[32.9px] mb-[-7px] mobile:mb-[-4px] text-[#0A85C2]">
            (1)
          </div>
        </div>

        <div
          className="flex mt-[48px] tablet:mt-[40px] mobile:mt-[25px] justify-center items-center mobile:rounded-lg rounded-[100px] border-[2px] border-[#FFFFFF] w-[165px] bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFF30] h-[60px] 
        tablet:h-[48px] tablet:w-[180px] mobile:h-[48px] mobile:w-[180px] tablet:rounded-lg tablet:py-[12px]"
        >
          <div
            className="w-[110px] h-[48px] tablet:w-[126px] tablet:h-[24px] mobile:w-[126px] mobile:h-[24px]
          mobile:flex mobile:flex-row mobile:items-center tablet:flex tablet:flex-row tablet:items-center "
          >
            <img
              src="/ico_add_person.png"
              alt="ico_add_person_img"
              className="desktop:block hidden h-[24px] mx-auto w-[24px] object-fill"
            />
            <img
              src="/ico_pencil.png"
              alt="ico_add_person_img"
              className="desktop:hidden block h-[20px] mx-auto w-[20px] object-fill"
            />
            <div
              onClick={() => {
                set_Id("sayings_condolence");
                // set_Id("18");
                setModal(true);
              }}
              className="flex cursor-pointer text-[16px] leading-[24px] text-[#1E2125] font-variation-customOpt16 items-center justify-center "
            >
              Dodaj sožalje
            </div>
          </div>
        </div>

        <div className="h-[133px] tablet:h-[100px] tablet:mt-[52px] mobile:mt-[19px] flex flex-row justify-between tablet:justify-around mt-[48px]">
          {data?.length > 0 && (
            <PersonList
              currentSlide={currentSlide}
              setCurrentSlide={setCurrentSlide}
              persons={data}
            />
          )}
        </div>
        <div className="hidden desktop:flex">
          <ProgressBar
            currentSlide={currentSlide - 1}
            totalSlides={totalSlides}
          />
        </div>
        <div className="hidden tablet:flex">
          <ProgressBar
            currentSlide={currentSlide - 1}
            totalSlides={totalSlides}
          />
        </div>
      </div>
      <div
        onClick={() => {}}
        className="text-[16px] cursor-pointer hidden desktop:flex text-[#1E2125] leading-[24px] mt-[32px] font-variation-customOpt16"
      >
        Show more
      </div>
    </div>
  );
};

export default Condolences;
