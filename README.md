# bank_tech_test

## Challenge

In this challenge, I will be doing a tech test to practice producing high quality code, OO design and TDD skills.

## Specification

#### Requirements

- You should be able to interact with your code via a REPL like IRB or Node. (You don't need to implement a command line interface that takes input from STDIN.)
- Deposits, withdrawal.
- Account statement (date, amount, balance) printing.
- Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Getting started

git clone the repo

### Setup

Whilst in the root directory:

Enter 'npm install' in the terminal to install the dependencies.

### Test Code

Run Jest in the terminal with the 'jest --coverage' command from the root directory to test the code and check test coverage.

### How to use

Whilst in the root directory, change directory via 'cd ./src'

1. Guide: Type and enter 'node' from your terminal
2. Command: const bankAccount = require('./bankAccount')
3. Command: const account = new bankAccount();
4. Command Guide - To deposit money: account.deposit(NUMBER)
5. Command Guide - To withdraw money: account.withdrawal(NUMBER)
6. Command Guide - To print account statement: acccount.printStatement()
