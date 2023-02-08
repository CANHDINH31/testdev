import Pencils from "../asset/image/pencils.png";
import Notebooks from "../asset/image/notebooks.png";
import Markers from "../asset/image/markers.png";
import DrawingColors from "../asset/image/drawing-colors.png";
import Pen1 from "../asset/image/pen-1.png";
import Pen2 from "../asset/image/pen-2.png";
import Pen3 from "../asset/image/pen-3.png";
import TabMoblie1 from "../asset/image/tabMobile1.png";
import TabMoblie2 from "../asset/image/tabMobile2.png";
import TabMoblie3 from "../asset/image/tabMobile3.png";
import TabMoblie4 from "../asset/image/tabMobile4.png";
import PenMoblie1 from "../asset/image/penMoblie1.png";
import PenMoblie2 from "../asset/image/penMobile2.png";

export const ArrayTabs = [
  {
    key: "1",
    name: "Pencils",
    img: Pencils,
    imgMoblie: TabMoblie1,
  },
  {
    key: "2",
    name: "Markers",
    img: Markers,
    imgMoblie: TabMoblie2,
  },
  {
    key: "3",
    name: "Drawing Colors",
    img: DrawingColors,
    imgMoblie: TabMoblie3,
  },
  {
    key: "4",
    name: "Notebooks",
    img: Notebooks,
    imgMoblie: TabMoblie4,
  },
];

export const ArrayPen = [
  {
    key: "pen-1",
    title: "Aero Mechanical Pencil",
    img: Pen1,
    currentPrice: "$99.00",
    oldPrice: "$125.00",
  },
  {
    key: "pen-2",
    title: "Castell Mechanical Pencil",
    img: Pen2,
    currentPrice: "$75.00",
    oldPrice: "$99.00",
  },
  {
    key: "pen-3",
    title: "Architect Choive Pencil",
    img: Pen3,
    currentPrice: "$45.00",
    oldPrice: "$70.00",
  },
];

export const ArrayPenMobile = [
  {
    key: "pen-1-mobile",
    titleMobile: "Aero",
    imgMobile: PenMoblie1,
    currentPrice: "$99.00",
    oldPrice: "$125.00",
  },
  {
    key: "pen-2-mobile",
    titleMobile: "Castell",
    imgMobile: PenMoblie2,
    currentPrice: "$75.00",
    oldPrice: "$99.00",
  },
];
