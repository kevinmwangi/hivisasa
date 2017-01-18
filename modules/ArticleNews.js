import React from "react";
import _ from "lodash";

export default React.createClass({

    getInitialState: function () {
        const {county, location, nid} = this.props.params;
        // const path = `http://api.hivisasa.com/v1/articles/${county}/${location}/${nid}`;
        const path = `http://api.hivisasa.com/v1/articles/${nid}`;
        return {
            post: [],
            articleURL: path
        }

    },

    upDateState: function (data) {
        var arrData = [];

        data.map(function(item) {
            arrData.push(item)
        });
        this.setState({
            post: arrData
        });
    },

    getArticle: function () {
        $.ajax({
            url: this.state.articleURL,
            method: 'GET',
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.upDateState(data);
            }.bind(this),
            error: function (xhr, status, err) {
                //log errors found
                console.error(status, err.toString());
            }.bind(this)
        });
    },

    componentDidMount: function () {
        this.getArticle();
    },

    render: function() {
        const {county, location, nid} = this.props.params;
        console.log('data', JSON.stringify(this.state.post));

        var content = this.state.post.map(function(postContent,i) {
            postContent.map(function(d,i) {
                return {
                    name: d.nid
                };
            })
        });

        return (
            <div className="container">
                {content}
            </div>
        )
    }
});
