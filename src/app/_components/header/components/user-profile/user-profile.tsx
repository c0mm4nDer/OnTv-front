"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const UserProfile = ({
  mobile,
  avatar,
}: {
  mobile: string;
  avatar: string;
}) => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsShowMenu(false);
      }
    };

    document.body.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.body.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div
        className="w-10 h-10 rounded-full overflow-hidden flex justify-center items-center bg-[gray] cursor-pointer "
        onClick={() => setIsShowMenu((prev) => !prev)}
      >
        {avatar ? (
          <>
            <Image
              src={avatar}
              className="object-cover w-full h-full"
              width={0}
              height={0}
              alt="avatar"
            />
          </>
        ) : (
          <svg
            width={40}
            height={40}
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="32" cy="32" r="32" fill="#5C5C5C"></circle>
            <path
              d="M32.0002 35.3346C37.8912 35.3346 42.6668 30.2605 42.6668 24.0013C42.6668 17.7421 37.8912 12.668 32.0002 12.668C26.1091 12.668 21.3335 17.7421 21.3335 24.0013C21.3335 30.2605 26.1091 35.3346 32.0002 35.3346Z"
              fill="white"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.2725 55.4949C11.4345 52.5268 13.2034 49.7996 15.5008 47.5021C19.8767 43.1263 25.8116 40.668 32 40.668C38.1884 40.668 44.1233 43.1263 48.4991 47.5021C50.7963 49.7993 52.5651 52.5262 53.7271 55.4939C48.0208 60.7741 40.3869 64.0011 31.9993 64.0011C23.6122 64.0011 15.9787 60.7745 10.2725 55.4949Z"
              fill="white"
            ></path>
          </svg>
        )}
      </div>
      <div
        ref={menuRef}
        className={`${
          isShowMenu ? "flex" : "hidden"
        } mt-2 w-64 h-[480px] left-14 2xl:left-96 p-2 z-[1000] rounded-md absolute bg-base-70 border border-[#282828]`}
      >
        <div className="group-hover:flex overflow-hidden [&>*]:transition-all flex-col ">
          <div className="flex flex-col gap-3 mt-3 text-center text-sm">
            {mobile}
          </div>
          <div className="w-full text-xs h-8 flex py-4 mt-2 justify-center bg-[#434444] text-primary rounded-md  items-center">
            اشتراک رایگان ایرانسلی
          </div>
          <p className="text-[11px] mt-4 mb-4">
            در حال حاضر حساب کاربری شما بصورت رایگان فعال شده است
          </p>
          <hr />

          <Link
            href={"/user/edit-profile"}
            className="flex mb-3 hover:bg-[#434444] py-2 rounded-md px-3 gap-2 mt-3 mr-2 pb-2 justify-start items-center"
          >
            <span>
              <svg
                width="22"
                height="22"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="32" cy="32" r="32" fill="#5C5C5C"></circle>
                <path
                  d="M32.0002 35.3346C37.8912 35.3346 42.6668 30.2605 42.6668 24.0013C42.6668 17.7421 37.8912 12.668 32.0002 12.668C26.1091 12.668 21.3335 17.7421 21.3335 24.0013C21.3335 30.2605 26.1091 35.3346 32.0002 35.3346Z"
                  fill="white"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.2725 55.4949C11.4345 52.5268 13.2034 49.7996 15.5008 47.5021C19.8767 43.1263 25.8116 40.668 32 40.668C38.1884 40.668 44.1233 43.1263 48.4991 47.5021C50.7963 49.7993 52.5651 52.5262 53.7271 55.4939C48.0208 60.7741 40.3869 64.0011 31.9993 64.0011C23.6122 64.0011 15.9787 60.7745 10.2725 55.4949Z"
                  fill="white"
                ></path>
              </svg>
            </span>
            <span className="text-sm">خودم</span>
            <div className="mr-auto hover:scale-150 hover:transition-all hover:ease-in-out hover:delay-75">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.2329 6.4H14.2466C14.0274 6.4 13.8082 6.28966 13.6986 6.06897L13.2603 5.07586C13.1507 4.85517 13.2603 4.63448 13.3699 4.52414L14.0274 3.86207C14.2466 3.64138 14.2466 3.31034 14.0274 3.08966L12.6027 1.65517C12.3836 1.43448 12.0548 1.43448 11.8356 1.65517L11.1781 2.31724C11.1781 2.42759 10.9589 2.53793 10.7397 2.42759L9.75342 1.98621C9.53425 1.98621 9.42466 1.76552 9.42466 1.54483V0.551724C9.42466 0.22069 9.20548 0 8.87671 0H6.90411C6.57534 0 6.35616 0.22069 6.35616 0.551724V1.54483C6.35616 1.76552 6.24658 1.98621 6.0274 2.09655L5.0411 2.42759C4.82192 2.53793 4.60274 2.42759 4.49315 2.31724L3.72603 1.65517C3.50685 1.43448 3.17808 1.43448 2.9589 1.65517L1.64384 2.97931C1.42466 3.2 1.42466 3.53103 1.64384 3.75172L2.30137 4.41379C2.41096 4.52414 2.52055 4.85517 2.41096 4.96552L1.9726 6.06897C1.9726 6.28966 1.75342 6.4 1.53425 6.4H0.547945C0.219178 6.4 0 6.62069 0 6.95172V8.93793C0 9.26897 0.219178 9.48966 0.547945 9.48966H1.53425C1.75342 9.48966 1.9726 9.6 2.08219 9.82069L2.52055 10.8138C2.63014 11.0345 2.52055 11.2552 2.41096 11.3655L1.75342 12.0276C1.53425 12.2483 1.53425 12.5793 1.75342 12.8L3.17808 14.2345C3.39726 14.4552 3.72603 14.4552 3.94521 14.2345L4.60274 13.5724C4.71233 13.4621 5.0411 13.3517 5.15068 13.4621L6.13699 13.9034C6.35616 14.0138 6.46575 14.2345 6.46575 14.4552V15.4483C6.46575 15.7793 6.68493 16 7.0137 16H8.9863C9.31507 16 9.53425 15.7793 9.53425 15.4483V14.3448C9.53425 14.1241 9.64384 13.9034 9.86301 13.7931L10.8493 13.3517C11.0685 13.2414 11.2877 13.3517 11.3973 13.4621L12.0548 14.1241C12.274 14.3448 12.6027 14.3448 12.8219 14.1241L14.2466 12.6897C14.4658 12.469 14.4658 12.1379 14.2466 11.9172L13.589 11.2552C13.4795 11.1448 13.3699 10.8138 13.4795 10.7034L13.9178 9.71035C14.0274 9.48966 14.2466 9.37931 14.4658 9.37931H15.4521C15.7808 9.37931 16 9.15862 16 8.82759V6.95172C16 6.66667 15.6667 6.4 15.2329 6.4ZM7.89041 11.2552C6.0274 11.2552 4.60274 9.71035 4.60274 7.94483C4.60274 6.06897 6.13699 4.63448 7.89041 4.63448C9.64384 4.63448 11.1781 6.17931 11.1781 7.94483C11.1781 9.82069 9.75342 11.2552 7.89041 11.2552Z"
                fill="white"
              ></path>
            </svg>
            </div>
          </Link>
          <hr />

          <Link
            href={"/user/edit-profile"}
            className="flex hover:bg-[#434444] py-2 rounded-md px-3 gap-2 mt-4 mr-2 pb-2 justify-start items-center"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                viewBox="0 0 16 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 2C0 0.895431 0.895431 0 2 0H14C15.1046 0 16 0.895431 16 2V13C15.4477 13 15 13.4477 15 14C15 14.5523 15.4477 15 16 15V18C16 19.1046 15.1046 20 14 20H2C0.895431 20 0 19.1046 0 18V15C0.552285 15 1 14.5523 1 14C1 13.4477 0.552285 13 0 13V2ZM10.5192 5.63622C11.1807 6.0221 11.1807 6.9779 10.5192 7.36378L7.50387 9.12274C6.83721 9.51163 6 9.03075 6 8.25896L6 4.74104C6 3.96925 6.83721 3.48837 7.50387 3.87726L10.5192 5.63622ZM4 15C4.55228 15 5 14.5523 5 14C5 13.4477 4.55228 13 4 13C3.44772 13 3 13.4477 3 14C3 14.5523 3.44772 15 4 15ZM9 14C9 14.5523 8.55229 15 8 15C7.44772 15 7 14.5523 7 14C7 13.4477 7.44772 13 8 13C8.55229 13 9 13.4477 9 14ZM12 15C12.5523 15 13 14.5523 13 14C13 13.4477 12.5523 13 12 13C11.4477 13 11 13.4477 11 14C11 14.5523 11.4477 15 12 15Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
            <span className="text-sm">خرید اشتراک</span>
          </Link>
          <Link
            href={"/user/edit-profile"}
            className="flex hover:bg-[#434444] py-2 rounded-md px-3 gap-2 mt-3 mr-2 pb-2 justify-start items-center"
          >
            <span>
              <svg
                width={16}
                height={16}
                viewBox="0 0 24 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M-0.000488281 3C-0.000488281 1.34315 1.34266 0 2.99951 0H20.9995C22.6564 0 23.9995 1.34315 23.9995 3V26.6719C23.9995 29.0102 21.4431 30.4496 19.4438 29.237L13.5552 25.6656C12.5991 25.0858 11.3999 25.0858 10.4438 25.6656L4.55523 29.237C2.55593 30.4496 -0.000488281 29.0102 -0.000488281 26.6719V3Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
            <span className="text-sm">نشان شده ها</span>
          </Link>
          <Link
            href={"/user/edit-profile"}
            className="flex hover:bg-[#434444] py-2 rounded-md px-3 gap-2 mt-3 mr-2 pb-2 justify-start items-center"
          >
            <span>
              <svg
                width={16}
                height={16}
                viewBox="0 0 16 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.104 3.32454C10.104 5.16063 8.59594 6.64908 6.73561 6.64908C4.87528 6.64908 3.36719 5.16063 3.36719 3.32454C3.36719 1.48845 4.87528 0 6.73561 0C8.59594 0 10.104 1.48845 10.104 3.32454Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M15.6795 14.2963H15.2642C15.1719 14.2963 15.0796 14.2505 15.0335 14.1588L14.8489 13.7461C14.8028 13.6544 14.8489 13.5627 14.895 13.5168L15.1719 13.2417C15.2642 13.15 15.2642 13.0124 15.1719 12.9207L14.572 12.3246C14.4798 12.2328 14.3413 12.2328 14.249 12.3246L13.9722 12.5997C13.9722 12.6455 13.8799 12.6914 13.7876 12.6455L13.3723 12.4621C13.28 12.4621 13.2339 12.3704 13.2339 12.2787V11.866C13.2339 11.7284 13.1416 11.6367 13.0032 11.6367H12.1726C12.0342 11.6367 11.9419 11.7284 11.9419 11.866V12.2787C11.9419 12.3704 11.8958 12.4621 11.8035 12.508L11.3882 12.6455C11.2959 12.6914 11.2036 12.6455 11.1575 12.5997L10.8345 12.3246C10.7422 12.2328 10.6038 12.2328 10.5115 12.3246L9.95777 12.8748C9.86548 12.9665 9.86548 13.1041 9.95777 13.1958L10.2346 13.4709C10.2808 13.5168 10.3269 13.6544 10.2808 13.7002L10.0962 14.1588C10.0962 14.2505 10.0039 14.2963 9.91162 14.2963H9.49634C9.35791 14.2963 9.26562 14.3881 9.26562 14.5256V15.351C9.26562 15.4886 9.35791 15.5803 9.49634 15.5803H9.91162C10.0039 15.5803 10.0962 15.6262 10.1423 15.7179L10.3269 16.1306C10.3731 16.2223 10.3269 16.314 10.2808 16.3599L10.0039 16.635C9.91162 16.7267 9.91162 16.8643 10.0039 16.956L10.6038 17.5521C10.6961 17.6438 10.8345 17.6438 10.9268 17.5521L11.2036 17.277C11.2498 17.2311 11.3882 17.1853 11.4343 17.2311L11.8496 17.4145C11.9419 17.4604 11.988 17.5521 11.988 17.6438V18.0565C11.988 18.1941 12.0803 18.2858 12.2188 18.2858H13.0493C13.1878 18.2858 13.28 18.1941 13.28 18.0565V17.598C13.28 17.5062 13.3262 17.4145 13.4185 17.3687L13.8338 17.1853C13.926 17.1394 14.0183 17.1853 14.0645 17.2311L14.3413 17.5062C14.4336 17.598 14.572 17.598 14.6643 17.5062L15.2642 16.9101C15.3565 16.8184 15.3565 16.6808 15.2642 16.5891L14.9873 16.314C14.9412 16.2681 14.895 16.1306 14.9412 16.0847L15.1258 15.672C15.1719 15.5803 15.2642 15.5345 15.3565 15.5345H15.7718C15.9102 15.5345 16.0025 15.4427 16.0025 15.3052V14.5256C16.0025 14.4072 15.8621 14.2963 15.6795 14.2963ZM12.5879 16.314C11.8035 16.314 11.2036 15.672 11.2036 14.9383C11.2036 14.1588 11.8496 13.5627 12.5879 13.5627C13.3262 13.5627 13.9722 14.2046 13.9722 14.9383C13.9722 15.7179 13.3723 16.314 12.5879 16.314Z"
                  fill="currentColor"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.06007 16.6244C8.65696 16.0301 8.42188 15.3154 8.42188 14.5465C8.42188 12.7038 9.77207 11.1724 11.5493 10.8633C10.3265 9.6315 8.62211 8.86719 6.73684 8.86719C3.01619 8.86719 0 11.8441 0 15.5163C0 15.8938 0.0318864 16.2641 0.0931463 16.6244H9.06007Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
            <span className="text-sm">مدیریت پروفایل ها</span>
          </Link>
          <Link
            href={"/user/edit-profile"}
            className="flex hover:bg-[#434444] py-2 rounded-md px-3 gap-2 mt-3 mr-2 pb-2 justify-start items-center"
          >
            <span>
              <svg
                width={16}
                height={16}
                viewBox="0 0 16 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.99999 8C10.2091 8 12 6.20914 12 4C12 1.79086 10.2091 0 7.99999 0C5.79086 0 4 1.79086 4 4C4 6.20914 5.79086 8 7.99999 8Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M8 10C10.1217 10 12.1566 10.8429 13.6569 12.3431C14.9201 13.6064 15.7172 15.2486 15.9376 17.0026C16.0065 17.5505 15.5523 18 15 18H1C0.447715 18 -0.00645391 17.5505 0.0623925 17.0026C0.282756 15.2486 1.0799 13.6064 2.34315 12.3431C3.84344 10.8429 5.87827 10 8 10Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
            <span className="text-sm">حساب کاربری</span>
          </Link>
          <div className="flex gap-2 mt-3 hover:bg-[#434444] py-2 rounded-md px-3 cursor-pointer mr-2 justify-start items-center">
            <span>
              <svg
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M16 17L21 12M21 12L16 7M21 12H9M12 17C12 17.93 12 18.395 11.8978 18.7765C11.6204 19.8117 10.8117 20.6204 9.77646 20.8978C9.39496 21 8.92997 21 8 21H7.5C6.10218 21 5.40326 21 4.85195 20.7716C4.11687 20.4672 3.53284 19.8831 3.22836 19.1481C3 18.5967 3 17.8978 3 16.5V7.5C3 6.10217 3 5.40326 3.22836 4.85195C3.53284 4.11687 4.11687 3.53284 4.85195 3.22836C5.40326 3 6.10218 3 7.5 3H8C8.92997 3 9.39496 3 9.77646 3.10222C10.8117 3.37962 11.6204 4.18827 11.8978 5.22354C12 5.60504 12 6.07003 12 7"
                    stroke="#868e98"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
              </svg>
            </span>
            <span className="text-sm">خروج ار حساب کاربری</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserProfile;
