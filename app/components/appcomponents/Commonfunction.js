"use client";
import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";

export function CommonViewUserAccSidebar({ imgPath, title, route }) {
  const pathname = usePathname();
  return (
    <Link href={route ? route : ""}>
      <div className="w-[186px] mt-1 cursor-pointer shadow-custom-light-dark-box-image rounded-[10px] border-[2px] border-[#FFFFFF]">
        <div
          className={`h-[48px] ${
            pathname == route
              ? "bg-gradient-to-b from-[#0D94E8] to-[#1860A3]"
              : "bg-[#FFFFFF80]"
          } border-[1px] border-[#FFFFFF40] 
          flex justify-start items-center rounded-[8px]`}
        >
          {title == "Pogosta vprašanja" ? null : imgPath == "" ? (
            <div className="bg-[#EB1D1D] rounded-full h-[24px] w-[24px] ml-[15px] flex justify-center items-center">
              {/* 17 October 2024 */}
              <div className="text-[15px] text-[#FFFFFF] leading-[21px] font-[700px] font-sourcesans">
                2
              </div>
            </div>
          ) : (
            <div className="ml-[15px]">
              <Image src={imgPath} alt="" width={24} height={24} />
            </div>
          )}
          <div
            style={{
              fontVariationSettings: "'opsz' 16",
            }}
            className={`ml-[8px] h-full my-[2px] text-base  ${
              pathname == route ? "text-[#FFFFFF]" : "text-[#6D778E]"
            } font-normal leading-[24px] flex justify-center items-center`}
          >
            {title}
          </div>
        </div>
      </div>
    </Link>
  );
}

export function CommonView({ onPress, isSelected, imgPath, title }) {
  return (
    <div
      onClick={onPress}
      className="w-[186px] mt-1 cursor-pointer shadow-custom-light-dark-box-image rounded-[10px] border-[2px] border-[#FFFFFF]"
    >
      <div
        className={`h-[48px] ${
          isSelected
            ? "bg-gradient-to-b from-[#0D94E8] to-[#1860A3]"
            : "bg-[#FFFFFF80]"
        } border-[1px] border-[#FFFFFF40] 
          flex justify-start items-center rounded-[8px]`}
      >
        {title == "Pogosta vprašanja" ? null : imgPath == "" ? (
          <div className="bg-[#EB1D1D] rounded-full h-[24px] w-[24px] ml-[15px] flex justify-center items-center">
            {/* 17 October 2024 */}
            <div className="text-[15px] text-[#FFFFFF] leading-[21px] font-[700px] font-sourcesans">
              2
            </div>
          </div>
        ) : (
          <div className="ml-[15px]">
            <Image src={imgPath} alt="" width={24} height={24} />
          </div>
        )}
        <div
          style={{
            fontVariationSettings: "'opsz' 16",
          }}
          className={`ml-[8px] h-full my-[2px] text-base  ${
            isSelected ? "text-[#FFFFFF]" : "text-[#6D778E]"
          } font-normal leading-[24px] flex justify-center items-center`}
        >
          {title}
        </div>
      </div>
    </div>
  );
}

export function IconView({ iconPath, name, openCloseSideMenuMobile }) {
  return (
    <div
      onClick={() => {
        if (
          typeof openCloseSideMenuMobile === "function" &&
          window.innerWidth <= 744
        ) {
          openCloseSideMenuMobile();
        }
      }}
      className="flex flex-col "
    >
      <Image
        src={iconPath}
        alt=""
        width={35}
        height={35}
        className="h-[35px] w-[35px] tabletUserAcc:h-[40px] tabletUserAcc:w-[40px] mobileUserAcc:w-[30px] mobileUserAcc:h-[30px] self-center object-contain"
      />
      <div className="text-[12px] mobileUserAcc:text-[10px] text-[#6D778E] text-center font-normal mt-1">
        {name}
      </div>
    </div>
  );
}
