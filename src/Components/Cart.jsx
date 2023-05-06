import React from 'react';

const Cart = () => {
  const cartItems = [
    { id: 1, name: 'Product 1', price: 9.99, quantity: 2 },
    { id: 2, name: 'Product 2', price: 14.99, quantity: 1 },
    { id: 3, name: 'Product 4', price: 19.99, quantity: 4 },
  ];

  const renderCartItems = () => {
    return cartItems.map(item => (
      <div key={item.id} style={styles.cartItem}>
        <div style={styles.itemDetails}>
          <span style={styles.itemName}>{item.name}</span>
          <span style={styles.itemPrice}>${item.price.toFixed(2)}</span>
          <span style={styles.itemQuantity}>Quantity: {item.quantity}</span>
        </div>
        <button style={styles.itemRemove}>Remove</button>
      </div>
    ));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div style={styles.cartPage}>
      <h2 style={styles.cartTitle}>Shopping Cart</h2>
      {cartItems.length > 0 ? (
        <div>
          {renderCartItems()}
          <div style={styles.cartTotal}>
            <span style={styles.totalLabel}>Total:</span>
            <span style={styles.totalPrice}>${calculateTotal().toFixed(2)}</span>
          </div>
          <button style={styles.checkoutButton}>Checkout</button>
        </div>
      ) : (
        <p style={styles.emptyCartText}>Your cart is empty.</p>
      )}
    </div>
  );
};

const styles = {
  cartPage: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    marginTop : "120px"
  },
  cartTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  cartItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  itemDetails: {
    flexGrow: 1,
  },
  itemName: {
    fontSize: '16px',
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: '14px',
    color: '#888',
  },
  itemQuantity: {
    fontSize: '14px',
    color: '#888',
  },
  itemRemove: {
    marginLeft: '10px',
    padding: '5px 10px',
    background: '#ff4f4f',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  cartTotal: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '20px',
  },
  totalLabel: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginRight: '10px',
  },
  totalPrice: {
    fontSize: '16px',
    fontWeight: 'bold',
  },
  checkoutButton: {
    marginTop: '20px',
    padding: '10px 20px',
    background: '#36b14f',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px'
  }
}

export default Cart;