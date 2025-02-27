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

      <div className="quote-box flex text-center">
        <p className='quote'>{quote}</p>
        <p className='author'>{quoteAuthor}</p>
      </div>
    </main>
  );
}