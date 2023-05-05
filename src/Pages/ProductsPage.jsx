import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Card, Container, CardBody, CardFooter , Heading,Box,Text,Stack,Divider,Button,ButtonGroup,Image } from '@chakra-ui/react'
import ProductsCarousel from "../Components/ProductsCarousel";
import SortFilter from "../Components/SortFilter";

const Products = () => {
  
  const products = [
  {
    img: "https://storage.googleapis.com/gomechanic_assets/Battery/Amaron/amaron%20go%20new-min.png",
    title: "Battery",
    description: "Timing Belt for Cheverlet Captiva 1st Gen, Cruze,Cheverlet Captiva 1st Gen, Cruze",
    price : 450
    },
      {
    img: "https://storage.googleapis.com/gomechanic_assets/Battery/Amaron/amaron%20go%20new-min.png",
    title: "Battery",
    description: "Timing Belt for Cheverlet Captiva 1st Gen, Cruze,Cheverlet Captiva 1st Gen, Cruze",
    price : 450
    },
        {
    img: "https://storage.googleapis.com/gomechanic_assets/Battery/Amaron/amaron%20go%20new-min.png",
    title: "Battery",
    description: "Timing Belt for Cheverlet Captiva 1st Gen, Cruze,Cheverlet Captiva 1st Gen, Cruze",
    price : 450
    },
      {
    img: "https://storage.googleapis.com/gomechanic_assets/Battery/Amaron/amaron%20go%20new-min.png",
    title: "Battery",
    description: "Timing Belt for Cheverlet Captiva 1st Gen, Cruze,Cheverlet Captiva 1st Gen, Cruze",
    price : 450
    },
      {
    img: "https://storage.googleapis.com/gomechanic_assets/Battery/Amaron/amaron%20go%20new-min.png",
    title: "Battery",
    description: "Timing Belt for Cheverlet Captiva 1st Gen, Cruze,Cheverlet Captiva 1st Gen, Cruze",
    price : 450
    },
      {
    img: "https://storage.googleapis.com/gomechanic_assets/Battery/Amaron/amaron%20go%20new-min.png",
    title: "Battery",
    description: "Timing Belt for Cheverlet Captiva 1st Gen, Cruze,Cheverlet Captiva 1st Gen, Cruze",
    price : 450
    },
      {
    img: "https://storage.googleapis.com/gomechanic_assets/Battery/Amaron/amaron%20go%20new-min.png",
    title: "Battery",
    description: "Timing Belt for Cheverlet Captiva 1st Gen, Cruze,Cheverlet Captiva 1st Gen, Cruze",
    price : 450
    },
      {
    img: "https://storage.googleapis.com/gomechanic_assets/Battery/Amaron/amaron%20go%20new-min.png",
    title: "Battery",
    description: "Timing Belt for Cheverlet Captiva 1st Gen, Cruze,Cheverlet Captiva 1st Gen, Cruze",
    price : 450
    },
      {
    img: "https://storage.googleapis.com/gomechanic_assets/Battery/Amaron/amaron%20go%20new-min.png",
    title: "Battery",
    description: "Timing Belt for Cheverlet Captiva 1st Gen, Cruze,Cheverlet Captiva 1st Gen, Cruze",
    price : 450
    },
      {
    img: "https://storage.googleapis.com/gomechanic_assets/Battery/Amaron/amaron%20go%20new-min.png",
    title: "Battery",
    description: "Timing Belt for Cheverlet Captiva 1st Gen, Cruze,Cheverlet Captiva 1st Gen, Cruze",
    price : 450
    },
      {
    img: "https://storage.googleapis.com/gomechanic_assets/Battery/Amaron/amaron%20go%20new-min.png",
    title: "Battery",
    description: "Timing Belt for Cheverlet Captiva 1st Gen, Cruze,Cheverlet Captiva 1st Gen, Cruze",
    price : 450
    }
  
  ]


  return <>
    <Navbar />
    <ProductsCarousel />
    <Box style={{ display: "flex" }}>
    <Box>
      <SortFilter/>
    </Box>
    <Box>
      <Container maxW='container.2xl' style={{display:"grid", gridTemplateColumns : "repeat(5,1fr)" , gap:"15px"}}>
        {products?.map((product) => {
          return <Card maxW='sm'>
  <CardBody>
    <Image
      src={product.img}
      alt='product-pic'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
                <Heading size='md'>{ product.title}</Heading>
                <Text style={{   overflow:" hidden",
   display: "-webkit-box",
   webkitLineClamp: "2",
           lineClamp: "7",
                  webkitBoxOrient: "vertical",
                fontSize:"14px"}}>{product.description}</Text>
      <Text color='blue.600' fontSize='md'>
        $ {product.price}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='yellow'>
       More Info
      </Button>
      <Button variant='outline' colorScheme='yellow'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
        </Card>
        })}
        </Container>
    </Box>
   </Box>
    <Footer/>
  </>
}

export default Products;