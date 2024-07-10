import React from 'react';
import { Box ,Typography} from '@mui/material';
import img1 from '../assets/images/menu/1.jpg'
import img2 from '../assets/images/menu/2.jpg'
import { WrapperMainBox ,WrapperMainBox2,WrapperHeaderBox} from '../assets/wrapper/MenuImageWrapper';

const MenuImage = () => {
  return (
    <>
{/* this code for desktop view page  */}
 <Box sx={{display:{xs:'none',sm:'block'}}}>
    <WrapperMainBox>
    <WrapperHeaderBox>

                      <Typography color='red' variant='h3' gutterBottom sx={{ fontFamily: "'Pinyon Script', cursive",fontWeight:"600"}}>" Menu Card " </Typography>
    <Typography variant='h4' sx={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
       <Box color='white' sx={{display:{xs:'none',sm:'block'}}}>
          Welcome to Fantasy   
        </Box>
    
     </Typography>
    </WrapperHeaderBox>

    
              <Box sx={{ display: 'flex', gap: '5%', marginTop: '2%', justifyContent: 'space-around', padding: '0px 10%' }}>
                  <Box>
                      <img src={img1} alt="menu01" height={700} width={500} />
                  </Box>
                  <Box>
                      <img src={img2} alt="menu01" height={700} width={500} />
                  </Box>
              </Box>
    </WrapperMainBox>
  </Box>

  {/* this code for mobile responsive  */}
          <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
              <WrapperMainBox2>
                  <WrapperHeaderBox>

                      <Typography color='green' variant='h5' gutterBottom>Menu Card </Typography>
                      <Typography variant='h4' sx={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
                          <Box sx={{color:'white'}}>
                              Welcome to Fantasy

                          </Box>
                      </Typography>
                  </WrapperHeaderBox>

                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5%', marginTop: '2%', justifyContent: 'space-around', padding: '0px 10%' }}>
                          <Box>
                              <img src={img1} alt="menu01" height={500} width={350} />
                          </Box>
                          <Box>
                              <img src={img2} alt="menu01" height={500} width={350} />
                          </Box>
                      </Box>
              </WrapperMainBox2>
          </Box>
























    </>

  )
}

export default MenuImage;