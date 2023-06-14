const Web3 = require("web3");
const BigNumber = require('bignumber.js');
const Ether = new BigNumber(10e+17);
const EthUtil = require('ethereumjs-util');

const rpcURL = ""

const web3 = new Web3(rpcURL)



const bip39 = require('bip39')
const HDWallet = require('ethereum-hdwallet')

async function getAdress(mnemonic) {
    const seed = await bip39.mnemonicToSeed(mnemonic)//根据助记词生成seed
    const hdwallet = HDWallet.fromSeed(seed)//通过seed获取hdWallet
    const key = hdwallet.derive("m/44' /60' /0/0")//源于，得自。设置地址路径
    console.log("PrivateKey = " + key.getPrivateKey().toString('hex'))//私钥
}

getAdress()


