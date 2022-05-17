import hre, { ethers } from "hardhat";
import { NFT1155__factory } from "../typechain-types/factories/contracts/NFT1155__factory";

async function main() {
  const delay = (ms: any) => new Promise((res) => setTimeout(res, ms));

  const Nft1155 = (await ethers.getContractFactory('NFT1155')) as NFT1155__factory;
  const nft1155 = await Nft1155.deploy();

  await nft1155.deployed();

  console.log("Nft 1155 deployed to:", nft1155.address);

  await delay(35000);

  await hre.run("verify:verify", {
    address: nft1155.address,
    constructorArguments: [],
  });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
