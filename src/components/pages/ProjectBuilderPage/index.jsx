import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/system";
import theme from "../../themes";
import ProjectBuilderForm from "../../organisms/ProjectBuilderForm";

const BoxContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "45em",
  maxHeight: "fit-content",
  backgroundColor: `${theme.palette.secondary.light}`,
});

const ProjectBuilderPage = () => {
  return (
    <BoxContainer>
      <ProjectBuilderForm />
    </BoxContainer>
  );
};

export default ProjectBuilderPage;
