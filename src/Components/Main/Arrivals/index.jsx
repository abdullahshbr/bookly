import React from "react";
import SectionHeading from "../../../Commons/SectionHeading";
import { Box, Flex, Grid, GridItem, Img, Text } from "@chakra-ui/react";

import book1 from "../../../Images/Book1.jpg"
import book2 from "../../../Images/Book2.jpg"
import book3 from "../../../Images/Book3.jpg"
import book4 from "../../../Images/Book4.jpg"
import book5 from "../../../Images/Book5.jpg"
import book6 from "../../../Images/Book6.jpg"
import book7 from "../../../Images/Book7.jpg"

const Arrivals = () => {
  const data = [
    { pic: book1, price: "$15.99", oldPrice: "$20.99" },
    { pic: book2, price: "$15.99", oldPrice: "$20.99" },
    { pic: book3, price: "$15.99", oldPrice: "$20.99" },
    { pic: book4, price: "$15.99", oldPrice: "$20.99" },
    { pic: book5, price: "$15.99", oldPrice: "$20.99" },
    { pic: book6, price: "$15.99", oldPrice: "$20.99" },
    { pic: book7, price: "$15.99", oldPrice: "$20.99" },
  ]
  return (
    <Box maxW={"80%"} margin={"40px auto"}>
      <SectionHeading>Arrivals</SectionHeading>

      <Grid gap={10 } templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]}>
        {data.map((item, index) => (
          <GridItem key={index} 
          transition={"all .3s ease-in-out"}
          _hover={{ transform: "scale(1.1)", cursor:"pointer" }}>
            <Box
              margin="30px auto"
              // width={"220px"}
              height="280px"
              overflow={"hidden"}
              boxShadow={"1px 1px 11px gray"}
            >
              <Img src={item.pic} alt="New Arrival" margin={"auto"} height={"100%"} width={"100%"}/>
            </Box>
            <Text fontSize={"10px"} color={"gray"} textAlign={"center"}>New Arrivals</Text>
            <Flex justifyContent={"center"} gap={2} fontSize={"12px"}>
              <Text fontWeight={"500"} color="black">{item.price}</Text>
              <s style={{ color: "#666" }}>{item.oldPrice}</s>
            </Flex>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default Arrivals;
