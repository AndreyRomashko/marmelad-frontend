import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Authorization from "./pages/Authorization/Authorization";
import Products from "./pages/Products/Products";
import Main from "./pages/Main/Main";
import DockMenu from "./components/DockMenu/DockMenu";
import Cosmetics from "./pages/Cosmetics/Cosmetics";
import CosmeticsPage from "./pages/Cosmetics/Page/CosmeticsPage";
import AddNewCosmetics from "./pages/Cosmetics/AddNewCosmetics/AddNewCosmetics";
import Settings from "./pages/Settings/Settings";
import Language from "./pages/Settings/Language/Language";

function App() {
    return (
        <div className="App">
            <Router>
                <div>
                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/auth">
                            <Authorization/>
                        </Route>
                        <Route path="/add-new-cosmetics">
                            <AddNewCosmetics/>
                        </Route>
                        <Route path="/products">
                            <Products/>
                        </Route>
                        <Route path="/cosmetics">
                            <Cosmetics/>
                        </Route>
                        <Route path="/language">
                            <Language/>
                        </Route>
                        <Route path="/page">
                            <CosmeticsPage/>
                        </Route>
                        <Route path="/settings">
                            <Settings/>
                        </Route>
                        <Route path="/">
                            <Main/>
                        </Route>
                    </Switch>
                </div>
                {/*<DockMenu/>*/}
            </Router>
        </div>
    );
}

export default App;
