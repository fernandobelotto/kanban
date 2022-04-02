import { createAsyncThunk } from '@reduxjs/toolkit'
import { CardApi } from '../../api/card.api'
import { CardModel } from '../../models/card.model'

export const createCard = createAsyncThunk(
    'card/createCard',
    async (card: CardModel) => {
      return CardApi.create(card)
    }
  )
  
type updateProps = {id: string, card: CardModel}
  export const updateCard = createAsyncThunk(
    'card/updateCard',
    async ({id, card}: updateProps) => {
      return CardApi.updateById(id, card)
    }
  )
  
  export const getCards = createAsyncThunk(
    'card/getCards',
    async () => {
      return CardApi.fetch()
    }
  )
  
  export const deleteCard = createAsyncThunk(
    'card/deleteCard',
    async (id: string) => {
      return CardApi.deleteById(id)
    }
  )