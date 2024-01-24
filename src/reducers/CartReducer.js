const initialState = {
    cartData: [],
};
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cartData: [...state.cartData, action.payload],
            };
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cartData: state.cartData.filter(
                    (item) => item.id !== action.payload
                ),
            };
        default:
            return state;
    }
};
export { cartReducer, initialState };
