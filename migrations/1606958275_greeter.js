const greeter = artifacts.require("./contracts/greeter.sol");

module.exports = function(deployer) {
  deployer.deploy(greeter, "Hello, World!");
};
