import { Box, Flex, Img, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import React from 'react'
import BooklyLogo from "../../Images/BooklyLogo.svg"
import SearchIcon from "../../Images/SearchIcon.svg"
import UserIcon from "../../Images/UserIcon.svg"
import CartIcon from "../../Images/CartIcon.svg"
import FavouritesIcon from "../../Images/HeartIcon.svg"

const Header = () => {
  return (
    <Flex alignItems={"center"} width={["100%", "90%", "80%"]} margin={"auto"} height={"10vh"} justifyContent={"space-between"}>

      <Flex>
        <Img alt={"BooklyLogo"} src={BooklyLogo} width={["30px", '40px']} height={"auto"} />
        <Text fontSize={["18px","24px","28px"]} fontWeight={"600"} color={"#444"}>Bookly</Text>
      </Flex>


      <Box display={["none", "block"]} width={["30%"]} >
        <InputGroup size={["sm", "md", "lg"]}>
          <Input placeholder='Search here...' />
          <InputRightElement><Img alt={"SearchIcon"} src={SearchIcon} /></InputRightElement>
        </InputGroup>
      </Box>
      

      <Flex justifyContent={'space-between'} width={"100px"}>
        <Img display={["block", "none"]} alt={"SearchIcon"} src={SearchIcon} width={"30px"} height={"auto"}/>
        <Img alt={"FavouritesIcon"} src={FavouritesIcon} width={["20px",'30px']} height={"auto"} />
        <Img alt={"CartIcon"} src={CartIcon} width={["20px", '30px']} height={"auto"} />
        <Img alt={"UserIcon"} src={UserIcon} width={["20px", '30px']} height={"auto"} />
      </Flex>
    </Flex>
  )
}

export default Header