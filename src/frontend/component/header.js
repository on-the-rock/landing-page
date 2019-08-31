import React, {Component} from 'react';
import {Dropdown} from "semantic-ui-react";

class Header extends Component {
    render() {
        const {handleOnChangeLanguage, activeIndex} = this.props;
        return (
            <div className='col banner'>
                <div className="ui container">
                    <img className='ui fluid image'
                         src='https://d1wwbe44qvngmh.cloudfront.net/images/banner-content.png'
                         alt='banner'/>
                    <img className='banner-text'
                         src="https://d1wwbe44qvngmh.cloudfront.net/images/Create-your-own-cards.png"
                         alt='banner-text'/>
                    <a href="">
                        <img className='start-button'
                             src='https://d1wwbe44qvngmh.cloudfront.net/images/start-game.png'
                             alt='start'/>
                    </a>
                    <img className='banner-card'
                         src="https://d1wwbe44qvngmh.cloudfront.net/images/cards.png"
                         alt='card'/>
                    <div className="ui container absolute-menu">
                        <div className="ui large secondary inverted menu">
                            <div className="right item">
                                <a className={activeIndex === 0 ? "active item" : "item"} href="/">Home</a>
                                <a className={activeIndex === 1 ? "active item" : "item"} href="market">Market</a>
                                <a className={activeIndex === 2 ? "active item" : "item"}>Company</a>
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
            </div>
        );
    }
}

export default Header;
