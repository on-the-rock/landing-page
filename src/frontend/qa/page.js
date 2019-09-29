import React, {Component} from 'react';
import {FormattedHTMLMessage, FormattedMessage} from "react-intl";
import Header from "../component/header";
import Footer from "../component/footer";
import PreRegister from "../component/preRegister";

class QA extends Component {
    render() {
        return (
            <div className="pusher">
                <Header activeIndex={3}/>
                <h2 className="white ui header"><FormattedMessage id='qa.howToPreRegister'/></h2>
                <div style={{display: "inline-flex"}}><PreRegister
                    trigger={<button className='ui primary button' style={{whiteSpace:'nowrap'}}><FormattedMessage id='qa.here' tagName='p'/>
                    </button>}/><p className="gray"><FormattedMessage id='qa.howToPreRegisterSentence'/></p></div>
                <h2 className="white ui header"><FormattedMessage id='qa.isNFTNeeded'/></h2>
                <p className="gray"><FormattedMessage id='qa.isNFTNeededSentence'/></p>
                <h2 className="white ui header"><FormattedMessage id='qa.isFrameNeeded'/></h2>
                <p className="gray"><FormattedMessage id='qa.isFrameNeededSentence'/></p>
                <h2 className="white ui header"><FormattedMessage id='qa.howToGetPresent'/></h2>
                <p className="gray"><FormattedHTMLMessage id='qa.howToGetPresentSentence'/></p>
                <Footer/>
            </div>
        );
    }
}

export default QA;
