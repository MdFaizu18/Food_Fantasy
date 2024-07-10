import React from 'react';
import {  Card, CardActions, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import { CardLinks } from '../constants/SpecialDishes';
import { WrapperButton} from '../assets/wrapper/FamousDishesWrapper';
import ShoppingCart from '@mui/icons-material/ShoppingCart';

const CardDishes = () => {
  return (
      <div> <Stack spacing={2} direction='row' >
          {CardLinks.map((dishes) => (
              <Card key={dishes.id} sx={{ minWidth: 305, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px 15px' }}>
                  <CardMedia
                      sx={{ height: 270, width: 270, alignSelf: 'center' }}
                      image={dishes.img}
                      title="green iguana"
                  />
                  <CardContent sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                      <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center' }}>
                          {dishes.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
                          {dishes.desc}
                      </Typography>
                  </CardContent>
                  <CardActions>
                      <WrapperButton size="small">
                          <ShoppingCart />
                          Add Cart
                      </WrapperButton>
                      <WrapperButton size="small"> View more</WrapperButton>
                  </CardActions>
              </Card>
          ))}

      </Stack></div>
  )
}

export default CardDishes