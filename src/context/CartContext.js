import React from 'react'

const CartContext = React.createContext({
  cartList: [],
  removeAllCartItems: () => {},
  addCartItem: () => {},
  removeCartItem: () => {},
  incrementCartItemQuantity: () => {},
  decrementCartItemQuantity: () => {},
  codCheck: '',
  orderSuccess: '',
  setCod: () => {},
  confirmOrder: () => {},
})

export default CartContext
