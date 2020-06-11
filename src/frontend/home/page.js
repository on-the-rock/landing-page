import React, {Component} from 'react';
import {FormattedMessage} from "react-intl";
import Header from "../component/header";
import Footer from "../component/footer";
import MediaQuery from "react-responsive/src/Component";
import styled from "styled-components";

class Home extends Component {
  render() {
    return (
      <div className="pusher">
        <Header activeIndex={0}/>
        <div className="ui middle aligned stackable grid container">
          <div className="row">
            <div className="sixteen wide center aligned column" style={{margin: "0 0 15vh 0"}}>
              <h2 className="ui white header"><FormattedMessage id="top.requireEnvironment"/></h2>
              <p className="gray"><FormattedMessage id="top.requireEnvironmentDescription"/></p>
              <MediaQuery query='(min-width: 768px)'>
                <h3 className="ui white header">
                  <a href="https://chrome.google.com/webstore/detail/pantograph/ocfgfhicacgipgpiapepehhpidbhijkl">
                    <WhiteImage src="/images/logo-vertical.svg" alt="pantograph" className="ui centered medium image"/>
                  </a>
                </h3>
                <p className="gray"><FormattedMessage id="top.pantographDescription"/></p>
              </MediaQuery>
              <MediaQuery query='(max-width: 768px)'>
                <h3 className="ui white header">
                  <a
                    href="https://pantograph.io/">
                    <WhiteImage src="/images/logo-vertical.svg" alt="pantograph"
                                className="ui centered medium image"/>
                  </a>
                </h3>
                <p className="gray"><FormattedMessage id="top.pantographAppDescription"/></p>
              </MediaQuery>
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
               className="ui centered image step123"
               alt='123'/>
          <div className="ui center aligned grid">
            <div className="five wide column">
              <h3 className="ui white header"><FormattedMessage id="top.makeCardTitle"/></h3>
              <p className="gray"><FormattedMessage id="top.makeCardSentence"/></p>
              <div className="col">
                <img src="https://d1wwbe44qvngmh.cloudfront.net/images/create-card.gif"
                     className="create-card-gif"
                     alt='create-card'/>
                <img src="https://d1wwbe44qvngmh.cloudfront.net/images/card-bg.png"
                     className="card-bg"
                     alt='card-bg'/>
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
                <img src='https://d1wwbe44qvngmh.cloudfront.net/images/battle.png'
                     className=" ui fluid image center aligned bigger"
                     alt="battle"/>
                <img src='https://d1wwbe44qvngmh.cloudfront.net/images/battle-bg.png'
                     className="battle-bg"
                     alt="battle"/>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

const WhiteImage = styled.img`
  filter: invert(88%) sepia(61%) saturate(0%) hue-rotate(229deg) brightness(107%) contrast(101%);
`;

export default Home;
