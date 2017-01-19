import React from "react";
import {Route, IndexRoute} from "react-router";
import App from "./App";
import Repos from "./Repos";
import Repo from "./Repo";
import Home from "./Home";
import Politics from "./Politics";
import ArticleNews from "./ArticleNews";

module.exports = (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>

        <Route path="/repos" component={Repos}>
            <Route path="/repos/:userName/:repoName" component={Repo}/>
        </Route>
        <Route path="/articleNews" component={ArticleNews}>
            <Route path="/articleNews/:county/:location/:nid" component={ArticleNews}/>
        </Route>
        <Route path="/" component={Politics}>
            <Route path="/:county/:location/:category/:categoryname" component={Politics}/>
        </Route>
    </Route>
);
