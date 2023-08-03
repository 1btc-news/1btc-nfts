import { Box, Heading, ListItem, OrderedList, Text } from "@chakra-ui/react";

function Content() {
  return (
    <Box maxW="1200px">
      <Landing />
    </Box>
  );
}

function Landing() {
  return (
    <>
      <Heading pb={8}>polls-nft</Heading>
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
    </>
  );
}

function ListPolls() {
  return <Text>List of Polls</Text>;
}

function ViewPoll() {
  return <Text>View Poll</Text>;
}

export default Content;
