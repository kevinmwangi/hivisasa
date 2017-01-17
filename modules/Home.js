import React from "react";
import NavLink from "./NavLink";


var NewsItem = React.createClass({

    render(){
        console.log("articles", this.props.articles[0]);
        return(
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
        )
    }
});

export default React.createClass({
    getInitialState: function() {
        return {
            articles: []
        }

    },

    upDateState:function (data) {
        var _articles = data['tubonge'];
        this.setState({
            articles: _articles
        });
    },

    getAllNews: function() {
        $.ajax( {
            url: 'http://api.hivisasa.com/v1/articles/county/:default/top',
            method: 'GET',
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: false,
            success: function( data ) {
                this.upDateState(data);

            }.bind( this ),
            error: function( xhr, status, err ) {
                //log errors found
                console.error(status, err.toString() );
            }.bind( this )
        });
    },

    componentDidMount: function() {
        this.getAllNews();
    },
    render() {
        return (
            <div className="container">
                <div className="row">
                    <NewsItem allNews={this.state.articles}/>
                </div>
            </div>
        )
    }
})