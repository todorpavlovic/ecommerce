import { createSelector } from 'reselect';

const selectCollections = state => state.collection;

const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    mens: 5,
    womens: 4
}

export const selectCollectionData = createSelector(
    [selectCollections],
    collection => collection.collections
)

export const selectCollection = collectionUrlParam => 
    createSelector([selectCollectionData], collections =>
        collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
        );
