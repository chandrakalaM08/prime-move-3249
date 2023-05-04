import React from "react";
import Navbar from "../Components/Navbar";
import CarouselCard from "../Components/CarouselCard";
import Carousel from "../Components/TopCarousel";
import TopImage from "../Components/MainImage";
import IndexPageCards from "../Components/IndexPageCards";
import BlogSection from "../Components/BlogSection";
import Offers from "../Components/Offers";
import FooterTop from "../Components/FooterTop";
import Footer from "../Components/Footer";

const Home = ()=>{
  return <>
  <Navbar/>
  <TopImage/>
    <CarouselCard />
    <Carousel />
    <IndexPageCards />
    <BlogSection />
    <Offers />
    <FooterTop />
    <Footer/>
  </>
}

export default Home;