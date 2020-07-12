import React from "react";
import {
    BrowserRouter as Router,
    // HashRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
import routers from './routers';
import { connect } from 'dva';

class App extends React.Component {
    render () {
        const routesArr = [];
        routers.map(route => {
            Array.isArray(route.routes) && route.routes.map(item => {
                routesArr.push(<Route {...item} />); 
            });
            routesArr.push(<Route {...route} />)
        });
        return (
            <Router>
                {/* { JSON.stringify(products) } */}
                <Link to="/Bus">Bus</Link><br />
                <Link to="/Cart">Cart</Link><br />
                <Link to="/Cart/Bus">/Cart/Bus</Link><br />
                <Link to="/home/Cart/Bus">/home/Cart/Bus</Link><br />
                <Link to="/Dss/Bus">/Dss/Bus</Link><br />
                <Switch>
                    { routesArr }
                </Switch>
            </Router>
        );
    }
}
export default App;
// export default connect(({ products }) => ({
//     products,
// }))(App);