import React, {Component} from 'react';
import {Dropdown} from "semantic-ui-react";
import PreRegister from "../preRegister";
import {FormattedMessage} from "react-intl";
import {Link} from "react-router-dom";

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
              <Link className={activeIndex === 0 ? "active item" : "item"} to="/">Home</Link>
              <Link className={activeIndex === 1 ? "active item" : "item"} to="market"><FormattedMessage
                id="market.preSale"/></Link>
              {/*<a className={activeIndex === 2 ? "active item" : "item"}>Company</a>*/}
              <Link className={activeIndex === 2 ? "active item" : "item"} to="/about-game"><FormattedMessage id="aboutGame.aboutGame"/></Link>
              <Link className={activeIndex === 3 ? "active item" : "item"} to="/qa">Q&A</Link>
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
