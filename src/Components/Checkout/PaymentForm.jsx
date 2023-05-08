import React from "react";
import {
  Box,
  Checkbox,
  FormControl,
  Grid,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  Text,
} from "@chakra-ui/react";

function PaymentForm() {
  return (
    <React.Fragment>
      <Text variant="h6" >
        Payment method
      </Text>
      <Stack spacing={4}>
        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
          <Box>
            <Text mb={1}>Name on card</Text>
            <Input placeholder="Name on card" required/>
          </Box>
          <Box>
            <Text mb={1}>Card number</Text>
            <Input placeholder="Card number" />
          </Box>
          <Box>
            <Text mb={1}>Expiry date</Text>
            <Input placeholder="Expiry date" />
          </Box>
          <Box>
            <Text mb={1}>CVV</Text>
            <InputGroup>
              <InputLeftAddon children="Last three digits on signature strip" />
              <Input placeholder="CVV" />
            </InputGroup>
          </Box>
        </Grid>
        <FormControl
          control={<Checkbox colorScheme="blue" name="saveCard" />}
          label="Remember credit card details for next time"
        />
      </Stack>
    </React.Fragment>
  );
}

export default PaymentForm;
