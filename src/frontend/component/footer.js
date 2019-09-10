import React, {Component} from 'react';
import {FormattedMessage} from "react-intl";

class Footer extends Component {
    render() {
        return (
            <div className="ui vertical footer segment col">
                <img src='https://d1wwbe44qvngmh.cloudfront.net/images/footer.png'
                     alt="footer"
                     className="ui image"/>
                <p className="gray footer-right">
                    <FormattedMessage
                    id="top.companyName"/></p>
                <img src="https://d1wwbe44qvngmh.cloudfront.net/images/Frame+C+Battle.png"
                     alt="frame c battle" className="footer-left"/>
            </div>
        );
    }
}

export default Footer;
