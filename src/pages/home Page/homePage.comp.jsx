import React from 'react';

import Sidebar from "../../components/sidebar/sidebar.comp";
import HomeDirectory from "../../components/homePage Components/homeDirectory/homeDirectory.comp";

import './homePage.styles.scss';

const HomePage = (props) => (
    <div className='homepage'>
        <Sidebar/>
        <HomeDirectory/>
    </div>
);

export default HomePage;