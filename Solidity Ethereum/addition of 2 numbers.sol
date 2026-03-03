//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AddingTwoNumbers{
    uint public num1;
    uint public num2;

    //function to set values(modifies state)
    function setNumbers(uint _a,uint _b) public{
        num1 = _a;
        num2 = _b;
    }
    //view function to return result(does not modify state)
    function getResult() public view returns(uint){
        return num1+num2;
    }
}