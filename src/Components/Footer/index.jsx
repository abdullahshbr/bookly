import { Box, Grid, GridItem, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const DATA = [
  "Our Location",
  "Quick Links",
  "Extra Links",
  "Contact Info"
]
const Locations = [
  "Pakistan", "Australia", "Canada", "England", "Germany", "USA"
]
const QuickLinks = [
  "Home", "Featured", "Arrivals", "Reviews", "Blogs"
]
const ExtraLinks = [
  "Account info", "Ordered Items", "Privacy Policy", "Payment Method", "Our Services"
]
const ContactInfo = [
  "+123-456-7890", "+111-222-3333", "Abdullahshabbir1@Gmail.Com"
]

const GetItem = (gridItem) => {
  switch (gridItem) {
    case ("Our Location"): {
      return Locations;
    }
    case ("Quick Links"): {
      return QuickLinks
    }
    case ("Extra Links"): {
      return ExtraLinks
    }
    case ("Contact Info"): {
      return ContactInfo
    }
    default: {
      return []
    }
  }
}


const Footer = () => {
  return (
    <Box width={"100%"} height={'auto'} backgroundColor={"#EEEEEE"}>
      <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)']} gap={4}>
        {DATA.map((item, index) => (
          <GridItem w='100%'  key={index} m={"60px auto 30px"}>
            <Box width={"60%"} margin={'auto'}>
              <Heading size={"md"}>{item}</Heading>
              {GetItem(item).map((element, innerIndex) => (
                <Text key={innerIndex} fontSize={"small"}>{element}</Text>
              ))}
            </Box>
          </GridItem>
        ))}

      </Grid>
    </Box>
  )
}

export default Footer