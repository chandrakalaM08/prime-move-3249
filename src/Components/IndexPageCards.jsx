import { Card, Image , CardBody, CardFooter,Text,Heading,Button,SimpleGrid ,Box} from '@chakra-ui/react'
import { AiOutlineShoppingCart } from "react-icons/ai";

import { StarIcon } from '@chakra-ui/icons'
export default function IndexPageCards() {

  const styles = {
    checked: {
      color: "orange"
    }

  }
  const data = [
    {
      id: 1,
      title: "Engine Oil",
      price : 110,
      img : "https://boodmo.com/media/cache/part_zoom_horizontal/images/parts/b016753f8a60e7345c36a17dad82a916.webp"
    },
     {
      id: 1,
      title: "Engine Oil",
      price : 110,
      img : "https://boodmo.com/media/cache/part_zoom_horizontal/images/parts/b016753f8a60e7345c36a17dad82a916.webp"
    },
      {
      id: 1,
      title: "Engine Oil",
      price : 110,
      img : "https://boodmo.com/media/cache/part_zoom_horizontal/images/parts/b016753f8a60e7345c36a17dad82a916.webp"
    },
       {
      id: 1,
      title: "Engine Oil",
      price : 110,
      img : "https://boodmo.com/media/cache/part_zoom_horizontal/images/parts/b016753f8a60e7345c36a17dad82a916.webp"
    },
        {
      id: 1,
      title: "Engine Oil",
      price : 110,
      img : "https://boodmo.com/media/cache/part_zoom_horizontal/images/parts/b016753f8a60e7345c36a17dad82a916.webp"
    },
         {
      id: 1,
      title: "Engine Oil",
      price : 110,
      img : "https://boodmo.com/media/cache/part_zoom_horizontal/images/parts/b016753f8a60e7345c36a17dad82a916.webp"
  },
   {
      id: 1,
      title: "Engine Oil",
      price : 110,
      img : "https://boodmo.com/media/cache/part_zoom_horizontal/images/parts/b016753f8a60e7345c36a17dad82a916.webp"
  },
   {
      id: 1,
      title: "Engine Oil",
      price : 110,
      img : "https://boodmo.com/media/cache/part_zoom_horizontal/images/parts/b016753f8a60e7345c36a17dad82a916.webp"
  },
   {
      id: 1,
      title: "Engine Oil",
      price : 110,
      img : "https://boodmo.com/media/cache/part_zoom_horizontal/images/parts/b016753f8a60e7345c36a17dad82a916.webp"
  },
   {
      id: 1,
      title: "Engine Oil",
      price : 110,
      img : "https://boodmo.com/media/cache/part_zoom_horizontal/images/parts/b016753f8a60e7345c36a17dad82a916.webp"
    },
    {
      id: 1,
      title: "Engine Oil",
      price : 110,
      img : "https://boodmo.com/media/cache/part_zoom_horizontal/images/parts/b016753f8a60e7345c36a17dad82a916.webp"
    },
     {
      id: 1,
      title: "Engine Oil",
      price : 110,
      img : "https://boodmo.com/media/cache/part_zoom_horizontal/images/parts/b016753f8a60e7345c36a17dad82a916.webp"
    },
      {
      id: 1,
      title: "Engine Oil",
      price : 110,
      img : "https://boodmo.com/media/cache/part_zoom_horizontal/images/parts/b016753f8a60e7345c36a17dad82a916.webp"
    },
       {
      id: 1,
      title: "Engine Oil",
      price : 110,
      img : "https://boodmo.com/media/cache/part_zoom_horizontal/images/parts/b016753f8a60e7345c36a17dad82a916.webp"
    },
        {
      id: 1,
      title: "Engine Oil",
      price : 110,
      img : "https://boodmo.com/media/cache/part_zoom_horizontal/images/parts/b016753f8a60e7345c36a17dad82a916.webp"
    }
]


  return <Box style={{  width:"80%", margin : "auto",marginTop: "65px"  }}>
    <h1 style={{textAlign:"center", fontSize:"28px", fontWeight:"600", marginBottom: "15px" }}>DEAL OF THE WEEK</h1>
    <SimpleGrid spacing={6} templateColumns='repeat(auto-fill, minmax(220px, 2fr))'>
      
      {
        data?.map((item) => {
          return  <Card align={"center"} >
            <Image  src={item.img} />
            <CardBody>
              <Text>{item.title}</Text>
              <Text >
                <span class="fa fa-star checked" style={styles.checked}><StarIcon/></span>
                <span class="fa fa-star checked" style={styles.checked}><StarIcon/></span>
                <span class="fa fa-star checked" style={styles.checked}><StarIcon/></span>
                <span class="fa fa-star  checked" style={styles.checked}><StarIcon/></span>
                <span class="fa fa-star "><StarIcon/></span> 
              </Text>
              <Text> ₹ {item.price}</Text>
            </CardBody>
       
              <Button style={{ marginTop:"-8px", marginBottom:"12px", width:"170px"}}>Add to cart <span style={{marginLeft:"5px"}}><AiOutlineShoppingCart /></span> </Button>
           
      </Card>
        })
      }
 
     
</SimpleGrid>
  </Box>
  
}