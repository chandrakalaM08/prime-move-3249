import React from 'react';

import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  Text,
} from '@chakra-ui/react';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

function Login() {


  return (
    <Container maxW='container.2xl' bg={"linear-gradient(90deg, rgba(248, 249, 241, 1) 0%, rgba(226, 239, 241, 1) 100%)"} marginTop={"-30px"} marginBottom={"-130px"}>

      <Flex justify='center' align='center' h='100vh'>
        <Box>


          <Box  my='5' mx='auto' borderRadius='md' maxW='500px' p='5' d='flex' flexDir='column' style={{backgroundColor:"rgb(239, 239, 225)"}} >
            <Heading as='h2' fontWeight='bold' mb='2' textAlign='center' >
              Sign in
            </Heading>
            <Text color='gray.300' mb='3' textAlign='center'>
              Please enter your login and password!
            </Text>

            <FormControl mb='4'>
              <FormLabel>Email address</FormLabel>
              <Input type='email' size='lg' />
            </FormControl>

            <FormControl mb='4'>
              <FormLabel>Password</FormLabel>
              <Input type='password' size='lg' />
            </FormControl>

            <Checkbox mb='4' colorScheme='teal'>
              Remember password
            </Checkbox>

            <Button colorScheme='yellow' size='lg' mb='2' w='100%'>
              Login
            </Button>
<Divider/>
          

          </Box>

          <Link to="/signup">
  <Button colorScheme='yellow' size='lg' mb='4' w='100%'>
            {/* <Icon as={FacebookIcon} mr='2' /> */}
            
              Don't have an account ? Click to Sign up !
            </Button>
          </Link>
        
        </Box>
      </Flex>
  
    </Container>
  );
}

export default Login;
