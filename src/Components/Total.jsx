import { Box, Button, Input, Flex, Text } from "@chakra-ui/react";
import { useToast } from '@chakra-ui/react'
import { useEffect, useState } from "react";
  import { useNavigate} from "react-router-dom"
export default function Total({total}) {
  const navigate = useNavigate()
  
  function handlePurchase() {
    navigate("/payment")
  }

function handleBackToShop() {
    navigate("/products")
  }

function ToastExample() {
  const toast = useToast()
  return (
    <Button
      onClick={() =>
        toast({
          title: 'Coupon Applied.',
          description: "We've have given special discount for you.",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      }
    >
      Show Toast
    </Button>
  )
}


 const [totalSave, setTotalSave] = useState(0);
  const [discount, setDiscount] = useState("");

  const handleApplyDiscount = () => {
    if (discount === "") {
      alert("Please Enter a Coupan")
      // Handle empty discount value
    } else if (discount !== "NEW10") {
      alert("No Such Coupan Exist")
      // Handle invalid discount value
    } else if (discount === "NEW10") {
      setTotalSave(total * 0.15);
    }
  }

return (
   
    <>
<Box w="full" maxW="lg">
    <Box borderWidth={1} borderRadius="md" p={4} boxShadow="base" mb={3}>
              <form>
                <Box mb={3}>
                  <Text as="label" fontWeight="bold">
                Have a coupon? 
                <br/>
                No ! Apply "NEW10" to get 10% Off
                  </Text>
                  <Flex alignItems="center" mt={1}>
                    <input type="text" className="form-control border" name="" placeholder="Coupon code"  onChange={(e)=>{setDiscount(e.target.value)}}/>
                    <Button variant="solid" ml={2} bg={"rgb(252, 198, 3)"} onClick={handleApplyDiscount} >
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
              <Text>₹ { total}</Text>
      </Box>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Text>Discount:</Text>
              <Text color="green">-₹ {totalSave}</Text>
      </Box>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Text>Tax @ 18%:</Text>
              <Text>₹ {total*0.18 }</Text>
      </Box>
      <hr />
      <Box display="flex" justifyContent="space-between">
        <Text>Total price:</Text>
              <Text fontWeight="bold">₹ { total + total*0.18 -totalSave}</Text>
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