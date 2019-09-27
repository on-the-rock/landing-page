import React, {Component} from 'react';
import {Button, Dropdown, Image, Modal} from "semantic-ui-react";
import {Auth} from 'aws-amplify';
import {FormattedMessage} from "react-intl";
import MediaQuery from 'react-responsive'

class Header extends Component {
    state = {};

    render() {
        const {errorMessage, confirmMaleSent, success} = this.state
        const {handleOnChangeLanguage, activeIndex, intl} = this.props;
        return (
            <div className='col banner'>
                <div className="ui container">
                    <img className='ui fluid image'
                         src='https://d1wwbe44qvngmh.cloudfront.net/images/banner-content.png'
                         alt='banner'/>
                    <Modal trigger={<img className='pre-register-button'
                                         src={intl.locale === 'ja' ? 'https://d1wwbe44qvngmh.cloudfront.net/images/button-jp.png' : 'https://d1wwbe44qvngmh.cloudfront.net/images/button-en.png'}
                                         alt='start'/>}>
                        <Modal.Header><FormattedMessage
                            id={success ? "register.completed" : "register.signUp"}/></Modal.Header>
                        <Modal.Content>
                            <MediaQuery query='(min-width: 975px)'>
                                <div className="ui steps">
                                    <div className={"step " + (!confirmMaleSent ? "active" : "completed")}>
                                        <i className="pencil alternate icon"/>
                                        <div className="content">
                                            <div className="title"><FormattedMessage id="register.register"/></div>
                                            <div className="description"><FormattedMessage
                                                id="register.registerDescription"/></div>
                                        </div>
                                    </div>
                                    <div
                                        className={"step " + ((confirmMaleSent && !success) ? "active " : "") + (success && "completed")}>
                                        <i className="eye icon"/>
                                        <div className="content">
                                            <div className="title"><FormattedMessage id="register.confirm"/></div>
                                            <div className="description"><FormattedMessage
                                                id="register.confirmDescription"/></div>
                                        </div>
                                    </div>
                                    <div
                                        className={"step " + (confirmMaleSent && success && "active ") + (success && "completed")}>
                                        <i className="thumbs up icon"/>
                                        <div className="content">
                                            <div className="title"><FormattedMessage id="register.complete"/></div>
                                            <div className="description"><FormattedMessage
                                                id="register.completeDescription"/></div>
                                        </div>
                                    </div>
                                </div>
                            </MediaQuery>
                            {!success && <form name='form-signup'>
                                <div className="ui labeled input">
                                    <div className="ui label">
                                        <FormattedMessage id="register.mail"/>
                                    </div>
                                    <input type="text" id="email" placeholder="Email Address"/>
                                </div>
                                {(errorMessage || confirmMaleSent) &&
                                <button className='ui button' style={{marginLeft: '1%'}} onClick={e => {
                                    e.preventDefault()
                                    this.onResendCode()
                                }}><FormattedMessage id="register.resentCode"/></button>}
                                <br/>
                                {!confirmMaleSent &&
                                <div className="ui labeled input inline field">
                                    <div className="ui label">
                                        <FormattedMessage id="register.password"/>
                                    </div>
                                    <input type="password" id="password" placeholder="Password"/>
                                    <div className="ui left pointing blue basic label">
                                        <FormattedMessage id="register.passwordRequirement"/>
                                    </div>
                                </div>}
                                {!confirmMaleSent && <br/>}
                                {!confirmMaleSent && <button className='ui primary button' onClick={e => {
                                    e.preventDefault()
                                    this.onSignUp()
                                }}><FormattedMessage id="register.createAccount"/></button>}
                                {!confirmMaleSent && errorMessage &&
                                <div
                                    className="ui message negative">
                                    <i className="close icon" onClick={e => this.onCloseMessage()}/>
                                    <div className="header">
                                        <FormattedMessage id="register.invalidInput"/>
                                    </div>
                                    <p> {errorMessage}</p>
                                </div>}
                                {confirmMaleSent && <div>
                                    <div className="ui labeled input inline field">
                                        <div className="ui label">
                                            <FormattedMessage id="register.code"/>
                                        </div>
                                        <input type="text" id="code" placeholder="Email Address"/>
                                        <div className="ui left pointing blue basic label">
                                            <FormattedMessage id="register.codeFromMail"/>
                                        </div>
                                    </div>
                                    <br/>
                                    <button className='ui primary button' onClick={e => {
                                        e.preventDefault()
                                        this.onConfirmCode()
                                    }}><FormattedMessage id="register.confirm"/>
                                    </button>
                                    {errorMessage &&
                                    <div
                                        className="ui message negative">
                                        <i className="close icon" onClick={e => this.onCloseMessage()}/>
                                        <div className="header">
                                            <FormattedMessage id="register.invalidInput"/>
                                        </div>
                                        <p> {errorMessage}</p>
                                    </div>}
                                </div>}
                            </form>}
                            {success &&
                            <div
                                className="ui message positive">
                                <i className="close icon" onClick={e => this.onCloseMessage()}/>
                                <div className="header">
                                    <FormattedMessage id="register.success"/>
                                </div>
                                <p>
                                    {/*<a href='/market'>*/}
                                        <FormattedMessage id="register.goMarket"/>
                                    {/*</a>*/}
                                </p>
                            </div>}
                        </Modal.Content>
                    </Modal>
                    <div className="ui container absolute-menu">
                        <div className="ui small secondary inverted menu">
                            <div className="right item">
                                <a className={activeIndex === 0 ? "active item" : "item"} href="/">Home</a>
                                {/*<a className={activeIndex === 1 ? "active item" : "item"} href="market">Market</a>*/}
                                {/*<a className={activeIndex === 2 ? "active item" : "item"}>Company</a>*/}
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

    onSignUp() {
        const email = document.getElementById("email").value
        const password = document.getElementById("password").value
        Auth.signUp({
            username: email,
            password,
            attributes: {
                email,          // optional
                // other custom attributes
            },
            validationData: []  //optional
        })
            .then(data => {
                console.log(data)
                this.setState({confirmMaleSent: true, errorMessage: undefined})
            })
            .catch(err => {
                console.log(err)
                this.setState({errorMessage: err.message})
            });

    }

    onCloseMessage() {
        this.setState({errorMessage: undefined})
    }

    onConfirmCode() {
        const username = document.getElementById("email").value
        const code = document.getElementById("code").value
        Auth.confirmSignUp(username, code, {
            // Optional. Force user confirmation irrespective of existing alias. By default set to True.
            forceAliasCreation: true
        }).then(data => {
            console.log(data)
            this.setState({
                errorMessage: undefined,
                success: true
            })
        })
            .catch(err => {
                console.log(err)
                this.setState({errorMessage: err.message})
            });
    }

    onResendCode() {
        const username = document.getElementById("email").value
        Auth.resendSignUp(username).then(() => {
            console.log('code resent successfully');
            this.setState({confirmMaleSent: true, errorMessage: undefined})
        }).catch(e => {
            console.log(e);
            this.setState({errorMessage: e.message})
        });
    }
}

export default Header;
