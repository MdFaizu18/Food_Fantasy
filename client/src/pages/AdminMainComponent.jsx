import React from 'react';
import { Box, Card, Typography } from "@mui/material";
import QueryStats from "@mui/icons-material/QueryStats";
import StatsCard from "..//components/AdminDashboard/StatsCard";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ReceiptIcon from "@mui/icons-material/Receipt";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import { useMediaQuery } from "@mui/material";
import GraphStats from "../components/AdminDashboard/GraphStats";
import AdminNavbar from '../components/AdminNavbar'
import { WrapperAdminResponiveBox } from '../assets/wrapper/AdminResponsiveWrapper'


const statData = [
  {
    id: 1,
    name: "Total Menu",
    count: "56",
    icon: RestaurantMenuIcon,
  },
  {
    id: 2,
    name: "Total Revenue",
    count: "69k",
    icon: AttachMoneyIcon,
  },
  {
    id: 3,
    name: "Total Orders",
    count: "240",
    icon: ReceiptIcon,
  },
  {
    id: 4,
    name: "Total Clients",
    count: "110",
    icon: Diversity1Icon,
  },
];

const renderStats = statData.map((stats) => (
  <StatsCard
    key={stats.id}
    statCount={stats.count}
    statName={stats.name}
    statIcon={stats.icon}
  />
));





const AdminMainComponent = () => {
  return (
    <div>
          <AdminNavbar propName='Dashboard' />
          <WrapperAdminResponiveBox>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            margin: " 0% 1.3%",
            marginBottom: "2%",
            "@media (max-width:600px)": {
              display: "grid",
              gap: "2%",
              fontSize: "22px",
              // margin: 0,
            },
          }}
        >
          <Typography
            sx={{ flex: "1", display: "flex", alignItems: "center" }}
            variant="body1"
          >
            Welcome to user Admin!
          </Typography>
          <Card
            sx={{
              textAlign: "center",
              flex: ".4",
              height: "70px",
              "@media (max-width:600px)": { height: "80px", width: "300px" },
            }}
          >
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: "3px",
                "@media (max-width:600px)": { fontSize: "26px" },
              }}
              p={1}
              color="green"
            >
              <QueryStats />
              Company Status
            </Typography>
            <Typography>Statistics & Revenue </Typography>
          </Card>
        </Box>
        {/* //*-------GeneralStats------------------------ */}
        <Box
          sx={{
            "@media (max-width:600px)": {
              display: "grid",
              gridTemplateColumns: "1fr 1fr ",
              placeItems: "center",
              margin: "0px 7px",
              gap: "1%",
            },
          }}
        >
          <Box
            sx={{
              margin: "1%",
              display: "flex",
              justifyContent: "space-evenly",
              "@media (max-width:600px)": {
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1%",
                margin: "0%",
              },
            }}
          >
            {renderStats}
          </Box>
        </Box>
        {/* //*------------------GraphCharts------------------- */}
        <GraphStats />
          </WrapperAdminResponiveBox>
    </div>
  )
}

export default AdminMainComponent;


//*-----------------Toggle buttons-----------------

