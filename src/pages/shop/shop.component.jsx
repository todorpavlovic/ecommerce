import React, { Component } from 'react'
import {ShopData} from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends Component {
    state = {
        collections: ShopData
    }


    render() {
        const { collections } = this.state;
        return (
            <div>
                { collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={ id } {...otherCollectionProps}/>
                )) }
            </div>
        )
    }
}

export default ShopPage;