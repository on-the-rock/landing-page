import React, {Component} from 'react';
import {FormattedMessage} from "react-intl";

class Footer extends Component {
    render() {
        return (
            <div className="ui vertical footer segment col">
                <img src='https://d1wwbe44qvngmh.cloudfront.net/images/footer.png'
                     alt="footer"
                     className="ui image"/>
                <p className="white footer-right">
                    <div><i className="envelope icon"/> <a href='mailto:info@framecbattle.com'>info@framecbattle.com</a></div>
                    <div><i className="twitter icon"/> <a href='https://twitter.com/frame_c_battle'>@frame_c_battle</a></div>
                    <div><i className="medium icon"/> <a href='https://medium.com/frame-c-battle'>@framecbattle</a></div>
                    <FormattedMessage
                        id="top.companyName"/></p>
                <img src="https://d1wwbe44qvngmh.cloudfront.net/images/Frame+C+Battle.png"
                     alt="frame c battle" className="footer-left"/>
            </div>
        );
    }
}

export default Footer;
