import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import theme from "../../themes";
import ButtonComp from "../../atoms/Button";
import { useNavigate } from "react-router-dom";

const BoxA = styled(Box)({
  backgroundColor: `${theme.palette.background.default}`,
});

const BoxB = styled(Box)({
  padding: "2em 5em",
  display: "flex",
  flexDirection: "column",
  gap: "2em",
});

const StackA = styled(Stack)({
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "row",
  gap: "10em",
  minHeight: "30em",
});

const StackNav = styled(Stack)({
  alignItems: "flex-start",
  minHeight: "4em",
  backgroundColor: `${theme.palette.secondary.light}`,
});

const StackFoot = styled(Stack)({
  alignItems: "flex-start",
  minHeight: "15em",
  backgroundColor: `${theme.palette.secondary.light}`,
});

const StackA1 = styled(Stack)({
  alignItems: "flex-start",
  gap: "2.5em",
  width: "50%",
});

const ButtonStack = styled(Stack)({
  justifyContent: "space-between",
  flexDirection: "row",
  gap: "2em",
});

const AddButton = styled(ButtonComp)({
  margin: "0 auto",
  textTransform: "none",
  borderRadius: "2em",
  color: `${theme.palette.background.default}`,
  fontWeight: 500,
  fontSize: "1em",
  padding: "1em",
  backgroundColor: `${theme.palette.secondary.main}`,
  "&:hover": {
    backgroundColor: `${theme.palette.secondary.dark}`,
  },
});

const StackB = styled(Stack)({
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "row",
  padding: "3em",
  gap: "5em",
  backgroundColor: `${theme.palette.secondary.light}`,
});

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <BoxA>
      <StackNav></StackNav>
      <BoxB>
        <StackA>
          <StackA1>
            <Typography variant="title">
              Add a system to cms store in easy steps and get project file.
            </Typography>
            <Typography variant="body3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              pretium eleifend tempus. Donec imperdiet id velit ut sollicitudin.
              Nam quis mi venenatis, consectetur lacus quis, viverra sapien.
              Integer et molestie urna. Vivamus a luctus ipsum, eget posuere
              libero. Suspendisse volutpat sed ipsum sit amet semper.
            </Typography>
            <ButtonStack>
              <AddButton
                onClick={() => {
                  navigate("/cms");
                }}
              >
                CMS Store
              </AddButton>
              <AddButton
                onClick={() => {
                  navigate("/project-builder");
                }}
              >
                Project Builder
              </AddButton>
            </ButtonStack>
          </StackA1>
          <img
            src={require("../../../assets/images/cms-homepage.PNG")}
            alt="img"
          />
        </StackA>
        <StackB>
          <img
            height="300px"
            width="500px"
            src={require("../../../assets/images/cms-store.PNG")}
            alt="img"
          />
          <StackA1>
            <Typography variant="h1">Add a system to cms store.</Typography>
            <Typography variant="body4">
              Proin at iaculis dui. Duis ac ante sed mi elementum porta id
              vestibulum lectus. Donec lacinia lobortis est, vitae gravida nunc
              vulputate vel. Morbi tristique pharetra ante eu pulvinar. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Nunc rutrum
              orci et nibh egestas, ut suscipit quam molestie. Duis porta
              tincidunt urna non laoreet. Interdum et malesuada fames ac ante
              ipsum primis in faucibus.
            </Typography>
          </StackA1>
        </StackB>
        <StackB>
          <StackA1>
            <Typography variant="h1">Get project zip file.</Typography>
            <Typography variant="body4">
              Proin at iaculis dui. Duis ac ante sed mi elementum porta id
              vestibulum lectus. Donec lacinia lobortis est, vitae gravida nunc
              vulputate vel. Morbi tristique pharetra ante eu pulvinar. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Nunc rutrum
              orci et nibh egestas, ut suscipit quam molestie. Duis porta
              tincidunt urna non laoreet. Interdum et malesuada fames ac ante
              ipsum primis in faucibus.
            </Typography>
          </StackA1>
          <img
            src={require("../../../assets/images/project-builder.PNG")}
            alt="img"
            height="300px"
            width="500px"
          />
        </StackB>
      </BoxB>
      <StackFoot></StackFoot>
    </BoxA>
  );
};

export default HomePage;
