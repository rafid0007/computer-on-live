import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';

import SidenavSecondary from "./sidenavSecondary";
import SidenavPrimary from "./sidenav--primary.comp";

import {component, processor, ram} from "./sidebar.data";
import {categories} from "../../product.data";

import './sidebar.styles.scss';


const Sidebar = ({isHidden = false, history, match}) => {
    const [showMainNav, setShowMainNav] = useState(true);
    //Component
    const [showComponent, setShowComponent] = useState(false);
    const [showProcessor, setShowProcessor] = useState(false);
    const [showRam, setShowRam] = useState(false);
    const [showMotherboard, setShowMotherboard] = useState(false);
    const [showGraphicsCard, setShowGraphicsCard] = useState(false);
    const [showPowerSupply, setShowPowerSupply] = useState(false);
    //Laptop
    const [showLaptop, setShowLaptop] = useState(false);
    const [showDell, setShowDell] = useState(false);
    const [showHp, setShowHp] = useState(false);
    const [showLenovo, setShowLenovo] = useState(false);
    const [showAusu, setShowAusu] = useState(false);
    const [showAcer, setShowAcer] = useState(false);

    //Monitor
    const [showMonitor, setShowMonitor] = useState(false);

    const toggleComponentView = () => {
        setShowMainNav(!showMainNav);
        setShowComponent(!showComponent);
    };
    const toggleProcessorView = () => {
        setShowComponent(!showComponent);
        setShowProcessor(!showProcessor);
    };
    const toggleRamView = () => {
        setShowComponent(!showComponent);
        setShowRam(!showRam);
    };
    const toggleGraphicsCardView = () => {
        setShowComponent(!showComponent);
        setShowGraphicsCard(!showGraphicsCard);
    };
    const toggleMotherboardView = () => {
        setShowComponent(!showComponent);
        setShowMotherboard(!showMotherboard);
    };
    const togglePowerSupplyView = () => {
        setShowComponent(!showComponent);
        setShowPowerSupply(!showPowerSupply);
    };

    // Laptop
    const toggleLaptopView = () => {
        setShowMainNav(!showMainNav);
        setShowLaptop(!showLaptop);
    };

    // Monitor
    const toggleMonitorView = () => {
        setShowMainNav(!showMainNav);
        setShowMonitor(!showMonitor);
    };

    // const jumpToMainView= () => {
    //   setShowMainNav(true);
    //   setShowComponent(false);
    //   setShowProcessor(false);
    // };

    return (
        <>
            <div className={`sidebar-container ${isHidden?'sidebar-container-hide': null}`}>&nbsp;</div>
            <nav className={`sidebar ${isHidden?'sidebar-hide': null}`}>

                {/******************* MAIN NAV ********************/}
                <SidenavPrimary
                    toggleComponentView={toggleComponentView}
                    toggleLaptopView={toggleLaptopView}
                    toggleMonitorView={toggleMonitorView}
                    showMainNav={showMainNav}
                    history={history}
                    match={match}
                    category={categories}
                />

                {/***************** COMPONENT NAV *****************/}

                <SidenavSecondary showMainNav={showMainNav}
                                  showCurrent={showComponent}
                                  toggleCurrent={toggleComponentView}
                                  toggleNext={toggleProcessorView}
                                  category={categories[0]}
                                  showLaptop={showLaptop}
                                  showMonitor={showMonitor}
                                  showProcessor={showProcessor}
                                  history={history}
                                  match={match}/>

                {/***************** COMPONENT > PROCESSOR *****************/}

                <SidenavSecondary category={categories[0]['items'][0]}
                                  showMainNav={true}
                                  showCurrent={showProcessor}
                                  toggleCurrent={toggleProcessorView}
                                  history={history}
                                  match={match}
                />

                {/***************** COMPONENT > RAM *****************/}

                <SidenavSecondary category={categories[0]['items'][1]}
                                  showMainNav={true}
                                  showCurrent={showRam}
                                  toggleCurrent={toggleRamView}
                                  history={history}
                                  match={match}
                />

                {/***************** COMPONENT > MOTHERBOARD *****************/}
                <SidenavSecondary category={categories[0]['items'][2]}
                                  showMainNav={true}
                                  showCurrent={showRam}
                                  toggleCurrent={toggleRamView}
                                  history={history}
                                  match={match}
                />

                 {/***************** COMPONENT > GRAPHICS CARD *****************/}
                <SidenavSecondary category={categories[0]['items'][3]}
                                  showMainNav={true}
                                  showCurrent={showRam}
                                  toggleCurrent={toggleRamView}
                                  history={history}
                                  match={match}
                />

                 {/***************** COMPONENT > POWER SUPPLY *****************/}
                <SidenavSecondary category={categories[0]['items'][4]}
                                  showMainNav={true}
                                  showCurrent={showRam}
                                  toggleCurrent={toggleRamView}
                                  history={history}
                                  match={match}
                />

                {/***************** LAPTOP NAV *****************/}

                <SidenavSecondary showMainNav={showMainNav}
                                  showCurrent={showLaptop}
                                  toggleCurrent={toggleLaptopView}
                                  // toggleNext={}
                                  category={categories[1]}
                                  showComponent={showComponent}
                                  showProcessor={showProcessor}
                                  history={history}
                                  match={match}
                />


                {/***************** MONITOR NAV *****************/}

                <SidenavSecondary showMainNav={showMainNav}
                                  showCurrent={showMonitor}
                                  toggleCurrent={toggleMonitorView}
                                  // toggleNext={toggleProcessorView}
                                  category={categories[2]}
                                  showComponent={showComponent}
                                  showProcessor={showProcessor}
                                  history={history}
                                  match={match}
                />
            </nav>
        </>
    )
};

export default withRouter(Sidebar);