const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying SimpleRegistry contract with the account:", deployer.address);

  const SimpleRegistry = await ethers.getContractFactory("SimpleRegistry");
  const defaultName = "DefaultEntity";
  const defaultAge = 25;
  const simpleRegistry = await SimpleRegistry.deploy(defaultName, defaultAge);

  console.log("SimpleRegistry deployed to:", simpleRegistry.target);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });