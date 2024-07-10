import React from 'react';
import CustomerReviewCard from './CustomerReviewCard';
import { Box,Typography } from '@mui/material';
import { BlogContainWrapper,WrapperHeaderBox } from '../assets/wrapper/CustomerReviewWrapper';

const BlogContainer = () => {


    return (
        <div>
        <BlogContainWrapper>
            <CustomerReviewCard />
        </BlogContainWrapper>
        </div>
    );
};

export default BlogContainer;