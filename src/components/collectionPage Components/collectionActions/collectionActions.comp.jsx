import React from 'react';

import './collectionActions.styles.scss';

const CollectionActions = () => {
    return (
       <div className="collection__actions">
                <svg className='collection__actions__svg'>
                    <use xlinkHref="img/sprite.svg#icon-grid"/>
                </svg>
                <svg className='collection__actions__svg'>
                    <use xlinkHref="img/sprite.svg#icon-list"/>
                </svg>
                <div className='button__group'>
                    <div className='button__group__title'>
                        sort by
                    </div>
                    <div className='button__group__options'>
                        <span>default</span>
                        <svg>
                            <use xlinkHref="img/sprite.svg#icon-triangle-down"/>
                        </svg>
                    </div>
                </div>
                <div className='button__group'>
                    <div className='button__group__title'>
                        show
                    </div>
                    <div className='button__group__options'>
                        <span>16</span>
                        <svg>
                            <use xlinkHref="img/sprite.svg#icon-triangle-down"/>
                        </svg>
                    </div>
                </div>
            </div>
    );
};

export default CollectionActions;