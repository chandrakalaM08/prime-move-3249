import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,Button, Card, CardBody, Image, Stack, Heading, Text
} from '@chakra-ui/react'

import { useRef } from 'react'
function SingleProduct() {
 
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()


  return (
    <>
        <Button variant='solid' colorScheme='yellow' ref={btnRef}  onClick={onOpen} >
       More Info
                  </Button>
      <Drawer onClose={onClose} isOpen={isOpen} size="xl"  placement={'left'}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>
          <DrawerBody>
            <Card maxW='4xl'>
  <CardBody>
    <Image
                  src="https://boodmo.com/media/cache/catalog_part//images/parts/d132084e3cbbfa98b154f5f6ac239e22.webp"

                  w={300}
      alt='Green double couch with wooden legs'
      borderRadius='md'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        PANEL HOOD-ED COATED-Mahindra
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        219500
      </Text>
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