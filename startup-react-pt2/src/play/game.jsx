import React from 'react';

import { Button } from 'react-bootstrap';
import { GameEvent, GameNotifier } from './gameNotifier';
import './play.css';

export function Game(props) {
    const userName = props.userName;
    const [count, setCount] = React.useState(parseInt(localStorage.getItem('count')) || 0);

    function incrementCount() {
        setCount(count + 1);
        localStorage.setItem('count', count + 1);

        const date = new Date().toLocaleDateString();
        const newScore = { name: userName, score: score, startDate: date, currentDate: date};
        updateScoresLocal(newScore);

        if (count === 0) {
            GameNotifier.broadcastEvent(userName, GameEvent.Start, newScore);
        }
        
        if ((count + 1) % 25 === 0) {
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
          if (newScore.score > prevScore.score) {
            scores.splice(i, 0, newScore);
            found = true;
            break;
          }
        }
    
        if (!found) {
          scores.push(newScore);
        }
    
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