import React from 'react';

const SidenavPrimary = ({showMainNav, toggleComponentView, toggleLaptopView, toggleMonitorView, category, history, match}) => {
    return (
        <ul className={`sidenav ${showMainNav ? null : 'hide-nav'}`}>

            <li className="sidenav__item">
                <div className="sidenav__link"  onClick={toggleComponentView}>
                    <span>Component</span>
                    <svg className='sidenav__icon' version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                        {/*<title>dots-three-horizontal</title>*/}
                        <path d="M10.001 7.8c-1.215 0-2.201 0.985-2.201 2.2s0.986 2.2 2.201 2.2c1.215 0 2.199-0.985 2.199-2.2s-0.984-2.2-2.199-2.2zM3.001 7.8c-1.215 0-2.201 0.985-2.201 2.2s0.986 2.2 2.201 2.2c1.215 0 2.199-0.986 2.199-2.2s-0.984-2.2-2.199-2.2zM17.001 7.8c-1.215 0-2.201 0.985-2.201 2.2s0.986 2.2 2.201 2.2c1.215 0 2.199-0.985 2.199-2.2s-0.984-2.2-2.199-2.2z"></path>
                    </svg>
                </div>
            </li>

            <li className="sidenav__item">
                <div className="sidenav__link"  onClick={toggleLaptopView}>
                    <span onClick={() => history.push('/laptop')}>Laptop</span>
                    <svg className='sidenav__icon' version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                        {/*<title>dots-three-horizontal</title>*/}
                        <path d="M10.001 7.8c-1.215 0-2.201 0.985-2.201 2.2s0.986 2.2 2.201 2.2c1.215 0 2.199-0.985 2.199-2.2s-0.984-2.2-2.199-2.2zM3.001 7.8c-1.215 0-2.201 0.985-2.201 2.2s0.986 2.2 2.201 2.2c1.215 0 2.199-0.986 2.199-2.2s-0.984-2.2-2.199-2.2zM17.001 7.8c-1.215 0-2.201 0.985-2.201 2.2s0.986 2.2 2.201 2.2c1.215 0 2.199-0.985 2.199-2.2s-0.984-2.2-2.199-2.2z"></path>
                    </svg>
                </div>
            </li>

            <li className="sidenav__item">
                <div className="sidenav__link"  onClick={toggleMonitorView}>
                    <span  onClick={() => history.push('/monitor')}> Monitor </span>
                    <svg className='sidenav__icon' version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                        {/*<title>dots-three-horizontal</title>*/}
                        <path d="M10.001 7.8c-1.215 0-2.201 0.985-2.201 2.2s0.986 2.2 2.201 2.2c1.215 0 2.199-0.985 2.199-2.2s-0.984-2.2-2.199-2.2zM3.001 7.8c-1.215 0-2.201 0.985-2.201 2.2s0.986 2.2 2.201 2.2c1.215 0 2.199-0.986 2.199-2.2s-0.984-2.2-2.199-2.2zM17.001 7.8c-1.215 0-2.201 0.985-2.201 2.2s0.986 2.2 2.201 2.2c1.215 0 2.199-0.985 2.199-2.2s-0.984-2.2-2.199-2.2z"></path>
                    </svg>
                </div>
            </li>


            {/*{*/}
            {/*    category.map(item => (*/}
            {/*        <li className="sidenav__item">*/}
            {/*            <div className="sidenav__link"  onClick={toggleView}>*/}
            {/*                <span onClick={() => history.push(`${match.url}processor`)}>{item.title}</span>*/}
            {/*                <svg className='sidenav__icon' version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">*/}
            {/*                    /!*<title>dots-three-horizontal</title>*!/*/}
            {/*                    <path d="M10.001 7.8c-1.215 0-2.201 0.985-2.201 2.2s0.986 2.2 2.201 2.2c1.215 0 2.199-0.985 2.199-2.2s-0.984-2.2-2.199-2.2zM3.001 7.8c-1.215 0-2.201 0.985-2.201 2.2s0.986 2.2 2.201 2.2c1.215 0 2.199-0.986 2.199-2.2s-0.984-2.2-2.199-2.2zM17.001 7.8c-1.215 0-2.201 0.985-2.201 2.2s0.986 2.2 2.201 2.2c1.215 0 2.199-0.985 2.199-2.2s-0.984-2.2-2.199-2.2z"></path>*/}
            {/*                </svg>*/}
            {/*            </div>*/}
            {/*        </li>*/}
            {/*    ))*/}
            {/*}*/}

                    {/*<li className="sidenav__item">*/}
                    {/*    <div className="sidenav__link">*/}
                    {/*        <span>Monitor</span>*/}
                    {/*        <svg className='sidenav__icon'>*/}
                    {/*            <use xlinkHref="img/sprite.svg#icon-dots-three-horizontal"/>*/}
                    {/*        </svg>*/}
                    {/*    </div>*/}
                    {/*</li>*/}

                    <li className="sidenav__item">
                        <div className="sidenav__link">
                            <span>Accessories</span>
                            <svg className='sidenav__icon'>
                                <use xlinkHref="img/sprite.svg#icon-dots-three-horizontal"/>
                            </svg>
                        </div>
                    </li>

                    <li className="sidenav__item">
                        <div className="sidenav__link">
                            <span>Camera</span>
                            <svg className='sidenav__icon'>
                                <use xlinkHref="img/sprite.svg#icon-dots-three-horizontal"/>
                            </svg>
                        </div>
                    </li>

                    <li className="sidenav__item">
                        <div className="sidenav__link">
                            <span>IPS</span>
                            <svg className='sidenav__icon'>
                                <use xlinkHref="img/sprite.svg#icon-dots-three-horizontal"/>
                            </svg>
                        </div>
                    </li>

                </ul>
    );
};

export default SidenavPrimary;