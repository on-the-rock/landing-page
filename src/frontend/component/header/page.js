import React, {Component} from 'react';
import {Dropdown} from "semantic-ui-react";
import PreRegister from "../preRegister";
import {FormattedMessage} from "react-intl";

class Header extends Component {
    state = {};
    componentWillMount() {
        const {handleOnChangeLanguage,intl} = this.props
        handleOnChangeLanguage(intl.locale)
    }

    render() {
        const {handleOnChangeLanguage, activeIndex, intl} = this.props;
        return (
            <div className='col banner'>
                <div className="ui container">
                    <img className='ui fluid image'
                         src='https://d1wwbe44qvngmh.cloudfront.net/images/banner-content.png'
                         alt='banner'/>
                    <PreRegister trigger={<img className='pre-register-button'
                                               src={intl.locale === 'ja' ? 'https://d1wwbe44qvngmh.cloudfront.net/images/pre-register-click.png' : 'https://d1wwbe44qvngmh.cloudfront.net/images/button-en.png'}
                                               alt='start'/>}/>
                    <div className="ui container absolute-menu">
                        <div className="ui small secondary inverted menu">
                            <div className="right item">
                                <a className={activeIndex === 0 ? "active item" : "item"} href="/">Home</a>
                                <a className={activeIndex === 1 ? "active item" : "item"} href="market">Market</a>
                                {/*<a className={activeIndex === 2 ? "active item" : "item"}>Company</a>*/}
                                <a className={activeIndex === 3 ? "active item" : "item"} href="/qa">Q&A</a>
                                <PreRegister trigger={<a className="item"><FormattedMessage id="register.preRegister"/></a>}/>
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
