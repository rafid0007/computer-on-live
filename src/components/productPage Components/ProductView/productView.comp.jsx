import React from 'react';

import PriceButton from "../../price button/priceButton.comp";

import './ProductView.styles.scss';

const ProductView = ({product}) => {
    const {imageUrl, title,status, id, brand, model, warranty, price} = product;
    return (
        <div className='productView'>
            <div className="productView__image"><img className='productImage' src={imageUrl} alt="product"/></div>

            <div className='productView__desc-container'>
                <div className="productView__desc">
                    <h2 className='productView__title mb-lg'>{title.split('-').join((' '))}</h2>
                    <div className="productView__desc-box mb-lg">
                        <span>Status</span><span>{status? 'AVAILABLE': 'UNAVAILABLE'}</span>
                        <span>Product Code</span><span>{id}</span>
                        <span>Brand</span><span>{brand}</span>
                        <span>Model</span><span>{model}</span>
                        <span>Warranty</span><span>{`${warranty} YEARS`}</span>
                    </div>

                    <a href='#' className="productView__detail-link mb-lg">More Information &rarr;</a>
                    <div className='button__container'>
                        <PriceButton>
                            {price}
                        </PriceButton>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default ProductView;