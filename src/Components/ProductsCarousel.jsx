// Import necessary CSS files and libraries
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Box, Image } from "@chakra-ui/react";


// Define the Carousel component
export default function ProductsCarousel() {

  const styles = {
    image: {
      width: "100%"
    }
  }
  return (
    <Box maxWidth="100%" marginTop={"125px"}>
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
        
         <SwiperSlide style={{display:"flex" }}>
          <Box>
            <Image src="https://cars.tatamotors.com/images/dark/altroz-imaginator.jpg" style={ styles.image} />
          </Box>
        </SwiperSlide>
         <SwiperSlide style={{display:"flex" }}>
          <Box>
            <Image src="https://cars.tatamotors.com/images/nexon/nexon-5-lakh-d-banner.webp" style={ styles.image} />
          </Box>
        </SwiperSlide>
         <SwiperSlide style={{display:"flex" }}>
          <Box>
            <Image src="https://cars.tatamotors.com/images/banner-webp/red-dark-tml-home-desktop.webp" style={ styles.image} />
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}