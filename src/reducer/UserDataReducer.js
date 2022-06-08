export function UserDataReducer(state, action) {
  const action_type = action.type;
  switch (action_type) {
    case "ADD_TO_CART":
      const prdTOAddToCart = action.payload;
      return {
        ...state,
        cart: [...state.cart, { ...prdTOAddToCart, qnty: 1 }],
      };

    case "REMOVE_FROM_CART":
      const prdTORemoveFromCart = action.payload;
      const cartAfterRemoval = state.cart.filter(
        (ele) => ele.id !== prdTORemoveFromCart.id
      );
      return {
        ...state,
        cart: [...cartAfterRemoval],
      };

    case "ADD_TO_SAVE":
      const prdTOAddToSave = action.payload;
      return {
        ...state,
        saveItem: [...state.saveItem, { ...prdTOAddToSave }],
      };

    case "INCREASE_QUANTITY":
      const newCartAfterIncQnt = state.cart.map((ele) =>
        ele.id === action.payload.id
          ? { ...ele, qnty: ele.qnty + 1 }
          : { ...ele }
      );
      return { ...state, cart: [...newCartAfterIncQnt] };
    case "DECREASE_QUANTITY":
      const newCartAfterDecQnt = state.cart.map((ele) =>
        ele.id === action.payload.id
          ? { ...ele, qnty: ele.qnty - 1 }
          : { ...ele }
      );
      return { ...state, cart: [...newCartAfterDecQnt] };
    default:
      return state;
  }
}
