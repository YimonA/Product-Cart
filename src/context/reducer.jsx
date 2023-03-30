export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payLoad };
    case "ADD_TO_CART":
      const isExisted = state.cart.find(
        (item) => item.id === action.payLoad.id
      );
      if (isExisted) {
        return state;
      } else {
        return { ...state, cart: [...state.cart, action.payLoad] };
      }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payLoad.id)
      };
    case "ADD_TO_DETAIL":
      const isDetailExisted = state.detail.find(
        (item) => item.id === action.payLoad.id
      );
      if (isDetailExisted) {
        return state;
      } else {
        return { ...state, detail: [action.payLoad] };
      }
      case "CLEAR_CART":
        return {...state,cart:state.cart=[]}

    default:
      return state;
  }
};
