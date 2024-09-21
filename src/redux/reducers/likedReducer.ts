// src/redux/reducers/likedReducer.ts
const initialState = {
    likedProducts: [] as Array<{ id: number, title: string, img: string, price: string }>,
};

type LikedState = typeof initialState;

const ADD_TO_LIKED = 'ADD_TO_LIKED';
const REMOVE_FROM_LIKED = 'REMOVE_FROM_LIKED';

export const addToLiked = (product: { id: number, title: string, img: string, price: string }) => ({
    type: ADD_TO_LIKED,
    payload: product,
});

export const removeFromLiked = (productId: number) => ({
    type: REMOVE_FROM_LIKED,
    payload: productId,
});

const likedReducer = (state: LikedState = initialState, action: any): LikedState => {
    switch (action.type) {
        case ADD_TO_LIKED:
            return {
                ...state,
                likedProducts: [...state.likedProducts, action.payload],
            };
        case REMOVE_FROM_LIKED:
            return {
                ...state,
                likedProducts: state.likedProducts.filter(product => product.id !== action.payload),
            };
        default:
            return state;
    }
};

export default likedReducer;
