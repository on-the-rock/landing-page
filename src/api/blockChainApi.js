import {
    blockchainSetUp,
    cardContract,
    sellContract,
    customerAddress,
    pantoPointContract,
    pantoLightContract,
    web3js
} from "../common/web3Provider";
import settings from "../common/settings";

export default class BlockChainApi {
    static isBlockchainLoaded() {
        return !!customerAddress;
    }

    static async loadBlockChain() {
        await blockchainSetUp();
    }

    static async listTokenIdsByCardNo(cardNo) {
        console.log("list token")
        return await cardContract.methods.getTokenIdsByCardNo(cardNo).call()
    }

    static async getPriceByTokenId(tokenId) {
        console.log("getPriceByTokenId")
        return (await sellContract.methods.getPrice(tokenId).call())
    }

    static async purchase(tokenId, price,onTransactionHash,onReceipt,onError) {
        sellContract.methods.buy(tokenId).send({value: price, from: customerAddress})
            .on('transactionHash',onTransactionHash)
            .on('receipt',onReceipt)
            .on('error',onError)
    }
    static async purchaseByPantoPoint(tokenId, price,onTransactionHash,onReceipt,onError) {
        const pantoPointRate = await sellContract.methods.pantoPointRate().call();
        const pantoPointRateDevide = await sellContract.methods.pantoPointRateDevide().call();
        const pantoPointPrice = price * pantoPointRate / pantoPointRateDevide;
        console.log("price:", pantoPointPrice);
        await pantoPointContract.methods.approve(settings.blockChain.sellContract.address, pantoPointPrice).send({from: customerAddress});
        await sellContract.methods.buyByPontoPoint(tokenId,pantoPointPrice).send({from: customerAddress}).on('transactionHash',onTransactionHash)
          .on('receipt',onReceipt)
          .on('error',onError)
    }
    static async purchaseByPantoLight(tokenId, price,onTransactionHash,onReceipt,onError) {
        const pantoLightRate = await sellContract.methods.pantoLightRate().call();
        const pantoLightRateDevide = await sellContract.methods.pantoLightRateDevide().call();
        const pantoLightPrice = price * pantoLightRate / pantoLightRateDevide;
        console.log("price:", pantoLightPrice);
        await pantoLightContract.methods.approve(settings.blockChain.sellContract.address, pantoLightPrice).send({from: customerAddress});
        await sellContract.methods.buyByPontoPoint(tokenId,pantoLightPrice).send({from: customerAddress}).on('transactionHash',onTransactionHash)
          .on('receipt',onReceipt)
          .on('error',onError)
    }
}
