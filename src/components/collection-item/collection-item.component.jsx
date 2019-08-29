import React from 'react'
import './collection-item.styles.scss'
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

const CollectionItem = ({item, addItem}) => {
    const { name, imageUrl, price } = item;
    console.log(addItem);
    return (
        <div className="collection-item">
            <img src={imageUrl} alt={name}/>
            <CustomButton onClick={ () => addItem(item) } >ADD TO CART</CustomButton>

            <div className="collection-item-text">
                <h1>{name}</h1>
                <p>{price}$</p>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);
