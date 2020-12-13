import React from 'react';
import {Route} from 'react-router-dom';

import {component} from "../components/sidebar/sidebar.data";
import {categories} from "../product.data";
import CollectionPage from "./collection Page/collectionPage.comp";
import ProductPage from "./product Page/productPage.comp";

const CollectionAndProductRouter = ({match}) => {
    // const {pcat, scat, tcat} = match.params;
    // console.log(match);
    // const pdata = categories.find(item => item.title === pcat)['items'];
    // console.log('pdata',pdata);
    // // const sdata = pdata.find(item => item.title === pcat)['items'];
    //
    // // const tdata = sdata.find(item => item.title === tcat)['items'];


    //categories[0]['items'][0]['items'][0]['items']
    return (
        <>
            <Route exact path={`${match.url}`} render={(props) => <CollectionPage data={null} />}/>
            <Route exact path={`${match.url}/:productTitle`} component={ProductPage}/>
        </>
    );
};

export default CollectionAndProductRouter;