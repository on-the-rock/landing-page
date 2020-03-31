import React, {Component} from 'react';
import {FormattedHTMLMessage, FormattedMessage} from "react-intl";
import Header from "../component/header";
import BlockChainApi from "../../api/blockChainApi";
import sellCards from "../../common/sellCard";
import Footer from "../component/footer";

class Market extends Component {
    state = {
        preSaleCards: sellCards.preSale,
        marketCards: sellCards.market,
        transactions: {},
    };

    render() {
        return (
            <div className="pusher">
                <Header activeIndex={1}/>
                <div className='ui center aligned container'>
                    <h2 className="ui white header"><FormattedMessage id="market.cancelPreSale"/></h2>
                    <p className="gray"><FormattedMessage id="market.cancelPreSaleText"/></p>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Market;
