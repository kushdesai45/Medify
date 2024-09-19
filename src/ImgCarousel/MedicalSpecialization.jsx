import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './ImgCarousel.css';

// Import required modules
import { Pagination, Navigation } from 'swiper/modules';

const MedicalSpecialization = () => {
  const list = [
    {name:"Dr. Ahmad Khan",occupation:"Neurologist",img:'/assests/doctor1.png'},
    {name:"Dr. Heena Sachdeva",occupation:"Orthopadics",img:'/assests/doctor2.png'},
    {name:"Dr. Ankur Sharma",occupation:"Medicine",img:'/assests/doctor3.png'},
    {name:"Dr. Ahmad Khan",occupation:"Neurologist",img:'/assests/doctor1.png'},
    {name:"Dr. Heena Sachdeva",occupation:"Orthopadics",img:'/assests/doctor2.png'},
    {name:"Dr. Ankur Sharma",occupation:"Medicine",img:'/assests/doctor3.png'},
    {name:"Dr. Ahmad Khan",occupation:"Neurologist",img:'/assests/doctor1.png'},
    {name:"Dr. Heena Sachdeva",occupation:"Orthopadics",img:'/assests/doctor2.png'},
    {name:"Dr. Ankur Sharma",occupation:"Medicine",img:'/assests/doctor3.png'},
  ];

  return (
    <>
    <h2>Our Medical Specialists</h2>
    <Swiper
      modules={[Pagination, Navigation]}
      spaceBetween={15}
      slidesPerView={4}
      pagination={{ clickable: true }}
      loop={true}
      className='mySwiper'
    >
      {list.map((item, index) => (
        <SwiperSlide key={index}>
        <div className='swiperDiv'>
            <img className='swiperImg' src={item?.img} alt={`Slide ${index + 1}`} />
        </div>
        <p style={{fontSize:'24px',fontWeight:'400',margin:'0'}}>{item?.name}</p>
        <p style={{color:'#2AA7FF',fontSize:'17px',margin:'0'}}>{item?.occupation}</p>
        </SwiperSlide>
      ))}
    </Swiper>
    </>
  );
};

export default MedicalSpecialization;

