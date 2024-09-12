"use client";

import { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { MdKeyboardArrowDown, MdClose } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Middle from "./components/Middle";
import LastestWorks from "./components/LastestWorks";
import Info from "./components/Info";
import { FaDownload } from "react-icons/fa";
import Footer from "./components/Footer";

export default function Home() {
  const navData = [
    { title: "Home", link: "/" },
    {
      title: "About us",
      link: "/",
      subNav: [
        {
          title: "Web design",
          link: "/",
        },
        {
          title: "WordPress Design",
          link: "/",
        },
        {
          title: "Mobile App Development",
          link: "/",
        },
        {
          title: "Internet marketing",
          link: "/",
        },
        {
          title: "Social Media Management",
          link: "/",
        },
      ],
    },
    { title: "Service", link: "/" },
    { title: "Portpolio", link: "/" },
    { title: "Blog", link: "/" },
    { title: "Contact Us", link: "/" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="relative h-20 w-full bg-c-header">
        <div className="flex-rows mx-auto h-full items-center justify-between px-2 lg:w-screen">
          <img src="/images/BisLite.png" alt="" className="h-8 lg:h-10" />
          {/* menu web */}
          <ul className="z-30 hidden gap-5 lg:flex">
            {navData.map((data, index) => (
              <li key={index} className="group relative">
                <Link
                  href={data.link}
                  className="transitions flex-rows items-center gap-2 border-t-4 border-transparent px-4 py-3 font-bold group-hover:border-t-4 group-hover:border-c-blue group-hover:bg-white group-hover:text-c-blue-2"
                >
                  {data.title}
                  {data.subNav ? (
                    <MdKeyboardArrowDown className="h-5 w-5" />
                  ) : (
                    ""
                  )}
                </Link>
                {data.subNav ? (
                  <ul className="absolute left-0 top-11 mt-2 hidden w-52 flex-col gap-3 border-b-4 border-c-blue bg-white px-2 py-3 shadow-md group-hover:flex">
                    {data.subNav.map((item, i) => (
                      <li
                        key={i}
                        className="border-b border-[#e7e7e7] py-2 hover:text-c-blue-2"
                      >
                        <Link href={item.link}>{item.title}</Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  ""
                )}
              </li>
            ))}
          </ul>
          {/* menu mobile */}
          {isOpen ? (
            <div
              className="rounded-lg border border-c-blue p-4 lg:hidden"
              onClick={() => setIsOpen(false)}
            >
              <MdClose className="h-5 w-5" />
            </div>
          ) : (
            <div
              className="rounded-lg border border-c-blue p-4 lg:hidden"
              onClick={() => setIsOpen(true)}
            >
              <AiOutlineMenu className="h-5 w-5" />
            </div>
          )}

          {isOpen && (
            <ul className="transitions absolute left-0 top-full z-20 w-full bg-white shadow-lg">
              {navData.map((data, index) => (
                <li key={index} className="group flex w-full flex-col">
                  <Link
                    href={data.link}
                    className="flex gap-4 border-b border-[#e7e7e7] p-4 hover:text-c-blue"
                  >
                    {data.title}
                    {data.subNav ? (
                      <MdKeyboardArrowDown className="h-5 w-5" />
                    ) : (
                      ""
                    )}
                  </Link>
                  {data.subNav ? (
                    <ul className="transitions hidden group-hover:block">
                      {data.subNav.map((sub, i) => (
                        <li
                          key={i}
                          className="border-b border-[#e7e7e7] py-4 pl-6 hover:text-c-blue"
                        >
                          <Link href={sub.link}>{sub.title}</Link>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </header>
      <div className="flex w-full items-center bg-c-blue-3 lg:h-header">
        <div className="mx-auto w-full lg:w-screen" id="banner">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ type: "bullets" }}
            modules={[Autoplay, Pagination, Navigation]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
          >
            <SwiperSlide>
              <div className="flex w-full items-center justify-center lg:h-slider">
                <img src="/images/banner_image.jpg" alt="" className="h-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex w-full items-center justify-center lg:h-slider">
                <img src="/images/banner_image.jpg" alt="" className="h-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex w-full items-center justify-center lg:h-slider">
                <img src="/images/banner_image.jpg" alt="" className="h-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex w-full items-center justify-center lg:h-slider">
                <img src="/images/banner_image.jpg" alt="" className="h-full" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <Middle />
      <LastestWorks />
      <Info />
      <div className="mx-auto my-20 grid gap-10 bg-[#e8fcfe] p-6 lg:w-screen lg:grid-cols-4">
        <div className="col-span-1 lg:col-span-3">
          This is a clean and modern, four column website PSD template. You can
          code it into a Wordpress website, HTML5 responsive website for your
          personal or client works. So ahead and download this wonderful PSD
          template!
        </div>
        <div className="col-span-1">
          <div className="group flex cursor-pointer items-center gap-2 rounded-lg bg-[#7be0ea] px-6 py-4 font-bold uppercase shadow-2xl">
            <FaDownload></FaDownload>
            <span className="group-hover:text-white">Download PSD</span>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
