import {Navigation, Pagination, Keyboard, Scrollbar, A11y, Autoplay} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import styles from '../../styles/Home.module.css'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

const SwipeComponent = () => {
    const items = [
        {key: '1', image: '/images/66.jpg'},
        {key: '2', image: '/images/70.jpg'},
        {key: '3', image: '/images/76.jpg'},
        {key: '4', image: '/images/78.jpg'},
        {key: '5', image: '/images/79.jpg'},
        {key: '6', image: '/images/66.jpg'},
    ]
    return (
        <> <Swiper
            modules={[Keyboard, Pagination, Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            navigation={true}
            pagination={{clickable: false}}
            rewind={true}
            className={styles.swiper}
            keyboard={{
                enabled: true,
            }}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
        >
            {items.map((item, index) => (
                <SwiperSlide key={item.key} virtualIndex={index}>
                    <img src={item.image} alt={item.key} className={styles.swiper__img}/>
                </SwiperSlide>
            ))}
        </Swiper>
        </>
    );
}
export default SwipeComponent;