//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract check{
    uint public balance =100;

    function withdraw(uint amount) public view returns(string memory){
        if(amount <= balance){
            return "Withdrawal Allowed";
        }
        else{
            return "Insufficient Balance";
        }

        }

    }
