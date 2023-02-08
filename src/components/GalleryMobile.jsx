import React from "react";
import ImageMobile1 from "../asset/image/imageMobile1.png";
import ImageMobile2 from "../asset/image/imageMobile2.png";
import ImageMobile3 from "../asset/image/imageMobile3.png";
import ImageMobile4 from "../asset/image/imageMobile4.png";
import ImageMobile5 from "../asset/image/imageMobile5.png";
import ImageMobile6 from "../asset/image/imageMobile6.png";
import ImageMobile7 from "../asset/image/imageMobile7.png";

const GalleryMobile = () => {
  return (
    <div>
      <div className="text-3xl font-bold text-center">PACKER PEN GALLERY</div>
      <div className="mt-[34px]">
        <div className="flex justify-between">
          <div className="flex flex-col gap-y-2.5">
            <img src={ImageMobile1} alt="ImageMobile1" />
            <img src={ImageMobile2} alt="ImageMobile2" />
          </div>
          <div>
            <img src={ImageMobile3} alt="ImageMobile3" />
          </div>
        </div>
        <div>
          <img
            className="w-full mt-2.5"
            src={ImageMobile4}
            alt="ImageMobile4"
          />
        </div>
        <div>
          <img
            className="w-full mt-2.5"
            src={ImageMobile5}
            alt="ImageMobile5"
          />
        </div>
        <div className="flex justify-between w-full mt-2.5">
          <img src={ImageMobile6} alt="ImageMobile6" />
          <img src={ImageMobile7} alt="ImageMobile7" />
        </div>
      </div>
    </div>
  );
};

export default GalleryMobile;
