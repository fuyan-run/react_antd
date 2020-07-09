import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    browserHistory,
    hashHistory,
    Link
} from "react-router-dom";
import routers from './routers';


export default function RouteConfigExample() {
    return (
        <Router history={hashHistory}>
            <Link to="/Bus">Bus</Link><br />
            <Link to="/Cart">Cart</Link><br />
            <Link to="/Cart/Bus">/Cart/Bus</Link><br />
            <Link to="/home/Cart/Bus">/home/Cart/Bus</Link><br />
            <Link to="/Dss/Bus">/Dss/Bus</Link><br />
            <Switch>
                {/* <Route path="/home/Cart/Bus" component={<span>asdasdasd</span>} /> */}
                {
                    routers.map(route => {
                        const arr = [];
                        Array.isArray(route.routes) && route.routes.map(item => {
                            arr.push(<Route {...item} />); 
                        });
                        console.log(arr);
                        return (
                            <>
                                { arr }
                                <Route
                                    {...route}
                                />
                            </>
                        )
                    })
                }
            </Switch>
        </Router>
    );
}