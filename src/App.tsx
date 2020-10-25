import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Authorization from "./pages/Authorization/Authorization";
import Products from "./pages/Products/Products";
import Main from "./pages/Main/Main";

function App() {
    return (
        <div className="App">
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/products">Products</Link>
                            </li>
                            <li>
                                <Link to="/auth">Sign up | Login </Link>
                            </li>
                        </ul>
                    </nav>

                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/auth">
                            <Authorization/>
                        </Route>
                        <Route path="/products">
                            <Products/>
                        </Route>
                        <Route path="/">
                            <Main/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
