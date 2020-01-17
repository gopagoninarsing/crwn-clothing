import React from 'react';
import SHOP_DATA from './shop.data.js'
import CollectionPreview from '../../components/collectionPreview/collectionPreview.component';

class ShopPage extends React.Component {
 constructor(){
    super();
    this.state = {
         collections: SHOP_DATA
    };
 }

 render() {
    const { collections } = this.state;
    return (
        <div className='shop-page'>
            { collections.map(({id, ...otherCollectionItems }) => (
                <CollectionPreview key={id} { ...otherCollectionItems} />
            ))
            }
        </div>
     )
 }

}

export default ShopPage;