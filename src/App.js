import React, {Component} from 'react';
import {HashRouter as Router,Switch,Route} from "react-router-dom";
import Foot from "./components/comment/foot/index"
import routes from "./router/index"


class App extends Component {
    render() {
        return (
            <Router basename={"reactpdd"}>
                <div className="App" style={{overflow:"hidden"}}>
                    <Switch>
                        {
                            routes.map((item,index) => {
                                if(item.exact){
                                    return (
                                        <Route
                                            key={index}
                                            path={item.path}
                                            exact
                                            component={item.component}
                                        />
                                    )
                                }else{
                                    return (
                                        <Route
                                            key={index}
                                            path={item.path}
                                            component={item.component}
                                        />
                                    )
                                }
                            })
                        }
                    </Switch>
                    <Foot/>
                </div>
            </Router>
        );
    }
}

export default App;
