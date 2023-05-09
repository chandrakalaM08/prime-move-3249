import React, { useState } from 'react';
import { Box, Heading, Text, RadioGroup, Radio, Stack } from '@chakra-ui/react';

const DeliveryOptions = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  return (
    <Box>
      <Heading as="h2"  fontSize="xl" mb={2}>
        Delivery Options
      </Heading>

      <RadioGroup onChange={handleOptionChange} value={selectedOption}>
        <Stack spacing={4}>
          <Box bg="gray.100" p={4} borderRadius="md">
            <Radio value="standard">
              <Text fontSize="lg" fontWeight="bold">
                Standard Delivery
              </Text>
              <Text>Estimated delivery time: Delivery in 3 - 5 Days </Text>
              <Text>
 Our standard delivery option ensures that your order will be delivered within the estimated time frame. It offers a cost-effective solution for customers who are not in a rush to receive their items.
              </Text>
            </Radio>
          </Box>

          <Box bg="gray.100" p={4} borderRadius="md">
            <Radio value="express">
              <Text fontSize="lg" fontWeight="bold">
                Express Delivery
              </Text>
              <Text>Estimated delivery time: Within 1 - 2 Days(Currently only available in Metro cities)</Text>
              <Text>Free on cart value above ₹ 5000</Text>
              <Text>
               Need your order sooner? Choose our express delivery option for faster shipping. We prioritize your package and ensure it reaches you within the estimated delivery time. Please note that express delivery costs may be higher than standard delivery.
              </Text>
            </Radio>
          </Box>

          {/* Add the rest of the delivery options using the same structure */}
        </Stack>
      </RadioGroup>
    </Box>
  );
}

export default DeliveryOptions;
