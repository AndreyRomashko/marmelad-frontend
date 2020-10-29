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
                        <Route path="/products">
                            <Products/>
                        </Route>
                        <Route path="/cosmetics">
                            <Cosmetics/>
                        </Route>
                        <Route path="/page">
                            <CosmeticsPage/>
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
