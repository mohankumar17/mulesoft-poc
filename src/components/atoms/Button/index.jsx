import React from "react";
import Button from "@mui/material/Button";

const ButtonComp = (props) => {
    const {
      height,
      width,
      disabled,
      hoverColor,
      borderRadius,
      focusColor,
      children,
      ...rest
    } = props;
  
    return (
      <Button
        data-testid="Button"
        sx={{
          height: height,
          width: width,
          textTransform: "none",
          "&:hover": {
            backgroundColor: hoverColor,
          },
          "&:focus": {
            backgroundColor: focusColor,
          },
          borderRadius: borderRadius,
        }}
        disabled={disabled}
        {...rest}
      >
        {children}
      </Button>
    );
  };
  
  export default ButtonComp;