"use client";
import React, { useState } from "react";
import { NewestCardProps } from "./newest-card.types";
import Image from "next/image";
import { formatTime, truncate } from "@/utils/functions";
import { useUserStore } from "@/stores/user.store";
import { useRouter } from "next/navigation";
import Modal from "../../modal/modal";
import { Button } from "../../button";
import { FreeIcon, LockIcon } from "../../icons";

export const NewestCard: React.FC<NewestCardProps> = ({ data, path }) => {
  const user = useUserStore((store) => store.user);
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string>("");
  const handleCardClick = () => {
    if (path == "cut") {
      router.push(`/cut/${data?.slug}`);
      return;
    }
    if (data?.free_access) {
      router.push(`/show-on/${data?.slug}`);
      return;
    }
    if (!user?.id && data?.program?.is_paid) {
      setModalMessage("لطفا ابتدا در سایت ثبت نام کنید");
      setOpen(true);
    } else if (data?.program?.is_paid && !user?.subscribe) {
      setModalMessage("برای مشاهده این محتوا باید اشتراک تهیه کنید");
      setOpen(true);
    } else {
      router.push(`/show-on/${data?.slug}`);
    }
  };

  return (
    <>
      <Modal open={open} onClose={() => setOpen(false)}>
        <>
          <div className="mt-2 mb-2 text-center w-[360px] text-[#e6e6e6]">
            {modalMessage}
          </div>
          {!user?.id && (
            <Button
              className="mt-4 bg-primary py-2 text-white"
              onClick={() => router.push("/signin")}
            >
              ثبت نام{" "}
            </Button>
          )}
          {user?.id && !user?.subscribe && data?.program?.is_paid && (
            <Button
              className="mt-4 bg-primary py-2 text-white"
              onClick={() => router.push("/user/packages")}
            >
              تهیه اشتراک{" "}
            </Button>
          )}
        </>
      </Modal>
      <div
        onClick={handleCardClick}
        key={data?.alt}
        className="w-full h-full rounded-lg shadow-lg overflow-hidden cursor-pointer"
      >
        <div className="h-[190px] w-full overflow-hidden">
          <div className="relative rounded-md w-full h-full overflow-hidden">
            <Image
              src={data?.poster?.[0]?.url}
              width={0}
              height={0}
              alt={data?.alt}
              className="w-full h-full object-cover"
            />
            {!data?.free_access && !user?.subscribe ? (
              <div className="flex gap-1 justify-center items-center absolute top-2 rounded-[25px] overflow-hidden right-1 bg-[#1d2b1f] px-2 py-[4px] font-light z-50 text-[#4dab56] text-xs">
                <FreeIcon width={18} height={18} />
                <p className="text-[11px]">رایگان</p>
              </div>
            ) : !data?.program?.is_paid && !user?.subscribe ? (
              <div className="flex gap-1 justify-center items-center absolute top-2 rounded-[25px] overflow-hidden right-1 bg-[#1d2b1f] px-2 py-[4px] font-light z-50 text-[#4dab56] text-xs">
                <FreeIcon width={18} height={18} />
                <p className="text-[11px]">رایگان</p>
              </div>
            ) : null}
            {data?.program?.is_paid &&
              !data?.free_access &&
              !user?.subscribe && (
                <div
                  className="absolute top-0 left-0 w-full h-full flex justify-center items-center"
                  style={{
                    background: "rgba(0, 0, 0, 0.4)",
                    backdropFilter: "blur(5px)",
                  }}
                >
                  <span
                    className="w-12 h-12 rounded-full flex justify-center items-center bg-base-50"
                    style={{
                      background: "rgba(0, 0, 0, 0.4)",
                      backdropFilter: "blur(14px)",
                    }}
                  >
                    <LockIcon width={20} height={20} />
                  </span>
                </div>
              )}
          </div>
        </div>
        <div className="pb-[3px] flex justify-center items-center flex-col w-full">
          <div className="mt-3 flex justify-between items-center gap-1 w-full">
            <div className="mb-1 bg-box-slider-bg-text text-nowrap text-base-content-slider py-1 px-2 flex justify-center text-[10px] rounded-[20px]">
              {truncate(data?.title, 30)}
            </div>
            <div className="col-span-9 bg-box-slider-bg-text text-nowrap text-box-slider-text-l py-1 px-2 text-[9px] mr-auto rounded-[20px]">
              <span className="text-white font-light text-[10px]">
                {" "}
                {formatTime(data?.video?.duration)}{" "}
              </span>
              <span>
                <div className="inline"></div> |
              </span>
              <span className="font-light text-[10px]">{` ${data?.seen} نمایش`}</span>
            </div>
          </div>
          <p
            className="w-full text-sm font-thin text-ellipsis whitespace-nowrap overflow-hidden"
            dangerouslySetInnerHTML={{ __html: data?.description }}
          ></p>
        </div>
      </div>
    </>
  );
};
