import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, border } from '@chakra-ui/react'
import React from 'react'
import Home from "./Home"
import Featured from "./Featured"
import Arrivals from "./Arrivals"
import Reviews from "./Reviews"
import Contact from "./Contact"

const Main = () => {
    return (
        <Tabs colorScheme='white' variant={"unstyled"}>
            <Box backgroundColor={"#27ae60"}>
                <TabList color={'#fff'} width={["fit-content"]} margin={"auto"} border={"none"} scrollBehavior={'auto'}>
                    <Tab fontFamily={'monospace'} fontSize={["9px", "14px", "19px"]} _selected={{ fontWeight: "bold" }}>Home</Tab>
                    <Tab fontFamily={'monospace'} fontSize={["9px", "14px", "19px"]} _selected={{ fontWeight: "bold" }}>Featured</Tab>
                    <Tab fontFamily={'monospace'} fontSize={["9px", "14px", "19px"]} _selected={{ fontWeight: "bold" }}>Arrivals</Tab>
                    <Tab fontFamily={'monospace'} fontSize={["9px", "14px", "19px"]} _selected={{ fontWeight: "bold" }}>Reviews</Tab>
                    <Tab fontFamily={'monospace'} fontSize={["9px", "14px", "19px"]} _selected={{ fontWeight: "bold" }}>Contact</Tab>
                </TabList>
            </Box>

            <TabPanels scrollBehavior={'auto'}>
                <TabPanel padding={"0px"}> <Home /> </TabPanel>
                <TabPanel padding={"0px"}> <Featured /> </TabPanel>
                <TabPanel padding={"0px"}> <Arrivals /> </TabPanel>
                <TabPanel padding={"0px"}> <Reviews /> </TabPanel>
                <TabPanel padding={"0px"}> <Contact /> </TabPanel>
            </TabPanels>
        </Tabs>
    )
}

export default Main