import { Box, Text } from "@chakra-ui/react";
import SignIn from "../auth/sign-in";

// active step = 0
// uses sign-in.tsx to progress to next step

function ConnectWallet() {
  return (
    <Box textAlign="center">
      <Text mb={8}>Wallet Connection Required</Text>
      <SignIn />
    </Box>
  );
}

export default ConnectWallet;
