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

            // [{"rank":0,"score":0,"nid":190949,"writer":{"uid":14587,"name":"Dickens Luvanda","profile_uri":"/reporter/14587"},"title":"Do you think NYS scandal thieves will ever be imprisoned?","category":"tubonge","county":"uasin-gishu","page_uri":"/uasin-gishu/tubonge/190949","image_uri":"/u/813d1682f543429886fdc3b4cea206c0-large.jpg","publish_date":1484664515000,"facebook_share":4242,"page_view":42},{"rank":0,"score":0,"nid":190943,"writer":{"uid":8954,"name":"Kaka Mwalimu","profile_uri":"/reporter/8954"},"title":"Which county has the most handsome Men in Kenya?","category":"tubonge","county":"kisii","page_uri":"/kisii/tubonge/190943","image_uri":"/u/6a7a44b10bae464a86d3c435bb53531c-large.jpg","publish_date":1484663720000,"facebook_share":4242,"page_view":42},{"rank":0,"score":0,"nid":190941,"writer":{"uid":6513,"name":"Charles Joseph ","profile_uri":"/reporter/6513"},"title":"Do you support the abolition of bride price in Kenya? Why?","category":"tubonge","county":"kisumu","page_uri":"/kisumu/tubonge/190941","image_uri":"/u/5a446ef4e299441c8c41fab3eb7b0392-large.jpg","publish_date":1484663238000,"facebook_share":4242,"page_view":42},{"rank":0,"score":0,"nid":190934,"writer":{"uid":5223,"name":"Mary K","profile_uri":"/reporter/5223"},"title":"What's your take on Marwa's claims that Joho faked his arrest to embarass the government?","category":"tubonge","county":"mombasa","page_uri":"/mombasa/tubonge/190934","image_uri":"/u/83445b52c9634fada3b55d6e62033658-large.jpg","publish_date":1484662245000,"facebook_share":4242,"page_view":42},{"rank":0,"score":0,"nid":190930,"writer":{"uid":6509,"name":"Joy Garland","profile_uri":"/reporter/6509"},"title":"Who between Uhuru & Raila would you vote for if elections were held today?","category":"tubonge","county":"nyamira","page_uri":"/nyamira/tubonge/190930","image_uri":"/u/f5939b5e4d1843eb8cf30c4d33f871a5-large.jpg","publish_date":1484661688000,"facebook_share":4242,"page_view":42},{"rank":0,"score":0,"nid":190920,"writer":{"uid":4886,"name":"Wendy Kay","profile_uri":"/reporter/4886"},"title":"Do you believe that NASA is a government project to kill Opposition?","category":"tubonge","county":"nakuru","page_uri":"/nakuru/tubonge/190920","image_uri":"/u/e3be7d0b9f7644f9b8d59e3441e33343-large.jpg","publish_date":1484659198000,"facebook_share":4242,"page_view":42},{"rank":0,"score":0,"nid":190914,"writer":{"uid":8040,"name":"Jennifer Kamura","profile_uri":"/reporter/8040"},"title":"Will you support the opposition if Raila backs down for a better candidate?","category":"tubonge","county":"machakos","page_uri":"/machakos/tubonge/190914","image_uri":"/u/45a14823c6eb4b0c9ea8fb5b7989e6bd-large.jpg","publish_date":1484657665000,"facebook_share":4242,"page_view":42},{"rank":0,"score":0,"nid":190519,"writer":{"uid":14628,"name":"Mimi Tasha","profile_uri":"/reporter/14628"},"title":"Tubonge....","category":"tubonge","county":"nyamira","page_uri":"/nyamira/tubonge/190519","image_uri":"/u/77437f408c75409cac1e91997196b848-large.jpg","publish_date":1484583278000,"facebook_share":4242,"page_view":42},{"rank":0,"score":0,"nid":190748,"writer":{"uid":6509,"name":"Joy Garland","profile_uri":"/reporter/6509"},"title":"Should Sauti Sol change their dressing as Bob Collymore says?","category":"tubonge","county":"nyamira","page_uri":"/nyamira/tubonge/190748","image_uri":"/u/d071a06612284cfaac090bd113e51321-large.jpg","publish_date":1484580251000,"facebook_share":4242,"page_view":42},{"rank":0,"score":0,"nid":190743,"writer":{"uid":8040,"name":"Jennifer Kamura","profile_uri":"/reporter/8040"},"title":"Will you support Alfred Mutua's 2022 presidential bid?","category":"tubonge","county":"machakos","page_uri":"/machakos/tubonge/190743","image_uri":"/u/675a6f976cee42abbe24e90a366406bb-large.jpg","publish_date":1484580087000,"facebook_share":4242,"page_view":42},{"rank":0,"score":0,"nid":190669,"writer":{"uid":6509,"name":"Joy Garland","profile_uri":"/reporter/6509"},"title":"Will calls by Cord, Jubilee for people to register as voters bear fruit?","category":"tubonge","county":"nyamira","page_uri":"/nyamira/tubonge/190669","image_uri":"/u/c5338f5f9b344ce0ad4543d8cba90a96-large.jpg","publish_date":1484569670000,"facebook_share":4242,"page_view":42},{"rank":0,"score":0,"nid":190650,"writer":{"uid":5223,"name":"Mary K","profile_uri":"/reporter/5223"},"title":"What's your take on Ahmednasir's claims that Marwa is a Cord mole?","category":"tubonge","county":"mombasa","page_uri":"/mombasa/tubonge/190650","image_uri":"/u/61f6b941039e4f72904693ffb8bf286b-large.jpg","publish_date":1484566234000,"facebook_share":4242,"page_view":42},{"rank":0,"score":0,"nid":190626,"writer":{"uid":8040,"name":"Jennifer Kamura","profile_uri":"/reporter/8040"},"title":"Will denying men sex force them to register as voters?","category":"tubonge","county":"machakos","page_uri":"/machakos/tubonge/190626","image_uri":"/u/b815b2758e714e32bea0aed960a425c2-large.jpg","publish_date":1484561589000,"facebook_share":4242,"page_view":42},{"rank":0,"score":0,"nid":190615,"writer":{"uid":14587,"name":"Dickens Luvanda","profile_uri":"/reporter/14587"},"title":"How has Ruto benefited Rift Valley ever since he became Uhuru's deputy?","category":"tubonge","county":"uasin-gishu","page_uri":"/uasin-gishu/tubonge/190615","image_uri":"/u/6e1d32f6bb444f9c94dacb991162ab80-large.jpg","publish_date":1484559502000,"facebook_share":4242,"page_view":42},{"rank":0,"score":0,"nid":190612,"writer":{"uid":14587,"name":"Dickens Luvanda","profile_uri":"/reporter/14587"},"title":"What if 'RAO' leaves Presidency to Mudavadi/Kalonzo so as to be Prime Minister?","category":"tubonge","county":"kisumu","page_uri":"/kisumu/tubonge/190612","image_uri":"/u/6802057f24b44e4db1d324cc1a8ad01c-large.jpg","publish_date":1484558817000,"facebook_share":4242,"page_view":42},{"rank":0,"score":0,"nid":190593,"writer":{"uid":1211,"name":"Dickson Mose","profile_uri":"/reporter/1211"},"title":"Should Duale apologise to former president Moi over his remarks?","category":"tubonge","county":"garissa","page_uri":"/garissa/tubonge/190593","image_uri":"/u/29afe4c8e06b41cd839aac5ad72b8fa1-large.jpg","publish_date":1484554650000,"facebook_share":4242,"page_view":42},{"rank":0,"score":0,"nid":190591,"writer":{"uid":8954,"name":"Kaka Mwalimu","profile_uri":"/reporter/8954"},"title":"Ladies, what makes a Kisii man unattractive to you?","category":"tubonge","county":"kisii","page_uri":"/kisii/tubonge/190591","image_uri":"/u/ffbfdd628d244dee9a628a3ca6f95873-large.jpg","publish_date":1484553755000,"facebook_share":4242,"page_view":42},{"rank":0,"score":0,"nid":190517,"writer":{"uid":14628,"name":"Mimi Tasha","profile_uri":"/reporter/14628"},"title":"Do you agree with the DP Ruto, that it will be harder for the opposition to beat Jubilee in 2017 than it was in 2013?","category":"tubonge","county":"national","page_uri":"/national/tubonge/190517","image_uri":"/u/527d2ac6d04d4f59b4820d91d1df52e5-large.jpg","publish_date":1484499496000,"facebook_share":4242,"page_view":42},{"rank":0,"score":0,"nid":190526,"writer":{"uid":6513,"name":"Charles Joseph ","profile_uri":"/reporter/6513"},"title":"How best can we avoid violence during elections?","category":"tubonge","county":"kisumu","page_uri":"/kisumu/tubonge/190526","image_uri":"/u/a0ea72c0bfde41fbad7ee7ea9cfbdcee-large.jpg","publish_date":1484492540000,"facebook_share":4242,"page_view":42},{"rank":0,"score":0,"nid":190496,"writer":{"uid":6513,"name":"Charles Joseph ","profile_uri":"/reporter/6513"},"title":"What's your take on Kalonzo's proposal to invite the ICC to investigate Duale?","category":"tubonge","county":"kisumu","page_uri":"/kisumu/tubonge/190496","image_uri":"/u/5672338751554621b2ae9b6379931f6c-large.jpg","publish_date":1484479172000,"facebook_share":4242,"page_view":42},{"rank":0,"score":0,"nid":190484,"writer":{"uid":6513,"name":"Charles Joseph ","profile_uri":"/reporter/6513"},"title":"Is Joho becoming a threat to Deputy President William Ruto's 2022 presidential bid?","category":"tubonge","county":"kisumu","page_uri":"/kisumu/tubonge/190484","image_uri":"/u/1e5ebbe4d86b4805aa33fc329e0d5df1-large.jpg","publish_date":1484470700000,"facebook_share":4242,"page_view":42},{"rank":0,"score":0,"nid":190441,"writer":{"uid":14587,"name":"Dickens Luvanda","profile_uri":"/reporter/14587"},"title":"Is Joho's troubles with gov't giving him popularity?","category":"tubonge","county":"uasin-gishu","page_uri":"/uasin-gishu/tubonge/190441","image_uri":"/u/b83c1cf9ec4a48e684f1aac22fc9a7fb-large.jpg","publish_date":1484413365000,"facebook_share":4242,"page_view":42},{"rank":0,"score":0,"nid":190421,"writer":{"uid":6513,"name":"Charles Joseph ","profile_uri":"/reporter/6513"},"title":"What's your take on the current opposition leaders' unity? Will it last?","category":"tubonge","county":"kisumu","page_uri":"/kisumu/tubonge/190421","image_uri":"/u/2bf2352d82a449588266dec4d682005c-large.jpg","publish_date":1484407861000,"facebook_share":4242,"page_view":42},{"rank":0,"score":0,"nid":190345,"writer":{"uid":14628,"name":"Mimi Tasha","profile_uri":"/reporter/14628"},"title":"What are your thoughts on denying residents alcohol for them to acquire voters’ card?","category":"tubonge","county":"kiambu","page_uri":"/kiambu/tubonge/190345","image_uri":"/u/0b1595fa1bfb4fa0974bc6287abc95f5-large.jpg","publish_date":1484349686000,"facebook_share":4242,"page_view":42},{"rank":0,"score":0,"nid":190353,"writer":{"uid":86,"name":"Njenga  Hakeenah","profile_uri":"/reporter/86"},"title":"How long can you stay without your cell phone?","category":"tubonge","county":"kiambu","page_uri":"/kiambu/tubonge/190353","image_uri":"/u/fde650df9b75404086b527d68a9eb59b-large.jpg","publish_date":1484333910000,"facebook_share":4242,"page_view":42},{"rank":0,"score":0,"nid":190323,"writer":{"uid":8040,"name":"Jennifer Kamura","profile_uri":"/reporter/8040"},"title":"Ni Furahi day, what's your plan for the weekend?","category":"tubonge","county":"machakos","page_uri":"/machakos/tubonge/190323","image_uri":"/u/563d036265d643d78718427d0ccc017a-large.jpg","publish_date":1484321601000,"facebook_share":4242,"page_view":42},{"rank":0,"score":0,"nid":190269,"writer":{"uid":86,"name":"Njenga  Hakeenah","profile_uri":"/reporter/86"},"title":"Can adopted children raised by the same parents get married?","category":"tubonge","county":"kiambu","page_uri":"/kiambu/tubonge/190269","image_uri":"/u/cc3203e702004be38865cbcdbcaa8afb-large.jpg","publish_date":1484315710000,"facebook_share":4242,"page_view":42},{"rank":0,"score":0,"nid":190297,"writer":{"uid":1232,"name":"Abuga Makori Jnr","profile_uri":"/reporter/1232"},"title":"Do you support Duale's claims that NASA died at Bomas?","category":"tubonge","county":"nyamira","page_uri":"/nyamira/tubonge/190297","image_uri":"/u/05a277419d1241189a2a14d4d28ba4cc-large.jpg","publish_date":1484315134000,"facebook_share":4242,"page_view":42},{"rank":0,"score":0,"nid":190292,"writer":{"uid":1232,"name":"Abuga Makori Jnr","profile_uri":"/reporter/1232"},"title":"Do you support Duale's remarks that NASA died at Bomas?","category":"tubonge","county":"nyamira","page_uri":"/nyamira/tubonge/190292","image_uri":"/u/02f674e4369f4558be1b109c56aa4e83-large.jpg","publish_date":1484314733000,"facebook_share":4242,"page_view":42},{"rank":0,"score":0,"nid":190286,"writer":{"uid":6513,"name":"Charles Joseph ","profile_uri":"/reporter/6513"},"title":"Is it true that Luo people have been Raila's biggest obstacle in his quest for the Presidency?","category":"tubonge","county":"kisumu","page_uri":"/kisumu/tubonge/190286","image_uri":"/u/8afd5118757744e0bb4d4baeff3f3c47-large.jpg","publish_date":1484313451000,"facebook_share":4242,"page_view":42}]
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
                    <NewsItem articles={this.state.articles}/>
                </div>
            </div>
        )
    }
})