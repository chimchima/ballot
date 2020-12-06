const greeter = artifacts.require("greeter");

module.exports = function(deployer) {
  deployer.deploy(greeter);
};
