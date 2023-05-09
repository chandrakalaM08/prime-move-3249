import React from "react";

import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { Card, Container, CardBody, CardFooter , Heading,Box,Text,Stack,Divider,Button,ButtonGroup,Image } from '@chakra-ui/react'

import SortFilter from "../Components/SortFilter";
import SingleProduct from "./SingleProductPage";


const url = `https://sparkling-fabulous-grandiflora.glitch.me/products`
const Products = () => {

const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();

  let queryParam = searchParams.get('type') || ""
  console.log("type now is: ", queryParam)
  const [category, setCategory] = useState("")
  const [order, setOrder] = useState("")
  const [ sort, setSort] = useState("price")



  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     console.log("inseide useeffect in productlist", selectedCategory)
  //     let order = searchParams.get("order");
    
  //     if (selectedSort !== "") {
  //       order=selectedSort
  //     }
      
  //     let paramObj = {
  //       category:  selectedCategory.length > 0 ? selectedCategory  : searchParams.getAll("type"),
  //       _sort: order && "price",
  //       _order: order, //asc or desc
  //     };
  //      console.log("here", paramObj.category)
  //     let objString = "";
  //     if (selectedCategory.length > 0) {
  //       objString = '?' + new URLSearchParams(paramObj).toString();
       
  //     }
  //     else if(selectedSort !== "") {
  //       objString = `?_sort=price&_order=${order}`
        
  //     }
     
      
  //     const response = await fetch(`https://statuesque-vast-beet.glitch.me/products`+ objString);
      
  //     const data = await response.json();
  //     setProducts(data);
  //     console.log("now data is",data)
  //   };
  //   fetchProducts();
  // }, [searchParams,selectedCategory,selectedSort]);


  function getApi(url, company, sort, order,queryParam) {
    let paramObj = {}

    if (company.length > 0) {
      paramObj["company"] = company
    }

    if (queryParam.length > 0) { 
      paramObj["category"] = queryParam
    }
    
    if (order.length > 0) {
      paramObj["_sort"] = "price"
      paramObj["_order"] = order
    }
    
    url = url + '?' + new URLSearchParams(paramObj).toString(); 
    return url
  }
 

  async function fetchAndUpdateData(url,category,sort,order,queryParam) {

    try {
      
      let res = await fetch(getApi(url,category,sort,order,queryParam))
      res = await res.json()
      setProducts(res)
     
    
  } catch (error) {
    console.log("error inside catch Booklist", error)
  }
}


  useEffect(() => {
    fetchAndUpdateData(url,category,sort,order,queryParam)
  },[category,sort,order,queryParam])


  
  return <>
    <Navbar setSelectedCategory={setCategory} />

    <Box >
     
      <Box style={{ display: "flex", marginTop:"150px" }} >
        
        <Container w={280}  >
          <SortFilter setSelectedCategory={setCategory}
                setOrder={setOrder}/>
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
                }}><span>{product.company}</span>{product.description.replace(/(<([^>]+)>)/ig, '')}</Text>
                <Text>Category : {product.category}</Text>
      <Text color='blue.600' fontSize='md'>
        ₹ {product.price}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
              <ButtonGroup spacing='4' justifyContent={"center"}>
               
                   <Button>
                  <SingleProduct id={product.id} />
                  </Button>
                 
               
     
                <Button variant='outline' colorScheme='yellow'
                  onClick={() => {
                   let cartItems = [];
    if (localStorage.getItem('cartItems')) {
      cartItems = JSON.parse(localStorage.getItem('cartItems'));
    }
    const selectedProduct = { id: product.id, picture: product.picture, price: product.price, title: product.title, quantity: 1 , name : product.name ,description: product.description + product.company ,category:product.category};
    cartItems.push(selectedProduct);

    localStorage.setItem('cartItems', JSON.stringify(cartItems))   
                }}>
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