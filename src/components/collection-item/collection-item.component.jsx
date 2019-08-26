import React from 'react'
import './collection-item.styles.scss'

const CollectionItem = ({name, imageUrl, price}) => {
    return (
        <div className="collection-item">
            <img src={imageUrl} alt={name}/>
            <div className="collection-item-text">
                <h1>{name}</h1>
                <p>{price}$</p>
            </div>
        </div>
    )
}

export default CollectionItem;
