import { Box, Button, Input,Flex, Text } from "@chakra-ui/react";
  import { useNavigate} from "react-router-dom"
export default function Total() {
  const navigate = useNavigate()
  
  function handlePurchase() {
    navigate("/payment")
  }

function handleBackToShop() {
    navigate("/products")
  }


  return (
   
<>
<Box w="full" maxW="lg">
    <Box borderWidth={1} borderRadius="md" p={4} boxShadow="base" mb={3}>
              <form>
                <Box mb={3}>
                  <Text as="label" fontWeight="bold">
                    Have coupon?
                  </Text>
                  <Flex alignItems="center" mt={1}>
                    <input type="text" className="form-control border" name="" placeholder="Coupon code" />
                    <Button variant="solid" ml={2} bg={"rgb(252, 198, 3)"}>
                      Apply
                    </Button>
                  </Flex>
                </Box>
              </form>
            </Box>
  <Box borderWidth="1px" borderRadius="md" boxShadow="base">
    <Box p={4}>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Text>Total price:</Text>
        <Text>₹ 23150.00</Text>
      </Box>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Text>Discount:</Text>
        <Text color="green">-₹ 60.00</Text>
      </Box>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Text>TAX:</Text>
        <Text>₹ 14.00</Text>
      </Box>
      <hr />
      <Box display="flex" justifyContent="space-between">
        <Text>Total price:</Text>
        <Text fontWeight="bold">₹ 29973</Text>
      </Box>
      <Box mt={3}>
              <Button colorScheme="green" size="lg" w="full" mb={2} onClick={handlePurchase}>
          Make Purchase
        </Button>
        <Button variant="outline" size="lg" w="full" mt={2} onClick={handleBackToShop}>
          Back to shop
        </Button>
      </Box>
    </Box>
  </Box>
</Box>
</>
  )
}