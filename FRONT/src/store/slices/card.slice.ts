import { createSlice } from "@reduxjs/toolkit";
import { CardModel } from "../../models/card.model";
import { createCard, updateCard, deleteCard, getCards} from "../thunks/card.thunk";
import cards from '../../mock/cards.json'

type InitialStateType = {
  entities: CardModel[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
};

const InitialState: InitialStateType = {
  entities: [],
  loading: 'idle'
};

const cardSlice = createSlice({
  initialState: InitialState,
  name: "cards",
  reducers: {
  },
  extraReducers: (builder) => {
      builder
      .addCase(createCard.fulfilled, (state, action) => {
        state.loading = 'succeeded'
      })
      .addCase(createCard.pending, (state, action) => {
        state.loading = 'pending'
      })
      .addCase(createCard.rejected, (state, action) => {
        state.loading = 'failed'
      })
      .addCase(updateCard.fulfilled, (state, action) => {
        state.loading = 'succeeded'
        state.entities = action.payload
      })
      .addCase(updateCard.pending, (state, action) => {
        state.loading = 'pending'
      })
      .addCase(updateCard.rejected, (state, action) => {
        state.loading = 'failed'
      })

      .addCase(deleteCard.fulfilled, (state, action) => {
        state.loading = 'succeeded'
        state.entities = action.payload
      })
      .addCase(deleteCard.pending, (state, action) => {
        state.loading = 'pending'
      })
      .addCase(deleteCard.rejected, (state, action) => {
        state.loading = 'failed'
      })

      .addCase(getCards.fulfilled, (state, action) => {
        state.loading = 'succeeded'
        state.entities = action.payload
      })
      .addCase(getCards.pending, (state, action) => {
        state.loading = 'pending'
      })
      .addCase(getCards.rejected, (state, action) => {
        state.loading = 'failed'
      })
    },
  },
);

// export const { } = cardSlice.actions;

export const CardReducer = cardSlice.reducer;