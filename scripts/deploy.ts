import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying a contract with an account:", deployer.address);

  const weiAmount = await ethers.provider.getBalance(deployer.address);
  const weiAmountInString = weiAmount.toString();
  console.log("Account balance:", await ethers.formatEther(weiAmountInString));

  const Awesome = await ethers.getContractFactory("Awesome");
  const awesome = await Awesome.deploy();

  console.log("Token Address", await awesome.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.log("Error found", err);
    process.exit(1);
  });
