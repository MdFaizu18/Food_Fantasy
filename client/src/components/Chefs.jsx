import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { WrapperHeaderBox } from '../assets/wrapper/FamousDishesWrapper'
import { WrapperChefContent,WrapperMainContent } from '../assets/wrapper/ChefWrapper'
import img1 from '../assets/images/chefs/chef01.jpg'
import img2 from '../assets/images/chefs/chef02.jpg'
import img3 from '../assets/images/chefs/chef03.jpg'


const Chefs = () => {
  return (
    <>
    <WrapperChefContent>
          <WrapperHeaderBox>
                  <Typography color='green' variant='h3' gutterBottom sx={{ fontFamily: "'Pinyon Script', cursive", color: 'GREEN', fontWeight: '600' }}> " Browse " </Typography>
              <Typography variant='h4' sx={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
                  <Box color="black">
                      Our Creative Team
                  </Box>
              </Typography>
          </WrapperHeaderBox>

         <WrapperMainContent>
                  <Card sx={{ maxWidth: 375 }}>
                      <CardActionArea>
                          <CardMedia
                              component="img"
                              height="340"
                              image={img2}
                              alt="green iguana"
                          />
                          <CardContent>
                              <Typography gutterBottom variant="h5" component="div" textAlign='center' >
                                  Emi Jackson
                              </Typography>
                              <Typography variant="body2" color="text.secondary" textAlign='center'>
                                  Master Chef
                              </Typography>
                          </CardContent>
                      </CardActionArea>
                  </Card>
                  <Card sx={{ maxWidth: 375 }}>
                      <CardActionArea>
                          <CardMedia
                              component="img"
                              height="340"
                              image={img1}
                              alt="green iguana"
                          />
                          <CardContent >
                              <Typography gutterBottom variant="h5" component="div" textAlign='center'>
                                 Will Smith
                              </Typography>
                              <Typography variant="body2" color="text.secondary" textAlign='center'>
                                  Master Chef
                              </Typography>
                          </CardContent>
                      </CardActionArea>
                  </Card>
                  <Card sx={{ maxWidth: 375 }}>
                      <CardActionArea>
                          <CardMedia
                              component="img"
                              height="340"
                              image={img3}
                              alt="green iguana"
                          />
                          <CardContent>
                              <Typography gutterBottom variant="h5" component="div" textAlign='center' >
                                  Robert Dr Jnr
                              </Typography>
                              <Typography variant="body2" color="text.secondary" textAlign='center'>
                                Master Chef
                              </Typography>
                          </CardContent>
                      </CardActionArea>
                  </Card>
         </WrapperMainContent>



     </WrapperChefContent>
    </>
  )
}

export default Chefs