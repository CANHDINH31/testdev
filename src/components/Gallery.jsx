import React from "react";
import Packer1 from "../asset/image/packer1.png";
import Packer2 from "../asset/image/packer2.png";
import Packer3 from "../asset/image/packer3.png";
import Packer4 from "../asset/image/packer4.png";
import Packer5 from "../asset/image/packer5.png";
import Packer6 from "../asset/image/packer6.png";
import Packer7 from "../asset/image/packer7.png";

const Gallery = () => {
  return (
    <div>
      <div className="text-center">
        <span className="text-[#121212] font-bold text-[45px]">
          PACKER PEN GALLERY
        </span>
      </div>
      <div className="flex gap-x-[18px] items-center mt-10">
        <div className="flex flex-col gap-y-3">
          <img src={Packer1} alt="Packer1" />
          <img src={Packer2} alt="Packer2" />
        </div>
        <div className="flex flex-col gap-y-3">
          <img src={Packer3} alt="Packer3" />
          <img src={Packer4} alt="Packer4" />
        </div>
        <div className="flex flex-col gap-y-3">
          <img src={Packer5} alt="Packer5" />
          <img src={Packer6} alt="Packer6" />
          <img src={Packer7} alt="Packer7" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
