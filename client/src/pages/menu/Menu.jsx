import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import customFetch from "../../utils/customFetch";
import { useLoaderData } from "react-router-dom";
import {
  BgImageWrapper,
  BgInnerBox,
  CardBox,
  CategoryBox,
  MenuHeadingBox,
  PickerBox,
} from "../../assets/wrapper/MenuWrapper";
import { Box, Button, Rating, Typography } from "@mui/material";
import RamenDining from "@mui/icons-material/RamenDining";
import burger from '../../assets/images/menu/burger.png';
import pizza from '../../assets/images/menu/pizza.png';
import pasta from '../../assets/images/menu/pasta.png';
import drink from '../../assets/images/menu/juice.png';
import dessert from '../../assets/images/menu/deserts.png';

// using redux selector and dispatch method 
import { useDispatch, useSelector } from "react-redux";
import { addProduct, selectAllProducts } from "../../features/carts/cartSlices";


export const loader = async () => {
  try {
    const { data } = await customFetch.get("/dish");
    console.log(data);
    return data;
  } catch (error) {
    return redirect("bookings");
  }
};

const MenuItems = [
  { id: 1, name: "Burger", img: burger },
  { id: 2, name: "Pizza", img: pizza },
  { id: 3, name: "Pasta", img: pasta },
  { id: 4, name: "Drinks", img: drink },
  { id: 5, name: "Desserts", img: dessert },
];

const Menu = () => {

  const Products = useSelector(selectAllProducts);
  const dispatch = useDispatch();

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { dishes } = useLoaderData();
  const [category, setCategory] = useState("Burger");

  // Filter dishes based on the category
  const filteredDishes = dishes.filter((dish) => dish.category === category);

  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [cardProducts, setCardProducts] = useState([]);

  const openCartModal = () => {
    setIsCartModalOpen(true);
  };

  const closeCartModal = () => {
    setIsCartModalOpen(false);
  };

  const handleCategoryClick = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  const getProductQuantity = (id) => {
    const quantity = cardProducts.find(
      (product) => product.id === id
    )?.quantity;

    if (quantity === undefined) {
      return 0;
    }
    return quantity;
  };

  const addOneToCart = (id) => {
    const quantity = getProductQuantity(id);

    if (quantity === 0) {
      setCardProducts([
        ...cardProducts,
        {
          id: id,
          quantity: 1,
        },
      ]);
    } else {
      setCardProducts(
        cardProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
    }
  };


  return (
    <div>
      <Navbar />
      <BgImageWrapper>
        <BgInnerBox>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <Typography variant="h4">Explore your taste</Typography>
            <Box style={{ fontSize: "2.3rem" }}>
              <RamenDining />
            </Box>
          </Box>
          <Typography variant="body2" textAlign="center" color="whitesmoke">
            eat sleep code
          </Typography>
        </BgInnerBox>
      </BgImageWrapper>

    
        <MenuHeadingBox>
            <Typography variant='h3' textAlign='center' sx={{ fontFamily: "'Pinyon Script', cursive", color: 'green' }} gutterBottom>Menu Board</Typography>
            <Typography variant='h4' textAlign='center' sx={{ fontWeight: '600' }} gutterBottom>Explore The Fantasy Board</Typography>
            <Typography variant='body1' textAlign='center' sx={{ marginBottom: '5%' }}> From hearty comfort classics to avant-garde culinary creations, our menu offers something for every palate to savor and enjoy</Typography>
        </MenuHeadingBox>
    
  
        <PickerBox>
          {MenuItems.map((items) => (
            <Box
              // value={category}
              onClick={() => setCategory(items.name)}
              key={items.id}
              sx={{
                padding: "1% 2%",
                border: "1px solid #ddd",
                borderRadius: "15px",
                margin: " 0% 2%",
                boxShadow: "green 0px 2px 4px 0px",
               cursor:'pointer',
                "&:hover": {
                  boxShadow: "orange 0px 2px 4px 0px",
                  background: "#ffa50020",
                },
              }}
            >
              <img src={items.img} height="60px" width="64px" />
              <Box
                sx={{
                  textAlign: "center",
                  marginTop: "2%",
                  display: "flex",
                }}
              >
                <Box
                  key={items.id}
                  sx={{
                    color: "black",
                    fontSize: "20px",
                    padding: "10px",
                    marginLeft: "3%",
                    border: "1px solid balck",
                    minWidth: "100px",
                    borderRadius: "10px",
                  }}
                
                >
                  {items.name}
                </Box>
              </Box>
            </Box>
          ))}
        </PickerBox>
      <Box sx={{ height: "700px", marginTop: "0%", padding: "2%" }}>
        <CategoryBox>
          {filteredDishes.map((dish, index) => (
            <CardBox key={index} sx={{ border: '1px solid #ddd', borderRadius:'20px',boxShadow:'1px 1px 0px #ddd'}}>
              {dish.imageUrl && (
                <Box
                  sx={{
                    // background: "rgba(255, 157, 45, 0.2)",
                    borderRadius: "7%",
                  }}
                >
                  <img
                    src={dish.imageUrl}
                    alt={`Dish ${index + 1}`}
                  style={{
                    width: "180px",
                    height: "180px",
                    borderRadius: "50%",
                    padding: "8%",
                    transform: hoveredIndex ? "scale(1.1)" : "scale(1)",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={() => setHoveredIndex(dish._id)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  />
                </Box>
              )}
              <Box
                sx={{
                  width: "100%",
                  padding: "3%",
                  display: "grid",
                  gridTemplateRows: ".3fr .3fr .1fr 1fr",
                  // background: "rgba(225,240,218,.3)",
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: "600" }} gutterBottom>
                  {dish.name}
                </Typography>
                <Typography gutterBottom> {dish.desc} </Typography>
                <Typography sx={{}}>
                  <Rating
                    name="half-rating-read"
                    defaultValue={dish.rate}
                    precision={0.5}
                    readOnly
                  />
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    sx={{
                      flex: "1",
                      fontSize: "20px",
                      color: "green",
                      fontWeight: "200",
                    }}
                  >
                    $ {dish.newPrice}
                  </Typography>
                  <Button
                    sx={{
                      color: "black",
                      fontSize: "13px",
                      fontWeight:'600',
                      padding: "10px",
                      marginLeft: "3%",
                      border: "1px solid balck",
                      minWidth: "100px",
                      borderRadius: "30px",
                      background: "linear-gradient(rgba(0, 200, 0, 0.3), rgba(144, 238, 144, 0.1))",
                      boxShadow: "rgba(0, 0, 0, 0.15) 0px 3px 3px 0px",
                      transition:'background .5s',
                      "&:hover": {
                        background:" linear-gradient(to bottom, rgba(255, 99, 71, 0.5) 0%, rgba(255, 165, 0, 0.5) 100%);",
                      },
                    }}
                    onClick={() => dispatch(addProduct(dish))}
                  >
                   Add to Cart
                  </Button>
                </Box>
              </Box>
            </CardBox>
          ))}
        </CategoryBox>
      </Box>
    </div>
  );
};

export default Menu;