import React from "react";


var NewsItem = React.createClass({

    render: function () {
        var articleItems =
            this.props.articles.map(function (article) {
                return (
                    <div className="col-xs-12 col-sm-4" key={article.nid}>
                        <a href={"/articleNews" + article.page_uri} className="articleLink">
                            <div className="card">
                                <div className="card-image">
                                    <img className="img-responsive"
                                         src={'http://static-hivisasa-com.s3-accelerate.amazonaws.com' + article.image_uri}/>
                                </div>

                                <div className="card-content"><span className="card-title">{article.title}</span></div>
                                <div className="card-action"><p>{article.writer.name}</p></div>
                            </div>
                        </a>
                    </div>
                )
            });
        return <article className="row">{articleItems}</article>
    }
});

export default React.createClass({

    getInitialState: function () {
        return {
            articles: []
        }

    },

    upDateState: function (data) {
        var _articles = data['tubonge'];
        this.setState({
            articles: _articles
        });
    },

    getAllNews: function () {
        $.ajax({
            url: 'http://api.hivisasa.com/v1/articles/county/:default/top',
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
        this.getAllNews();
    },
    render() {

        return (
            <div className="container">
                <div className="row">
                    <NewsItem articles={this.state.articles}/>
                </div>
            </div>
        )
    }
})