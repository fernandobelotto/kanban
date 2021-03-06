import { Box, Container, Flex, Heading, useColorMode } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ColorModeSwitcher } from "../components/ColorModeSwitcher";
import Columns from "../components/Columns";
import { loginConfig } from "../config/login.config";
import { useAppSelector } from "../store";
import { getCards } from "../store/thunks/card.thunk";
import { login } from "../store/thunks/session.thunk";

export default function App() {
  const dispatch = useDispatch();

  const { accessToken } = useAppSelector((state) => state.session);

  useEffect(() => {
    if (accessToken) {
      dispatch(getCards());
    }
  }, [accessToken, dispatch]);

  useEffect(() => {
    dispatch(login(loginConfig));
  }, [dispatch]);

  return (
    <>
      <Box fontSize="xl" p="5">
        <Flex dir="row" justify="space-between" mb="5">
          <Heading>Lets Kanban</Heading>
          <ColorModeSwitcher />
        </Flex>
        <Container maxWidth="container.xl">
          <Columns />
        </Container>
      </Box>
    </>
  );
}
