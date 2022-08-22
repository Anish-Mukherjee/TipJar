const hre = require("hardhat")

const main = async() => {
  const tipjar = await hre.ethers.getContractFactory("TipJar")
  const TipJar = await tipjar.deploy()
  await TipJar.deployed()

  console.log("Tip Jar contract deployed at : ",TipJar.address)
}

const runMain = async() => {
  try{
    await main()
    process.exit(0)
  }catch(err){
    console.error(err)
    process.exit(1)
  }
}

runMain()