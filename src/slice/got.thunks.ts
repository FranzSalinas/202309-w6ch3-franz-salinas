import { createAsyncThunk } from '@reduxjs/toolkit';
import { Character } from '../model/characters';
import { ApiRepo } from '../services/api.repo';

export const loadCharactersThunk = createAsyncThunk<Character[], ApiRepo>(
  'character/load',
  async (repo) => {
    const characters = await repo.getCharacters();
    return characters;
  }
);

export const updateCharactersThunk = createAsyncThunk<
  Character,
  {
    repo: ApiRepo;
    id: Character['id'];
    updatedCharacter: Partial<Character>;
  }
>('character/update', async ({ repo, id, updatedCharacter }) => {
  const finalCharacter = await repo.setCharacters(id, updatedCharacter);
  return finalCharacter;
});
