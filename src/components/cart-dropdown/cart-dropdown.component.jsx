import React from 'react'
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss'
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropdown = ({cartItems, history, dispatch}) => {

    return (
        <div className="cart-dropdown" onClick={toggleCartHidden}>
            <div className="cart-items">
                {  cartItems.length ? 
                    (cartItems.map(cartItem => (

                    <CartItem key={cartItem.id} item={cartItem} />
                ))) : (<h5 style={{ margin: '30px auto' }}>Card is empty</h5>) }
                
            </div>
            <CustomButton onClick={() => {
                dispatch(toggleCartHidden())    
                history.push('/checkout-page')}} >GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})

export default withRouter(connect(mapStateToProps,null)(CartDropdown));
