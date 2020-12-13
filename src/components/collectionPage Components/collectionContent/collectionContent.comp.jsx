import React from 'react';

import CollectionView from "../collectionView/collectionView.comp";
import CollectionTitle from "../collectionTitle/collectionTitle.comp";
import CollectionActions from "../collectionActions/collectionActions.comp";
import Pagination from "../../pagination/pagination.comp";

import './collectionContent.styles.scss';

const CollectionContent = ({data}) => {
    return (
        <div className='collection'>
            <CollectionTitle/>
            <CollectionActions/>
            <CollectionView data={data}/>
            <Pagination/>
        </div>
    );
};

export default CollectionContent;