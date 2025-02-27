import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

function Slides({ data }) {
  return (
    <div className='flex justify-center'>
      <div className='max-w-[1200px]'>
        <Swiper
          className="mySwiper"
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          rewind={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ el: ".swiper-pagination", clickable: true, dynamicBullets: true }}
          slidesPerView={3}
          spaceBetween={30}
          modules={[Navigation, Autoplay, Pagination]}>
          {data.map((item) => (
            <SwiperSlide key={item.id} >
              <div className="slider-item bg-white rounded-lg p-[0.5px] flex flex-col gap-10">
                <img src={item.image} alt={item.title} className="slider-image rounded-t-lg " />
                <h3 className="slider-title h-[70px] text-center font-semibold text-2xl text-center">{item.title}</h3>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-button-next !text-white"></div>
          <div className="swiper-button-prev !text-white"></div>
          <div className="swiper-pagination !relative !flex !bottom-2"></div>
        </Swiper>
      </div>
    </div>
  );
}

export default Slides;