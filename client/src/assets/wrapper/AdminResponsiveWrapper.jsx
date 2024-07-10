import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const WrapperAdminResponiveBox = styled(Box)({
    height: '500px',
      margin: '3% 0 0 15.7%',
      '@media (max-width: 600px)': {
          margin: '3% 0 0 0',
    },
});

