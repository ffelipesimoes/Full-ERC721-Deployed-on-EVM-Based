import { ethers, run } from "hardhat";

async function deployContract(): Promise<string> {
  const provider = ethers.provider;
  const NFT = await ethers.getContractFactory("NFT");
  const nft = await NFT.deploy();
  await nft.deployed();

  const txHash = nft.deployTransaction.hash;
  const txReceipt = await provider.getTransactionReceipt(txHash);
  const contractAddress = txReceipt.contractAddress;
  console.log("Contract deployed to address:", contractAddress);
  console.log(`Check the contract here: https://mumbai.polygonscan.com/address/${contractAddress}`);

  return contractAddress;
}

async function main(): Promise<void> {
  const contractAddress = await deployContract();
  console.log("Verifying contract on etherscan...");


  await new Promise((resolve) => setTimeout(resolve, 30000));

  // Automacally verify the contract
  await run("verify:verify", {
    address: contractAddress,
    constructorArguments: [] 
  });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
