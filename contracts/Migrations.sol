// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Migrations {
    address public owner;
    uint public last_completed_migration;

    event MigrationCompleted(uint completed); // Event to log completed migrations

    modifier restricted() {
        require(msg.sender == owner, "You are not the owner!"); // Ensure the caller is the owner
        _; // Continue with function execution if condition is met
    }

    constructor() {
        owner = msg.sender; // Set the deployer as the owner
    }

    function setCompleted(uint completed) public restricted {
        last_completed_migration = completed; // Set the last completed migration
        emit MigrationCompleted(completed); // Emit event when migration is completed
    }
} 
