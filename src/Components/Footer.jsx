import { Box, Heading, Image,Text } from '@chakra-ui/react'
import RoadMaster from "../Assets/RoadMaster.gif"

export default function Footer() {


  

  return <Box>
    <Box style={{
      display: "flex", justifyContent: "space-around", background:"#1a1a1a" ,color:"white",marginTop:"30px", paddingTop:"40px", paddingBottom:"15px"}}>
      <Box>
        <h1 style={{ fontWeight: "600", fontSize: "20px", textAlign: "justify" }}>About Us</h1>
        <br />
        <Text>
          At RoadMaster Auto Parts, we understand that
          <br /> your vehicle is more than just a mode of
          <br />transportation - it's a crucial part of your life.
          <br />That's why we're dedicated to providing high <br /> quality,
          reliable, and durable parts that keep<br /> you
          on the road and on the move.
           Whether<br /> you're a professional mechanic
          or a DIY <br /> enthusiast, RoadMaster Auto Parts
          is your go-to<br /> source for high-quality
          automotive parts<br /> and accessories.
          We're passionate about<br /> what we do, and we're
         committed to  <br />providing the best possible service
         and support <br /> to help you keep your vehicle running
          smoothly<br /> for years to come.
        </Text>
      </Box>
      <Box>
        <h1 style={{ fontWeight: "600", fontSize: "20px" }}>Get in Touch</h1>
        <br />
        <Text>447, Brodway, FI 2,</Text>
        <Text>New York, NY , 10103</Text>
        <br />
        <br />
        <Text>info@roadmaster.com</Text>
        <br />
       
        <Text> 808-789-0990</Text>
        </Box>
      <Box>
         <h1 style={{fontWeight:"600", fontSize:"20px"}}>Quick Links</h1>
        
      </Box>
      <Box>
         <h1 style={{fontWeight:"600", fontSize:"20px"}}>Download the App</h1>
      </Box>
    </Box>
    {/* Bottom Section */}
    <Box style={{
      display: "flex", justifyContent: "space-around" ,marginTop:"15px"}}>
      <Box>
        <Image src={RoadMaster} style={{ width: "100px" , marginTop:"-15px"}} />
      </Box>
      <Box>
        <Text>CopyRights 2020 RoadMaster AutoParts</Text>
        <Text>All rights reserved</Text>
      </Box>
      <Box>

      </Box>
    </Box>
  </Box>
}