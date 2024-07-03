import { ethers } from "hardhat";
import compiledContract from "../artifacts/contracts/Awesome.sol/Awesome.json";

let allocatedToken: number = 0.1 * 10 ** 18;
let allocatedBigIntToken = BigInt(allocatedToken);

async function distribute(addresses: string[]) {
  const [caller] = await ethers.getSigners();

  const awesomeToken = new ethers.Contract(
    process.env.DEPLOYED_TOKEN_ADDRESS as string,
    compiledContract.abi,
    caller
  );

  console.log("Caller address", caller.address);

  for (const address of addresses) {
    const tx = await awesomeToken.transfer(address, allocatedBigIntToken);
    console.log("Successfully send a token, tx hash:", tx.hash);
  }
}

distribute([
  process.env.RECIPIENT_ADDRESS as string,
  process.env.RECIPIENT_ADDRESS as string,
])
  .then(() => process.exit(0))
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
