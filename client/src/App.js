import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

function App() {
    return (
        <div className="App">
            <Router>
                <Layout>
                    <Switch>
                        <Route exact path={"/"}>
                            <Search />
                        </Route>
                        <Route exact path={"/saved"}>
                            <Saved />
                        </Route>
                    </Switch>
                </Layout>
            </Router>
        </div>
    );
}

export default App;
