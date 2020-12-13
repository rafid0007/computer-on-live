import React from 'react';

import Index from "../../components/button/index/index.comp";
import Filter from "../../components/collectionPage Components/filter/filter.comp";
import CollectionContent from "../../components/collectionPage Components/collectionContent/collectionContent.comp";
import Sidebar from "../../components/sidebar/sidebar.comp";

import './collectionPage.styles.scss';

const CollectionPage = ({data}) => {
    return (
        <div className='collectionPageWrapper'>
            <Sidebar isHidden/>
            <div className='collectionPage'>
                <Index/>
                <Filter/>
                <CollectionContent data={data}/>
            </div>
        </div>
    );
};

export default CollectionPage;