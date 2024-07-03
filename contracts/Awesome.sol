// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Awesome is ERC20 {
    uint constant _initial_supply = 100 * (10 ** 18);

    constructor() ERC20("Awesome", "AW") {
        _mint(msg.sender, _initial_supply);
    }
}
