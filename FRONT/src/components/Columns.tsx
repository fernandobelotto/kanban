import { Skeleton, Flex } from "@chakra-ui/react";
import React from "react";
import { useAppSelector } from "../store";
import Column from "./Column";
import NewColumn from "./NewColumn";
export default function Columns() {
  const { loading } = useAppSelector((state) => state.session);

  return (
    <>
      <Flex dir="row">
        <NewColumn title="New" />
        <Column title="To do" type="todo" />
        <Column title="Doing" type="doing" />
        <Column title="Done" type="done" />
      </Flex>
    </>
  );
}
