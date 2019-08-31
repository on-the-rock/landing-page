import React, {Component} from 'react';
import {Dropdown} from "semantic-ui-react";

class Header extends Component {
    // TODO: ヘッダーを共通化する。現在は使ってない
    render() {
        const {handleOnChangeLanguage} = this.props;
        return (
            <div className="ui container">
                <div className="ui large secondary inverted pointing menu">
                    <a className="active item">Home</a>
                    <a className="item">Market</a>
                    <a className="item">Company</a>
                    <div className="right item">
                        <Dropdown text='Language'>
                            <Dropdown.Menu>
                                <Dropdown.Item flag='us' text='English' onClick={e=>{handleOnChangeLanguage('en')}}/>
                                <Dropdown.Item flag='jp' text='日本語' onClick={e=>{handleOnChangeLanguage('ja')}}/>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
