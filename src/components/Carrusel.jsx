import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

const ImageCarousel = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      effect="fade"
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className="shadow-lg"
    >
      <SwiperSlide>
        <img src="/vw.jpg" alt="Image 1" className="w-full h-96 object-cover "/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/kia.jpg" alt="Image 2" className="w-full h-96 object-cover "/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/chevrolet.jpg" alt="Image 3" className="w-full h-96 object-cover "/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/toyota.jpg" alt="Image 4" className="w-full h-96 object-cover "/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/nissan.jpg" alt="Image 5" className="w-full h-96 object-cover "/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/jeep.jpg" alt="Image 6" className="w-full h-96 object-cover "/>
      </SwiperSlide>  
      <SwiperSlide>
        <img src="/honda.jpg" alt="Image 8" className="w-full h-96 object-cover "/>
      </SwiperSlide>
    </Swiper>
  );
};

export default ImageCarousel;
