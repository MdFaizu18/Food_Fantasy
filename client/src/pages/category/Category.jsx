import React from 'react'
import Navbar from '../../components/Navbar';
import { BgImageWrapper, BgInnerBox,
   CategoryContentBox, CategoryHeadingBox, CategoryImageBox,
    CategoryInnerBox, CategoryLeftInnerBox, 
    CategoryMainBox, 
    CategoryRighttInnerBox} from '../../assets/wrapper/CategoryWrapper';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import logo from '../../assets/images/category/logo.jpg'
import img01 from '../../assets/images/category/burgar.jpg'
import img02 from '../../assets/images/category/pizza.png'
import img03 from '../../assets/images/category/pasta.png'
import img04 from '../../assets/images/category/deserts.png'

// constatnt 
import { FirstCategory ,SecondCategory,ThirdCategory,FourthCategory} from '../../constants/Category';

const Category = () => {


  return (
    <div>
        <Navbar/>
      <BgImageWrapper>
        <BgInnerBox>
          <Box sx={{ display: 'flex', gap: '10px' }}>
            <Typography variant='h4'>Category</Typography>
            <Box style={{ fontSize: '2.3rem' }}>
              <FastfoodIcon/>
            </Box>
          </Box>
          <Typography variant='body2' textAlign='center' color='whitesmoke'>
           Explore Fantasy </Typography>
        </BgInnerBox>
      </BgImageWrapper>

      <CategoryHeadingBox >
        <Typography variant='h3' textAlign='center' sx={{ fontFamily: "'Pinyon Script', cursive", color: 'green' }} gutterBottom>Variety Of Dishes</Typography>
        <Typography variant='h4' textAlign='center' sx={{ fontWeight: '600' }} gutterBottom>Explore The Fantasy Board</Typography>
        <Typography variant='body1' textAlign='center' sx={{ marginBottom: '5%'}}> From hearty comfort classics to avant-garde culinary creations, our menu offers something for every palate to savor and enjoy</Typography>
      </CategoryHeadingBox>

     <Box sx={{display:'flex',justifyContent:'center'}}>

      <CategoryMainBox>

      {/* for first category burger box  */}
          <CategoryInnerBox>
            <CategoryLeftInnerBox>
            <Box display={'flex'}>
               <Typography variant='h4' sx={{fontWeight:'600'}}># BURGER </Typography>
               {/* <span style={{ color: 'red', fontWeight: '800',margin:'5% 0px 0px 5px' }}>______________</span> */}
              <span style={{ color: 'red', fontWeight: '800', margin: '1.5% 0px 0px 2%', }}>_____</span>
            </Box>
            
           {FirstCategory.map((list)=>(
  
            <CategoryContentBox  key={list.id}>
            <Box sx={{display:'flex',justifyContent:'space-between',gap:'10%'}} >
              <Typography variant='h6'>{list.title}</Typography>
                  <Typography variant='h5'> ------------</Typography>
              <Typography variant='h5' color='error'>{list.price}</Typography>
            </Box>
            <Box>
              <Typography variant='body1'sx={{color:'grey'}} >{list.desc}</Typography>
            </Box>
            </CategoryContentBox>
            ))}
            </CategoryLeftInnerBox>
             {/* for right side image box  */}
            <CategoryRighttInnerBox >
             <CategoryImageBox src={img01} alt=""  />
            </CategoryRighttInnerBox>
          </CategoryInnerBox>
         <Box sx={{
          display:{sm:'block',xs:'none'}
         }}>
            <Box display={'flex'} sx={{ justifyContent: 'space-around' }}>
              <Typography variant='h5' color='error'> _____________________________</Typography>
              <img src={logo} alt="" height='30px' width={30} />
              <Typography variant='h5' color='error'> _____________________________</Typography>
            </Box>
         </Box>
         <Box sx={{
          display:{sm:'none',xs:'block'}
         }}>
            <Box display={'flex'} sx={{ justifyContent: 'space-around' }}>
              <Typography variant='h5' color='error'> ___________</Typography>
              <img src={logo} alt="" height='30px' width={30} />
              <Typography variant='h5' color='error'> ___________</Typography>
            </Box>
         </Box>
          
         {/* ------------------for second category box---------------------  */}
          <CategoryInnerBox sx={{marginTop:'2%'}}>           
            <CategoryRighttInnerBox >
             <CategoryImageBox src={img02} alt=""  />
            </CategoryRighttInnerBox>

            <CategoryLeftInnerBox>
              <Box display={'flex'}>
                <Typography variant='h4' sx={{ fontWeight: '600' }}># PIZZA </Typography>
                {/* <span style={{ color: 'red', fontWeight: '800',margin:'5% 0px 0px 5px' }}>______________</span> */}
                <span style={{ color: 'red', fontWeight: '800', margin: '1.5% 0px 0px 2%', }}>_____</span>
              </Box>

              {SecondCategory.map((list) => (

                <CategoryContentBox key={list.id}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '10%' }} >
                    <Typography variant='h6'>{list.title}</Typography>
                    <Typography variant='h5'> ------------</Typography>
                    <Typography variant='h5' color='error'>{list.price}</Typography>
                  </Box>
                  <Box>
                    <Typography variant='body1' sx={{ color: 'grey' }} >{list.desc}</Typography>
                  </Box>
                </CategoryContentBox>
              ))}
            </CategoryLeftInnerBox>
          </CategoryInnerBox>
          <Box sx={{
            display: { sm: 'block', xs: 'none' }
          }}>
            <Box display={'flex'} sx={{ justifyContent: 'space-around' }}>
              <Typography variant='h5' color='error'> _____________________________</Typography>
              <img src={logo} alt="" height='30px' width={30} />
              <Typography variant='h5' color='error'> _____________________________</Typography>
            </Box>
          </Box>
          <Box sx={{
            display: { sm: 'none', xs: 'block' }
          }}>
            <Box display={'flex'} sx={{ justifyContent: 'space-around' }}>
              <Typography variant='h5' color='error'> ___________</Typography>
              <img src={logo} alt="" height='30px' width={30} />
              <Typography variant='h5' color='error'> ___________</Typography>
            </Box>
          </Box>


         {/* --------------for third inner box for category-------------------------  */}
          <CategoryInnerBox sx={{ marginTop: '2%' }}>
            <CategoryLeftInnerBox>
              <Box display={'flex'}>
                <Typography variant='h4' sx={{ fontWeight: '600' }}># PASTA </Typography>
                {/* <span style={{ color: 'red', fontWeight: '800',margin:'5% 0px 0px 5px' }}>______________</span> */}
                <span style={{ color: 'red', fontWeight: '800', margin: '1.5% 0px 0px 2%', }}>_____</span>
              </Box>

              {ThirdCategory.map((list) => (

                <CategoryContentBox key={list.id}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '10%' }} >
                    <Typography variant='h6'>{list.title}</Typography>
                    <Typography variant='h5'> ------------</Typography>
                    <Typography variant='h5' color='error'>{list.price}</Typography>
                  </Box>
                  <Box>
                    <Typography variant='body1' sx={{ color: 'grey' }} >{list.desc}</Typography>
                  </Box>
                </CategoryContentBox>
              ))}
            </CategoryLeftInnerBox>
            {/* for right side image box  */}
            <CategoryRighttInnerBox >
              <CategoryImageBox src={img03} alt="" />
            </CategoryRighttInnerBox>
          </CategoryInnerBox>
          <Box sx={{
            display: { sm: 'block', xs: 'none' }
          }}>
            <Box display={'flex'} sx={{ justifyContent: 'space-around' }}>
              <Typography variant='h5' color='error'> _____________________________</Typography>
              <img src={logo} alt="" height='30px' width={30} />
              <Typography variant='h5' color='error'> _____________________________</Typography>
            </Box>
          </Box>
          <Box sx={{
            display: { sm: 'none', xs: 'block' }
          }}>
            <Box display={'flex'} sx={{ justifyContent: 'space-around' }}>
              <Typography variant='h5' color='error'> ___________</Typography>
              <img src={logo} alt="" height='30px' width={30} />
              <Typography variant='h5' color='error'> ___________</Typography>
            </Box>
          </Box>

          {/* ------------------for fourth category box---------------------  */}
          <CategoryInnerBox sx={{ marginTop: '2%' }}>
            <CategoryRighttInnerBox >
              <CategoryImageBox src={img04} alt="" />
            </CategoryRighttInnerBox>

            <CategoryLeftInnerBox>
              <Box display={'flex'}>
                <Typography variant='h4' sx={{ fontWeight: '600' }}># DESERTS </Typography>
                {/* <span style={{ color: 'red', fontWeight: '800',margin:'5% 0px 0px 5px' }}>______________</span> */}
                <span style={{ color: 'red', fontWeight: '800', margin: '1.5% 0px 0px 2%', }}>_____</span>
              </Box>

              {FourthCategory.map((list) => (

                <CategoryContentBox key={list.id}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '10%' }} >
                    <Typography variant='h6'>{list.title}</Typography>
                    <Typography variant='h5'> ------------</Typography>
                    <Typography variant='h5' color='error'>{list.price}</Typography>
                  </Box>
                  <Box>
                    <Typography variant='body1' sx={{ color: 'grey' }} >{list.desc}</Typography>
                  </Box>
                </CategoryContentBox>
              ))}
            </CategoryLeftInnerBox>
          </CategoryInnerBox>

      </CategoryMainBox>
     </Box>


   

    </div>
  )
}

export default Category;