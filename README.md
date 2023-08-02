# 1btc Poll NFT Rewards

A simple Stacks contract template that mints an NFT to a list of addresses during deployment.

One special twist: the URI for the NFT is an inscription! **More coming soon...**

## Directories

`/frontend` contains a simple website to walk through the poll creation process.

`/backend` contains the Clarity contract, tests, and Clarinet environment.

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
