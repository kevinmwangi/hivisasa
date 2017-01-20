import React from "react";
import {Route, IndexRoute} from "react-router";
import App from "./MainNavigation";
import Home from "./Home";
import Category from "./Category";
import ArticleNews from "./ArticleNews";

module.exports = (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/articleNews" component={ArticleNews}>
            <Route path="/articleNews/:county/:location/:nid" component={ArticleNews}/>
        </Route>
        <Route path="/" component={Category}>
            <Route path="/:county/:location/:category/:categoryname" component={Category}/>
        </Route>
    </Route>
);
