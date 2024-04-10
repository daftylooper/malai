// SPDX-License_Identifier: MIT
//SPDX-License-Identifier: UNLICENCED

pragma solidity ^0.8.25;

contract Helloworld{
	string private value;
	function get(string memory newvalue) public{
		value = newvalue;
	}
	function set() public view returns(string memory){
		return value;
	}
}