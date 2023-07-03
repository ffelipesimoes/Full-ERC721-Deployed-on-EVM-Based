import { HardhatUserConfig } from 'hardhat/config';
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan"

import dotenv from 'dotenv';

dotenv.config();

const PRIVATE_KEY: string = process.env.PRIVATE_KEY as string;

const config: HardhatUserConfig = {
  defaultNetwork: "PolygonMumbai",
  
  networks: {
    hardhat: {
    },
     PolygonMumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: {
      polygonMumbai: process.env.POLYGONSCAN_API_KEY ?? ''
    }
  },
  solidity: {
    version: "0.8.12",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  
}

export default config;