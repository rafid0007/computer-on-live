import React from 'react';

import Display from "../../display/display.comp";
import HomeContent from "../homeContent/homeContent.comp";

import './homeDirectory.styles.scss';

const HomeDirectory = (props) => (
    <div className="homeDirectory">
        <Display/>
        <HomeContent/>
    </div>
);

export default HomeDirectory;