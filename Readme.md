# Gitcoin Grants SubGraph

A TheGraph's subgraph showcasing all donations executed in Gitcoin Grants.

# Contracts

### Bulk Checkout
BulkCheckout.sol improves the checkout UX and reduces gas costs by enabling users to donate to multiple grants with one L1 transaction (ignoring the required ERC20 approval transactions). This contract has been deployed on both Mainnet and Rinkeby at 0x7d655c57f71464B6f83811C55D84009Cd9f5221C and was compiled with Solidity 0.6.7.

### Batch ZkSync Deposit
The deposit functions on the zkSync contract only allow users to deposit one currency per transaction. This means if a user wants to use zkSync to donate, for example, ETH, USDC, and DAI to different grants, three transactions would be required to deposit all three currencies into zkSync. BatchZkSyncDeposit.sol improves the UX of this process and reduces gas costs by batching these deposit calls, so all three deposits are executed with just one L1 transaction (ignoring the required ERC20 approval transactions).

This contract has been deployed on both Mainnet and Rinkeby at 0x9D37F793E5eD4EbD66d62D505684CD9f756504F6 and was compiled with Solidity 0.6.12.

[more info](https://github.com/gitcoinco/BulkTransactions)
---
[@codingsh Grants](https://gitcoin.co/grants/646/gitcoin-developer-grant-codignsh)