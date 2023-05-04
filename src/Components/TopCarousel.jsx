// Import necessary CSS files and libraries
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Box, Image } from "@chakra-ui/react";


// Define the Carousel component
export default function Carousel() {

  const styles = {
    image: {
      width: "80%"
    }
  }
  return (
    <Box maxWidth="100%" marginTop={"30px"}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500, // Set autoplay delay to 2.5 seconds
          disableOnInteraction: false, // Disable pausing of autoplay on user interaction
        }}
        pagination={{
          clickable: true, // Enable clickable pagination bullets
        }}
        navigation={true} // Enable navigation arrows
        modules={[Autoplay, Pagination, Navigation]} // Include necessary modules
        className="mySwiper"
      >
        {/* Add slides with images and alt text */}
        <SwiperSlide style={{display:"flex" ,marginLeft:"80px"}}>
          <Box>
            <Image src="https://boodmo.com/media/images/slider/f4f37d3.webp" style={ styles.image} />
          </Box>
          <Box>
            <Image src="https://boodmo.com/media/images/slider/61a5d11.webp" style={ styles.image}/>
          </Box>
          
        </SwiperSlide>
        
        <SwiperSlide style={{display:"flex" }}>
          <Box>
            <Image src="https://boodmo.com/media/images/slider/61a5d11.webp" style={ styles.image} />
          </Box>
          <Box>
            <Image src="https://boodmo.com/media/images/slider/3ad297e.webp" style={ styles.image}/>
          </Box>
          
        </SwiperSlide>
        
      </Swiper>
    </Box>
  );
}