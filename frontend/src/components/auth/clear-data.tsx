import { useAuth } from "@micro-stacks/react";
import { useSetAtom } from "jotai";
import {
  accountDataAtom,
  activePollAtom,
  activeTabAtom,
  insufficientBalanceToggleAtom,
  sentDustToggleAtom,
  signatureDataAtom,
  signatureMsgAtom,
  stxAddressAtom,
} from "../../constants";
import { Button } from "@chakra-ui/react";
import { RESET } from "jotai/utils";

function ClearData(props: { variant?: string }) {
  const { signOut } = useAuth();
  const setActivePoll = useSetAtom(activePollAtom);
  const setActiveTab = useSetAtom(activeTabAtom);
  const setStxAddress = useSetAtom(stxAddressAtom);
  const setAccountData = useSetAtom(accountDataAtom);
  const setSignatureMsg = useSetAtom(signatureMsgAtom);
  const setSignatureData = useSetAtom(signatureDataAtom);
  const setSentDustToggle = useSetAtom(sentDustToggleAtom);
  const setInsufficientBalanceToggle = useSetAtom(
    insufficientBalanceToggleAtom
  );

  return (
    <Button
      variant={props.variant || "1btc-orange"}
      title="Clear Data"
      onClick={() => {
        // clear all locally stored data
        setActivePoll(RESET);
        setActiveTab(RESET);
        setStxAddress(RESET);
        setAccountData(RESET);
        setSignatureMsg(RESET);
        setSignatureData(RESET);
        setSentDustToggle(RESET);
        setInsufficientBalanceToggle(RESET);
        // sign out of the wallet
        try {
          signOut();
        } catch (error) {
          console.error("Error while signing out: ", error);
        }
      }}
    >
      Clear Data
    </Button>
  );
}

export default ClearData;
