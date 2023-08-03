import {
  Box,
  Link,
  ListItem,
  OrderedList,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Table,
  TableContainer,
  Tabs,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useAtomValue } from "jotai";
import { pollList, stxAddressAtom } from "../../constants";
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
  return (
    <TableContainer>
      <Table size="sm" variant="simple" colorScheme="orange" overflowX="hidden">
        <Thead>
          <Tr>
            <Th isNumeric>#</Th>
            <Th>Status</Th>
            <Th>Image</Th>
            <Th>Title</Th>
            <Th>Yes Votes</Th>
            <Th>No Votes</Th>
            <Th>Total USD</Th>
            <Th isNumeric>Inscription #</Th>
          </Tr>
        </Thead>
        <Tbody>
          {pollList
            .sort((a, b) => b.id - a.id)
            .map((poll) => (
              <Tr key={poll.id}>
                <Td isNumeric>{poll.id}</Td>
                <Td>{poll.status}</Td>
                <Td>{poll.image}</Td>
                <Td>{poll.title.substring(0, 50)}...</Td>
                <Td isNumeric>{poll.yesVotes}</Td>
                <Td isNumeric>{poll.noVotes}</Td>
                <Td isNumeric>${poll.totalUSD}</Td>
                <Td isNumeric>
                  <Link
                    isExternal
                    href={
                      poll.inscriptionNumber
                        ? `https://1btc.news/view-news?id=${poll.inscriptionNumber}`
                        : "#"
                    }
                  >
                    {poll.inscriptionNumber ? poll.inscriptionNumber : "TBD"}
                  </Link>
                </Td>
              </Tr>
            ))}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th isNumeric>#</Th>
            <Th>Status</Th>
            <Th>Image</Th>
            <Th>Title</Th>
            <Th>Yes Votes</Th>
            <Th>No Votes</Th>
            <Th>Total USD</Th>
            <Th isNumeric>Inscription #</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
}

function ViewPoll() {
  return <Text>View Poll</Text>;
}

function CreatePoll() {
  return <Text>Create Poll</Text>;
}

export default Content;
