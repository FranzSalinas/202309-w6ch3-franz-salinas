import { useEffect } from 'react';

import { Card } from '../card/card';

import { useCharacters } from '../../hooks/use.characters';

export function List() {
  const { loadCharacters, characters } = useCharacters();

  useEffect(() => {
    loadCharacters();
  }, [loadCharacters]);

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
