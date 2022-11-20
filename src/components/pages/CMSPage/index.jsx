import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/system";
import theme from "../../themes";
import CMSForm from "../../organisms/CMSForm";

const BoxContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "45em",
  maxHeight: "fit-content",
  backgroundColor: `${theme.palette.secondary.light}`,
});

const CMSPage = () => {
  return (
    <BoxContainer>
      <CMSForm />
    </BoxContainer>
  );
};

export default CMSPage;
