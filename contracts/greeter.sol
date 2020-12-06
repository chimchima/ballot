pragma solidity >=0.4.22 <0.8.0;


contract greeter {
  
  string public greeting = "Hello, World!";

  function set(string memory _greeting) public {
    greeting = _greeting;
  }

  function get() public view returns(string memory _greeting) {
    _greeting = greeting;
  }
}
