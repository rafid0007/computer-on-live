import React from 'react';

const SidenavProcessor = ({showProcessor, toggleProcessorView, }) => {
    return (
        <ul className={`sidenav sidenav--secondary sidenav--processor ${showProcessor ? 'show-nav': null}`}>
                    <li className="sidenav__index">
                        <div>
                            <span>All</span>
                            <span onClick={toggleProcessorView}> &rarr; Component</span>
                            <span> &rarr; processors</span>
                        </div>
                        <svg className='sidenav__icon icon-undo' onClick={toggleProcessorView}>
                            <use xlinkHref="img/sprite.svg#icon-undo2"/>
                        </svg>
                    </li>
                    <li className="sidenav__item">
                        <div className="sidenav__link">
                            <span>AMD</span>
                            <svg className='sidenav__icon'>
                                <use xlinkHref="img/sprite.svg#icon-dots-three-horizontal"/>
                            </svg>
                        </div>
                    </li>

                    <li className="sidenav__item">
                        <div className="sidenav__link">
                            <span>INTEL</span>
                            <svg className='sidenav__icon'>
                                <use xlinkHref="img/sprite.svg#icon-dots-three-horizontal"/>
                            </svg>
                        </div>
                    </li>

                </ul>
    );
};

export default SidenavProcessor;