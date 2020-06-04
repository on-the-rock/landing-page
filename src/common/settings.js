import cardContractABI from "./contracts/cardContractABI";
import sellContractABI from "./contracts/sellContractABI";
import TRC21ABI from "./contracts/TRC21ABI";

const settings = {
    blockChain:{
        cardContract: {
            ABI: cardContractABI,
            // address: '0xdcc0ca8ffe623c2ee98055eba7b0e0bad0ae39b0' //Main net
            address: '0xDa4d690d3F072404d5a9E7F98BDa8f7EeF98457a' //Tomotest address
        },
        sellContract:{
            ABI: sellContractABI,
            // address: '0xcb2a60adc6c0c9065c5b3963b873b65c86c8d4f2' //Main net
            address:'0xe8374bee365ffa36ce1fde06c84a3a3fe532d31c' // Tomotest net
        },
        pantoPointContract:{
            ABI: TRC21ABI,
            address: "0xb92a1179518a0ec67d2443131db1634320bc03b2" // Tomotest net
        },
        pantoLightContract:{
            ABI: TRC21ABI,
            address: "0x1ef0ea1cff3792e5e83d3b42d828ff2644706dcf" // Tomotest net
        }
    }
};
export default settings
