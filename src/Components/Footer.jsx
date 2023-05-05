import { Box, Image,Text } from '@chakra-ui/react'
import RoadMaster from "../Assets/RoadMaster.gif"
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons'
import Social from "../Assets/Social.png"
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
       
        </Text>
      </Box>
      <Box>
        <h1 style={{ fontWeight: "600", fontSize: "20px" }}>Get in Touch</h1>
        <br />
        <Text>447, Brodway, FI 2,</Text>
        <Text>New York, NY , 10103</Text>
        <br />
        <br />
        <Text style={{ fontWeight:"600"}}> <EmailIcon/> info@roadmaster.com</Text>
        <br />
        <Text style={{color:"rgb(252, 198, 3)", fontWeight:"600"}}> <PhoneIcon/> 808-789-0990</Text>
        </Box>
      <Box>
        <h1 style={{ fontWeight: "600", fontSize: "20px" }}>Quick Links</h1>
           <br />
        <Text>Customer Service</Text>
        <Text>Return Policy</Text>
        <Text>Shipping & Delivery</Text>
        <Text>Our Story</Text>
        <Text>About Us</Text>
        <Text>Blog</Text>
        <Text>Top Offers</Text>
        <Text>Subscibe to Mails</Text>
        <Text>Career</Text>
        
      </Box>
      <Box>
        <h1 style={{ fontWeight: "600", fontSize: "20px" }}>Download the App</h1>
        <Box >
               <Box><Image src="https://storage.googleapis.com/gomechanic_assets/Website/gm-app-download-update.jpg" style={{ width:"150px" }}/></Box>
          <Box style={{display:"flex" }}>
            <Image src="https://storage.googleapis.com/gomechanic_assets/Website/play-store.png" style={{ width: "110px" }} />
            <Image src="https://storage.googleapis.com/gomechanic_assets/Website/app-store.png" style={{ marginLeft:"10px",width: "105px" }}  /></Box>
        </Box>
      </Box>
    </Box>
    {/* Bottom Section */}
    <Box style={{
      display: "flex", justifyContent: "space-between" ,marginTop:"15px"}}>
      <Box>
        <Image src={RoadMaster} style={{ width: "90px" , marginTop:"-15px", marginLeft:"60px"}} />
      </Box>
      <Box style={{ fontWeight: "600", textAlign:"center"}}>
        <Text >CopyRights © 2020 <span  style={{color:"#FFBF00"}}>RoadMaster AutoParts</span> </Text>
        <Text>All rights reserved</Text>
      </Box>
      <Box>
  <Image src={Social} style={{ width: "180px",marginRight:"50px" }} />
      </Box>
    </Box>
  </Box>
}