"use client";
import React from "react";
import { NewestCardProps } from "./newest-card.types";
import Image from "next/image";
import Link from "next/link";

export const NewestCard: React.FC<NewestCardProps> = ({
  alt,
  logo,
  descriptions,
  path,
}) => {
  return (
    <>
      <Link
        href={"#"}
        key={alt}
        className="w-screen md:w-auto md:col-span-6 lg:col-span-3 overflow-auto mb-5 px-9 md:px-0"
      >
        <div className="rounded-md overflow-auto h-[60%]">
          <Image
            src={path}
            width={0}
            height={0}
            alt={alt}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="pb-[3px] h-[40%] flex justify-center items-center flex-col w-full">
          <div className="mt-3 grid grid-cols-12 justify-between items-center gap-1 w-full">
            <div className="col-span-3 w-16 mb-1 bg-box-slider-bg-text text-nowrap text-base-content-slider py-1 flex justify-center text-[10px] rounded-[20px]">
              {descriptions?.title}
            </div>
            <div className="col-span-9 bg-box-slider-bg-text text-nowrap text-box-slider-text-l py-1 px-2 text-[9px] mr-auto rounded-[20px]">
              <span className="text-white"> 32:65 </span>
              <span>
                <div className="inline">&nbsp;</div> |
              </span>
              <span>32,65 نمایش </span>
            </div>
          </div>
          <div className=" w-full mt-1 mb-auto md:mt-0 text-justify text-[12px] md:text-[14px] max-w-[100%] md:min-w-[100%]">
            <h3 className="mb-1 text-right text-ellipsis dark:text-description-text md:text-clip overflow-hidden whitespace-nowrap md:text-wrap md:ml-auto ">
              {descriptions?.dec}
            </h3>
          </div>
        </div>
      </Link>
    </>
  );
};
