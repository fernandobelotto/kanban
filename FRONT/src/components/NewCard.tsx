import { SmallAddIcon } from '@chakra-ui/icons';
import { Box, FormControl, FormErrorMessage, IconButton, Input, Textarea, VStack } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { Lists } from '../constants/lists';
import { CardModel } from '../models/card.model';
import { useAppDispatch, useAppSelector } from '../store';
import { createCard } from "../store/thunks/card.thunk";
type NewCardProps = {

}
export default function NewCard({ }: NewCardProps) {

    const dispatch = useAppDispatch();
    const { loading } = useAppSelector(state => state.card)

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<CardModel>();

    const onSubmit = (values: CardModel) => {
        dispatch(createCard({ ...values, list: Lists.todo }))
    }

    return (
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
                        <IconButton isLoading={loading === 'pending'} type='submit' icon={<SmallAddIcon />} aria-label='new' />
                    </VStack>
                </form>


            </Box>
        </>
    )
}

