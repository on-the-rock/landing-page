import Web3 from "web3";
import settings from "./settings";

let web3js;
let cardContract;
let customerAddress;
let sellContract;
let pantoPointContract;
let pantoLightContract;
const blockchainSetUp = async function () {
    console.log("set up");
    if (window.tomochain) {
        web3js = new Web3(window.tomochain);
        window.web3 = web3js;
        try {
            // Request account access if needed
            customerAddress = (await window.tomochain.enable())[0];
        } catch (error) {
            // User denied account access...
            console.log("customer denied access");
        }
    } else if (window.tomoWeb3) {
        console.log("detect web3 provider");
        web3js = new Web3(window.tomoWeb3.currentProvider);
        customerAddress = (await web3js.eth.getAccounts())[0];
    } else if (window.web3) {
        console.log("detect web3 provider");
        web3js = new Web3(window.web3.currentProvider);
        customerAddress = (await web3js.eth.getAccounts())[0];}
    else {
        //TODO: metamaskのインストールを促すようにしたいが、このタイミングじゃなくていいかも。Market行ったタイミング等でいい
        return;
    }
    if (web3js) {
        cardContract = new web3js.eth.Contract(settings.blockChain.cardContract.ABI, settings.blockChain.cardContract.address);
        sellContract = new web3js.eth.Contract(settings.blockChain.sellContract.ABI, settings.blockChain.sellContract.address);
        pantoPointContract = new web3js.eth.Contract(settings.blockChain.pantoPointContract.ABI, settings.blockChain.pantoPointContract.address);
        pantoLightContract = new web3js.eth.Contract(settings.blockChain.pantoLightContract.ABI, settings.blockChain.pantoLightContract.address);

    }
}
export {cardContract, web3js, customerAddress, sellContract, pantoPointContract, pantoLightContract, blockchainSetUp};
