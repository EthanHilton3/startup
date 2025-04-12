import React from 'react';

import { Button } from 'react-bootstrap';
import { GameEvent, GameNotifier } from './gameNotifier';
import './play.css';

export function Game(props) {
    const userName = props.userName;
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        async function initiateCount() {
            try {
                let response = await fetch('/api/scores');
                let scores = await response.json();
                if (scores) {
                  let playerClicks = scores.find((score) => score.name === userName)?.clicks || 0;
                  setCount(playerClicks);
                }
            } catch (error) {
                console.error("Error fetching scores:", error);
            }
        }

        initiateCount();
    }, []);
  
    async function incrementCount() {
      let clicks = count + 1;
      setCount(clicks);

      const date = new Date().toLocaleDateString();
      const newScore = { name: userName, clicks: clicks, date: date};
      //console.log("newScore", newScore);

      let response = await fetch('/api/score', {
        method: 'post',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(newScore),
      });
      //console.log("post fetch of /api/score", response.json());

      if (clicks === 1) {
        GameNotifier.broadcastEvent(userName, GameEvent.Start, newScore);
      }
      
      if ((clicks) % 25 === 0) {
        GameNotifier.broadcastEvent(userName, GameEvent.Update, newScore);
      }
    }

    return (
      <div className='game'>
        <div className="score">{count}</div>
        <hr />
        <div className="flex">
          <Button className="btn btn-primary" onClick={() => incrementCount()}>
          <img className="cosmo" src="cosmo_the_cougar_machine_embroidery_design.jpg" />
          </Button>
        </div>
      </div>
    );
} 