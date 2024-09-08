import { Box, Button, Divider, Flex, Img, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Slider from "react-slick";
import book1 from "../../../Images/Book1.jpg"
import book2 from "../../../Images/Book2.jpg"
import book3 from "../../../Images/Book3.jpg"
import book4 from "../../../Images/Book4.jpg"
import book5 from "../../../Images/Book5.jpg"
import book6 from "../../../Images/Book6.jpg"
import book7 from "../../../Images/Book7.jpg"
import letterBgImg from "../../../Images/letter-bg.jpg"
import CustomButton from "../../../Commons/Button"
import SectionHeading from "../../../Commons/SectionHeading";


const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "lightgray", borderRadius: "10px" }}
      onClick={onClick}
    />
  );
}

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "lightgray", borderRadius: "10px" }}
      onClick={onClick}
    />
  );
}

const Featured = () => {

  const data = [
    { pic: book1, price: "$15.99", oldPrice: "$20.99" },
    { pic: book2, price: "$15.99", oldPrice: "$20.99" },
    { pic: book3, price: "$15.99", oldPrice: "$20.99" },
    { pic: book4, price: "$15.99", oldPrice: "$20.99" },
    { pic: book5, price: "$15.99", oldPrice: "$20.99" },
    { pic: book6, price: "$15.99", oldPrice: "$20.99" },
    { pic: book7, price: "$15.99", oldPrice: "$20.99" },
  ]

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <Box maxW={"80%"} margin={"40px auto"} bg={"linear-gradient(15deg, #eee 30%, #fff 30.1%)"}>
        <SectionHeading>Featured Books</SectionHeading>
        <Slider {...settings}>
          <Box height={"50vh"} textAlign={"center"} alignContent={"center"}>
            <Img src={book2} alt="BOok1" margin={"auto"} />
            <Flex justifyContent={"center"} gap={2} fontSize={"20px"}>
              <Text fontWeight={"500"} color="black">$15.99</Text>
              <s style={{ color: "#666", fontSize: "16px", alignSelf: "end" }}>$20.99</s>
            </Flex>

            <Button color={"#fff"} backgroundColor={"#27ae60"} _hover={{ bgColor: "#1f8f4e" }}>
              Add to Cart
            </Button>

            {/* <CustomButton>Add to Cart</CustomButton> */}

          </Box>
          <Box height={"50vh"} textAlign={"center"} alignContent={"center"}>
            <Img src={book1} alt="BOok1" margin={"auto"} />
          </Box>
          <Box height={"50vh"} textAlign={"center"} alignContent={"center"}>
            <Img src={book2} alt="BOok1" margin={"auto"} />
          </Box>
          <Box height={"50vh"} textAlign={"center"} alignContent={"center"}>
            <Img src={book1} alt="BOok1" margin={"auto"} />
          </Box>
          <Box height={"50vh"} textAlign={"center"} alignContent={"center"}>
            <Img src={book2} alt="BOok1" margin={"auto"} />
          </Box>
          <Box height={"50vh"} textAlign={"center"} alignContent={"center"}>
            <Img src={book1} alt="BOok1" margin={"auto"} />
          </Box>
          <Box height={"50vh"} textAlign={"center"} alignContent={"center"}>
            <Img src={book2} alt="BOok1" margin={"auto"} />
          </Box>
        </Slider>

      </Box>

      <Box bgImage={letterBgImg} bgPosition={"center"} bgRepeat={"no-repeat"} bgSize={"cover"} bgAttachment={"fixed"}>
        <Flex textAlign={"center"} gap={4} flexDirection={"column"} maxW={"45rem"} marginLeft={"auto"} paddingY="100px" >
          <Text fontSize={"22px"} color={"#fff"}>Subscribe For Latest Updates</Text>
          <Box>
            <Input maxW={"80%"} bgColor={"#fff"} type="email" placeholder="Enter Your Email" />
          </Box>
          <Box>
            <Button
              fontFamily={"monospace"}
              fontSize={"1.3rem"}
              padding={"20px 25px"}
              fontWeight={"500"}
              bgColor={"#27ae60"}
              color="#fff"
              _hover={{ bgColor: "#1f8f4e" }}
            >
              Subscribe
            </Button>

            {/* <CustomButton
              fontFamily={"monospace"}
              fontSize={"1.3rem"}
              padding={"20px 25px"}
              fontWeight={"500"}
            >
              Subscribe
            </CustomButton> */}
          </Box>
        </Flex>

      </Box>


      {/* {data.map((item, index) => (
          <Box key={index} height={"50vh"} textAlign={"center"} alignContent={"center"}>
            <Img src={item.pic} alt="BOok1" margin={"auto"} />
            <Flex justifyContent={"center"} gap={2} fontSize={"20px"}>
              <Text fontWeight={"500"} color="black">{item.price}</Text>
              <s style={{ color: "#666" }}>{item.oldPrice}</s>
            </Flex>
            <CustomButton>Add to Cart</CustomButton>
          </Box>
        ))} */}

    </>

  );
};

export default Featured;
