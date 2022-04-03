import { Box, Divider, Heading, VStack } from "@chakra-ui/react";
import NewCard from "./NewCard";

type Props = {
  title: string;
};

export default function NewColumn({ title }: Props) {
  return (
    <>
      <Box p={5}>
        <VStack>
          <Heading>{title}</Heading>
          <Divider />
          <NewCard />
        </VStack>
      </Box>
    </>
  );
}
