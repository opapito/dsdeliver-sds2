import { formatPrice } from "./helpers";

type Props = {
  amount: number;
  totalPrice:number;
}

function OrderSummary({amount, totalPrice} : Props){
  return(
    <div className="order-summary-container">
      <div className="order-summary-content">
        <div>
          <span className="amount-selected-container">
            <strong className="amount-selected"> {amount} </strong>
              SELECTED PRODUCTS
          </span>
          <span className="order-summary-total">
            <strong className="amount-selected">
              {formatPrice(totalPrice)}
             </strong>
            TOTAL
          </span>
        </div>
        <button className="order-summary-make-order">
          PLACE ORDER
        </button>
      </div>
    </div>
  
  )
}
export default OrderSummary;