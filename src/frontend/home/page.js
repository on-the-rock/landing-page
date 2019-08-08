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
                        <div className="ui large secondary inverted pointing menu">
                            <a className="active item">Home</a>
                            <a className="item">Market</a>
                            <a className="item">Company</a>
                            <div className="right item">
                                <Dropdown text='Language'>
                                    <Dropdown.Menu>
                                        <Dropdown.Item text='English' onClick={e => {
                                            handleOnChangeLanguage('en')
                                        }}/>
                                        <Dropdown.Item text='日本語' onClick={e => {
                                            handleOnChangeLanguage('ja')
                                        }}/>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                    <img className='ui fluid image' src='https://d1wwbe44qvngmh.cloudfront.net/images/banner.png'/>

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
                                     className="ui fluid image"
                                     alt="flow"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="ui vertical stripe segment">
                    <div className="ui stackable grid container">
                        <div className="row">
                            <div className="six wide column">
                                <img src='https://d1wwbe44qvngmh.cloudfront.net/images/blockchain.png'
                                     className="ui fluid image"
                                     alt="blockchain"/>
                            </div>
                            <div className="ten wide middle aligned column">
                                <h3><FormattedMessage id="top.whatIsDappsTitle"/></h3>
                                <p><FormattedMessage id="top.whatIsDappsSentence"/></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="ui vertical stripe segment">
                    <div className="ui stackable grid container">
                        <div className="row">
                            <div className="ten wide middle aligned column">
                                <h3><FormattedMessage id="top.strengthTitle"/></h3>
                                <p><FormattedMessage id="top.strengthSentence"/></p>
                            </div>
                            <div className="six wide column">
                                <img src='https://d1wwbe44qvngmh.cloudfront.net/images/strength.png'
                                     className="ui fluid image"
                                     alt="strength"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="ui vertical stripe segment">
                    <div className="ui stackable grid container">
                        <div className="row">
                            <div className="six wide column">
                                <img src='https://d1wwbe44qvngmh.cloudfront.net/images/story.png'
                                     className="ui fluid image"
                                     alt="story"/>
                            </div>
                            <div className="ten wide middle aligned column">
                                <h3 className="ui header"><FormattedMessage id="top.storyTitle"/></h3>
                                <p><FormattedMessage id="top.storySentence"/></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="ui vertical stripe segment">
                    <div className="ui text">
                        <h3 className="ui center aligned header"><FormattedMessage id="top.systemTitle"/></h3>
                        <div className="ui center aligned grid">
                            <div className="five wide column">
                                <h4 className="ui header"><FormattedMessage id="top.makeCardTitle"/></h4>
                                <p><FormattedMessage id="top.makeCardSentence"/></p>
                                <div className="col">
                                    <img src="https://d1wwbe44qvngmh.cloudfront.net/images/create-card.gif"
                                         className="create-card-gif"/>
                                    <img src="https://d1wwbe44qvngmh.cloudfront.net/images/card-bg.png"
                                         className="card-bg"/>
                                </div>
                            </div>
                            <div className="five wide column">
                                <h4 className="ui header"><FormattedMessage id="top.makeDeckTitle"/></h4>
                                <p><FormattedMessage id="top.makeDeckSentence"/></p>
                                <img src='https://d1wwbe44qvngmh.cloudfront.net/images/deck.png'
                                     className="ui massive image"
                                     alt="battle"/>
                            </div>
                            <div className="five wide column">
                                <h4 className="ui header"><FormattedMessage id="top.battleTitle"/></h4>
                                <p><FormattedMessage id="top.battleSentence"/></p>
                                <div className="col">
                                    <img src='https://d1wwbe44qvngmh.cloudfront.net/images/battle-fg.png'
                                         className="battle-fg"
                                         alt="battle"/>
                                    <img src='https://d1wwbe44qvngmh.cloudfront.net/images/battle-bg.png'
                                         className="battle-bg"
                                         alt="battle"/>
                                </div>
                            </div>
                        </div>
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
