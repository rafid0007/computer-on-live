import React from 'react';
import {withRouter} from 'react-router-dom';

import './index.styles.scss';

const Index = ({history, match}) => {
    return (
        <div className='index'>

            <svg onClick={() => history.push('/')} className='index__icon' version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                <title>home2</title>
                <path d="M16 1l-16 16 3 3 3-3v13h8v-6h4v6h8v-13l3 3 3-3-16-16zM16 14c-1.105 0-2-0.895-2-2s0.895-2 2-2c1.105 0 2 0.895 2 2s-0.895 2-2 2z"></path>
            </svg>

            <span>&rarr; Home &rarr; Component &rarr; Processor</span>
        </div>
    );
};

export default withRouter(Index);