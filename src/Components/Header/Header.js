import "./Header.css";
import { useUserData } from "../../context/UserDataContext";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  let navigate = useNavigate();
  const { user_data } = useUserData();
  return (
    <div className="header">
      <div
        onClick={() => {
          navigate("/");
        }}
        className="header-text"
      >
        My Myntra
      </div>
      <div className="options">
        <i class="fas fa-bookmark">
          <div>{user_data.saveItem.length}</div>
        </i>

        <i
          onClick={() => {
            navigate("/cart");
          }}
          className="fas fa-cart-plus"
        >
          <div>{user_data.cart.length}</div>
        </i>
      </div>
    </div>
  );
};
