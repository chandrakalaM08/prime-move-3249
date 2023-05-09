import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,Button, Card, CardBody, Image, Stack, Heading, Text
} from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { useRef } from 'react'
function SingleProduct({id}) {
 
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  
  const [product, setProduct] = useState([]);

 
  // Fetch product data from server on component mount
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        let response = await fetch(`https://sparkling-fabulous-grandiflora.glitch.me/products/${id}`);
        response = await response.json()
        setProduct(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProduct();
  }, [id]);


  return (
    <>
        <Button variant='solid' colorScheme='yellow' ref={btnRef}  onClick={onOpen} >
       More Info
                  </Button>
      <Drawer onClose={onClose} isOpen={isOpen} size="lg"  placement={'left'}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>
          <DrawerBody>
            <Card maxW='4xl'>
  <CardBody>
    <Image
                  src={product.picture}

                  w={200}
      alt={product.name}
      borderRadius='md'
    />
    <Stack mt='6' spacing='3'>
                  <Heading size='md'>{product.name}</Heading>
      <Text>
        {product.company}
                  </Text>
                  <Text>{product.category}</Text>
      <Text color='blue.600' fontSize='2xl'>
       ₹ {product.price}
                  </Text>
                  <Text> 4.8 ⭐⭐⭐⭐⭐</Text>
                  <Text>Introducing our revolutionary automobile product that will transform your driving experience.
                    <br />With cutting-edge technology, sleek design, and unparalleled performance, this product is designed to enhance safety, comfort, and efficiency on the road.
                    <br/>Whether you're a city commuter or an adventure seeker, our automobile product is the ultimate choice for those who demand excellence. Get ready to embark on a journey like never before with our exceptional automotive innovation.</Text>
    </Stack>
  </CardBody>
</Card>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default SingleProduct;