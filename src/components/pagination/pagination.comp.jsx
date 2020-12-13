import React from 'react';

import './pagination.styles.scss';

const Pagination = () => {
    return (
        <div className="pagination">
            <div className="pages">
                <ul className="pages__nav">
                    <li className="pages__item">prev</li>
                    <li className="pages__item active">1</li>
                    <li className="pages__item">2</li>
                    <li className="pages__item">3</li>
                    <li className="pages__item">4</li>
                    <li className="pages__item">5</li>
                    <li className="pages__item">next</li>
                </ul>
            </div>
            <div className="showing">
                showing 1 to 21 of 150 items (7 pages)
            </div>
        </div>
    );
};

export default Pagination;