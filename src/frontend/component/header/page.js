import React, {Component} from 'react';
import {Dropdown} from "semantic-ui-react";
import PreRegister from "../preRegister";
import {FormattedMessage} from "react-intl";

class Header extends Component {
  state = {};

  componentWillMount() {
    const {handleOnChangeLanguage, intl} = this.props
    handleOnChangeLanguage(intl.locale)
  }

  render() {
    const {handleOnChangeLanguage, activeIndex, intl} = this.props;
    return (
      <div className='col banner'>
        <div className="ui container absolute-menu">
          <div className="ui small secondary inverted menu">
            <div className="right item">
              <a className={activeIndex === 0 ? "active item" : "item"} href="/">Home</a>
              <a className={activeIndex === 1 ? "active item" : "item"} href="market"><FormattedMessage
                id="market.preSale"/></a>
              {/*<a className={activeIndex === 2 ? "active item" : "item"}>Company</a>*/}
              <a className={activeIndex === 2 ? "active item" : "item"} href="/about-game"><FormattedMessage id="aboutGame.aboutGame"/></a>
              <a className={activeIndex === 3 ? "active item" : "item"} href="/qa">Q&A</a>
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
        <div className="ui container">
          <img className='ui fluid image'
               src='images/logo-tomo.png'
               alt='banner'/>
          <a href='https://framecbattle.com'>
            <img className='start-button'
                 src='https://d1wwbe44qvngmh.cloudfront.net/images/start-game.png'
                 alt='Game Start'/>
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
