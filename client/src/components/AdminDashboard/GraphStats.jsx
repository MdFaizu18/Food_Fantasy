import React, { useState } from "react";
import OrderSummary from "./OrderSummary";
import PieChart from "./PieChart";
import RightSide from "./RightSide";
import { useMediaQuery } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FiberManualRecord from "@mui/icons-material/FiberManualRecord";
import {
  Box,
  Card,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";

const GraphStats = () => {
  const [alignment, setAlignment] = useState("web");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        gap: "3%",
        marginTop: "-2%",
        padding: "3%",
        "@media (max-width:600px)": {
          display: "grid",
          padding: 2,
          margin: 0,
          height: "1200px",
        },
      }}
    >
      {/* //*-------------Left side (pieChart) component-------------------- */}
      <Card
        sx={{
          flex: "1",
          "@media (max-width:600px)": {
            display: "grid",
            gap: "2%",
            fontSize: "19px",
          },
        }}
      >
        <Box
          sx={{
            marginTop: "2%",
            display: "flex",
            justifyContent: "space-around",
            "@media (max-width:600px)": {
              display: "grid",
              placeItems: "center",
              gap: "2%",
              fontSize: "23px",
            },
          }}
        >
          <Box>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "21px",
                "@media (max-width:600px)": {
                  fontSize: "29px",
                },
              }}
            >
              Orders Summary
            </Typography>
            <Typography
              sx={{
                fontSize: "13px",
                textAlign: "center",
                "@media (max-width:600px)": {
                  fontSize: "19px",
                },
              }}
            >
              Summary of Past Orders and Stats
            </Typography>
          </Box>
          {/* //*----------------Monthly weekly today------------- */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              gap: "4px",
              height: "40px",
            }}
          >
            <ToggleButtonGroup
              color="primary"
              sx={{
                border: "1px solid black",
                width: "220px",
                display: "flex",
              }}
              value={alignment}
              exclusive
              onChange={handleChange}
              aria-label="Platform"
            >
              <ToggleButton
                sx={{ color: "#3d4465", fontSize: "12px" }}
                value="web"
              >
                Monthly
              </ToggleButton>
              <ToggleButton
                sx={{ color: "#3d4465", fontSize: "12px" }}
                value="android"
              >
                Weekly
              </ToggleButton>
              <ToggleButton
                sx={{ color: "#3d4465", fontSize: "12px" }}
                value="ios"
              >
                Today
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
        </Box>
        {/* //*----------------Green banner (left side)-------------- */}
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: "#C1F2B0",
              height: "60px",
              margin: "3%",
              borderRadius: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                padding: "20px",
                gap: "6%",
                margin: "0%",
                borderRadius: "10px",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  flex: ".1",
                  background: "#2bc155",
                  padding: "7%",
                  display: "flex",
                  alignItems: "center",
                  height: "40px",
                  borderRadius: "10px",
                  color: "white",
                }}
              >
                25
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  flex: "1",
                  width: "170px",
                  display: "flex",
                  alignItems: "center",
                  height: "40px",
                  fontSize: "19px",
                }}
              >
                New Orders{"  "}
                <FiberManualRecord
                  // fontSize="small"
                  sx={{
                    color: "green",
                    fontSize: "16px",
                    marginLeft: "4%",
                  }}
                />
              </Typography>
            </Box>
            <Typography
              variant="h6"
              sx={{
                marginRight: "2%",
                color: "green",
                fontSize: "16px",
                display: "flex",
                alignItems: "center",
                height: "40px",
              }}
            >
              Manage orders <ChevronRightIcon sx={{ fontSize: "23px" }} />
            </Typography>
          </Box>
        </Box>
        {/* //*-------------Order Summary component-------------------- */}
        <Box
          sx={{
            marginRight: "2%",
            fontSize: "16px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <OrderSummary />
        </Box>
        {/* //*-------------Pie Chart component-------------------- */}
        <Box sx={{ marginTop: "5%" }}>
          <Box>
            <PieChart />
          </Box>
        </Box>
      </Card>
      {/* //*-------------RightSide (splineChart) component-------------------- */}
      <Card sx={{ height: "500px", flex: "1" }}>
        <RightSide />
      </Card>
    </Box>
  );
};

export default GraphStats;
