import { Card, IconButton, Stack, Typography } from "@mui/material";
import React from "react";


const StatsCard = (props) => {
    const { statName, statCount, statIcon } = props;
    const IconComponent = statIcon; // assuming statIcon is an icon component

    return (
        <Card
            sx={{
                maxWidth: 280,
                display: "flex",
                gap: "5%",
                placeItems: "center",
                width: "360px",
                height: "100px",
                "@media (max-width:600px)": {
                    // display: "grid",
                    // gridTemplateColumns: "1fr 1fr",
                    // margin: 0,
                    // gap: "2%",
                    width: "200px",
                    // marginBottom: "20px",
                    margin: "20px 0px",

                },
            }}
        >
            <IconButton>
                <IconComponent
                    sx={{
                        width: "60px",
                        height: "60px",
                        padding: "10px",
                        background: "rgb(237,237,237)",
                        // background: "green",
                        color: "green",
                        borderRadius: "50%",
                    }}
                />
            </IconButton>

            <Stack>
                <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    {statCount}
                </Typography>
                <Typography variant="body">{statName}</Typography>
            </Stack>
        </Card>
    );
};

export default StatsCard;