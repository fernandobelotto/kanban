import { Skeleton, Flex } from "@chakra-ui/react";
import React from "react";
import { Lists } from "../enums/lists.enum";
import { useAppSelector } from "../store";
import Column from "./Column";
import NewColumn from "./NewColumn";
export default function Columns() {
  const { loading } = useAppSelector((state) => state.session);

  return (
    <>
      <Flex dir="row">
        <NewColumn title="New" />
        <Column title="To do" type={Lists.todo} />
        <Column title="Doing" type={Lists.doing} />
        <Column title="Done" type={Lists.done} />
      </Flex>
    </>
  );
}
