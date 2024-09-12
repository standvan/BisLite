import Link from "next/link";
import React from "react";

const Footer = () => {
  const dataSocial = [
    { image: "/images/facebook_icon.png", color: "#3b5998" },
    { image: "/images/dribbble_icon.png", color: "#e94983" },
    { image: "/images/pinterest_icon.png", color: "#c62b30" },
    { image: "/images/linkedin_icon.png", color: "#3398cc" },
    { image: "/images/skype_icon.png", color: "#3398cc" },
    { image: "/images/sharethis_icon.png", color: "#21a61b" },
  ];
  return (
    <div className="w-full bg-c-header px-2 pb-7 lg:px-0">
      <div className="mx-auto py-10 lg:w-screen">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-7">
          <div className="flex-colo col-span-1 gap-6 lg:col-span-2">
            <h1 className="font-bold uppercase">about us</h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              euismod placerat dui et tincidunt. Sed sollicitudin posuere
              auctor. Phasellus at ultricies nisl. Integer at leo eros. Ut nec
              lorem id orci convallis porta. Donec pharetra neque eu velit
              dictum molestie.
            </p>
          </div>
          <div className="flex-colo col-span-1 gap-6">
            <h1 className="font-bold uppercase">explore</h1>
            <ul className="flex-colo gap-3">
              <li className="hover:text-c-blue-2">
                <Link href="#">Home</Link>
              </li>
              <li className="hover:text-c-blue-2">
                <Link href="#">About us</Link>
              </li>
              <li className="hover:text-c-blue-2">
                <Link href="#">Services</Link>
              </li>
              <li className="hover:text-c-blue-2">
                <Link href="#">Portfolio</Link>
              </li>
              <li className="hover:text-c-blue-2">
                <Link href="#">Blog</Link>
              </li>
            </ul>
          </div>
          <div className="flex-colo col-span-1 gap-6">
            <h1 className="font-bold uppercase">browse</h1>
            <ul className="flex-colo gap-3">
              <li className="hover:text-c-blue-2">
                <Link href="#">Careers</Link>
              </li>
              <li className="hover:text-c-blue-2">
                <Link href="#">Press & media</Link>
              </li>
              <li className="hover:text-c-blue-2">
                <Link href="#">Contact us</Link>
              </li>
              <li className="hover:text-c-blue-2">
                <Link href="#">Terms Of Service</Link>
              </li>
              <li className="hover:text-c-blue-2">
                <Link href="#">Privacy policy</Link>
              </li>
            </ul>
          </div>
          <div className="flex-colo col-span-1 gap-6">
            <h1 className="font-bold uppercase">Contact us</h1>
            <div className="">
              <h2 className="font-bold">BisLite Inc.</h2>
              <p className="text-sm">Always Street 265 0X - 125 - Canada</p>
              <p className="mt-3 text-sm">Phone: 987-6543-210</p>
              <p className="mt-3 text-sm">Fax: 987-6543-210</p>
            </div>
          </div>
          <div className="flex-colo col-span-1 gap-6 lg:col-span-2">
            <h1 className="font-bold uppercase">Connect with us</h1>
            <div className="grid grid-cols-3 gap-y-4">
              {dataSocial.map((social, i) => (
                <div className="col-span-1" key={i}>
                  <Link href="#">
                    <img src={social.image}></img>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto my-4 grid gap-4 lg:my-10 lg:w-screen lg:grid-cols-6">
        <div className="col-span-4 text-sm">
          © Copyright 2012 - BisLite Inc. All rights reserved. Some free icons
          used here are created by Brankic1979.com. Client Logos are copyright
          and trademark of the respective owners / companies.
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-1">
          <img src="/images/BisLite.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
