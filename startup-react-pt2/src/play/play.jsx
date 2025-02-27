import React from 'react';
import './play.css';

export function Play() {
  return (
    <main className="flex">
      <div className="players">
        Player
        <span className="player-name">Mystery player</span>
        <div id="player-messages">
          <div className="event"><span className="player-event">Linus</span> started clicking</div>
          <div className="event"><span className="player-event">Linus</span> started clicking</div>
          <div className="event"><span className="system-event">game</span> got 337 clicks!</div>
        </div>
      </div>

      <div className="score">1,000,000,000,000</div>
      <hr />
      <div className="game flex">
        <button className="btn btn-primary">
          <img className="cosmo" src="cosmo_the_cougar_machine_embroidery_design.jpg" />
        </button>
      </div>

      <div className="quote-box flex text-center">
        <div className="quote">"Believe it!!"</div>
        <div className="author">Naruto Uzumaki</div>
      </div>

    </main>
  );
}