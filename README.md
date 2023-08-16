# 1btc NFT Rewards

A simple Stacks contract template that mints an NFT to a list of addresses during deployment.

One special twist: the URI for the NFT is an Ordinal inscription!

Adheres to [SIP: Standard URI Definition for Bitcoin Ordinal Inscriptions](https://github.com/stacksgov/sips/pull/150).

## Directories

`/frontend` contains a simple website to walk through the poll creation process, and could facilitate creating these contracts using the Clarity template.

`/backend` contains the Clarity contract, tests, and Clarinet environment for minting the NFT.

## Frontend

To run the application locally:

```bash
cd frontend
npm install
npm start
```

## Backend

To check and test the contracts:

```bash
cd backend
clarinet check
clarinet test
```
