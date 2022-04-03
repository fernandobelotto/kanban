import { Box, Divider, Heading, VStack } from '@chakra-ui/react'
import { CardModel } from '../models/card.model'
import { useAppSelector } from '../store'
import Card from './Card'

type Props = {
    title: string
    type: 'done' | 'doing' | 'todo'
}

export default function Column({ title, type }: Props) {

    const { entities } = useAppSelector(state => state.card)

    return (
        <>
            <Box p={5} marginX={5} w='260px'>
                <VStack w='260px'>
                    <Heading>{title}</Heading>
                    <Divider />
                    {entities
                        .filter((card: CardModel) => card.list === type)
                        .map((card: CardModel) => {
                            return (<Card data={card} />)
                        })}
                </VStack>
            </Box>
        </>
    )
}