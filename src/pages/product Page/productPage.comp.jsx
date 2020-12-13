import React from 'react';

import Index from "../../components/button/index/index.comp";
import ProductView from "../../components/productPage Components/ProductView/productView.comp";
import ProductDescription from "../../components/productPage Components/productDescription/productDescription.comp";
import {products} from "../../product.data";
import Sidebar from "../../components/sidebar/sidebar.comp";

import './productPage.styles.scss';

const ProductPage = (props) => {
    const {productTitle} = props.match.params;

    return (
        <div className='productPageWrapper'>
            <Sidebar isHidden/>
            <div className='productPage'>
                <Index/>
                {
                   products.filter(product => product.title === productTitle).map(product =>
                           <ProductView key={product.id}
                                        product={product}/>
                       )
                }
                <ProductDescription/>
            </div>
        </div>
    );
};

export default ProductPage;