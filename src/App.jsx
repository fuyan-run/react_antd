import React from "react";
import { noobGet } from "fetch";
// import {
//     BrowserRouter as Router,
//     // HashRouter,
//     Switch,
//     Route,
//     Link
// } from "react-router-dom";
// import routers from './routers';

class App extends React.Component {

    componentDidMount = async () => {
        try {
            const res = await noobGet(`/api/`)
            console.log(res);

        } catch (error) {
            
        } finally {
        }
    }
    render () {
        // const routesArr = [];
        // routers.map(route => {
        //     Array.isArray(route.routes) && route.routes.map(item => {
        //         routesArr.push(<Route {...item} />); 
        //     });
        //     routesArr.push(<Route {...route} />)
        // });

        return (
            <React.Fragment>
                INDEX
            </React.Fragment>
            // <Router>
            //     {/* { JSON.stringify(products) } */}
            //     <Link to="/Bus">Bus</Link><br />
            //     <Link to="/Cart">Cart</Link><br />
            //     <Link to="/Cart/Bus">/Cart/Bus</Link><br />
            //     <Link to="/home/Cart/Bus">/home/Cart/Bus</Link><br />
            //     <Link to="/Dss/Bus">/Dss/Bus</Link><br />
            //     <Switch>
            //         { routesArr }
            //     </Switch>
            // </Router>
        );
    }
}
export default App;