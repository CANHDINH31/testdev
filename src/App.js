import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Tabs from "./components/Tabs";
import TabsMobile from "./components/TabsMobile";
import Gallery from "./components/Gallery";
import GalleryMobile from "./components/GalleryMobile";

function App() {
  return (
    <div className="App">
      <div className="mx-24 my-28 hidden lg:block">
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          <SwiperSlide className="pb-20">
            <Tabs />
          </SwiperSlide>
          <SwiperSlide className="pb-20">
            <Tabs />
          </SwiperSlide>
        </Swiper>
        <Swiper
          className="mt-[100px]"
          modules={[Pagination]}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          <SwiperSlide className="pb-20">
            <Gallery />
          </SwiperSlide>
          <SwiperSlide className="pb-20">
            <Gallery />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="block sm:hidden">
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          <SwiperSlide className="pb-16">
            <TabsMobile />
          </SwiperSlide>
          <SwiperSlide className="pb-16">
            <TabsMobile />
          </SwiperSlide>
        </Swiper>
        <Swiper
          className="mt-16"
          modules={[Pagination]}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          <SwiperSlide className="pb-16">
            <GalleryMobile />
          </SwiperSlide>
          <SwiperSlide className="pb-16">
            <GalleryMobile />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default App;
