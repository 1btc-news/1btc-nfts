import {
  Box,
  ListItem,
  OrderedList,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useAtomValue } from "jotai";
import { stxAddressAtom } from "../../constants";
import ConnectWallet from "../verification-flow/connect-wallet";

function Content() {
  const stxAddress = useAtomValue(stxAddressAtom);

  return (
    <Box width="100%" maxW="1200px">
      {stxAddress ? <Landing /> : <ConnectWallet />}
    </Box>
  );
}

function Landing() {
  return (
    <Tabs variant="enclosed" colorScheme="orange">
      <TabList>
        <Tab>Home</Tab>
        <Tab>List of Polls</Tab>
        <Tab>View a Poll</Tab>
        <Tab>Create a Poll</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Text pb={4}>Manage 1btc polls and mint NFTs for participants.</Text>
          <Text pb={4}>WIP - main goals listed below</Text>
          <OrderedList ms={8}>
            <ListItem>Create a new poll</ListItem>
            <ListItem>Paste poll into console</ListItem>
            <ListItem>Inscribe image for poll</ListItem>
            <ListItem>Record poll votes</ListItem>
            <ListItem>Inscribe poll results</ListItem>
            <ListItem>Deploy NFT contract 🪂</ListItem>
            <ListItem>Share results 𝕏 style</ListItem>
          </OrderedList>
        </TabPanel>
        <TabPanel>
          <ListPolls />
        </TabPanel>
        <TabPanel>
          <ViewPoll />
        </TabPanel>
        <TabPanel>
          <CreatePoll />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

function ListPolls() {
  return <Text>List of Polls</Text>;
}

function ViewPoll() {
  return <Text>View Poll</Text>;
}

function CreatePoll() {
  return <Text>Create Poll</Text>;
}

export default Content;
