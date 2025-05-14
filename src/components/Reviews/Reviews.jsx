
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import Heading from '../utils/Heading';

const testimonials = [
  {
    name: "Sarah Johnson",
    review: "Absolutely loved my haircut! The staff were friendly, and the ambiance was relaxing.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Emily Carter",
    review: "My nails have never looked better. Highly recommend their manicure services!",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Jessica Brown",
    review: "The facial treatment was top-notch. My skin feels so refreshed!",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    name: "Olivia Smith",
    review: "Love the hair coloring! It turned out exactly how I imagined it.",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    name: "Amanda Davis",
    review: "Great atmosphere and professional staff. Will definitely return!",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    name: "Natalie Wilson",
    review: "Their spa service was incredibly soothing. I felt rejuvenated.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const Reviews = () => {
  return (
    <div id="reviews" className="bg-gray-900 text-white px-4 py-20">
      <div className="max-w-6xl mx-auto">
        {/* <h2 className="text-4xl font-bold text-center mb-12 text-white">Client Testimonials</h2> */}
        <Heading heading={"Reviews"}/>
       <Swiper
  modules={[Pagination, Autoplay,EffectCoverflow]}
//   spaceBetween={30}
  slidesPerView={1}
  centeredSlides={true}
  pagination={{ clickable: true }}
  autoplay={{ delay: 3000 }}
  loop={true}
  
>
  {testimonials.map((t, i) => (
    <SwiperSlide key={i}>
      <div className="w-full max-w-[500px] mx-auto bg-gray-800 rounded-2xl shadow-md p-8 flex flex-col items-center text-center transition duration-300 hover:shadow-xl">
        <img
          src={t.image}
          alt={t.name}
          className="w-24 h-24 rounded-full border-4 border-yellow-500 mb-4"
        />
        <p className="text-gray-300 italic mb-4 leading-relaxed">"{t.review}"</p>
        <h4 className="text-lg font-semibold text-yellow-400">{t.name}</h4>
      </div>
    </SwiperSlide>
  ))}
</Swiper>


      </div>
    </div>
  );
};

export default Reviews;
