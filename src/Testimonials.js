import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Testimonial.css";
import { Autoplay, Pagination, Navigation } from "swiper";
import test3 from "./images/jon.webp"
import test1 from "./images/danny.webp";
import test2 from "./images/tyrion.jpg";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3600,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div>
            <div className="h-full text-center mb-16 p-36 pb-40 bottom-16 rounded-3xl bg-blue-900">
                    <img class="h-24 w-24 object-cover rounded-full inline-block border-2  items-center justify-center border-slate-400 bg-opacity-50" src={test1} alt="" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-quote w-auto h-16 block text-yellow-600" viewBox="0 0 16 16">
  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/></svg>
                    <p className="loading-relaxed title-font font-sans font-bold text-2xl tracking-wider text-slate-200 ">I am Daenerys Stormborn, of House Targaryen, of the blood of Old Valyria – I am the Dragon’s Daughter. And I swear to you, that those who would harm you will die screaming.</p>
                    <span className="inline-flex h-1 w-14 rounded bg-indigo-500 mb-2 mt-8"></span>
                    <h2 className="title-font font-sans font-medium text-xl tracking-wider text-slate-200">Daenerys Targaryen </h2>
                    <h4 className="text-slate-400 title-font font-sans font-medium text-base tracking-wider">Khaleesi</h4>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
            <div className="h-full text-center mb-16 p-36 pb-40 bottom-16 rounded-3xl bg-blue-900">
                    <img class="h-24 w-24 object-cover rounded-full inline-block border-2  items-center justify-center border-slate-400 bg-opacity-50" src={test2} alt="" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-quote w-auto h-16 block text-yellow-600" viewBox="0 0 16 16">
  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/></svg>
                    <p className="loading-relaxed title-font font-sans font-bold text-2xl tracking-wider text-slate-200 ">Never forget what you are, the rest of the world will not. Wear it like armor and it can never be used to hurt you.</p>
                    <span className="inline-flex h-1 w-14 rounded bg-indigo-500 mb-2 mt-8"></span>
                    <h2 className="title-font font-sans font-medium text-xl tracking-wider text-slate-200">Tyrion Lannister</h2>
                    <h4 className="text-slate-400 title-font font-sans font-medium text-base tracking-wider">The Imp</h4>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <div className="h-full text-center mb-16 p-36 pb-40 rounded-3xl bg-blue-900">
                    <img class="h-24 w-24 object-cover rounded-full inline-block border-2  items-center justify-center border-slate-400 bg-opacity-50" src={test3} alt="" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-quote w-auto h-16 block text-yellow-600" viewBox="0 0 16 16">
  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/></svg>
                    <p className="loading-relaxed title-font font-sans font-bold text-2xl tracking-wider text-slate-200 ">I put my trust in you, a stranger because I knew it was the best chance for my people, for all our people.</p>
                    <span className="inline-flex h-1 w-14 rounded bg-indigo-500 mb-2 mt-8"></span>
                    <h2 className="title-font font-sans font-medium text-xl tracking-wider text-slate-200">Jon Snow </h2>
                    <h4 className="text-slate-400 title-font font-sans font-medium text-base tracking-wider">King In The North</h4>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
