import React from 'react';
import "./Authorization.scss";
import Login from "./Login/Login";
import Registration from "./Registration/Registration";
import {
    BrowserRouter as Router, Switch,
    Route,
    Redirect
} from "react-router-dom";

const Authorization: React.FC = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route
                        exact
                        path="/auth">
                        <Redirect to="/auth/login"/>
                    </Route>
                    <Route path="/auth/login">
                        <Login/>
                    </Route>

                    <Route path="/auth/registration">
                        <Registration/>
                    </Route>
                </Switch>

            </Router>
        </>
    );
};

export default Authorization;
