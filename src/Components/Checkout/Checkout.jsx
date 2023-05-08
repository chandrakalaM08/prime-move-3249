import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Heading,
  Stack,
  Text,
  Image
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";


const steps = ["Shipping address", "Payment details"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    default:
      throw new Error("Unknown step");
  }
}

function Checkout() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };



  return (
    <Box bg="gray.100" marginBottom={-10}>
     
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        py={8}
        marginTop={120}
      >
        <Container maxW="8xl">
          <Stack spacing={8} p={6} bg="white" rounded="lg" boxShadow="lg">
            {activeStep === steps.length ? (
              <Stack spacing={4} align="center">
                <Heading as="h2" size="lg">
                  Thank you for your order.
                </Heading>
                <Text variant="subtitle1" textAlign="center" fontSize="lg">
                  Your order number is #2001539. We have emailed your order
                  confirmation, and will send you an update when your order has
                  shipped.
                </Text>
                <Image src={"https://www.creativefabrica.com/wp-content/uploads/2021/12/20/Delivery-Truck-Icon-logo-Graphics-21991701-1-1-580x387.jpg"} w={250} />
              </Stack>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Stack
                  direction="row"
                  spacing={4}
                  justifyContent="flex-end"
                  mt={8}
                >
                  {activeStep !== 0 && (
                    <Button
                      leftIcon={<ArrowBackIcon />}
                      onClick={handleBack}
                      variant="outline"
                    >
                      Back
                    </Button>
                  )}
                  <Button
                    colorScheme="blue"
                    onClick={handleNext}
                    disabled={activeStep === steps.length - 1}
                  >
                    {activeStep === steps.length - 1 ? "Place order" : "Next"}
                  </Button>
                </Stack>
              </React.Fragment>
            )}
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

export default Checkout;
