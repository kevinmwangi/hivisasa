import React from "react";
import NavLink from "./NavLink";

export default React.createClass({
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-6 col-md-4">
                        <div className="card">
                            <div className="card-image">
                                <img className="img-responsive"
                                     src="http://material-design.storage.googleapis.com/publish/v_2/material_ext_publish/0Bx4BSt6jniD7TDlCYzRROE84YWM/materialdesign_introduction.png"/>
                            </div>

                            <div className="card-content">
                                <ul className="card-title">
                                    <NavLink to="/articleNews/123">Material Cards</NavLink>
                                </ul>
                            </div>

                            <div className="card-action">
                                <a href="#" target="new_blank">Link</a>
                                <a href="#" target="new_blank">Link</a>
                                <a href="#" target="new_blank">Link</a>
                                <a href="#" target="new_blank">Link</a>
                                <a href="#" target="new_blank">Link</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
})
