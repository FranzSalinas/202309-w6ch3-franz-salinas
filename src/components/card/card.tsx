import { Character } from '../../model/characters';
import { useCharacters } from '../../hooks/use.characters';

type Props = {
  info: Character;
};

export function Card({ info }: Props) {
  const { update } = useCharacters();

  const handleDeath = (id: string) => {
    update(id, { isAlive: false });
  };

  return (
    <li className="character col">
      <div className="card character__card">
        <img
          src={`img/${info.name}.jpg`}
          alt={info.name + ' ' + info.family}
          className={`character__picture ${!info.isAlive && 'card-img-top'}`}
        />
        <div className="card-body">
          <h2 className="character__name card-title h4">
            {info.name + ' ' + info.family}
          </h2>
          <div className="character__info">
            <ul className="list-unstyled">
              <li>Edad: {info.age} años</li>
              <li>
                Estado:
                {info.isAlive ? (
                  <i className="fas fa-thumbs-up" />
                ) : (
                  <i className="fas fa-thumbs-down" />
                )}
              </li>
            </ul>
          </div>
          <div className="character__overlay">
            <ul className="list-unstyled">
              {info.category === 'king' && (
                <li>Años de reinado: {info.reignYears}</li>
              )}
              {info.category === 'fighter' && <li>Arma: {info.weapon}</li>}
              {info.category === 'fighter' && (
                <li>Destreza: {info.skillLevel}</li>
              )}
              {info.category === 'squire' && (
                <li>Peloteo: {info.serveLevel}</li>
              )}
              {info.category === 'adviser' && (
                <li>Asesora a: {info.adviseTo?.name}</li>
              )}
              {info.category === 'squire' && (
                <li>Sirve a: {info.servesTo?.name}</li>
              )}
            </ul>
            <div className="character__actions">
              <button className="character__action btn">habla</button>
              <button
                className="character__action btn"
                onClick={() => handleDeath(info.id as string)}
              >
                muere
              </button>
            </div>
          </div>
        </div>
        <i className="emoji">
          {info.category === 'king' && '👑'}
          {info.category === 'fighter' && '🗡'}
          {info.category === 'squire' && '🛡'}
          {info.category === 'adviser' && '🎓'}
        </i>
      </div>
    </li>
  );
}
