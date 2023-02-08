import React, { useState } from "react";
import OpenMobile from "../asset/image/openMobile.png";
import CloseMobile from "../asset/image/closeMobile.png";
import { ArrayTabs, ArrayPenMobile } from "../data";

const TabsMobile = () => {
  const [listTabOpen, setListTabOpen] = useState(["1"]);
  const handleClickTab = (id) => {
    if (listTabOpen.includes(id)) {
      const index = listTabOpen.indexOf(id);
      const newListTabOpen = listTabOpen.splice(index, -1);
      setListTabOpen(newListTabOpen);
    } else {
      setListTabOpen([...listTabOpen, id]);
    }
  };
  return (
    <div className="px-0.5">
      {ArrayTabs.map((e) => (
        <div
          key={e.key}
          className={`bg-[#f4f4f4] rounded-[18px] p-2.5 ${
            e.key === "1" ? "" : "mt-2.5"
          }`}
          onClick={() => handleClickTab(e.key)}
        >
          <div className="bg-white h-[80px] rounded-[18px] flex items-center justify-between px-[30px]">
            <div className="flex items-center">
              <div className="w-[50px] h-[50px] bg-[#f4f4f4] rounded-full flex justify-center items-center">
                <img src={e.imgMoblie} alt={e.imgMoblie} />
              </div>
              <span className="ml-5 font-bold text-[21px]">Pencils</span>
            </div>
            <div>
              {listTabOpen.includes(e.key) ? (
                <img src={OpenMobile} alt="OpenMobile" />
              ) : (
                <img src={CloseMobile} alt="OpenMobile" />
              )}
            </div>
          </div>
          {listTabOpen.includes(e.key) && (
            <div className="mt-10">
              <div className="font-normal text-base px-4 text-center">
                Graphite Artist Quality Fine Art Drawing, Sketching and
                Replaceable Nib Pencils.
              </div>
              <div className="flex mt-10 justify-between px-3">
                <div>
                  <li className="font-semibold text-[13px]">
                    MECHANICAL PENCILS
                  </li>
                  <li className="font-semibold text-[13px]">
                    ARCHITECT'S CHOICE
                  </li>
                </div>
                <div>
                  <li className="font-semibold text-[13px]">
                    EXECUTIVE PENCILS
                  </li>
                  <li className="font-semibold text-[13px]">
                    ENGRAVABLE PENCILS
                  </li>
                </div>
              </div>
              <div className="mt-10 px-3">
                <div className="p-6 flex items-center justify-between border-2 border-white rounded-[10px]">
                  <div className="flex items-start">
                    <span className="text-4xl font-bold text-[#f4b840]">
                      25%
                    </span>
                    <span className="text-lg font-bold text-[#f4b840]">
                      OFF
                    </span>
                  </div>
                  <div className="font-normal text-base">
                    Offer Applicable on <br /> All Our Pencils
                  </div>
                </div>
              </div>
              <div className="mt-10 flex justify-between">
                {ArrayPenMobile.map((i) => (
                  <div
                    key={i.key}
                    className="bg-white pt-2 pb-7 px-4 rounded-[18px]"
                  >
                    <div>
                      <img src={i.imgMobile} alt={i.imgMobile} />
                    </div>
                    <div className="mt-0.5 text-center">
                      <div className="font-medium text-[13px] text-[#000000]">
                        {i.titleMobile}
                        <br />
                        Mechanical Pencil
                      </div>
                      <div>
                        <span className="font-medium text-sm text-[#000000] mr-2.5">
                          {i.currentPrice}
                        </span>
                        <span className="font-normal text-[13px] text-[#727272] line-through">
                          {i.oldPrice}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10 text-center pb-[50px]">
                <div className="px-[18px] py-[15px]">
                  <span className="font-bold text-sm text-white bg-[#f4b840] px-[18px] py-[15px] rounded-[5px]">
                    SHOP ALL
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TabsMobile;
