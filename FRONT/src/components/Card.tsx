import { Box, Flex, FormControl, FormErrorMessage, IconButton, Input, Text, Textarea, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { CardModel } from '../models/card.model'
import { ArrowBackIcon, ArrowForwardIcon, CheckIcon, DeleteIcon, EditIcon, NotAllowedIcon, SmallAddIcon } from '@chakra-ui/icons'
import { useAppDispatch, useAppSelector } from '../store'
import { createCard, deleteCard, updateCard } from '../store/thunks/card.thunk'
import { useForm } from 'react-hook-form'
import { Lists } from '../constants/lists'
type CardProps = {
    data: CardModel
}

export default function Card({ data }: CardProps) {
    const {
        reset,
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<CardModel>({
        defaultValues: data
    });
    const [editMode, setEditMode] = useState(false)
    const { loading } = useAppSelector(state => state.card)
    const dispatch = useAppDispatch()

    function handleEditMode() {
        setEditMode(!editMode)
    }

    function handleNext() {

    }

    function handlePreview() {

    }

    function handleDelete() {
        dispatch(deleteCard(data.id))
    }

    function handleCancel() {
        setEditMode(false)
        reset()
    }

    const onSubmit = (values: CardModel) => {
        dispatch(updateCard({ id: data.id, card: values }))
            .finally(() => {
                setEditMode(false)
            })
    }

    function hideLeft() {
        if (data.list === Lists.todo) {
            return 'hidden'
        }
        return 'visible'
    }
    function hideRight() {
        if (data.list === Lists.done) {
            return 'hidden'
        }
        return 'visible'
    }


    if (editMode) return (
        <>
            <Box p={5} shadow='lg' rounded='lg' border='1px solid' borderColor='brand.500'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <VStack spacing={5}>
                        <FormControl isInvalid={!!errors.title}>
                            <Input
                                placeholder="card title"
                                {...register("title", {
                                    required: {
                                        value: true,
                                        message: 'the title is required'
                                    }
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
                                        message: 'the content is required'
                                    }
                                })}
                            />
                            <FormErrorMessage>
                                {errors.content && errors.content.message}
                            </FormErrorMessage>
                        </FormControl>
                        <Flex dir='row' justify='space-between' w='100%'>
                            <IconButton onClick={handleCancel} icon={<NotAllowedIcon />} aria-label='cancel' />
                            <IconButton isLoading={loading === 'pending'} type='submit' icon={<CheckIcon />} aria-label='save' />
                        </Flex>
                    </VStack>
                </form>
            </Box>
        </>
    )

    return (
        <>
            <Box p={5} shadow='lg' rounded='lg' border='1px solid' borderColor='brand.500'>
                <VStack alignItems='flex-start' spacing={5}>
                    <Flex dir='row' justify='space-between' w='100%'>
                        <Text>{data.title}</Text>
                        <IconButton onClick={handleEditMode} icon={<EditIcon />} aria-label='edit-mode' />
                    </Flex>
                    <Text>{data.content}</Text>
                    <Flex dir='row' justify='space-between' w='100%'>
                        <IconButton onClick={handlePreview} icon={<ArrowBackIcon />} aria-label='preview' visibility={hideLeft()} />
                        <IconButton onClick={handleDelete} icon={<DeleteIcon />} aria-label='delete' />
                        <IconButton onClick={handleNext} icon={<ArrowForwardIcon />} aria-label='next' visibility={hideRight()} />
                    </Flex>
                </VStack>
            </Box>
        </>
    )
}
