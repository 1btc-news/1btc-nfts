import {
  Clarinet,
  Tx,
  Chain,
  Account,
  types,
} from "https://deno.land/x/clarinet@v1.7.1/index.ts";
import { assertEquals } from "https://deno.land/std@0.170.0/testing/asserts.ts";

Clarinet.test({
  name: "Transfer is disabled and returns an error",
  async fn(chain: Chain, accounts: Map<string, Account>) {
    // arrange: set up the chain, state, and other required elements
    const deployer = accounts.get("deployer")!;
    const wallet_1 = accounts.get("wallet_1")!;
    const wallet_2 = accounts.get("wallet_2")!;

    // act: perform actions related to the current test
    const block = chain.mineBlock([
      Tx.contractCall(
        // TODO: see why name doesn't update with Clarinet
        "poll-1",
        "transfer",
        [
          types.uint(1), // token-id
          types.principal(wallet_1.address), // sender
          types.principal(wallet_2.address), // recipient
        ],
        deployer.address
      ),
    ]);

    // assert: review returned data, contract state, and other requirements
    assertEquals(block.receipts.length, 1);
    block.receipts[0].result.expectErr().expectUint(1000);
  },
});
