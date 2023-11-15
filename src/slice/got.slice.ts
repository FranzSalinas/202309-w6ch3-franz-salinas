import { Character } from '../model/characters';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { loadCharactersThunk, updateCharactersThunk } from './got.thunks';

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
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(
      loadCharactersThunk.fulfilled,
      (state: CharacterState, { payload }: PayloadAction<Character[]>) => {
        state.characters = payload;
        state.charactersState = 'idle';
        return state;
      }
    );

    builder.addCase(loadCharactersThunk.pending, (state: CharacterState) => {
      state.charactersState = 'loading';
      return state;
    });

    builder.addCase(loadCharactersThunk.rejected, (state: CharacterState) => {
      state.charactersState = 'error';
      return state;
    });

    builder.addCase(
      updateCharactersThunk.fulfilled,
      (state: CharacterState, { payload }: PayloadAction<Character>) => {
        state.characters[
          state.characters.findIndex((item) => item.id === payload.id)
        ] = payload;
        return state;
      }
    );

    builder.addCase(updateCharactersThunk.pending, (state: CharacterState) => {
      state.charactersState = 'loading';
      return state;
    });

    builder.addCase(updateCharactersThunk.rejected, (state: CharacterState) => {
      state.charactersState = 'error';
    });
  },
});

export default characterSlice.reducer;
