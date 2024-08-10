// components/Sidebar.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useLayoutEffect, useState } from "react";
import { menuItems } from "./constants/menuItems";
import { ProfileIcon } from "../icons";
import LogoutIcon from "../icons/Logout";

const Sidebar: React.FC = () => {
  const [url, setUrl] = useState<string>();
  const [mobile, setMobile] = useState<string>();
  useLayoutEffect(() => {
    const userData = localStorage.getItem("user_name");
    const parsedData = userData ? JSON.parse(userData) : null;
    if (parsedData) {
      setUrl(parsedData.avatar);
      setMobile(parsedData.mobile);
    }
  }, []);

  return (
    <aside className="bg-base-70 w-72 mt-4 rounded-lg mr-7 h-[605px] p-4 self-stretch">
      <div className="flex flex-col gap-4 h-[80%] select-none">
        <ul className="flex flex-col gap-4 text-sm justify-center items-center">
          <div className="w-14 overflow-hidden h-14 bg-[gray] flex justify-center items-center rounded-full">
            {url ? (
              <Image
                src={url}
                className="object-cover w-full h-full"
                width={0}
                height={0}
                alt="avatar"
              />
            ) : (
              <ProfileIcon width={"60px"} height={"60px"} /> 
            )}
          </div>
          <p className="text-sm text-[#6d6d6d]">{mobile}</p>
          <hr className="w-full border-[#4b4a4a]" />
          {menuItems.map((item: any) => (
            <li
              key={item.href}
              className="cursor-pointer h-10 flex items-center w-full  [&>*]:transition-all"
            >
              <Link
                href={item.href}
                className="h-full flex w-full items-center p-3 hover:bg-[#434444] rounded-md gap-2"
              >
                <item.icon width={16} height={16} />
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
        <hr className="w-full border-[#4b4a4a]" />
        <li className="cursor-pointer h-10 flex items-center w-full  [&>*]:transition-all">
          <button className="h-full flex w-full text-xs items-center p-3 hover:bg-[#434444] rounded-md gap-2">
             <LogoutIcon />
             <p> خروج از حساب کاربری</p>{" "}
          </button>
        </li>
      </div>
    </aside>
  );
};

export default Sidebar;
