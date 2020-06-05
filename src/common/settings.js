import cardContractABI from "./contracts/cardContractABI";
import sellContractABI from "./contracts/sellContractABI";
import TRC21ABI from "./contracts/TRC21ABI";

const settings = {
    //TODO: make env file
    blockChain:{
        cardContract: {
            ABI: cardContractABI,
            address: '0xdcc0ca8ffe623c2ee98055eba7b0e0bad0ae39b0' //Main net
            // address: '0xDa4d690d3F072404d5a9E7F98BDa8f7EeF98457a' //Tomotest address
        },
        sellContract:{
            ABI: sellContractABI,
            address: '0xd2edeb5f6ad8aea77249ac624b1d486605979e46' //Main net
            // address:'0xe8374bee365ffa36ce1fde06c84a3a3fe532d31c' // Tomotest net
        },
        pantoPointContract:{
            ABI: TRC21ABI,
            address: "0x8b10de2f93Ed216386F7Ee98d118A6A681241326" // Main
            // address: "0xb92a1179518a0ec67d2443131db1634320bc03b2" // Tomotest net
        },
        pantoLightContract:{
            ABI: TRC21ABI,
            address:"0x161131A7680010C21AEd590C066ad69044c56e74" //Main
            // address: "0x1ef0ea1cff3792e5e83d3b42d828ff2644706dcf" // Tomotest net
        }
    }
};
export default settings
