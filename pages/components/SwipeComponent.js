import {Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

const SwipeComponent = () => {
    const items = [
        {key: '1', image: '../../public/images/66.jpg'},
        // {key: '2', image: 'https://60minutecar.com/wp-content/uploads/2020/03/57.jpg'},
        // {key: '3', image: 'https://60minutecar.com/wp-content/uploads/2020/03/57.jpg'},
        // {key: '4', image: 'https://60minutecar.com/wp-content/uploads/2020/03/57.jpg'},
        // {key: '5', image: 'https://60minutecar.com/wp-content/uploads/2020/03/57.jpg'},
        // {key: '6', image: 'https://60minutecar.com/wp-content/uploads/2020/03/57.jpg'},
    ]
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={
                {delay: 5000}
            }
        >
            {items.map(item => (
                <SwiperSlide key={item.key}
                             style={{backgroundImage: 'url(${item.image})', width: '100%', height: '200px'}}>
                    {/*<p>{item.image}</p>*/}
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
export default SwipeComponent;