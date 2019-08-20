import React, {Component} from 'react';
import {FormattedMessage} from "react-intl";
// import white header from "../component/white header/index";
import {Dropdown} from "semantic-ui-react";

class Home extends Component {
    render() {
        const {handleOnChangeLanguage} = this.props;
        return (
            <div className="pusher">
                <div className='col'>
                    <img className='ui fluid image ' src='https://d1wwbe44qvngmh.cloudfront.net/images/banner.png'/>
                    <a href=""><img className='start-button'
                                    src='https://d1wwbe44qvngmh.cloudfront.net/images/start-game.png'/></a>
                    <div className="ui container absolute-menu">
                        <div className="ui large secondary inverted menu">
                            <div className="right item">
                                <a className="active item">Home</a>
                                <a className="item">Market</a>
                                <a className="item">Company</a>
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
                </div>
                <div className="ui middle aligned stackable grid container">
                    <div className="row">
                        <div className="seven wide column">
                            <h2 className="ui white header"><FormattedMessage id="top.howDoesItWork"/></h2>
                            <h3 className="ui white header"><FormattedMessage id="top.yourOnlyCardTitle"/></h3>
                            <p className="gray"><FormattedMessage id="top.yourOnlyCardSentence"/></p>
                            <h3 className="ui white header"><FormattedMessage id="top.sellYourCardTitle"/></h3>
                            <p className="gray"><FormattedMessage id="top.sellYourCardSentence"/></p>
                        </div>
                        <div className="nine wide right floated column">
                            <img src='https://d1wwbe44qvngmh.cloudfront.net/images/flow.png'
                                 className="ui fluid image"
                                 alt="flow"/>
                        </div>
                    </div>
                </div>

                <div className="ui stackable grid container">
                    <div className="row">
                        <div className="eight wide column">
                            <img src='https://d1wwbe44qvngmh.cloudfront.net/images/blockchain.png'
                                 className="ui fluid image"
                                 alt="blockchain"/>
                        </div>
                        <div className="eight wide middle aligned column">
                            <h2 className="ui white header"><FormattedMessage id="top.whatIsDappsTitle"/></h2>
                            <p className="gray"><FormattedMessage id="top.whatIsDappsSentence"/></p>
                        </div>
                    </div>
                </div>

                <div className="ui stackable grid container">
                    <div className="row">
                        <div className="eight wide middle aligned column">
                            <h2 className="ui white header"><FormattedMessage id="top.strengthTitle"/></h2>
                            <p className="gray"><FormattedMessage id="top.strengthSentence"/></p>
                        </div>
                        <div className="eight wide column">
                            <img src='https://d1wwbe44qvngmh.cloudfront.net/images/strength.png'
                                 className="ui fluid image"
                                 alt="strength"/>
                        </div>
                    </div>
                </div>

                <div className="ui stackable grid container">
                    <div className="row">
                        <div className="eight wide column">
                            <img src='https://d1wwbe44qvngmh.cloudfront.net/images/story.png'
                                 className="ui fluid image"
                                 alt="story"/>
                        </div>
                        <div className="eight wide middle aligned column">
                            <h2 className="ui white header"><FormattedMessage id="top.storyTitle"/></h2>
                            <p className="gray"><FormattedMessage id="top.storySentence"/></p>
                        </div>
                    </div>
                </div>

                <div className="ui container">
                    <h2 className="ui center aligned white header"><FormattedMessage id="top.systemTitle"/></h2>
                    <img src="https://d1wwbe44qvngmh.cloudfront.net/images/steps.svg"
                    className="ui centered image step123"/>
                    <div className="ui center aligned grid">
                        <div className="five wide column">
                            <h3 className="ui white header"><FormattedMessage id="top.makeCardTitle"/></h3>
                            <p className="gray"><FormattedMessage id="top.makeCardSentence"/></p>
                            <div className="col">
                                <img src="https://d1wwbe44qvngmh.cloudfront.net/images/create-card.gif"
                                     className="create-card-gif"/>
                                <img src="https://d1wwbe44qvngmh.cloudfront.net/images/card-bg.png"
                                     className="card-bg"/>
                            </div>
                        </div>
                        <div className="five wide column">
                            <h3 className="ui white header"><FormattedMessage id="top.makeDeckTitle"/></h3>
                            <p className="gray"><FormattedMessage id="top.makeDeckSentence"/></p>
                            <img src='https://d1wwbe44qvngmh.cloudfront.net/images/deck.png'
                                 className="ui massive image"
                                 alt="battle"/>
                        </div>
                        <div className="five wide column">
                            <h3 className="ui white header"><FormattedMessage id="top.battleTitle"/></h3>
                            <p className="gray"><FormattedMessage id="top.battleSentence"/></p>
                            <div className="col">
                                <img src='https://d1wwbe44qvngmh.cloudfront.net/images/battle-fg.png'
                                     className=" ui fluid image center aligned bigger"
                                     alt="battle"/>
                                <img src='https://d1wwbe44qvngmh.cloudfront.net/images/battle-bg.png'
                                     className="battle-bg"
                                     alt="battle"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="ui vertical footer segment col">
                    <img src='https://d1wwbe44qvngmh.cloudfront.net/images/footer.png'
                         alt="footer"
                         className="ui image"/>
                    <p className="gray footer-right"><FormattedMessage
                        id="top.companyName"/></p>
                    <img src="https://d1wwbe44qvngmh.cloudfront.net/images/Frame+C+Battle.png"
                         alt="frame c battle" className="footer-left"/>
                </div>
            </div>
        );
    }
}

export default Home;
