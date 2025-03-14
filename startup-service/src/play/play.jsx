import React from 'react';
import './play.css';

import { Players } from './players';
import { Game } from './game';

export function Play(props) {
  const [fact, setFact] = React.useState('Loading...');

  React.useEffect(() =>  {
    async function getFact() {
      const response = await fetch("https://meowfacts.herokuapp.com/");
      const data = await response.json();
      console.log(data.data[0]);
      setFact(data.data[0]);
    }

    getFact()
  }, []);

  return (
    <main>
      <Players userName={props.userName} />
      <Game userName={props.userName} />

      <div className="fact-box flex text-center">
        <p className='fact'>{fact}</p>
      </div>
    </main>
  );
}