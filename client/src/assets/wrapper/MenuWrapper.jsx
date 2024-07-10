import { Box } from "@mui/material";
import img2 from "../images/menu/background.jpg";
import styled from "@emotion/styled";

export const BgImageWrapper = styled(Box)({
    marginTop: '4%',
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8)), url(${img2})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '250px',
    width: '100%',
    '@media (max-width: 600px)': {
        height: '150px',
    },
});
export const BgInnerBox = styled(Box)({
    position: "absolute",
    right: "2%",
    top: "25%",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    justifyContent: "center",
    color: "white",
    "@media (max-width: 600px)": {
        right: "2%",
        top: "8%",
    },
});

export const MenuHeadingBox = styled(Box)({
    margin: '5% 24%  0% 24%',
    width: '50%',
    "@media (max-width: 600px)": {
        margin: '5% 5% ',
        width: '90%',
    },
})

export const CategoryBox = styled(Box)({
    display: "grid",
    gridTemplateColumns: "1fr 1fr ",
   padding:'0px 10%',
    rowGap: "20px",
    gap: "30px",
    margin: "40px",
    "@media (max-width: 600px)": {
        display: "grid",
        gridTemplateColumns: "1fr",
    },
});

export const PickerBox = styled(Box)({
    textAlign: "center",
    marginTop: "2%",
    display: "flex",
    justifyContent: "center",
    "@media (max-width: 600px)": {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr ",
        width: "100px",
        marginTop: "5%",
        marginLeft: "40%",
        gap: "20px",
    },
});

export const CardBox = styled(Box)({
    display: "flex",
    "@media (max-width: 600px)": {
        display: "grid",
        placeItems: "center",
        gridTemplateColumns: "1fr ",
    },
});