import {Component} from 'react'
import {Popup} from 'reactjs-popup'
import CartContext from '../../context/CartContext'
import './index.css'

class CartSummary extends Component {
  state = {codCheck: false, orderSuccess: false}

  setCod = () => {
    this.setState({codCheck: true})
  }

  confirmOrder = () => {
    this.setState({orderSuccess: true})
  }

  render() {
    return (
      <CartContext.Consumer>
        {value => {
          const {cartList} = value
          const {codCheck, orderSuccess} = this.state
          let total = 0
          cartList.forEach(eachCartItem => {
            total += eachCartItem.price * eachCartItem.quantity
          })

          return (
            <div className="cart-summary-container">
              <h1 className="order-total-value">
                <span className="order-total-label">Order Total:</span> Rs{' '}
                {total}
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
                <div className="payment">
                  <h1 style={{margin: '0px', textAlign: 'center'}}>
                    Cart Summary
                  </h1>
                  <p>Total Items: {cartList.length}</p>
                  <p>Amount Payable: Rs.{total}</p>
                  <fieldset className="payment-options">
                    <legend>
                      <h3 style={{margin: '0px'}}>Payment Options</h3>
                    </legend>
                    <div>
                      <input
                        type="radio"
                        name="payment"
                        id="cardPayment"
                        disabled
                      />
                      <label htmlFor="cardPayment">Card</label>
                    </div>
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
                        onClick={this.setCod}
                      />
                      <label htmlFor="codPayment">Cash on Delivery</label>
                    </div>
                  </fieldset>
                  <div className="confirm-div">
                    <button
                      type="button"
                      disabled={!codCheck}
                      onClick={this.confirmOrder}
                      className="confirm-order-button"
                    >
                      Confirm Order
                    </button>
                  </div>
                  {orderSuccess && (
                    <p className="order-success-message">
                      Your order has been placed successfully
                    </p>
                  )}
                </div>
              </Popup>
            </div>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default CartSummary
