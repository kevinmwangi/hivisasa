import React from "react";
import NavLink from "./NavLink";


export default React.createClass({
    render() {
        return (
            <div>
                <nav className="navbar navbar-default navbar-Hivisasa navbar-toggleable-md fixed-top">
                    <div className="container-fluid">
                        <div className="navbar-header page-scroll">
                            <button type="button" className="navbar-toggle" data-toggle="collapse"
                                    data-target="#bs-example-navbar-collapse-1">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"/>
                                <span className="icon-bar"/>
                                <span className="icon-bar"/>
                            </button>
                            <a className="navbar-brand" href="/">
                                <img src="/assets/images/logo.png"/>
                            </a>
                        </div>

                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav navbar-left" role="nav">
                                <NavLink to="/" onlyActiveOnIndex>All News</NavLink>
                                <NavLink to="/county/default/category/politics">Politics</NavLink>
                                <NavLink to="/county/default/category/business">Business</NavLink>
                            </ul>

                        </div>
                    </div>
                </nav>

                <div className="container">
                    <div className="row">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
})
