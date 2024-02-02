# SimpleRegistry Smart Contract

This Solidity smart contract, named `SimpleRegistry`, a registry to store and manage information about an entity. It also allows for the storage and retrieval of the entity's name and age.


## Overview

The `SimpleRegistry` contract provides basic functionalities to:

- Set the initial values of the entity's name and age during deployment.
- Update the entity's name.
- Update the entity's age.
- Retrieve the entity's details, including name and age.

## Getting Started

### Prerequisites

To interact with the smart contract, you will need:

- A development environment with Solidity compiler version ^0.8.19.

### Installation

1. Clone this repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd <project-directory>
   ```

3. Compile the Solidity contract using your preferred development environment.

## Usage

### Constructor

The contract's constructor is used to initialize the entity's name and age during deployment. It takes two parameters: `name` (string) and `age` (uint).

```solidity
constructor(string memory name, uint age)
```

### updateName

The `updateName` function allows updating the entity's name. It takes a new name as a parameter.

```solidity
function updateName(string memory newName) public
```

### updateAge

The `updateAge` function allows updating the entity's age. It takes a new age as a parameter.

```solidity
function updateAge(uint newAge) public
```

### getEntityDetails

The `getEntityDetails` function is a view function that retrieves the entity's current name and age.

```solidity
function getEntityDetails() public view returns (string memory name, uint age)
```

