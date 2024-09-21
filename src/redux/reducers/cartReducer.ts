// src/redux/reducers/cartReducer.ts
const initialState = {
    cartItems: [] as Array<{ id: number, title: string, img: string, price: string, quantity: number }>,
};

type CartState = typeof initialState;

const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const INCREMENT_COUNT = 'INCREMENT_COUNT';
const DECREMENT_COUNT = 'DECREMENT_COUNT';

export const addToCart = (product: { id: number, title: string, img: string, price: string }) => ({
    type: ADD_TO_CART,
    payload: product,
});

export const removeFromCart = (productId: number) => ({
    type: REMOVE_FROM_CART,
    payload: productId,
});

export const incrementCount = (productId: number) => ({
    type: INCREMENT_COUNT,
    payload: productId,
});

export const decrementCount = (productId: number) => ({
    type: DECREMENT_COUNT,
    payload: productId,
});

const cartReducer = (state: CartState = initialState, action: any): CartState => {
    switch (action.type) {
        case ADD_TO_CART:
            const existingItemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
            if (existingItemIndex !== -1) {
                const updatedCartItems = [...state.cartItems];
                updatedCartItems[existingItemIndex].quantity++;
                return {
                    ...state,
                    cartItems: updatedCartItems,
                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
                };
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload),
            };
        case INCREMENT_COUNT:
            return {
                ...state,
                cartItems: state.cartItems.map(item =>
                    item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
                ),
            };
        case DECREMENT_COUNT:
            return {
                ...state,
                cartItems: state.cartItems.map(item =>
                    item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
                ),
            };
        default:
            return state;
    }
};

export default cartReducer;
