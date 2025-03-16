import { images } from "@/assets/exports";
import React from "react";

const Gallery = () => {
  return (
    <div className="mt-20">
      <div className="w-[80%] mx-auto my-5">
        <h1 className="text-4xl">Past Events & Gallery</h1>
        <div className="columns-1 sm:columns-1 md:columns-2 lg:columns-3 p-4 gap-4 my-10">
          {/* Example images */}
          <div className="break-inside-avoid mb-4">
            <img
              src={images.sample}
              alt="Example 1"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="break-inside-avoid mb-4">
            <img
              src={images.sample}
              alt="Example 2"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="break-inside-avoid mb-4">
            <img
              src={images.sample}
              alt="Example 3"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="break-inside-avoid mb-4">
            <img
              src={images.sample}
              alt="Example 4"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="break-inside-avoid mb-4">
            <img
              src={images.sample}
              alt="Example 5"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="break-inside-avoid mb-4">
            <img
              src={images.sample}
              alt="Example 6"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
