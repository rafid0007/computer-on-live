import React from 'react';

import Button from "../../button/button.comp";

import './collectionTitle.styles.scss';

const CollectionTitle = () => {
    return (
        <div className="collection__title">
            <span>Processor</span>
            <div className="collection__categories mt-md">
                <Button>ryzen</Button><Button>intel</Button>
            </div>
        </div>
    );
};

export default CollectionTitle;