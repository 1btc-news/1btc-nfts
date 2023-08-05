import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  IconButton,
  Input,
  Link,
  ListItem,
  OrderedList,
  SimpleGrid,
  Stack,
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
  useControllableState,
} from "@chakra-ui/react";
import { useAtom, useAtomValue } from "jotai";
import {
  activePollAtom,
  activeTabAtom,
  pollList,
  stxAddressAtom,
} from "../../constants";
import ConnectWallet from "../verification-flow/connect-wallet";
import { FiEdit, FiSearch, FiX } from "react-icons/fi";

function Content() {
  const stxAddress = useAtomValue(stxAddressAtom);

  return (
    <Box width="100%" maxW="1200px">
      {stxAddress ? <Landing /> : <ConnectWallet />}
    </Box>
  );
}

function Landing() {
  const [activePoll, setActivePoll] = useAtom(activePollAtom);
  const [activeTab, setActiveTab] = useAtom(activeTabAtom);

  return (
    <Tabs
      variant="enclosed"
      colorScheme="orange"
      onChange={(index) => setActiveTab(index)}
      defaultIndex={activeTab}
      isFitted
    >
      <TabList>
        <Tab>Home</Tab>
        <Tab>List of Polls</Tab>
        <Tab>View a Poll</Tab>
        <Tab>Create a Poll</Tab>
        <Tab isDisabled fontSize="sm">
          Active Tab: {activeTab}
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Stack
            direction="row"
            alignContent="center"
            justifyContent="space-between"
            mb={8}
          >
            <Heading>Home</Heading>
            <Text color="gray.400" fontSize="sm">
              Active Poll ID: {activePoll ? activePoll : "none"}{" "}
              <IconButton
                aria-label="Clear active poll"
                title="Clear active poll"
                size="sm"
                color="orange.500"
                bg="transparent"
                icon={<FiX />}
                onClick={() => setActivePoll(null)}
              />
            </Text>
          </Stack>
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
  const [activePoll, setActivePoll] = useAtom(activePollAtom);

  return (
    <>
      <Stack
        direction="row"
        alignContent="center"
        justifyContent="space-between"
        mb={8}
      >
        <Heading>List of Polls</Heading>
        <Text color="gray.400" fontSize="sm">
          Active Poll ID: {activePoll ? activePoll : "none"}{" "}
          <IconButton
            aria-label="Clear active poll"
            title="Clear active poll"
            size="sm"
            color="orange.500"
            bg="transparent"
            icon={<FiX />}
            onClick={() => setActivePoll(null)}
          />
        </Text>
      </Stack>
      <TableContainer>
        <Table
          size="sm"
          variant="simple"
          colorScheme="orange"
          overflowX="hidden"
        >
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
              <Th>Actions</Th>
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
                  <Td whiteSpace="normal">{poll.title}</Td>
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
                  <Td>
                    <IconButton
                      aria-label="Edit"
                      onClick={() => setActivePoll(poll.id)}
                      icon={<FiEdit />}
                    />
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
              <Th>Actions</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </>
  );
}

function ViewPoll() {
  const [activePoll, setActivePoll] = useAtom(activePollAtom);
  const [pollId, setPollId] = useControllableState({ defaultValue: "" });

  if (activePoll) {
    const poll = pollList.find((poll) => poll.id === activePoll);
    if (poll) {
      return (
        <Box>
          <Stack
            direction="row"
            alignContent="center"
            justifyContent="space-between"
            mb={8}
          >
            <Heading>View a Poll</Heading>
            <Text color="gray.400" fontSize="sm">
              Active Poll ID: {activePoll ? activePoll : "none"}{" "}
              <IconButton
                aria-label="Clear active poll"
                title="Clear active poll"
                size="sm"
                color="orange.500"
                bg="transparent"
                icon={<FiX />}
                onClick={() => setActivePoll(null)}
              />
            </Text>
          </Stack>
          <SimpleGrid columns={2} spacing={4} mb={8} templateColumns="auto 1fr">
            <Text fontWeight="bold">Title</Text>
            <Text>{poll.title}</Text>
            <Text fontWeight="bold">ID</Text>
            <Text>{poll.id}</Text>
            <Text fontWeight="bold">Status</Text>
            <Text>{poll.status}</Text>
            <Text fontWeight="bold">Image</Text>
            <Text>{poll.image}</Text>
            <Text fontWeight="bold">Yes Votes</Text>
            <Text>{poll.yesVotes}</Text>
            <Text fontWeight="bold">No Votes</Text>
            <Text>{poll.noVotes}</Text>
            <Text fontWeight="bold">Total USD</Text>
            <Text>${poll.totalUSD}</Text>
            <Text fontWeight="bold">Inscription #</Text>
            <Text>
              <Link
                color="orange.500"
                isExternal
                href={
                  poll.inscriptionNumber
                    ? `https://1btc.news/view-news?id=${poll.inscriptionNumber}`
                    : "#"
                }
              >
                {poll.inscriptionNumber ? poll.inscriptionNumber : "TBD"}
              </Link>
            </Text>
          </SimpleGrid>
        </Box>
      );
    }
    return (
      <Box>
        <Stack
          direction="row"
          alignContent="center"
          justifyContent="space-between"
          mb={8}
        >
          <Heading>View a Poll</Heading>
          <Text color="gray.400" fontSize="sm">
            Active Poll ID: {activePoll ? activePoll : "none"}{" "}
            <IconButton
              aria-label="Clear active poll"
              title="Clear active poll"
              size="sm"
              color="orange.500"
              bg="transparent"
              icon={<FiX />}
              onClick={() => setActivePoll(null)}
            />
          </Text>
        </Stack>
        <Text mb={8}>Poll ID {activePoll} not found</Text>
        <Button variant="1btc-orange" onClick={() => setActivePoll(null)}>
          Start Over
        </Button>
      </Box>
    );
  }

  return (
    <Box>
      <Stack
        direction="row"
        alignContent="center"
        justifyContent="space-between"
        mb={8}
      >
        <Heading>View a Poll</Heading>
        <Text color="gray.400" fontSize="sm">
          Active Poll ID: {activePoll ? activePoll : "none"}{" "}
          <IconButton
            aria-label="Clear active poll"
            title="Clear active poll"
            size="sm"
            color="orange.500"
            bg="transparent"
            icon={<FiX />}
            onClick={() => setActivePoll(null)}
          />
        </Text>
      </Stack>
      <FormControl id="pollId" isRequired>
        <FormLabel>Enter a poll ID:</FormLabel>
        <Stack direction="row" alignItems="center">
          <Input
            type="number"
            placeholder="Poll ID"
            onChange={(e) => setPollId(e.target.value)}
          />
          <IconButton
            aria-label="Search for poll ID"
            title="Search for poll ID"
            icon={<FiSearch />}
            onClick={() => setActivePoll(Number(pollId))}
          />
        </Stack>
        <FormHelperText>
          IDs are unique for each poll, and displayed on the list of polls.
        </FormHelperText>
        <FormErrorMessage fontWeight="bold">
          Please provide a valid number.
        </FormErrorMessage>
      </FormControl>
    </Box>
  );
}

function CreatePoll() {
  const [activePoll, setActivePoll] = useAtom(activePollAtom);

  return (
    <>
      <Stack
        direction="row"
        alignContent="center"
        justifyContent="space-between"
        mb={8}
      >
        <Heading>Create a Poll</Heading>
        <Text color="gray.400" fontSize="sm">
          Active Poll ID: {activePoll ? activePoll : "none"}{" "}
          <IconButton
            aria-label="Clear active poll"
            title="Clear active poll"
            size="sm"
            color="orange.500"
            bg="transparent"
            icon={<FiX />}
            onClick={() => setActivePoll(null)}
          />
        </Text>
      </Stack>
      <Stack direction="column">
        <FormControl id="post-title">
          <FormLabel>Title</FormLabel>
          <Input type="text" placeholder="Title" />
          <FormHelperText>Enter a title for the poll.</FormHelperText>
        </FormControl>
        <FormControl id="post-image">
          <FormLabel>Image</FormLabel>
          <Input type="file" />
          <FormHelperText>
            Upload an image to be used for the poll.
          </FormHelperText>
        </FormControl>
      </Stack>
    </>
  );
}

export default Content;
