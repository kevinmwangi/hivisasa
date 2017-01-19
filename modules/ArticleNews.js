import React from "react";

export default React.createClass({

    getInitialState: function () {
        const {nid} = this.props.params;
        const path = `http://api.hivisasa.com/v1/articles/${nid}`;
        return {
            post: [],
            articleURL: path
        }

    },

    upDateState: function (data) {

        this.setState({
            post: data
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

    render: function () {

        console.log('body', this.state.post && this.state.post.content && this.state.post.content.body);
        return (
            <div className="container">
                <div className="well limit-container">
                    <img className="img-responsive"
                         src={'http://static-hivisasa-com.s3-accelerate.amazonaws.com'
                         .concat(this.state.post && this.state.post.content && this.state.post.content.image_uri)}/>
                </div>
                <div key={this.state.post && this.state.post.content && this.state.post.content.nid}
                     className="text-center header-title limit-container">

                    <h1 className="limit-container" dangerouslySetInnerHTML={{__html: this.state.post && this.state.post.content && this.state.post.content.title}}/>

                    <div className="limit-container" dangerouslySetInnerHTML={{__html: this.state.post && this.state.post.content && this.state.post.content.body}}/>

                </div>
            </div>
        )
    }
});
