import React, { useState } from "react";
import { styled, Box, useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Header } from "../header";
import { Footer } from "../footer";
import Notifications from "../Notifications";

const MainWrapper = styled("div")(() => ({
  display: "flex",
  minHeight: "100vh",
  width: "100%"
}));

const PageWrapper = styled("div")(() => ({
  display: "flex",
  flexGrow: 1,
  flexDirection: "column",
  zIndex: 1,
  backgroundColor: "transparent",
  width: "100%",
  minWidth: 0
}));

const FullWidthContainer = styled(Box)(() => ({
  width: "100%",
  maxWidth: "100%",
  padding: 0,
  margin: 0,
  boxSizing: "border-box",
  minWidth: 0
}));

const Layout = () => {
  const theme = useTheme();
  return (
    <MainWrapper>
      <PageWrapper>
        <Header />
        <FullWidthContainer
          sx={{
            padding: "0px !important",
            [theme.breakpoints.up("sm")]: {
              maxWidth: "100%"
            },
          }}
        >
          <Outlet />
          {Notifications()}
        </FullWidthContainer>
        <Footer />
      </PageWrapper>
    </MainWrapper>
  );
};

export default Layout;
