import {blockchainSetUp, cardContract, sellContract, customerAddress} from "../common/web3Provider";

export default class BlockChainApi {
    static isBlockchainLoaded() {
        return !!customerAddress;
    }

    static async loadBlockChain() {
        await blockchainSetUp();
    }

    static async listTokenIdsByCardNo(cardNo) {
        return await cardContract.methods.getTokenIdsByCardNo(cardNo).call()
    }

    static async getPriceByTokenId(tokenId) {
        return (await sellContract.methods.getPrice(tokenId).call())
    }

    static async purchase(tokenId, price,onTransactionHash,onReceipt,onError) {
        sellContract.methods.buy(tokenId).send({value: price, from: customerAddress})
            .on('transactionHash',onTransactionHash)
            .on('receipt',onReceipt)
            .on('error',onError)
    }
}
