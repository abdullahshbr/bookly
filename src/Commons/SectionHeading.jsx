import { Box, Divider } from "@chakra-ui/react";
import React from "react";

const SectionHeading = ({ children }) => {
  return (
    <Box position={"relative"}>
      <Divider zIndex={"1"} position={"absolute"} top={"50%"} />
      <Box
        position={"relative"}
        bgColor={"white"}
        zIndex={"2"}
        border={".1rem solid rgba(0,0,0,.1)"}
        width={"fit-content"}
        padding="0px 16px"
        fontSize={["1rem", "2rem"]}
        margin="auto"
        color={"#444"}
        fontWeight={"bold"}
      >
        {children}
      </Box>
    </Box>
  );
};

export default SectionHeading;
