import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollections } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../../components/collectionPreview/collectionPreview.component';

const ShopPage = ({ collections }) => (
    <div className='shop-page'>
        { collections.map(({id, ...otherCollectionItems }) => (
                <CollectionPreview key={id} { ...otherCollectionItems} />
            ))
        }
    </div>
);
 
const mapStateToProps = createStructuredSelector({
    collections: selectCollections
});

export default connect(mapStateToProps)(ShopPage);