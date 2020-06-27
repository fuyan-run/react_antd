import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import routers from './routers';


export default function RouteConfigExample() {
  return (
    <Router>
        todo: router
        {/* <Link to="/Bus">/Bus</Link>
        <Switch>
            {
                routers.map((route, i) => {
                    return (
                        <React.Fragment>
                            {                    
                                (function () {
                                    const children = route.routes;
                                    const str = '';
                                    str += <Route
                                        path={route.path}
                                        render={props => (
                                            <route.component {...props} routes={route.routes} />
                                        )}
                                    />
                                    if (children) {
                                        str += <Route
                                            path={children.path}
                                            render={props => (
                                                <route.component {...props} routes={children} />
                                            )}
                                        />
                                    }
                                    return str;
                                })
                            }
                        </React.Fragment>
                    )
                }
            )}
        </Switch> */}
    </Router>
  );
}