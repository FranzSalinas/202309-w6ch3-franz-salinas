import { Character } from '../model/characters';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { loadCharactersThunk } from './got.thunks';

type CharacterState = {
  characters: Character[];
  charactersState: 'idle' | 'loading' | 'error';
};

const initialState: CharacterState = {
  characters: [],
  charactersState: 'idle',
};

const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    update: (state: CharacterState, { payload }: PayloadAction<Character>) => {
      state.characters[
        state.characters.findIndex((item) => item.id === payload.id)
      ] = payload;
      return state;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(
      loadCharactersThunk.fulfilled,
      (state: CharacterState, { payload }: PayloadAction<Character[]>) => {
        state.characters = payload;
        state.charactersState = 'idle';
        return state;
      }
    );
  },
});

export default characterSlice.reducer;
export const { update } = characterSlice.actions;
