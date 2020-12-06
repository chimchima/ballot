const helloworld = artifacts.require("./HelloWorld.sol");

module.exports = function(deployer) {
  deployer.deploy(helloworld, "I love truffle!");
};
