import React from "react";
import { SlSpeech } from "react-icons/sl";
import { BsPeople } from "react-icons/bs";
const Info = () => {
  const dataImage = [
    "/images/client01.jpg",
    "/images/client02.jpg",
    "/images/client03.jpg",
    "/images/client04.jpg",
    "/images/client05.jpg",
    "/images/client06.jpg",
  ];
  return (
    <div className="w-full">
      <div className="mx-auto mb-10 grid grid-cols-1 gap-16 lg:w-screen lg:grid-cols-2">
        <div className="flex-colo col-span-1 gap-5">
          <div className="flex items-center gap-3">
            <SlSpeech className="h-7 w-7 text-c-blue" />
            <h1 className="font-bold uppercase">TESTIMONIALS</h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut
            nulla sapien, at aliquam erat. Sed vitae massa tellus. Aliquam
            commodo aliquam metus, sed iaculis nibh tempus id. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis
            in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam nec
            nisi in nisl euismod fringilla.
          </p>
          <h4 className="font-bold text-current">
            John Travis, CEO, DomainName.com
          </h4>
        </div>
        <div className="flex-colo col-span-1 gap-5">
          <div className="flex items-center gap-3">
            <BsPeople className="h-7 w-7 text-c-blue" />
            <h1 className="font-bold uppercase">OUR CLIENTS</h1>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3">
            {dataImage.map((image, i) => (
              <img src={image} key={i} className="col-span-1 w-full"></img>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
