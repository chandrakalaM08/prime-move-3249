import { Card, SimpleGrid, Button, Box,Text } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export default function FooterTop() {

  const brands = ["Kai", "Honda", "Subaru","Chevy", "Ford", "Nissan","Dodge", "Ram", "Toyoto","Jeep", "GMC", "Hyundai","Cadillc", "Mercedes","Lexus"]
  return <Box style={{display : "flex", justifyContent:"space-around", marginTop:"45px"}}>
    <Box style={{ display:"grid" , placeItems:"center", alignContent:"center", width:"28%", boxShadow:" rgba(0, 0, 0, 0.35) 36px -40px 36px -25px inset" }}>
      <Text style={{backgroundColor:"rgb(252, 198, 3)",fontSize:"30px", width:"300px", textAlign:"center",fontWeight:"600" }}>FEATURED MAKES</Text>
      <Text style={{ fontSize: "30px" ,fontWeight:"600" ,}}>FEATURED MODELS</Text>
    </Box>
    <Box style={{ width: "50%" }}>
      <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 3fr))'>
        {brands?.map((brand) => {
          return <Card>
            <Button style={{ display: "flex", justifyContent: "space-between", height: "50px" }} >{brand} <ChevronRightIcon /> </Button>
          </Card>
        })}
       </SimpleGrid>
   </Box>
       
  </Box>
}