import React, {Component} from 'react';
import {FormattedMessage} from "react-intl";
// import Header from "../component/header/index";
import {Dropdown} from "semantic-ui-react";

class Home extends Component {
    render() {
        const {handleOnChangeLanguage} = this.props;
        return (
            <div className="pusher">
                <div className="ui inverted vertical masthead center aligned segment">
                    <div className="ui container">
                        <div className="ui container">
                            <div className="ui large secondary inverted pointing menu">
                                <a className="active item">Home</a>
                                <a className="item">Market</a>
                                <a className="item">Company</a>
                                <div className="right item">
                                    <Dropdown text='Language'>
                                        <Dropdown.Menu>
                                            <Dropdown.Item text='English' onClick={e=>{handleOnChangeLanguage('en')}}/>
                                            <Dropdown.Item flag='jp' text='日本語' onClick={e=>{handleOnChangeLanguage('ja')}}/>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="ui text">
                        <h1 className="ui inverted header">
                            Frame C Battle
                        </h1>
                        <h2><FormattedMessage id="top.subTitle"/></h2>
                        <div className="ui huge primary button">Start Game<i className="right arrow icon"/></div>
                    </div>
                </div>

                <div className="ui vertical stripe segment">
                    <div className="ui middle aligned stackable grid container">
                        <div className="row">
                            <div className="six wide column">
                                <h3 className="ui header"><FormattedMessage id="top.yourOnlyCardTitle"/></h3>
                                <p><FormattedMessage id="top.yourOnlyCardSentence"/></p>
                                <h3 className="ui header"><FormattedMessage id="top.sellYourCardTitle"/></h3>
                                <p><FormattedMessage id="top.sellYourCardSentence"/></p>
                            </div>
                            <div className="ten wide right floated column">
                                <img src='https://d1wwbe44qvngmh.cloudfront.net/images/flow.jpg'
                                     className="ui massive bordered rounded image"
                                     alt="flow"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="ui vertical stripe quote segment">
                    <div className="ui equal width stackable internally celled grid">
                        <div className="center aligned row">
                            <div className="column">
                                <h3><FormattedMessage id="top.whatIsDappsTitle"/></h3>
                                <p><FormattedMessage id="top.whatIsDappsSentence"/></p>
                            </div>
                            <div className="column">
                                <h3><FormattedMessage id="top.strengthTitle"/></h3>
                                <p><FormattedMessage id="top.strengthSentence"/></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="ui vertical stripe segment">
                    <div className="ui text container">
                        <h3 className="ui header"><FormattedMessage id="top.storyTitle"/></h3>
                        <p><FormattedMessage id="top.storySentence"/></p>
                        <h3 className="ui header"><FormattedMessage id="top.systemTitle"/></h3>
                        <h4 className="ui header"><FormattedMessage id="top.makeCardTitle"/></h4>
                        <p><FormattedMessage id="top.makeCardSentence"/></p>
                        <h4 className="ui header"><FormattedMessage id="top.makeDeckTitle"/></h4>
                        <p><FormattedMessage id="top.makeDeckSentence"/></p>
                        <h4 className="ui header"><FormattedMessage id="top.battleTitle"/></h4>
                        <p><FormattedMessage id="top.battleSentence"/></p>
                        <img src='https://d1wwbe44qvngmh.cloudfront.net/images/battle.png'
                             className="ui massive bordered rounded image"
                             alt="battle"/>
                    </div>
                </div>


                <div className="ui inverted vertical footer segment">
                    <div className="ui container center aligned">
                        <p><i className="copyright outline icon"/><FormattedMessage id="top.companyName"/></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
