"use client";
import React, { Fragment } from "react";
import "./slide.css";
import { HiArrowDown } from "react-icons/hi";

import images from "./stocks";
const ImageSlide = ({ ref, showImageSlide = true, setShowThankyou }) => {
  return (
    <div className="w-full bg-pink-200 flex-col lg:flex-row ">
      <div
        ref={ref}
        id="image-slide-section"
        className="h-screen overflow-hidden flex items-center justify-between px-32 relative "
      >
        {showImageSlide && (
          <Fragment>
            <div className="transition-all ease-in-out duration-150 absolute border-[1px] w-[500px] h-[500px] bg-[rgba(255,255,255,.2)] rounded-full gallery_item top-0 left-0 text-[10rem] flex items-center justify-center">
              🌸
            </div>

            <span className="text-6xl font-extrabold bg-[rgba(255,255,255,.8)] backdrop-blur-lg border-[2px] border-[1px] border-white text-pink-600 p-4 rounded-2xl hover:shadow-pink-300 shadow-none transition-all ease-in-out duration-150 cursor-pointer relative gallery_item shadow-2xl ">
              <p className="font-light italic">
                Where there is <strong>women</strong> there is magic. 👒
              </p>
              <span className="text-3xl">- Ntozake Shange</span>
            </span>
            <div class="gallery ">
              {[...new Array(3)].map((_, i) => (
                <div class="gallery_line">
                  {images.map(({ src }, i) => (
                    <img src={src} />
                  ))}
                </div>
              ))}
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
};
export default ImageSlide;
