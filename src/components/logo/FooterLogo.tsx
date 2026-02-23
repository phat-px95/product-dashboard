import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";

const StyledFooterLogo = styled("img")({
  minWidth: "120px",
});

export const FooterLogo = () => {
  const navigate = useNavigate();
  return (
    <StyledFooterLogo src="/images/logo_bt.png" alt="logo" onClick={() => navigate("/")} />
  );
};
