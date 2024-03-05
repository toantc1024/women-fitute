import React from "react";
import ImageSlide from "./ImageSlide";

const Main = () => {
  return (
    <div className="min-h-screen bg-base-200">
      <div className="w-full bg-pink-200 flex-col lg:flex-row ">
        <ImageSlide />
      </div>
    </div>
  );
};

export default Main;
