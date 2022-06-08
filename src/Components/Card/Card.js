import "./Card.css";
import { useUserData } from "../../context/UserDataContext";
import { useNavigate } from "react-router-dom";

export const Card = ({ product }) => {
  let navigate = useNavigate();
  const { user_data, setUser_Data } = useUserData();
  return (
    <div className="card">
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
        {user_data.cart.find((ele) => ele.id === product.id) ? (
          <button
            onClick={() => {
              navigate("/cart");
            }}
          >
            Go To Cart
          </button>
        ) : (
          <button
            onClick={() => {
              setUser_Data({ type: "ADD_TO_CART", payload: product });
            }}
          >
            Add To Cart
          </button>
        )}
      </div>
    </div>
  );
};
