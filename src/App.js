import React from "react";
import {Route, Switch} from "react-router";

import Header from "./components/header/header.comp";
import Footer from "./components/footer/footer.comp";
import HomePage from "./pages/home Page/homePage.comp";

import CollectionAndProductRouter from "./pages/collectionAndProductRouter.comp";

const App = () => {

  return (
    <div className="App">
        <Header/>
        <Switch>
            <Route  path='/:pcat/:scat/:tcat' component={CollectionAndProductRouter}/>
            <Route  path='/component/processor' component={CollectionAndProductRouter}/>
            <Route path='/' component={HomePage}/>
        </Switch>
        <Footer/>
    </div>
  );
};

export default App;