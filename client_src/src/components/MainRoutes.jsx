import React from "react";
import { Switch, Route } from 'react-router-dom';
import GetData from "./GetData";
import Form from './Form';
import CardDetails from "./CardDetails";

function MainRoutes() {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={Form} />
                <Route exact path='/getdata' component={GetData} />
                <Route exact path='/getdata/:id' component={CardDetails} />
            </Switch>
        </main>
    )
}


export default MainRoutes;