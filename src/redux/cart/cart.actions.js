import { CartActionTypes } from './cart.types';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CARD_HIDDEN,

})

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})

export const clearItemFromCart = item => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CARD,
    payload: item
})

export const removeItemQuantity = item => ({
    type: CartActionTypes.REMOVE_ITEM_QUANTITY,
    payload: item
})