import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
    return (
        <div className="App">
            <Router>
                <Layout>
                    <Switch>
                        <Route exact path={"/"}>
                            <h1>Search page.</h1>
                            {/*<Search />*/}
                        </Route>
                        <Route exact path={"/saved"}>
                            <h1>Saved books page.</h1>
                            {/*<Search />*/}
                        </Route>
                    </Switch>
                </Layout>
            </Router>
        </div>
    );
}

export default App;
