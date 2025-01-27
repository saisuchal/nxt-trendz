import {Popup} from 'reactjs-popup'
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, codCheck, orderSuccess, confirmOrder, setCod} = value
      let total = 0
      cartList.forEach(eachCartItem => {
        total += eachCartItem.price * eachCartItem.quantity
      })

      return (
        <div className="cart-summary-container">
          <h1 className="order-total-value">
            <span className="order-total-label">Order Total:</span> Rs {total}
            /-
          </h1>
          <p className="total-items">{cartList.length} Items in cart</p>
          <Popup
            modal
            trigger={
              <button type="button" className="checkout-button">
                Checkout
              </button>
            }
          >
            {orderSuccess ? (
              <div className="payment">
                <p style={{color: 'green'}}>
                  Your order has been placed successfully
                </p>
              </div>
            ) : (
              <div className="payment">
                <h1>Cart Summary</h1>
                <p>Total Items (In Qty.): {cartList.length}</p>
                <p>Amount Payable: Rs.{total}</p>
                <fieldset className="payment-options">
                  <legend>Payment Options</legend>
                  <div>
                    <input
                      type="radio"
                      name="payment"
                      id="netBankingPayment"
                      disabled
                    />
                    <label htmlFor="netBankingPayment">Net Banking</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="payment"
                      id="upiPayment"
                      disabled
                    />
                    <label htmlFor="upiPayment">UPI</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="payment"
                      id="walletPayment"
                      disabled
                    />
                    <label htmlFor="walletPayment">Wallet</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="payment"
                      id="codPayment"
                      onClick={setCod}
                    />
                    <label htmlFor="codPayment">Cash on Delivery</label>
                  </div>
                </fieldset>
                <button
                  type="button"
                  disabled={!codCheck}
                  onClick={confirmOrder}
                >
                  Confirm Order
                </button>
              </div>
            )}
          </Popup>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
