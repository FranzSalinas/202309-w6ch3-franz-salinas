import { Character } from '../model/characters';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type CharacterState = {
  characters: Character[];
};

const initialState: CharacterState = {
  characters: [],
};

const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    loadCharacters: (
      state: CharacterState,
      { payload }: PayloadAction<Character[]>
    ) => {
      state.characters = payload;
      return state;
    },

    update: (state: CharacterState, { payload }: PayloadAction<Character>) => {
      state.characters[
        state.characters.findIndex((item) => item.id === payload.id)
      ] = payload;
      return state;
    },
  },
});

export default characterSlice.reducer;
export const { loadCharacters, update } = characterSlice.actions;
