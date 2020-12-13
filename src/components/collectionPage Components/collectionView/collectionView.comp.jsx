import React from 'react';

import CollectionItem from "../collection-item/collectionItem.comp";

import {processorData} from "../../sidebar/sidebar.data";

import './collectionView.styles.scss';

const CollectionView = ({data}) => {
    return (
        <div className='collectionView'>
            {
                processorData.map(item => <CollectionItem key={item.title} data={item}/>)
            }
        </div>
    );
};

export default CollectionView;