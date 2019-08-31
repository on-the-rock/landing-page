import React, {Component} from 'react';
import {FormattedMessage} from "react-intl";
import Header from "../component/header";

class Market extends Component {
    render() {
        const {handleOnChangeLanguage} = this.props;
        return (
            <div className="pusher">
                <Header handleOnChangeLanguage={handleOnChangeLanguage} activeIndex={1}/>
                <div className='ui container'>
                    <h2 className="ui white header"><FormattedMessage id='market.preSale'/></h2>
                    <h3 className="ui white header"><FormattedMessage id='market.preSale1Header'/></h3>
                    <p className="gray"><FormattedMessage id='market.preSale1Text'/></p>
                    <h3 className="ui white header"><FormattedMessage id='market.preSale2Header'/></h3>
                    <p className="gray"><FormattedMessage id='market.preSale2Text'/></p>
                    <h3 className="ui white header"><FormattedMessage id='market.preSale3Header'/></h3>
                    <p className="gray"><FormattedMessage id='market.preSale3Text'/></p>
                    <h3 className="ui white header"><FormattedMessage id='market.preSale4Header'/></h3>
                    <p className="gray"><FormattedMessage id='market.preSale4Text'/></p>
                </div>
            </div>
        );
    }
}

export default Market;
