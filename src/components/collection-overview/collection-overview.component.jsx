import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionData } from '../../redux/collection/collection.selectors'
import './collection-overview.styles.scss';

import CollectionPreview from '../collection-preview/collection-preview.component';

const CollectionsOverview = ({collections}) => {
    return (
        <div className="collections-overview">
       { collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={ id } {...otherCollectionProps}/>
    )) }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionData
})

export default connect(mapStateToProps)(CollectionsOverview)
