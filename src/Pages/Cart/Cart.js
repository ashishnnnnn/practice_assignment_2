import "./Cart.css";

import { CartCard } from "../../Components";
import { useUserData } from "../../context/UserDataContext";

export const Cart = () => {
  const { user_data, setUser_Data } = useUserData();
  const cart = user_data.cart;
  const noOfItems = user_data.cart.reduce((accum, curr) => {
    return (accum += Number(curr.qnty));
  }, 0);
  const price = user_data.cart.reduce((accum, curr) => {
    return (accum += Number(curr.price) * Number(curr.qnty));
  }, 0);
  return (
    <div className="cartPage">
      <div className="cart-grid-container">
        {cart.length === 0 ? (
          <div>Your Cart Is Empty</div>
        ) : (
          cart.map((ele) => <CartCard key={ele.id} product={ele} />)
        )}
      </div>
      {cart.length !== 0 && (
        <div className="priceDetails">
          <div>Price Details</div>
          <div class="flex bold">
            <div>Price {noOfItems} Items</div>
            <div>{price}</div>
          </div>
          <div class="flex ">
            <div>Discount</div>
            <div>{100}</div>
          </div>
          <div class="flex ">
            <div>Shipping Charge</div>
            <div>{50}</div>
          </div>
          <div class="flex bold">
            <div>Total Price</div>
            <div>{price - 100 + 50}</div>
          </div>
        </div>
      )}
    </div>
  );
};
