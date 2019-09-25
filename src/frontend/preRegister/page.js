import React, {Component} from 'react';
import {Auth} from 'aws-amplify';

class PreRegister extends Component {
    state = {}

    render() {
        const {errorMessage, confirmMaleSent, success} = this.state
        document.body.style = 'background: white;';
        return (
            <div id="signup" style={{height: '100vh'}}>
                <h1>Sign Up</h1>
                <form name='form-signup'>
                    <div className="ui labeled input">
                        <div className="ui label">
                            Email
                        </div>
                        <input type="text" id="email" placeholder="Email Address"/>
                    </div>
                    {(errorMessage || confirmMaleSent) &&
                    <button className='ui button' style={{marginLeft: '1%'}} onClick={e => {
                        e.preventDefault()
                        this.onResendCode()
                    }}>Resend Code</button>}
                    <br/>
                    <div className="ui labeled input">
                        <div className="ui label">
                            Password
                        </div>
                        <input type="password" id="password" placeholder="Password"/>
                    </div>
                    <br/>
                    {!confirmMaleSent && <button className='ui primary button' onClick={e => {
                        e.preventDefault()
                        this.onSignUp()
                    }}>Create Account</button>}
                    {!confirmMaleSent && errorMessage &&
                    <div
                        className="ui message negative">
                        <i className="close icon" onClick={e => this.onCloseMessage()}/>
                        <div className="header">
                            invalid input
                        </div>
                        <p> {errorMessage}</p>
                    </div>}
                    {confirmMaleSent && <div>
                        <span>code(Check your e-mail)</span>
                        <input type="text" id="code"/>
                        <button className='ui primary button' onClick={e => {
                            e.preventDefault()
                            this.onConfirmCode()}}>Confirm Code</button>
                        {errorMessage &&
                        <div
                            className="ui message negative">
                            <i className="close icon" onClick={e => this.onCloseMessage()}/>
                            <div className="header">
                                invalid input
                            </div>
                            <p> {errorMessage}</p>
                        </div>}
                        {success &&
                        <div
                            className="ui message positive">
                            <i className="close icon" onClick={e => this.onCloseMessage()}/>
                            <div className="header">
                                pre-register successfully!!!
                            </div>
                            <p> Thank you for pre-register, Please see <a href='/market'>market</a></p>
                        </div>}
                    </div>}
                </form>
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

export default PreRegister;
