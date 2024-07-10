import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CardLinks } from '../constants/SpecialDishes';
import { Box, Typography } from '@mui/material';
import { WrapperButton } from '../assets/wrapper/FamousDishesWrapper';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 4,
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

const CustomRightArrow = ({ onClick, className }) => (
    <button className={className} onClick={() => onClick()}>
        {/* Your arrow content */}
    </button>
);

const CustomLeftArrow = ({ onClick, className }) => (
    <button className={className} onClick={() => onClick()}>
        {/* Your arrow content */}
    </button>
);


const ResponsiveFamousDishes = () => {
    return (
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
                customRightArrow={<CustomRightArrow />}
                customLeftArrow={<CustomLeftArrow />}
            >
                {CardLinks.map((dishes) => (
                    <Box key={dishes.id} sx={{maxWidth:'345px', textAlign: 'center',margin:'5px 8%', padding: '20px 10px' ,border:'1px solid black',borderRadius:'10px',background:'white'}}>
                        <img src={dishes.img} alt={dishes.title} style={{ maxWidth: '80%', height: 'auto' ,marginBottom:'5%'}} />
                        <Typography variant="h5" sx={{marginBottom:'5%'}}>{dishes.title}</Typography>
                        <Typography variant="body2" sx={{marginBottom:'8%'}}>{dishes.desc}</Typography>
                       <Box sx={{display:'flex',justifyContent:'center',gap:'3%'}}>
                        <WrapperButton size="small">
                            <ShoppingCart />
                            Add Cart
                        </WrapperButton>
                        <WrapperButton size="small"> View more</WrapperButton>

                       </Box>
                    </Box>
                ))}
        
            </Carousel>
        </Box>
    );
};

export default ResponsiveFamousDishes;
