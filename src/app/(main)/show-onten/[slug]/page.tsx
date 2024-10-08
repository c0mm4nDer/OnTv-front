import dynamic from "next/dynamic";
import Image from "next/image";
import { Fragment } from "react";
import { gatAllProgram, getAllEpisode } from "./_api/get-all-episode";
import { notFound } from "next/navigation";
import Head from "next/head";
import LikeIcon from "@/app/_components/icons/Like";
const Episode = dynamic(() => import("./components/episode"));
const CommentBox = dynamic(
  () => import("../../_components/commet-box/CommentBox")
);
const Favorite = dynamic(() => import("./components/Favorite/Favorite"));
const Rate = dynamic(() => import("./components/Rate/Rate"));
const Box = dynamic(() => import("./components/box"));

export default async function ShowOnten({
  params,
}: {
  params: { slug: string };
}) {
  const allData = await gatAllProgram(params.slug.split(".")[0]);
  if (!allData) {
    notFound();
  }
  const initialData = await getAllEpisode({
    id: allData?.Program?.slug,
    page: 1,
  });
  if (!initialData) {
    notFound();
  }
  return (
    <>
      <Head>
        <link
          rel="preload"
          as="image"
          href={allData?.Program?.banner?.[0]?.url || ""}
        />
      </Head>
      <div className="overflow-hidden">
        <div
          className="w-full h-[410px] relative flex py-4 md:py-2 bg-center bg-cover justify-center items-center bg-gradient-to-r from-[#221D1F] to-[#341173]"
          style={{
            backgroundImage: `url(${allData?.Program?.banner?.[0].url})`,
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Overlay for shadow effect on the right and bottom */}
          <div className="absolute inset-0 to-100% bg-gradient-to-l from-[#000] to-transparent opacity-90 pointer-events-none"></div>
          {/* Overlay for left side blur effect */}
          <div className="absolute inset-0 to-100% bg-gradient-to-t from-[#000] to-transparent opacity-90 pointer-events-none"></div>
          <div className="absolute inset-0 to-100% bg-gradient-to-t from-[#000] to-transparent opacity-90 pointer-events-none"></div>
          <div className="container flex sm:flex-col justify-center sm:items-center lg:items-start md:justify-start lg:flex-row gap-6 w-full h-full select-none relative z-10">
            <div className="hidden md:inline-block md:w-[150px] lg:w-[200px] md:h-[270px] lg:mt-14 rounded-md overflow-auto shadow-2xl">
              <Image
                src={allData?.Program?.poster?.[0].url}
                alt="poster"
                width={0}
                height={0}
                priority
                className="w-full h-full shadow-md object-cover"
              />
            </div>
            <div className="flex flex-col gap-3 lg:items-start items-center justify-center">
              <h2 className="text-white flex gap-5 justify-center items-center lg:text-2xl lg:mt-24">
                <p>{allData?.Program?.title}</p>
                <Favorite programId={allData?.Program?.id} />
              </h2>
              <p className="text-sm text-center lg:text-right w-[300px] text-[#B3BAC4] mt-3 font-light"
                dangerouslySetInnerHTML={{ __html: allData?.Program?.description ?? "" }}
              >
              </p>

              <Rate programId={allData?.Program?.id} />
            </div>
          </div>
        </div>

        <div className="container px-3 md:px-0 overflow-auto pt-6 mb-6">
          <div className="flex w-full justify-between my-3  md:pb-1 items-center">
            <p className="text-white text-sm md:text-xl">قسمت ها</p>
          </div>
        </div>
        <div className=" #221D1F">
          <Episode data={initialData} itemId={allData?.Program?.slug} />
        </div>

        {/* ================= casts ================== */}

        <div
          style={{
            background: `linear-gradient(to right,${allData?.Program?.color} , #221D1F)`,
          }}
          className="lg:h-auto to-90% "
        >
          <div className="container px-1 flex lg:pb-16 flex-col justify-between gap-6">
            <h5 className="my-6 text-white mr-3 text-sm lg:text-lg">
              عوامل برنامه
            </h5>
            {/* mobile & tablet view  */}
            <div className="h-[120px] lg:hidden w-full overflow-scroll">
              <div className="flex gap-8 pr-3 pl-4">
                {allData?.Program?.casts.map((item: any, idx: any) => (
                  <Fragment key={idx}>
                    <Box
                      data={{
                        position: item.position,
                        name: item?.name,
                        family: item?.family,
                      }}
                    />
                  </Fragment>
                ))}
              </div>
            </div>
            {/* mobile & tablet view  */}
            <div className="hidden lg:grid grid-cols-9 w-full h-auto justify-center items-center mr-6">
              {allData?.Program?.casts.map((item: any, idx: any) => (
                <Fragment key={idx}>
                  <div className="col-span-3 flex mb-8 flex-col gap-8">
                    <Box
                      data={{
                        position: item.position,
                        name: item?.name,
                        family: item?.family,
                      }}
                    />
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
        {/* ================== comments =================== */}
        <div className="container w-full h-full mb-32">
          <CommentBox id={allData?.Program?.id} type="program" />
        </div>
      </div>
    </>
  );
}
