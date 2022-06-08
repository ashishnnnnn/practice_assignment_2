import "./CartCard.css";
import { useUserData } from "../../context/UserDataContext";

export const CartCard = ({ product }) => {
  const { user_data, setUser_Data } = useUserData();
  return (
    <div className="cart-card">
      <div className="img-container">
        <img src={product.img_src} />
      </div>
      <div className="info-product">
        <div className="name">{product.name}</div>
        <div className="price">Rs - {product.price}</div>
        <div className="flex">
          <div className="brand">{product.brand}</div>
          <div className="gender">{product.gender}</div>
        </div>
        <div className="cartOperations">
          {product.qnty > 1 && (
            <div
              onClick={() => {
                setUser_Data({ type: "DECREASE_QUANTITY", payload: product });
              }}
              className="smallBtn"
            >
              <i class="fas fa-minus"></i>
            </div>
          )}
          <div className="qnty">{product.qnty}</div>
          <div
            onClick={() => {
              setUser_Data({ type: "INCREASE_QUANTITY", payload: product });
            }}
            className="smallBtn"
          >
            <i class="fas fa-plus"></i>
          </div>
        </div>
        {user_data.saveItem.find((ele) => ele.id === product.id) ? (
          <button className="primary">Saved Item</button>
        ) : (
          <button
            onClick={() => {
              console.log("Chala");
              setUser_Data({ type: "ADD_TO_SAVE", payload: product });
            }}
            className="primary"
          >
            Save for Later
          </button>
        )}
        <button
          onClick={() => {
            setUser_Data({ type: "REMOVE_FROM_CART", payload: product });
          }}
          className="secondary"
        >
          Remove From Cart
        </button>
      </div>
    </div>
  );
};
