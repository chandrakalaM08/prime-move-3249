import React from "react";

import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { Card, Container, CardBody, CardFooter , Heading,Box,Text,Stack,Divider,Button,ButtonGroup,Image } from '@chakra-ui/react'

import SortFilter from "../Components/SortFilter";
import SingleProduct from "./SingleProductPage";

const Products = () => {

const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();

  let queryParam = searchParams.get('type') || ""
  const [selectedCategory, setSelectedCategory] = useState(queryParam)
  const [selectedSort, setSelectedSort] = useState("")



  useEffect(() => {
    const fetchProducts = async () => {
      console.log("inseide useeffect in productlist", selectedCategory)
      let order = searchParams.get("order");
    
      if (selectedSort !== "") {
        order=selectedSort
      }
      
      let paramObj = {
        category:  selectedCategory.length > 0 ? selectedCategory  : searchParams.getAll("category"),
        _sort: order && "price",
        _order: order, //asc or desc
      };
       console.log("here", paramObj.category)
      let objString = "";
      if (selectedCategory.length > 0) {
        objString = '?' + new URLSearchParams(paramObj).toString();
       
      }
      else if(selectedSort !== "") {
        objString = `?_sort=price&_order=${order}`
        
      }
     
      
      const response = await fetch(`https://statuesque-vast-beet.glitch.me/products`+ objString);
      
      const data = await response.json();
      setProducts(data);
      
    };
    fetchProducts();
  }, [searchParams,selectedCategory,selectedSort]);
  
  return <>
    <Navbar />

    <Box >
     
      <Box style={{ display: "flex", marginTop:"150px" }} >
        
        <Container w={280}  >
          <SortFilter setSelectedCategory={setSelectedCategory}
                setSelectedSort={setSelectedSort}/>
        </Container>
        <Container maxW='container.2xl' style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: "15px" }}>
          
        {products?.map((product) => {
          return <Card maxW='sm' key={product.id}>
  <CardBody>
    <Image
      src={product.picture}
      alt='product-pic'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
                <Heading size='md'>{ product.name}</Heading>
                <Text style={{   overflow:" hidden",
   display: "-webkit-box",
   webkitLineClamp: "2",
           lineClamp: "7",
                  webkitBoxOrient: "vertical",
                  fontSize: "14px"
                }}><span>{product.company}</span>{product.description.replace( /(<([^>]+)>)/ig, '')}</Text>
      <Text color='blue.600' fontSize='md'>
        ₹ {product.price}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
              <ButtonGroup spacing='4' justifyContent={"center"}>
               
                   <Button>
      <SingleProduct/>
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
 
  </>
}

export default Products;