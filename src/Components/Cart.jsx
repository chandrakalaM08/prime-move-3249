import { Box, Container, Flex, Image, Text, Select, Button } from "@chakra-ui/react";
import DeliveryOptions from "./Delivery";
import { DeleteIcon } from "@chakra-ui/icons";
import QuantityButton from './QuantityButton';
import Total from "./Total";

const Cart = () => {

  const carts = [
    {
    "picture": "https://boodmo.com/media/cache/catalog_part//images/parts/d132084e3cbbfa98b154f5f6ac239e22.webp",
      title: "Bonnet",
      price: 23150,
      quantity : 1
    }
     
]

  

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
              {carts?.map((item) => {
                let total = item.price * item.quantity;
                return (
                      <Flex gridGap={3} mb={4}>
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
                    {item.title}
                  </Text>
                  <Text color="gray.500" mt={1}>
                    Yellow, Jeans
                  </Text>
                </Box>
                <Flex flexDirection={{ base: "row", lg: "column", xl: "row" }} alignItems="center">
                  <Box>
                     <QuantityButton quantity={item.quantity} />
                  </Box>
                  <Box>
                    <Text as="h6" fontSize="md" fontWeight="bold">
                      ₹ {total}
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
                      <DeleteIcon/>
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
            <Total  />

            </Box>
            </Flex>
      </Container>
    </Box>
  )
}


export default Cart;