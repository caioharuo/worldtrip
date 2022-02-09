import { Box } from '@chakra-ui/react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SlideContent } from './SlideContent';

export function Carousel() {
  return (
    <Box mx={['0', null, null, '100px']} mb={['24px', '40px']}>
      <Swiper
        pagination={{
          clickable: true,
        }}
        navigation
        loop
        centeredSlides
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <SlideContent
            continent="Europa"
            description="O continente mais antigo."
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent
            continent="América do Norte"
            description="Lorem ipsum dolor, sit amet."
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
