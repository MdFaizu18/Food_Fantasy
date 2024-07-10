import { Box, Typography } from "@mui/material";

import React from "react";

const summary = [
  {
    id: 1,
    count: 25,
    type: "On Delivery",
  },
  {
    id: 2,
    count: 53,
    type: " Delivered",
  },
  {
    id: 3,
    count: 10,
    type: "cancelled",
  },
];

const renderSummary = summary.map((order) => (
  <Box
    key={order.id}
    sx={{
      border: "1px solid rgba(0,0,0,0.4)",
      borderRadius: "5px",
      padding: "20px",
      "@media (max-width:600px)": {},
    }}
  >
    <Typography sx={{ fontWeight: "700" }} variant="h4">
      {order.count}
    </Typography>
    <Typography sx={{ opacity: ".8" }} variant="body1">
      {order.type}
    </Typography>
  </Box>
));

const OrderSummary = () => {
  return <>{renderSummary}</>;
};

export default OrderSummary;
