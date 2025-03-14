import React from 'react';
import './play.css';

import { Players } from './players';
import { Game } from './game';

export function Play(props) {
  const [quote, setQuote] = React.useState('Loading...');
  const [quoteAuthor, setQuoteAuthor] = React.useState('unknown');

  React.useEffect(() => {
    fetch("/api/facts")
      .then((response) => response.json())
      .then((data) => {
        setQuote(data[0].fact);
        setQuoteAuthor("Tis true");
      })
      .catch(error => console.error("Error fetching fact:", error));
  }, []);

  return (
    <main>
      <Players userName={props.userName} />
      <Game userName={props.userName} />

      <div className="quote-box flex text-center">
        <p className='quote'>{quote}</p>
        <p className='author'>{quoteAuthor}</p>
      </div>
    </main>
  );
}