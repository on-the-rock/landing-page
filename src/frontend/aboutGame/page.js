import React, {Component} from 'react';
import {FormattedMessage} from "react-intl";
import Header from "../component/header";
import Footer from "../component/footer";
import styled from 'styled-components';

class Home extends Component {
  render() {
    return (
      <div className="pusher">
        <Header activeIndex={0}/>
        <div className="ui middle aligned stackable grid container">
          <div className="row">
            <div className="sixteen wide center aligned column" style={{margin: "0 0 5vh 0"}}>
              <h2 className="ui white header">Game Rule</h2>
              <p className="gray"><FormattedMessage id="aboutGame.fightWith40Cards"/></p>
              <img src="/images/battle.png" alt="battle" className="ui centered image"/>
              <p className="gray" style={{marginTop: "5vh"}}><FormattedMessage id="aboutGame.getPanto"/></p>
              <a href="https://pantograph.io/">Learn more about Panto Draw</a>
            </div>
          </div>
        </div>
        <div className="ui middle aligned stackable grid container">
          <div className="row">
            <div className="sixteen wide center aligned column" style={{margin: "0 0 5vh 0"}}>
              <h2 className="ui white header">Card Description</h2>
              <img src="/images/card.png" alt="card" className="ui centered image"/>
              <h3 className="ui white header">Attack Types</h3>
              <Margined>
                <WhiteImage src="/images/short-range.png" alt="card" className="ui small centered image"/>
                <p className="gray">Short Range</p>
              </Margined>
              <Margined>
                <WhiteImage src="/images/long-range.png" alt="card" className="ui small centered image"/>
                <p className="gray">Long Range</p>
              </Margined>
              <Margined>
                <WhiteImage src="/images/flexible-range.png" alt="card" className="ui small centered image"/>
                <p className="gray">Flexible Range</p>
              </Margined>
              <h3 className="ui white header">Special Effects</h3>
              <p className="gray"><FormattedMessage id="aboutGame.specialEffects"/></p>
              <div className="gray">
                <p>attack twice</p>
                <p>magic invalid</p>
                <p>can not counter</p>
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
const Margined = styled.div`
  margin: 3vh 0 3vh 0;
`;

export default Home;
