import React from 'react';
import { Box, Typography } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { HomeGalleryLinks1 } from '../constants/HomeGallery';


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
        slidesToSlide: 5,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1,
    },
};
// const CustomRightArrow = ({ onClick, className }) => (
//     <button className={className} onClick={() => onClick()}>
//         {/* Your arrow content */}
//     </button>
// );

// const CustomLeftArrow = ({ onClick, className }) => (
//     <button className={className} onClick={() => onClick()}>
//         {/* Your arrow content */}
//     </button>
// );


const DesertCarousel = () => {
  return (
    <div>
          <Box >
              <Carousel
                  swipeable={true}
                  showDots={true}
                  responsive={responsive}
                  infinite={true}
                  autoPlaySpeed={1000}
                  keyBoardControl={true}
                  customTransition="all .5"
                  transitionDuration={500}
              //   customRightArrow={<CustomRightArrow />}
              //   customLeftArrow={<CustomLeftArrow />}
              >
                  {HomeGalleryLinks1.map((dishes) => (
                      <Box key={dishes.id} sx={{ maxWidth: '345px', textAlign: 'center', margin: '5px 8%', padding: '20px 10px', background: 'white' }}>
                          <img src={dishes.img} alt={dishes.title} style={{ maxWidth: '80%', marginBottom: '5%' }} />
                          <Typography variant="h6" sx={{ marginBottom: '5%' }}>{dishes.title}</Typography>


                      </Box>
                  ))}

              </Carousel>
          </Box>

    </div>
  )
}

export default DesertCarousel;