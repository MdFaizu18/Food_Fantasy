import { AppBar, Box, Typography } from "@mui/material";
import styled from "@emotion/styled";

export const WrapAppBar = styled(AppBar)({
    backgroundColor: "white",
    padding: "0px",
    fontFamily: 'Ubuntu,sans-serif'
});
export const WrapBox = styled(Box)({
    color: "red",
    fontSize: "23px",
    fontWeight: "bolder",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
});

export const WrapBoxdemo = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    color:'black'
});
export const WrapperTypoCart = styled(Typography)({
    color: 'black',
    '&:hover': {
        borderBottom:'2px solid red',
    },
})