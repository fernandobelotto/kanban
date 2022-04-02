import { Box, Flex, Heading } from "@chakra-ui/react";
import * as React from "react";
import { ColorModeSwitcher } from "./components/ColorModeSwitcher";
import Columns from "./components/Columns";

export default function App() {
  return (
    <>
      <Box fontSize="xl" p='5'>
        <Flex dir='row' justify='space-between' mb='5'>
          <Heading>Lets Kanban</Heading>
          <ColorModeSwitcher />
        </Flex>
        <Columns />
      </Box>
    </>
  );
}
