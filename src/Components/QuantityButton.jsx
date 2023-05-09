import React from 'react';
import { Button, ButtonGroup, IconButton } from '@chakra-ui/react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const QuantityButton = ({ quantity, id, incrementQuantity,decrementQuantity,total}) => {
  return (
    <ButtonGroup>
      <IconButton
        icon={<AiOutlineMinus />}
        onClick={decrementQuantity}
        id={id}
        disabled={quantity === 1}
        aria-label="Decrease quantity"
      />
      <Button disabled>{quantity}</Button>
       {quantity >= 4 || total > 200000 ? (
        <IconButton
        id={id}
        icon={<AiOutlinePlus />}
        disabled
        aria-label="Increase quantity"
      />
      ) : (
        <IconButton
        id={id}
        icon={<AiOutlinePlus />}
        onClick={incrementQuantity}
        aria-label="Increase quantity"
      />
      )}
      
   
    </ButtonGroup>
  );
};

export default QuantityButton;
