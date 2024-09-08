import { Button } from "@chakra-ui/react";
import React from "react";

const CustomButton = ({ children, style, padding, fontSize, bgColor, color, fontFamily }) => {
  return (
    <Button
      style={{ ...style }}
      
      color={color || "#fff"}
      backgroundColor={bgColor || "#27ae60"}
      
      fontFamily={fontFamily || "inherit"}
      fontSize={fontSize || "medium"}
      padding={padding || "0px 16px"}
      fontWeight={fontSize || "500"}
      
      _hover={{ bgColor: "#1f8f4e" }}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
