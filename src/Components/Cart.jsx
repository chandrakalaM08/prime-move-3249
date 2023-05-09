import { Box, Container, Flex, Image, Text, Select, Button } from "@chakra-ui/react";
import DeliveryOptions from "./Delivery";
import { DeleteIcon } from "@chakra-ui/icons";
import QuantityButton from './QuantityButton';
import Total from "./Total";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom"

const Cart = () => {

  
  const [cartItems, setCartItems] = useState([]);
  const [id, setId] = useState(0)

  let orderDataNew = JSON.parse(localStorage.getItem("cartItems")) || [];

  let quantityObj = {}
  orderDataNew.forEach((element) => {
    let key = element.id;
     quantityObj[key] = element.quantity;
  })
 
 const [quantity, setQuantity] = useState(quantityObj);
  
  let incrementQuantity = (event) => {
    let id = event.currentTarget.id;
    let updatedQuantity = {};
    updatedQuantity[id] = quantity[id] + 1;
    setQuantity({...quantity, ...updatedQuantity}
    )
   
  };
  
  let decrementQuantity = (event) => {
    let id = event.currentTarget.id;
    if (quantity[id] <= 1) { 
      return;
    }
    let updatedQuantity = {};
    updatedQuantity[id] = quantity[id] - 1;
    setQuantity({...quantity, ...updatedQuantity}
    )
  };
  
  const updatePaymentInfo = () => {
    localStorage.setItem("total_bill", JSON.stringify(total))
  }

useEffect(()=>{
   let updatedData = orderDataNew.map((element, index) => {
     element.quantity = quantity[element.id];
     return element;
        });
        localStorage.setItem("cartItems", JSON.stringify(updatedData));
        
},[quantity]);




  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(items);
  }, [quantity]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(items);
  }, [quantity]);

  const handleRemoveItem = (index) => {

     const newCartItems = cartItems.filter(item => item.id !== index);
  setCartItems(newCartItems);
  localStorage.setItem("cartItems", JSON.stringify(newCartItems));
 
  };
  const total = cartItems.reduce((acc, item) => acc + (item.quantity * item.price), 0)
  

  if (cartItems.length === 0) {
    return <div style={{ textAlign: "center", height: "330px", marginTop: "150px" }}>
      <div style={{display:"flex", justifyContent:"center"}}> <img src="https://assets.materialup.com/uploads/16e7d0ed-140b-4f86-9b7e-d9d1c04edb2b/preview.png" alt="empty" width={250} /></div>

        <p style={{fontSize:'25px'}}>Empty Bag!</p>
        <p style={{fontSize:'18px',marginTop:'10px'}}>Let's Explore!</p>
        <Link to={"/products"}>
        <button style={{marginTop:'43px',color:'white',border:"1px solid purple",backgroundColor:"rgb(250, 198, 3)", width:"230px",borderRadius:'5px', padding:'10px',fontWeight:"bold",borderStyle:"none"}}>Start Shopping</button>
      </Link>
      </div>
      
 }

  return (
    <Box  my={5} paddingTop={"120px"} >
      <Container maxW="container.xl">
        <Flex gap={5}>
          {/* cart */}
          <Box flex="1">
            <Box borderWidth={1} borderRadius="md" p={4} boxShadow="base">
              <Text as="h4" fontSize="xl" fontWeight="bold" mb={4}>
                Your shopping cart
              </Text>
              {cartItems?.map((item) => {
                let totalIndividual = item.price * item.quantity;
                return (
                      <Flex gridGap={3} mb={4} key={item.id}>
                <Box flex="0 0 96px">
                  <Image
                    src={item.picture}
                    alt="Product Image"
                    borderRadius="md"
                    boxShadow="sm"
                    width={200}
                  />
                </Box>
                <Box flex="1">
                  <Text as="a" href="#" color="blue.500" fontWeight="bold" fontSize="lg">
                    {item.name}
                  </Text>
                  <Text color="gray.500" mt={1}>
                    {item.category}
                  </Text>
                </Box>
                <Flex flexDirection={{ base: "row", lg: "column", xl: "row" }} alignItems="center">
                  <Box>
                        <QuantityButton quantity={item.quantity} id={item.id} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} total={ total} />
                  </Box>
                  <Box>
                    <Text as="h6" fontSize="md" fontWeight="bold">
                      ₹ {totalIndividual}
                    </Text>
                    <Text color="gray.500" whiteSpace="nowrap">
                      ₹ {item.price} / per item
                    </Text>
                  </Box>
                </Flex>
                <Box ml="auto">
                  <Flex alignItems="center">
                    <Button variant="outline" size="sm" p={2}>
                      ❤️
                    </Button>
                    <Button variant="solid" size="sm" colorScheme="red" ml={2}>
                          <DeleteIcon onClick={() => { handleRemoveItem(item.id); console.log("delete", item.id)} } />
                    </Button>
                  </Flex>
                </Box>
              </Flex>
                )
              })}
              

              {/* Repeat the above Flex container for additional items in the cart */}

            

              <Box borderTopWidth={1} pt={4} mx={4} mb={4}>
                <DeliveryOptions/>
              </Box>
            </Box>
          </Box>
          {/* cart */}

          {/* summary */}
          <Box flex="0 0 300px">
            <Total total={total} />

            </Box>
            </Flex>
      </Container>
    </Box>
  )
}


export default Cart;