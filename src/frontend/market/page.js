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

    async componentWillMount() {
        if (!BlockChainApi.isBlockchainLoaded()) {
            await BlockChainApi.loadBlockChain();
        }
        if(BlockChainApi.isBlockchainLoaded()) {
            this.setState({
                isBlockChainDataLoaded: true,
                preSaleCards: await asyncMap(sellCards.preSale, async card => {
                    const tokens = await BlockChainApi.listTokenIdsByCardNo(card.cardNo);
                    const remainingTokens = await asyncFilter(tokens, async token => {
                        const price = Number.parseInt(await BlockChainApi.getPriceByTokenId(token));
                        return price !== 0
                    });
                    return {
                        ...card,
                        tokens: tokens,
                        remains: remainingTokens
                    }
                }),
                marketCards: await asyncMap(sellCards.market, async card => {
                    const tokens = await BlockChainApi.listTokenIdsByCardNo(card.cardNo);
                    const remainingTokens = await asyncFilter(tokens, async token => {
                        const price = Number.parseInt(await BlockChainApi.getPriceByTokenId(token));
                        return price !== 0
                    });
                    return {
                        ...card,
                        tokens: tokens,
                        remains: remainingTokens
                    }
                })
            })
        }
    }

    render() {
        const {preSaleCards, marketCards, isBlockChainDataLoaded, transactions} = this.state;
        const {intl} = this.props
        return (
            <div className="pusher">
                <Header activeIndex={1}/>
                <div className='ui center aligned container'>
                    <h2 className="ui white header"><FormattedMessage id='market.preSale'/></h2>
                    <h3 className="ui white header"><FormattedMessage id='market.preSale1Header'/></h3>
                    <p className="gray"><FormattedMessage id='market.preSale1Text'/></p>
                    <div className='ui stackable grid'>
                        {preSaleCards.map(card => {
                            return <div className='ui eight wide  column center aligned' key={card.cardNo}>
                                <h3 className="ui white header">{card.cardNameJa}</h3>
                                <img src={card.imageURL}
                                     alt={card.cardNameJa}
                                     className='ui fluid center aligned image'/>

                                    <div className='ui gray text'>
                                        <FormattedMessage id='market.price'/>:{card.priceEther}ETH
                                        <br/>
                                    </div>
                                {isBlockChainDataLoaded &&
                                <div className='ui gray text'>
                                    <FormattedMessage
                                        id='market.remains'/>:{card.remains.length}/<FormattedMessage
                                    id='market.totalSupply'/>:{card.tokens.length}</div>}
                                <button
                                    className={"ui large primary center aligned button " + (isBlockChainDataLoaded && card.remains && card.remains.length === 0 && "disabled")}
                                    onClick={async e => {
                                        await this.onPurchase(card.cardNo)
                                    }}>
                                    <FormattedMessage id='market.purchase'/>
                                </button>
                                {transactions[card.cardNo] &&
                                <div
                                    className={"ui message " + (transactions[card.cardNo].status === 'processing' ? 'warning' :
                                        transactions[card.cardNo].status === 'success' ? 'positive' : 'negative')}>
                                    <i className="close icon" onClick={this.onCloseMessage}/>
                                    <div className="header">
                                        transaction {transactions[card.cardNo].status}
                                    </div>
                                    {transactions[card.cardNo].transactionHash && <p>confirm following transaction:
                                        <a href={'https://etherscan.io/tx/' + transactions[card.cardNo].transactionHash}>see
                                            in etherscan</a>
                                    </p>}
                                    {transactions[card.cardNo].error && <p>{transactions[card.cardNo].error}
                                    </p>}
                                </div>}
                            </div>
                        })}
                    </div>
                    <h3 className="ui white header"><FormattedMessage id='market.preSale2Header'/></h3>
                    <p className="gray"><FormattedMessage id='market.preSale2Text'/></p>
                    <div
                        className="ui center aligned stackable grid">
                        {marketCards.map(card => {
                            return <div className='ui five wide column center aligned' key={card.cardNo}>
                                <h3 className="ui white header">{card.cardNameJa}</h3>
                                <img src={card.imageURL}
                                     alt={card.cardNameJa}
                                     className='ui fluid center aligned image'/>
                                <div className='ui gray text'>
                                    <FormattedMessage id='market.price'/>:{card.priceEther}ETH
                                    <br/>
                                </div>
                                {isBlockChainDataLoaded &&
                                <div className='ui gray text'>
                                    <FormattedMessage
                                        id='market.remains'/>:{card.remains.length}/<FormattedMessage
                                    id='market.totalSupply'/>:{card.tokens.length}</div>}
                                <button
                                    className={"ui large primary center aligned button " + (!isBlockChainDataLoaded || (card.remains && card.remains.length === 0) && "disabled")}
                                    onClick={async e => {
                                        await this.onPurchase(card.cardNo)
                                    }}>
                                    <FormattedMessage id='market.purchase'/>
                                </button>
                                {transactions[card.cardNo] &&
                                <div
                                    className={"ui message " + (transactions[card.cardNo].status === 'processing' ? 'warning' :
                                        transactions[card.cardNo].status === 'success' ? 'positive' : 'negative')}>
                                    <i className="close icon" onClick={this.onCloseMessage}/>
                                    <div className="header">
                                        transaction {transactions[card.cardNo].status}
                                    </div>
                                    {transactions[card.cardNo].transactionHash && <p>confirm following transaction:
                                        <a href={'https://etherscan.io/tx/' + transactions[card.cardNo].transactionHash}>see
                                            in etherscan</a>
                                    </p>}
                                    {transactions[card.cardNo].error && <p>{transactions[card.cardNo].error}
                                    </p>}
                                </div>}
                            </div>
                        })}
                    </div>
                    <h3 className="ui white header"><FormattedMessage id='market.preSale3Header'/></h3>
                    <p className="gray"><FormattedMessage id='market.preSale3Text'/></p>
                    <h3 className="ui white header"><FormattedMessage id='market.preSale4Header'/></h3>
                    <p className="gray"><FormattedMessage id='market.preSale4Text'/></p>
                    {intl.locale === "ja" && <div>
                        <h2 className="ui white header">購入方法</h2>
                        <div className='ui stackable grid'>
                            <div className='eight wide column'>
                                <h3 className="ui white header">1.MetaMaskを使う(Google Chromeをお使いのお客様)</h3>
                                <p className="ui gray text"><a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=ja">MetaMask</a>をChrome
                                    extensionに追加して、MetaMaskにログインした状態でこのページをご覧ください。</p>
                                <img className='ui centered image' alt="use MetaMask"
                                     src='https://d1wwbe44qvngmh.cloudfront.net/images/metamask-click-here.png'/>
                            </div>
                            <div className='eight wide column'>
                                <h3 className="ui white header">2.HBWalletを使う</h3>
                                <p className="ui gray text"><a href="https://www.hb-wallet.com/download-jp">HB
                                    Wallet</a>をダウンロードして、Wallet内蔵ブラウザからこのページをご覧ください。
                                </p>
                                <br/>
                                <img className='ui centered image' alt="use hbwallet"
                                     src='https://d1wwbe44qvngmh.cloudfront.net/images/hb-Wallet-frame.png'/>
                            </div>
                        </div>
                    </div>}
                </div>
                <Footer/>
            </div>
        );
    }

    onCloseMessage() {
        this.setState({transactions: null})
    }

    async onPurchase(cardNo) {
        const {transactions} = this.state
        if (!BlockChainApi.isBlockchainLoaded()) {
            await BlockChainApi.loadBlockChain();
        }
        if(BlockChainApi.isBlockchainLoaded()) {
            const tokens = await BlockChainApi.listTokenIdsByCardNo(cardNo);
            let tokenPrice = 0;
            console.log('tokens:', tokens)
            const remainingTokens = await asyncFilter(tokens, async token => {
                console.log('token:', token)
                const price = Number.parseInt(await BlockChainApi.getPriceByTokenId(token));
                console.log('price:', price)
                console.log(price !== 0)
                tokenPrice = tokenPrice !== 0 ? tokenPrice : price;
                return price !== 0
            })
            console.log('remaining tokens:', remainingTokens);
            try {
                await BlockChainApi.purchase(remainingTokens[0], tokenPrice,
                    transactionHash => {
                        this.setState({
                            transactions: {[cardNo]: {status: 'processing', transactionHash: transactionHash}},
                        })
                    },
                    receipt => {
                        this.setState({
                            transactions: {[cardNo]: {status: 'success', transactionHash: receipt.transactionHash}},
                        })
                    },
                    (error, receipt) => {
                        if (!transactions[cardNo]) {
                            //User denied transaction
                            return
                        }
                        this.setState({
                            transactions: {
                                [cardNo]: {
                                    ...transactions[cardNo],
                                    status: 'error',
                                    error: error.toString()
                                }
                            }
                        })
                    });
            } catch (e) {
                // user denied transaction
                console.error(e)
            }
        } else{
            //TODO: metamaskをインストールさせる
        }
    }
}

async function asyncFilter(array, asyncCallback) {
    const bits = await Promise.all(array.map(asyncCallback));
    return array.filter((_, i) => bits[i]);
}

async function asyncMap(array, operation) {
    return Promise.all(array.map(async item => await operation(item)))
}

export default Market;
