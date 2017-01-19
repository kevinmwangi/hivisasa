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



        this.setState({
            post: data
            // {"content":{"rank":0,"score":0.0,"mongo_id":"587f5ab1b862ec2c4f8b46eb","nid":191191,"writer":{"uid":6509,"name":"Joy Garland","profile_uri":"/reporter/6509"},"title":"What are chances that Onyango Oloo will find room in ODM team?","body":"<p><br></p>","category":"tubonge","county":"nyamira","location":"nyamira","page_uri":"/nyamira/tubonge/191191","image_uri":"/u/a83a097f5bce4c72953dd0672adbd878-large.jpg","post_date":1484752097000,"publish_date":1484752453000,"facebook_share":4242,"page_view":42,"published":true},"author":{"id":6509,"name":"Joy Garland","member_since":"Jul 2015","rate":1,"count_story":180},"top_articles":[{"rank":0,"score":0.0,"nid":191191,"writer":{"uid":6509,"name":"Joy Garland","profile_uri":"/reporter/6509"},"title":"What are chances that Onyango Oloo will find room in ODM team?","page_uri":"/nyamira/tubonge/191191","image_uri":"/u/a83a097f5bce4c72953dd0672adbd878-large.jpg","publish_date":1484752453000,"facebook_share":4242,"page_view":42},{"rank":0,"score":0.0,"nid":191085,"writer":{"uid":6509,"name":"Joy Garland","profile_uri":"/reporter/6509"},"title":"What's your take on the new IEBC team. Will it live up to Kenyans' expectations?","page_uri":"/nyamira/tubonge/191085","image_uri":"/u/92a7abd72d99404897b25eb00054ea19-large.jpg","publish_date":1484728964000,"facebook_share":4242,"page_view":42},{"rank":0,"score":0.0,"nid":190930,"writer":{"uid":6509,"name":"Joy Garland","profile_uri":"/reporter/6509"},"title":"Who between Uhuru & Raila would you vote for if elections were held today?","page_uri":"/nyamira/tubonge/190930","image_uri":"/u/f5939b5e4d1843eb8cf30c4d33f871a5-large.jpg","publish_date":1484661688000,"facebook_share":4242,"page_view":42},{"rank":0,"score":0.0,"nid":190519,"writer":{"uid":14628,"name":"Mimi Tasha","profile_uri":"/reporter/14628"},"title":"Tubonge....","page_uri":"/nyamira/tubonge/190519","image_uri":"/u/77437f408c75409cac1e91997196b848-large.jpg","publish_date":1484583278000,"facebook_share":4242,"page_view":42},{"rank":0,"score":0.0,"nid":190669,"writer":{"uid":6509,"name":"Joy Garland","profile_uri":"/reporter/6509"},"title":"Will calls by Cord, Jubilee for people to register as voters bear fruit?","page_uri":"/nyamira/tubonge/190669","image_uri":"/u/c5338f5f9b344ce0ad4543d8cba90a96-large.jpg","publish_date":1484569670000,"facebook_share":4242,"page_view":42},{"rank":0,"score":0.0,"nid":190297,"writer":{"uid":1232,"name":"Abuga Makori Jnr","profile_uri":"/reporter/1232"},"title":"Do you support Duale's claims that NASA died at Bomas?","page_uri":"/nyamira/tubonge/190297","image_uri":"/u/05a277419d1241189a2a14d4d28ba4cc-large.jpg","publish_date":1484315134000,"facebook_share":4242,"page_view":42},{"rank":0,"score":0.0,"nid":190292,"writer":{"uid":1232,"name":"Abuga Makori Jnr","profile_uri":"/reporter/1232"},"title":"Do you support Duale's remarks that NASA died at Bomas?","page_uri":"/nyamira/tubonge/190292","image_uri":"/u/02f674e4369f4558be1b109c56aa4e83-large.jpg","publish_date":1484314733000,"facebook_share":4242,"page_view":42},{"rank":0,"score":0.0,"nid":190079,"writer":{"uid":1232,"name":"Abuga Makori Jnr","profile_uri":"/reporter/1232"},"title":"Do you support Joho's decision to send security guards packing?","page_uri":"/nyamira/tubonge/190079","image_uri":"/u/5cd9111611034ca0a8cbb9750e2900ed-large.jpg","publish_date":1484231688000,"facebook_share":4242,"page_view":42},{"rank":0,"score":0.0,"nid":190021,"writer":{"uid":6509,"name":"Joy Garland","profile_uri":"/reporter/6509"},"title":"Do you think the Opposition will remain united until the elections?","page_uri":"/nyamira/tubonge/190021","image_uri":"/u/7aced5c2c9b446a1b6e5ef7fed100df9-large.jpg","publish_date":1484220693000,"facebook_share":4242,"page_view":42},{"rank":0,"score":0.0,"nid":189626,"writer":{"uid":1232,"name":"Abuga Makori Jnr","profile_uri":"/reporter/1232"},"title":"Is Musalia Mudavadi a Jubilee mole?","page_uri":"/nyamira/tubonge/189626","image_uri":"/u/b8903cced83c4c6598b32fb0b2ab5072-large.jpg","publish_date":1484057473000,"facebook_share":4242,"page_view":42}],"related_articles":[{"rank":0,"score":0.0,"nid":186629,"title":"Do you think President Uhuru Kenyatta will concede defeat should he lose 2017 polls?","page_uri":"/kisii/tubonge/186629?from=related","image_uri":"/u/02c68d73d9fe47ec9a6d5519a04a70a8-large.jpg","facebook_share":4242,"page_view":42},{"rank":0,"score":0.0,"nid":189454,"title":"Between Nakuru and Eldoret, which qualifies to be a city?","page_uri":"/nakuru/tubonge/189454?from=related","image_uri":"/u/4fefb5e34c6f45c88b3ac6fcd7aec8a1-large.jpg","facebook_share":4242,"page_view":42},{"rank":0,"score":0.0,"nid":190323,"title":"Ni Furahi day, what's your plan for the weekend?","page_uri":"/machakos/tubonge/190323?from=related","image_uri":"/u/563d036265d643d78718427d0ccc017a-large.jpg","facebook_share":4242,"page_view":42},{"rank":0,"score":0.0,"nid":190959,"title":"Is 'negotiated democracy' the right way to go?","page_uri":"/garissa/tubonge/190959?from=related","image_uri":"/u/6413fc6ddfd34f89813865e806c36d5d-large.jpg","facebook_share":4242,"page_view":42},{"rank":0,"score":0.0,"nid":190517,"title":"Do you agree with the DP Ruto, that it will be harder for the opposition to beat Jubilee in 2017 than it was in 2013?","page_uri":"/national/tubonge/190517?from=related","image_uri":"/u/527d2ac6d04d4f59b4820d91d1df52e5-large.jpg","facebook_share":4242,"page_view":42},{"rank":0,"score":0.0,"nid":188935,"title":"Do you think Machakos politician Steve Muthoka was assassinated by political rivals?","page_uri":"/machakos/tubonge/188935?from=related","image_uri":"/u/b2a956ae26b244e187dfb7bb5567dd25-large.jpg","facebook_share":4242,"page_view":42},{"rank":0,"score":0.0,"nid":189120,"title":"Do you think President Uhuru ordered Joho's security be withdrawn?","page_uri":"/nakuru/tubonge/189120?from=related","image_uri":"/u/5c29626288cf4896b71eac1280810015-large.jpg","facebook_share":4242,"page_view":42},{"rank":0,"score":0.0,"nid":191191,"writer":{"uid":6509,"name":"Joy Garland","profile_uri":"/reporter/6509"},"title":"What are chances that Onyango Oloo will find room in ODM team?","category":"tubonge","county":"nyamira","page_uri":"/nyamira/tubonge/191191","image_uri":"/u/a83a097f5bce4c72953dd0672adbd878-large.jpg","publish_date":1484752453000,"facebook_share":4242,"page_view":42},{"rank":0,"score":0.0,"nid":191189,"writer":{"uid":8040,"name":"Jennifer Kamura","profile_uri":"/reporter/8040"},"title":"What factors will you consider when choosing a presidential candidate in the forthcoming elections?","category":"tubonge","county":"machakos","page_uri":"/machakos/tubonge/191189","image_uri":"/u/a017be271c1040ddbac6c70b5a58a435-large.jpg","publish_date":1484751831000,"facebook_share":4242,"page_view":42}],"recent_articles":[{"rank":0,"score":0.0,"nid":191191,"writer":{"uid":6509,"name":"Joy Garland","profile_uri":"/reporter/6509"},"title":"What are chances that Onyango Oloo will find room in ODM team?","page_uri":"/nyamira/tubonge/191191","image_uri":"/u/a83a097f5bce4c72953dd0672adbd878-large.jpg","publish_date":1484752453000,"facebook_share":4242,"page_view":42},{"rank":0,"score":0.0,"nid":191085,"writer":{"uid":6509,"name":"Joy Garland","profile_uri":"/reporter/6509"},"title":"What's your take on the new IEBC team. Will it live up to Kenyans' expectations?","page_uri":"/nyamira/tubonge/191085","image_uri":"/u/92a7abd72d99404897b25eb00054ea19-large.jpg","publish_date":1484728964000,"facebook_share":4242,"page_view":42},{"rank":0,"score":0.0,"nid":190930,"writer":{"uid":6509,"name":"Joy Garland","profile_uri":"/reporter/6509"},"title":"Who between Uhuru & Raila would you vote for if elections were held today?","page_uri":"/nyamira/tubonge/190930","image_uri":"/u/f5939b5e4d1843eb8cf30c4d33f871a5-large.jpg","publish_date":1484661688000,"facebook_share":4242,"page_view":42},{"rank":0,"score":0.0,"nid":190519,"writer":{"uid":14628,"name":"Mimi Tasha","profile_uri":"/reporter/14628"},"title":"Tubonge....","page_uri":"/nyamira/tubonge/190519","image_uri":"/u/77437f408c75409cac1e91997196b848-large.jpg","publish_date":1484583278000,"facebook_share":4242,"page_view":42},{"rank":0,"score":0.0,"nid":190669,"writer":{"uid":6509,"name":"Joy Garland","profile_uri":"/reporter/6509"},"title":"Will calls by Cord, Jubilee for people to register as voters bear fruit?","page_uri":"/nyamira/tubonge/190669","image_uri":"/u/c5338f5f9b344ce0ad4543d8cba90a96-large.jpg","publish_date":1484569670000,"facebook_share":4242,"page_view":42}]}
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
        console.log('data', JSON.stringify(this.state.post['content']));

        var content = [],
            contentData = this.state.post;

        content.push({
            contentData
        });

        console.log('data');

        return (
            <div className="container">
                {content}
            </div>
        )
    }
});
