import React from "react";
import {
  Grid,
  Text,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
} from "@chakra-ui/react";

function AddressForm() {
  return (
    <React.Fragment>
      <Text variant="h6" gutterBottom>
        Shipping address
      </Text>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <Grid item>
          <FormControl isRequired>
            <FormLabel htmlFor="firstName">First name</FormLabel>
            <Input
              type="text"
              id="firstName"
              name="firstName"
              autoComplete="fname"
            />
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl isRequired>
            <FormLabel htmlFor="lastName">Last name</FormLabel>
            <Input
              type="text"
              id="lastName"
              name="lastName"
              autoComplete="lname"
            />
          </FormControl>
        </Grid>
        <Grid item colSpan={2}>
          <FormControl isRequired>
            <FormLabel htmlFor="address1">Address line 1</FormLabel>
            <Input
              type="text"
              id="address1"
              name="address1"
              autoComplete="billing address-line1"
            />
          </FormControl>
        </Grid>
        <Grid item colSpan={2}>
          <FormControl>
            <FormLabel htmlFor="address2">Address line 2</FormLabel>
            <Input
              type="text"
              id="address2"
              name="address2"
              autoComplete="billing address-line2"
            />
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl isRequired>
            <FormLabel htmlFor="city">City</FormLabel>
            <Input
              type="text"
              id="city"
              name="city"
              autoComplete="billing address-level2"
            />
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl>
            <FormLabel htmlFor="state">State/Province/Region</FormLabel>
            <Input type="text" id="state" name="state" />
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl isRequired>
            <FormLabel htmlFor="zip">Zip / Postal code</FormLabel>
            <Input
              type="text"
              id="zip"
              name="zip"
              autoComplete="billing postal-code"
            />
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl isRequired>
            <FormLabel htmlFor="country">Country</FormLabel>
            <Input
              type="text"
              id="country"
              name="country"
              autoComplete="billing country"
            />
          </FormControl>
        </Grid>
        <Grid item colSpan={2}>
          <FormControl>
            <Checkbox colorScheme="teal" name="saveAddress" value="yes">
              Use this address for payment details
            </Checkbox>
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default AddressForm;
