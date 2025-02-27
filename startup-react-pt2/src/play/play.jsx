import React from 'react';
import './play.css';

import { Players } from './players';
import { Game } from './game';

export function Play(props) {
  const [quote, setQuote] = React.useState('Loading...');
  const [quoteAuthor, setQuoteAuthor] = React.useState('unknown');

  React.useEffect(() => {
    setQuote('Believe It!');
    setQuoteAuthor('Naruto Uzumaki');
  }, []);

  return (
    <main className="flex">
      <Players userName={props.userName} />
      <Game userName={props.userName} />
    {/* 
      <div className="players">
        Player
        <span className="player-name">Mystery player</span>
        <div id="player-messages">
          <div className="event"><span className="player-event">Linus</span> started clicking</div>
          <div className="event"><span className="player-event">Linus</span> started clicking</div>
          <div className="event"><span className="system-event">game</span> got 337 clicks!</div>
        </div>
      </div>
      */}
      <div className="quote-box flex text-center">
        <p className='quote'>{quote}</p>
        <p className='author'>{quoteAuthor}</p>
      </div>
    </main>
  );
}