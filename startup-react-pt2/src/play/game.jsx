import React from 'react';

import { Button } from 'react-bootstrap';
import { GameEvent, GameNotifier } from './gameNotifier';
import './play.css';

export function Game(props) {
    const userName = props.userName;
    console.log(userName);
    let scores = JSON.parse(localStorage.getItem('scores'));
    let playerClicks = 0;
    if (scores) {
      playerClicks = scores.find((score) => score.name === userName)?.clicks || 0;
    }
    const [count, setCount] = React.useState(playerClicks);

    function incrementCount() {
      let clicks = count + 1;
      setCount(clicks);
      localStorage.setItem('count', clicks);

      const date = new Date().toLocaleDateString();
      const newScore = { name: userName, clicks: clicks, date: date};
      console.log(newScore);
      updateScoresLocal(newScore);

      if (clicks === 1) {
        GameNotifier.broadcastEvent(userName, GameEvent.Start, newScore);
      }
      
      if ((clicks) % 25 === 0) {
        GameNotifier.broadcastEvent(userName, GameEvent.Update, newScore);
      }
    }

    function updateScoresLocal(newScore) {
      let scores = [];
      const scoresText = localStorage.getItem('scores');
      if (scoresText) {
        scores = JSON.parse(scoresText);
      }

      let found = false;       
      for (const [i, prevScore] of scores.entries()) {
        if (prevScore.name === newScore.name) {
        scores[i] = newScore;
        found = true;
        break;
        }
      }
    
      if (!found) {
        scores.push(newScore);
      }
    
      scores.sort((a, b) => b.clicks - a.clicks);
    
      if (scores.length > 10) {
        scores.length = 10;
      }
    
      localStorage.setItem('scores', JSON.stringify(scores));
      }

    return (
      <div className='game'>
        <div className="score">{count}</div>
        <hr />
        <div className="flex">
          <Button className="btn btn-primary" onClick={incrementCount}>
          <img className="cosmo" src="cosmo_the_cougar_machine_embroidery_design.jpg" />
          </Button>
        </div>
      </div>
    );
} 