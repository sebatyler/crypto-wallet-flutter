// npm install --save-dev @nomiclabs/hardhat-ethers 'ethers@^5.0.0'

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    const weiAmount = (await deployer.getBalance()).toString();

    console.log("Account balance:", (await ethers.utils.formatEther(weiAmount)));

    const Token = await ethers.getContractFactory("NyxCoin");
    const token = await Token.deploy();

    console.log("Token address:", token.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

// npx hardhat run scripts/deploy.js --network rinkeby