import React from 'react';
import { Button, ButtonGroup, IconButton } from '@chakra-ui/react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const QuantityButton = ({ quantity, onIncrement, onDecrement }) => {
  return (
    <ButtonGroup>
      <IconButton
        icon={<AiOutlineMinus />}
        onClick={onDecrement}
        aria-label="Decrease quantity"
      />
      <Button disabled>{quantity}</Button>
      <IconButton
        icon={<AiOutlinePlus />}
        onClick={onIncrement}
        aria-label="Increase quantity"
      />
   
    </ButtonGroup>
  );
};

export default QuantityButton;
