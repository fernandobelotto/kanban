import {
  ArrowBackIcon,
  ArrowForwardIcon,
  CheckIcon,
  DeleteIcon,
  EditIcon,
  NotAllowedIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  IconButton,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Lists } from "../enums/lists.enum";
import { CardModel } from "../models/card.model";
import { useAppDispatch, useAppSelector } from "../store";
import { deleteCard, updateCard } from "../store/thunks/card.thunk";
type CardProps = {
  data: CardModel;
};

export default function Card({ data }: CardProps) {
  const {
    reset,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<CardModel>({
    defaultValues: data,
  });

  const [editMode, setEditMode] = useState(false);
  const { loading } = useAppSelector((state) => state.card);
  const dispatch = useAppDispatch();

  useEffect(() => {
    reset(data);
  }, [data, reset]);

  function handleEditMode() {
    reset();
    setEditMode(!editMode);
  }

  function handleNext() {
    if (data.list === Lists.todo)
      dispatch(
        updateCard({ id: data.id, card: { ...data, list: Lists.doing } })
      );
    if (data.list === Lists.doing)
      dispatch(
        updateCard({ id: data.id, card: { ...data, list: Lists.done } })
      );
  }

  function handlePreview() {
    if (data.list === Lists.doing)
      dispatch(
        updateCard({ id: data.id, card: { ...data, list: Lists.todo } })
      );
    if (data.list === Lists.done)
      dispatch(
        updateCard({ id: data.id, card: { ...data, list: Lists.doing } })
      );
  }

  function handleDelete() {
    dispatch(deleteCard(data.id));
  }

  function handleCancel() {
    setEditMode(false);
    reset();
  }

  const onSubmit = (values: CardModel) => {
    dispatch(updateCard({ id: data.id, card: values })).finally(() => {
      setEditMode(false);
    });
  };

  function hideLeft() {
    if (data.list === Lists.todo) {
      return "hidden";
    }
    return "visible";
  }
  function hideRight() {
    if (data.list === Lists.done) {
      return "hidden";
    }
    return "visible";
  }

  if (editMode)
    return (
      <>
        <Box
          w="260px"
          p={5}
          shadow="lg"
          rounded="lg"
          border="1px solid"
          borderColor="brand.500"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <VStack spacing={5}>
              <FormControl isInvalid={!!errors.title}>
                <Input
                  placeholder="card title"
                  {...register("title", {
                    required: {
                      value: true,
                      message: "the title is required",
                    },
                  })}
                ></Input>
                <FormErrorMessage>
                  {errors.title && errors.title.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.content}>
                <Textarea
                  placeholder="card content"
                  {...register("content", {
                    required: {
                      value: true,
                      message: "the content is required",
                    },
                  })}
                />
                <FormErrorMessage>
                  {errors.content && errors.content.message}
                </FormErrorMessage>
              </FormControl>
              <Flex dir="row" justify="space-between" w="100%">
                <IconButton
                  onClick={handleCancel}
                  icon={<NotAllowedIcon />}
                  aria-label="cancel"
                  size='sm'
                />
                <IconButton
                  isLoading={loading === "pending"}
                  type="submit"
                  icon={<CheckIcon />}
                  aria-label="save"
                  size='sm'
                />
              </Flex>
            </VStack>
          </form>
        </Box>
      </>
    );

  return (
    <>
      <Box
        w="260px"
        p={5}
        shadow="lg"
        rounded="lg"
        border="1px solid"
        borderColor="brand.500"
      >
        <VStack
          alignItems="flex-start"
          spacing={5}
          display="flex"
          flexWrap="wrap"
        >
          <Flex dir="row" justify="space-between" w="100%">
            <Text
              whiteSpace="nowrap"
              overflow="hidden"
              textOverflow="ellipsis"
              fontWeight={600}
            >
              {data.title}
            </Text>
            <IconButton
              onClick={handleEditMode}
              icon={<EditIcon />}
              aria-label="edit-mode"
              size='sm'
            />
          </Flex>
          <Text width="100%" maxH="320" overflowY={"scroll"}>
            {data.content}
          </Text>
          <Flex dir="row" justify="space-between" w="100%">
            <IconButton
              onClick={handlePreview}
              isLoading={loading === "pending"}
              icon={<ArrowBackIcon />}
              aria-label="preview"
              visibility={hideLeft()}
              size='sm'
            />
            <IconButton
              isLoading={loading === "pending"}
              onClick={handleDelete}
              icon={<DeleteIcon />}
              aria-label="delete"
              size='sm'
            />
            <IconButton
              isLoading={loading === "pending"}
              onClick={handleNext}
              icon={<ArrowForwardIcon />}
              aria-label="next"
              visibility={hideRight()}
              size='sm'
            />
          </Flex>
        </VStack>
      </Box>
    </>
  );
}
