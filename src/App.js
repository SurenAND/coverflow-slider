import React from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { sliderData } from "./data";
import "./styles.css";
import { swiperConfig } from "./swiperSetting";

function App() {
  return (
    <main>
      <Swiper {...swiperConfig}>
        {sliderData.map((item) => (
          <SwiperSlide key={item.id}>
            <h1>{item.title}</h1>
            <img src={item.imageUrl} alt={item.title} />
            <div className="description">
              <p>{item.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
}

export default App;
