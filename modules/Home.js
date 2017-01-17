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
                                    <AllNews/>
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

var AllNews  = React.createClass({

    getInitialState: function() {
        return {
            articles: []
        }
    },
    getAllNews: function() {
        $.ajax( { //allows web pages to be updated asynchronously by exchanging small amounts of data with the server behind the scenes
            url: 'api.hivisasa.com/v1',
            method: 'GET',
            dataType: 'json',
            cache: false,
            success: function( data ) {
                //in case of success, set data to the device list variable
                this.setState( {
                    articles: data
                });
            }.bind( this ),
            error: function( xhr, status, err ) {
                //log errors found
                console.error(status, err.toString() );
            }.bind( this )
        });
    },

    componentWillMount: function() {
        this.getAllNews();
        console.log("data", this.state.articles);
    },

    render(){
        return(
            <div>allNews</div>
        )
    }
});
