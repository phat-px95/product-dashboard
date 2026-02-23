import React, { FC } from "react";
import Box from "@mui/material/Box";
import { navigations } from "./navigation.data";
import { Link, useTheme } from "@mui/material";
import { useLocation } from "react-router-dom";
import { ConnectButton } from '@rainbow-me/rainbowkit';

type NavigationData = {
  path: string;
  label: string;
};

const Navigation: FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexFlow: "wrap",
        justifyContent: "end",
        flexDirection: { xs: "column", lg: "row" },
        alignItems: { xs: "center", lg: "flex-end" }
      }}
    >
      {navigations.map(({ path: destination, label }: NavigationData) =>
        <Box
          key={label}
          component={Link}
          href={destination}
          sx={{
            display: "inline-flex",
            position: "relative",
            color: currentPath === destination 
              ? theme.palette.primary.main 
              : { 
                  xs: theme.palette.text.primary, // Dark text on mobile
                  lg: "white" // White text on desktop
                },
            lineHeight: "30px",
            letterSpacing: "3px",
            textDecoration: "none",
            padding: { xs: "8px 16px", lg: "4px 8px" },
            margin: { xs: "4px 0", lg: "0 8px" },
            borderRadius: { xs: "4px", lg: "0" },
            backgroundColor: { xs: "rgba(255,255,255,0.1)", lg: "transparent" },
            transition: "all 0.3s ease",
            fontSize: { xs: "0.9rem", lg: "1rem" },
            fontWeight: { xs: 500, lg: 400 },
            "&:hover": {
              color: currentPath === destination 
                ? theme.palette.primary.main
                : {
                    xs: theme.palette.primary.main,
                    lg: theme.palette.primary.light
                  },
              backgroundColor: { 
                xs: "rgba(255,255,255,0.2)", 
                lg: "rgba(255,255,255,0.1)" 
              },
              transform: { xs: "none", lg: "translateY(-2px)" }
            }
          }}
        >
          {label}
        </Box>
      )}
      <Box sx={{ 
        mt: { xs: 2, lg: 0 },
        ml: { xs: 0, lg: 2 }
      }}>
        <ConnectButton />
      </Box>
    </Box>
  );
};

export default Navigation;
