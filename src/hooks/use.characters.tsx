import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { ApiRepo } from '../services/api.repo';
import { useCallback, useMemo } from 'react';

import { Character } from '../model/characters';
import {
  loadCharactersThunk,
  updateCharactersThunk,
} from '../slice/got.thunks';

export function useCharacters() {
  const { characters } = useSelector(
    (state: RootState) => state.characterState
  );
  const dispatch = useDispatch<AppDispatch>();

  const repo = useMemo(() => new ApiRepo(), []);

  const loadCharacters = useCallback(async () => {
    try {
      dispatch(loadCharactersThunk(repo));
    } catch (error) {
      console.log((error as Error).message);
    }
  }, [dispatch, repo]);

  const update = async (
    id: Character['id'],
    updatedCharacter: Partial<Character>
  ) => {
    try {
      dispatch(updateCharactersThunk({ repo, id, updatedCharacter }));
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  return {
    loadCharacters,
    characters,
    update,
  };
}
