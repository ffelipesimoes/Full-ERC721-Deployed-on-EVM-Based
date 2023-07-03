import { ethers } from "hardhat";

const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS!;
const META_DATA_URL = process.env.META_DATA_URL!;

async function mintNFT(contractAddress: string, metaDataURL: string): Promise<void> {
  const NFT = await ethers.getContractFactory("NFT");
  const [owner] = await ethers.getSigners();
  await NFT.attach(contractAddress).mintNFT(owner.address, metaDataURL);
  console.log("NFT minted to:", owner.address);
}

mintNFT(CONTRACT_ADDRESS, META_DATA_URL)
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
