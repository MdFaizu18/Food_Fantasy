import React, { useContext, useState } from "react";
import { Box, Modal, Rating, Typography } from "@mui/material";
import { useLoaderData, useNavigate } from "react-router-dom";
import customFetch from "../../utils/customFetch";
import burger from "../../assets/images/burger.png";
import pizza from "../../assets/images/pizza.png";
import dessert from "../../assets/images/dessert.png";
import drink from "../../assets/images/softDrinks.png";
import pasta from "../../assets/images/pasta.png";
import {
    CardBox,
    CategoryBox,
    PickerBox,
    WrapperButton,
} from "../../assets/wrapper/MenuWrapper";

import { useDispatch, useSelector } from "react-redux";
import { addProduct, selectAllProducts } from "../../features/Carts/CartSlices";

export const loader = async () => {
    try {
        const { data } = await customFetch.get("/dish");
        console.log({ data });
        return data;
    } catch (error) {
        return redirect("bookings");
    }
};

const MenuItems = [
    { id: 1, name: "Burger", img: burger },
    { id: 2, name: "Pizza", img: pizza },
    { id: 3, name: "Pasta", img: pasta },
    { id: 4, name: "SoftDrinks", img: drink },
    { id: 5, name: "Desserts", img: dessert },
];

// const CartComponent = ({ cartProducts }) => {
//   return (
//     <div>
//       <h2>Shopping Cart</h2>
//       <ul>
//         {cartProducts.map((product) => (
//           <li key={product.id}>
//             {product.name} - Quantity: {product.quantity}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

const MenuFunctionality = () => {
    const Products = useSelector(selectAllProducts);

    const dispatch = useDispatch();

    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [isCartModalOpen, setIsCartModalOpen] = useState(false);
    const [category, setCategory] = useState("Burger");
    const { dishes } = useLoaderData();
    const filteredDishes = dishes.filter((dish) => dish.category === category);
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
            <Box sx={{ height: "700px", marginTop: "12%", padding: "2%" }}>
                <PickerBox>
                    {MenuItems.map((items) => (
                        <Box
                            key={items.id}
                            onClick={() => handleCategoryClick(items.name)}
                            sx={{
                                padding: ".5% 1%",
                                border: "1px solid black",
                                borderRadius: "15px",
                                margin: " 0% 2%",
                                "&:hover": {
                                    boxShadow: "orange 0px 2px 4px 0px, orange 0px 2px 16px 0px",
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
                                <WrapperButton
                                    key={items.id}
                                    sx={{
                                        color: "black",
                                        fontSize: "20px",
                                        padding: "10px",
                                        marginLeft: "3%",
                                        border: "1px solid black",
                                        minWidth: "100px",
                                        borderRadius: "10px",
                                    }}
                                >
                                    {items.name}
                                </WrapperButton>
                            </Box>
                        </Box>
                    ))}
                </PickerBox>
                <CategoryBox>
                    {filteredDishes.map((dish, index) => (
                        <CardBox key={index}>
                            {dish.imageUrl && (
                                <Box
                                    sx={{
                                        background: "rgba(255, 157, 45, 0.2)",
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
                                    onMouseEnter={() => setHoveredIndex(index)}
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
                                    background: "rgba(225,240,218,.3)",
                                }}
                            >
                                <Typography variant="h5" sx={{ fontWeight: "600" }}>
                                    {dish.name}
                                </Typography>
                                <Typography> {dish.desc} </Typography>
                                <Typography>
                                    <Rating
                                        name="half-rating-read"
                                        defaultValue={typeof dish.rate === "number" ? dish.rate : 0}
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
                                    <WrapperButton onClick={() => dispatch(addProduct(dish))}>
                                        Add to Cart
                                    </WrapperButton>
                                </Box>
                            </Box>
                        </CardBox>
                    ))}
                </CategoryBox>
                {/* <Modal open={isCartModalOpen} onClose={closeCartModal}> */}
                {/* <Box
          sx={{
            position: "absolute",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" component="div">
            Shopping Cart
          </Typography>
          <CartComponent cartProducts={cardProducts} />
        </Box> */}
                {/* </Modal> */}
            </Box>
        </div>
    );
};

export default MenuFunctionality;