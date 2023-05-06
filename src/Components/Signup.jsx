import React from 'react';
import style from "../StyleSheet/Signup.module.css"
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Icon,
  Heading,
  Text,
} from '@chakra-ui/react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import Navbar from './Navbar';
import Footer from './Footer';

function Signup() {
  return (
    <>
      <Navbar/>
    <Container maxW="container.2xl" p={4} className={style.backgroundRadialGradient} overflow="hidden" color="black" marginTop={"30px"} marginBottom={"-50px"}>

      <Flex  justifyContent="space-around">

        <Flex
          flexDir="column"
          justifyContent="center"
          textAlign={['center', 'start']}
          px={3}
          my={5}
        >

          <Heading as="h1" fontSize="5xl" fontWeight="bold" letterSpacing="tight"  marginTop={"175px"}>
            Why Customers love RoadMaster <br />
            <Text  fontSize="4xl" color="black">for their vehicles</Text>
          </Heading>
<Box width={"2xl"}>
          <Text color="black" px={3} my={5} fontSize="md">
            At RoadMaster Auto Parts, we understand that your vehicle is more than just a mode of transportation - it's a crucial part of your life. That's why we're dedicated to providing high-quality, reliable, and durable parts that keep you on the road and on the move.

With years of experience in the automotive industry, we've built a reputation for excellence and a deep understanding of what drivers need to keep their vehicles running smoothly. Our extensive selection of parts covers everything from brakes and suspension to engines and transmissions, ensuring that we have the parts you need to get back on the road fast.
              <br />
              <br/>
Whether you're a professional mechanic or a DIY enthusiast, RoadMaster Auto Parts is your go-to source for high-quality automotive parts and accessories. We're passionate about what we do, and we're committed to providing the best possible service and support to help you keep your vehicle running smoothly for years to come.
          </Text>
</Box>
        </Flex>

        <Flex
          md="6"
          pos="relative"
        >

          <Box
            className={style.radius1}
            pos="absolute"
            borderRadius="50%"
            boxShadow="5px 5px 10px rgba(0, 0, 0, 0.2)"
          ></Box>
          <Box
            className={style.radiusTwo}
            pos="absolute"
            boxShadow="5px 5px 10px rgba(0, 0, 0, 0.2)"
          ></Box>

          <Box my={5} className={style.glass }p={5} style={{height :"fit-content"}} borderBottomLeftRadius={"10px"} borderTopRightRadius={"10px"} marginTop={"100px"}>
            
            <Flex >
              <FormControl flex="1" mr={2}>
                <FormLabel>First name</FormLabel>
                <Input type="text" />
              </FormControl>

              <FormControl flex="1" ml={2}>
                <FormLabel>Last name</FormLabel>
                <Input type="text" />
              </FormControl>
            </Flex>

            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input type="email" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>

            <Flex justify="center" mt={4}>
              <Checkbox value="" id="flexCheckDefault" color={'blue.800'}>
                Subscribe to our newsletter
              </Checkbox>
            </Flex>

                 <Button colorScheme='yellow' size='lg' mb='2' w='100%'>Sign up</Button>

            <Flex justify="center" mt={4}>
              <Text>or sign up with:</Text>

              <Button
                as="a"
                color="blue.500"
                mx={3}
                variant="unstyled"
              >
                <Icon as={FaFacebookF} boxSize={4} />
              </Button>
              <Button
                as="a"
                color="blue.500"
                mx={3}
                variant="unstyled"
              >
                <Icon as={FaTwitter} boxSize={4} />
              </Button>
              <Button
                as="a"
                color="blue.500"
                mx={3}
                variant="unstyled"
              >
                <Icon as={FaInstagram} boxSize={4} />
              </Button>
            </Flex>

          </Box>

        </Flex>

      </Flex>

      </Container>
      <Footer/>
      </>
  );
}

export default Signup;
