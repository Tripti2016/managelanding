// SwiperComponent.js
import Testmoinal from "./Testmoinal";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import the main Swiper styles
// import "swiper/swiper-bundle.min.css";
SwiperCore.use([Navigation, Pagination, Autoplay]);
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
const SwiperComponent = ({ reviews }) => {
  return (
    <Swiper
    spaceBetween={50}
    slidesPerView={3}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
      breakpoints={{
        1024:{
          slidesPerView: 2,
          spaceBetween: 20
        },
        375: {
          slidesPerView: 1,
        }
      }}
    >
      {reviews.map((review, index) => (
        <SwiperSlide key={index}>
          <Testmoinal
            img={review.img}
            name={review.name}
            reviewText={review.review}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
