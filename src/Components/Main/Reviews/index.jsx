import SectionHeading from "../../../Commons/SectionHeading";
import { Box, Button, Divider, Flex, Img, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Slider from "react-slick";
import UserIcon from "../../../Images/UserIcon.svg"
import FullStar from "../../../Images/fullStar.svg"
import HalfStar from "../../../Images/halfStar.svg"
import EmptyStar from "../../../Images/emptyStar.svg"

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


const Reviews = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const data = [
    {
      userIcon: UserIcon,
      userName: "Abdullah Shabbir",
      review: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Iusto Necessitatibus Sed Mollitia Nemo Assumenda Sequi Soluta Maxime Esse Rem Vel",
      rating: "4.5",
    },
    {
      userIcon: UserIcon,
      userName: "John Snow",
      review: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Iusto Necessitatibus Sed Mollitia Nemo Assumenda Sequi Soluta Maxime Esse Rem Vel",
      rating: "4.0",
    },
    {
      userIcon: UserIcon,
      userName: "John Doe",
      review: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Iusto Necessitatibus Sed Mollitia Nemo Assumenda Sequi Soluta Maxime Esse Rem Vel",
      rating: "3.5",
    }
  ]

  const getStars = (rating) => {
    const val = rating.split(".")
    const fullStars = parseInt(val[0]);
    const halfStars = parseInt(val[1]);
    const temp = [];
    for (let x = fullStars; x > 0; x--) {
      temp.push(<Img src={FullStar} alt={"rating"} width={"15px"} height={"auto"} />)
    }
    if (halfStars) {
      temp.push(<Img src={HalfStar} alt={"rating"} width={"15px"} height={"auto"} />)
    } else {
      if (temp.length < 5) {
        temp.push(<Img src={EmptyStar} alt={"rating"} width={"15px"} height={"auto"} />)
      }
    }
    return temp;
  }

  return (
    <Box maxW={"80%"} margin={"40px auto"}>
      <SectionHeading>Client's Reviews</SectionHeading>

      <Slider {...settings}>
        {data.map((item, index) => (
          <Box key={index} height={"40vh"} textAlign={"center"} alignContent={"center"}>
            <Img src={item.userIcon} alt="user" width={"20px"} height={"auto"} margin={"auto"} />
            <Flex justifyContent={"center"} gap={2} flexDir={"column"}>
              <Text fontSize={"20px"} fontWeight={"500"} color="black">{item.userName}</Text>
              <Text fontSize={"15px"} style={{ color: "#666" }}>{item.review}</Text>
              <Flex justifyContent={"center"}>{getStars(item.rating)}</Flex>
              <Text></Text>
            </Flex>

          </Box>
        ))}
      </Slider>

    </Box>
  );
};

export default Reviews;
