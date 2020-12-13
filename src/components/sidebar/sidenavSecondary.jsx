import React from 'react';

const SidenavSecondary = ({category, showCurrent, showMainNav, toggleCurrent, toggleNext, showComponent, showLaptop, showMonitor, showProcessor,history, push}) => {
    return (

        //Temporary Fix in line 10*****************************************
        <ul className=
                {`sidenav sidenav--secondary  
                ${showCurrent ? 'show-nav': null}
                ${showProcessor? 'hide-nav': null}`}
        >

            <li className="sidenav__index">
                <div>
                    <span onClick={toggleCurrent}>All</span>
                    {category.index.map(item => (<span key={item}> &rarr; {item}</span>))}
                </div>
                <svg className='sidenav__icon icon-undo' onClick={toggleCurrent} version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                    {/*<title>undo2</title>*/}
                    <path d="M23.808 32c3.554-6.439 4.153-16.26-9.808-15.932v7.932l-12-12 12-12v7.762c16.718-0.436 18.58 14.757 9.808 24.238z"></path>
                </svg>
            </li>

            {
                category.items.map(item => (

                <li key={item.title} className="sidenav__item">
                    <div className="sidenav__link"  onClick={() => history.push(`${item.route}`)}>
                        <span>{item.title}</span>
                        <svg className='sidenav__icon' version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                            {/*<title>dots-three-horizontal</title>*/}
                            <path d="M10.001 7.8c-1.215 0-2.201 0.985-2.201 2.2s0.986 2.2 2.201 2.2c1.215 0 2.199-0.985 2.199-2.2s-0.984-2.2-2.199-2.2zM3.001 7.8c-1.215 0-2.201 0.985-2.201 2.2s0.986 2.2 2.201 2.2c1.215 0 2.199-0.986 2.199-2.2s-0.984-2.2-2.199-2.2zM17.001 7.8c-1.215 0-2.201 0.985-2.201 2.2s0.986 2.2 2.201 2.2c1.215 0 2.199-0.985 2.199-2.2s-0.984-2.2-2.199-2.2z"></path>
                        </svg>
                    </div>
                </li>

                ))
            }

            {/*<li className="sidenav__index">*/}
            {/*    <div>*/}
            {/*        <span onClick={toggleComponentView}>All</span>*/}
            {/*        <span> &rarr; Component</span>*/}
            {/*    </div>*/}
            {/*    <svg className='sidenav__icon icon-undo' onClick={toggleComponentView}>*/}
            {/*        <use xlinkHref="img/sprite.svg#icon-undo2"/>*/}
            {/*    </svg>*/}
            {/*</li>*/}

            {/*<li className="sidenav__item">*/}
            {/*    <div className="sidenav__link" onClick={toggleProcessorView}>*/}
            {/*        <span>processor</span>*/}
            {/*        <svg className='sidenav__icon'>*/}
            {/*            <use xlinkHref="img/sprite.svg#icon-dots-three-horizontal"/>*/}
            {/*        </svg>*/}
            {/*    </div>*/}
            {/*</li>*/}

            {/*<li className="sidenav__item">*/}
            {/*    <div className="sidenav__link">*/}
            {/*        <span>ram</span>*/}
            {/*        <svg className='sidenav__icon'>*/}
            {/*            <use xlinkHref="img/sprite.svg#icon-dots-three-horizontal"/>*/}
            {/*        </svg>*/}
            {/*    </div>*/}
            {/*</li>*/}

            {/*<li className="sidenav__item">*/}
            {/*    <div className="sidenav__link">*/}
            {/*        <span>motherboard</span>*/}
            {/*        <svg className='sidenav__icon'>*/}
            {/*            <use xlinkHref="img/sprite.svg#icon-dots-three-horizontal"/>*/}
            {/*        </svg>*/}
            {/*    </div>*/}
            {/*</li>*/}

            {/*<li className="sidenav__item">*/}
            {/*    <div className="sidenav__link">*/}
            {/*        <span>graphics card</span>*/}
            {/*        <svg className='sidenav__icon'>*/}
            {/*            <use xlinkHref="img/sprite.svg#icon-dots-three-horizontal"/>*/}
            {/*        </svg>*/}
            {/*    </div>*/}
            {/*</li>*/}

        </ul>
    );
};

export default SidenavSecondary;