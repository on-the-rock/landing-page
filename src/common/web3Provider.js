import Web3 from "web3";
import settings from "./settings";

let web3js;
let cardContract;
let customerAddress;
let sellContract;
const blockchainSetUp = async function () {
    if (window.ethereum) {
        console.log('connect web3');
        web3js = new Web3(window.ethereum);
        window.web3 = web3js;
        try {
            // Request account access if needed
            customerAddress = (await window.ethereum.enable())[0]
        } catch (error) {
            // User denied account access...
            console.log('customer denied access')
        }
    } else if (window.web3) {
        console.log('detect web3 provider');
        web3js = new Web3(window.web3.currentProvider);

        customerAddress = window.web3.eth.defaultAccount||web3js.eth.defaultAccount||web3js.eth.accounts[0];
    } else {
        //TODO: metamaskのインストールを促すようにしたいが、このタイミングじゃなくていいかも。Market行ったタイミング等でいい
    }
    if (web3js) {
        cardContract = new web3js.eth.Contract(settings.blockChain.cardContract.ABI, settings.blockChain.cardContract.address);
        sellContract = new web3js.eth.Contract(settings.blockChain.sellContract.ABI, settings.blockChain.sellContract.address);
    }
}
export {cardContract, web3js, customerAddress, sellContract, blockchainSetUp};
