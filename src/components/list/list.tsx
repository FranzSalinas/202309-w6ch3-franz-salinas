import { useEffect } from 'react';

import { Card } from '../card/card';

import { useCharacters } from '../../hooks/use.characters';

import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';

export function List() {
  const { loadCharacters, characters } = useCharacters();
  const { charactersState } = useSelector(
    (state: RootState) => state.characterState
  );

  useEffect(() => {
    loadCharacters();
  }, [loadCharacters]);

  if (charactersState === 'loading') {
    return <p className="loading"> LOADING </p>;
  }

  if (charactersState === 'error') {
    return <p> Sorry bro</p>;
  }

  return (
    <>
      {characters.length > 0 && (
        <ul className="characters-list row list-unstyled">
          {characters.map((item) => (
            <Card info={item} key={item.id}></Card>
          ))}
        </ul>
      )}
    </>
  );
}
