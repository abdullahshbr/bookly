import { Box, Button, Container, Flex, Grid, GridItem, Text } from '@chakra-ui/react'
import React from 'react'
import banner from "../../../Images/banner-bg.jpg"
import book from "../../../Images/Books.png"
import airplane from "../../../Images/airplane.svg"
import lock from "../../../Images/lock.svg"
import refresh from "../../../Images/refresh.svg"
import support from "../../../Images/support.svg"
const dummyText = "Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Accusamus Sunt Tenetur Amet, Eligendi Doloremque Dolorum Asperiores Inventore Quia Similique! Aspernatur Adipisci Veniam Voluptate Eaque Obcaecati, Temporibus Numquam Tempora Vero Deleniti."

const GetServicesUi = ({ icon, title, details }) => {
  return (
    <Flex gap={3}>
      <Box alignContent={"center"}>
        <img alt={title} src={icon} width={'40px'} height={"auto"} />
      </Box>
      <Box>
        <Text color={"#444"} fontSize={["16px", "18px", "20px", "22px"]}>{title}</Text>
        <Text color={"#666"} fontSize={["10px", "12px", "14px", "16px"]}>{details}</Text>
      </Box>
    </Flex>
  )
}

const SERVICES = [
  { icon: airplane, title: "Free Shipping", details: "Orders over $100" },
  { icon: lock, title: "Secure Payment", details: "100% Secure Payment" },
  { icon: refresh, title: "Easy Returns", details: "10 Days Returns" },
  { icon: support, title: "24/7 Support", details: "Call Us Anytime" },
]

const Home = () => {
  return (
    <>
      <Box
        bgImage={banner}
        bgRepeat={'no-repeat'}
        bgPos={'center'}
        bgSize={'cover'}
        minH={["auto", "auto", "60vh", "80vh"]}
        alignContent={"center"}
      >
        <Container maxW={["95%", "90%", "85%", "80%"]} margin={["20px auto", "20px auto", "auto"]}>
          <Grid templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)']} gap={6}>
            <GridItem alignContent={"center"}>
              <Text color={"#444"} fontSize={["30px", "35px", "40px", "45px"]}>Upto 75% Off</Text>
              <Text>{dummyText}</Text>
              <Button mt={"10px"} bgColor={"#219150"} color={"#fff"} _hover={{ bgColor: "#1f7644" }}>Shop Now</Button>
            </GridItem>
            <GridItem>
              <Box>
                <img alt={"book"} src={book} width={''} height={"auto"} />
              </Box>
            </GridItem>
          </Grid>
        </Container>
      </Box>


      <Container maxW={["95%", "90%", "85%", "80%"]} margin={["40px auto"]}>
        <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)']} gap={6}>
          {SERVICES.map((item, index) => (
            <GridItem key={index} alignContent={"center"} placeSelf={["start", "center"]}>
              <GetServicesUi icon={item.icon} title={item.title} details={item.details} />
            </GridItem>
          ))}
        </Grid>
      </Container>

    </>
  )
}

export default Home