import React, { useState } from "react";
import { ArrayPen, ArrayTabs } from "../data";

const Tabs = () => {
  const [currentTab, setCurrentTab] = useState("1");

  return (
    <>
      <ul className="flex w-full justify-between">
        {ArrayTabs.map((i) => (
          <li
            onClick={() => setCurrentTab(i.key)}
            key={i.key}
            className={`w-[300px] h-[200px] flex flex-col justify-center items-center rounded-t-[24px] ${
              currentTab === i.key ? "bg-slate-100" : ""
            }`}
          >
            <div
              className="py-6 w-[235px] bg-white flex flex-col justify-center items-center rounded-[10px]
              shadow-[0_0_27px_rgba(0,0,0,0.05)]"
            >
              <div className="rounded-full bg-slate-100 h-14 w-14 flex justify-center items-center">
                <img src={i.img} alt={i.name} className="w-9 h-9" />
              </div>
              <span className="mt-1 font-bold">{i.name}</span>
            </div>
          </li>
        ))}
      </ul>
      <div className="bg-slate-100 py-10 px-12">
        {ArrayTabs.map((i) => (
          <div
            className={`flex w-full ${
              currentTab === i.key ? "block" : "hidden"
            }`}
            key={i.key}
          >
            <div className="w-1/3">
              <div className="font-normal text-xl">
                Graphite Artist Quality Fine Art <br />
                Drawing and Sketching Pencils Replaceable Nib Pencils.
              </div>
              <ul className="mt-9 ml-5 list-disc">
                <li className="font-semibold text-lg">MECHANICAL PENCILS</li>
                <li className="font-semibold text-lg mt-2.5">
                  ARCHITECH'S CHOICE
                </li>
                <li className="font-semibold text-lg mt-2.5">
                  EXECUTIVE PENCILS
                </li>
                <li className="font-semibold text-lg mt-2.5">
                  ENGRAVABLE PENCILS
                </li>
              </ul>
              <div className="mt-9">
                <span className="text-white text-sm font-bold py-3.5 px-7 rounded-md bg-primary">
                  SHOP ALL
                </span>
              </div>
            </div>
            <div className="w-2/3">
              <div className="flex bg-white py-1 pr-1 items-center rounded-2xl">
                <span className="pl-10 pr-7 text-3xl font-bold text-[#f4b840]">
                  {i.key}5% off
                </span>
                <div className="flex-1 bg-slate-100 py-5 pl-6  rounded-r-2xl">
                  <span className="font-light text-2xl ">
                    Offer Applicable on All Our Pencils
                  </span>
                </div>
              </div>
              <div className="mt-5 flex justify-between">
                {ArrayPen.map((i) => (
                  <div key={i.key} className="bg-white p-2.5 px-6 rounded-2xl">
                    <img src={i.img} alt={i.key} />
                    <div className="mt-3.5 text-center">
                      <div className="text-sm font-medium">{i.title}</div>
                      <div className="mt-1.5">
                        <span className="text-base font-semibold mr-2.5">
                          {i.currentPrice}
                        </span>
                        <span className="font-normal text-sm line-through text-[#727272]">
                          {i.oldPrice}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Tabs;
