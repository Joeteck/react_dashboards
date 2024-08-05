// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';


const Slider = () => {

    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay,]}
            slidesPerView={1}
            navigation
            freeMode = {{
                enabled: true,
                sticky: true,
            }}
            loop={true}
            autoplay={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            >
            <SwiperSlide>
                <img src="/Slide1.png" alt="Slide 1" className="w-full h-[50vh] object-cover"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="/Slide2.png" alt="Slide 1" className="w-full h-[50vh] object-cover"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="/Slide3.png" alt="Slide 1" className="w-full h-[50vh] object-cover"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="/Slide4.png" alt="Slide 1" className="w-full h-[50vh] object-cover"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="/Slide5.png" alt="Slide 1" className="w-full h-[50vh] object-cover"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="/Slide6.png" alt="Slide 1" className="w-full h-[50vh] object-cover"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="/Slide7.png" alt="Slide 1" className="w-full h-[50vh] object-cover"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="/Slide8.png" alt="Slide 1" className="w-full h-[50vh] object-cover"/>
            </SwiperSlide>
        </Swiper>
    )
}

export default Slider;