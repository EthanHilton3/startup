import React from 'react';

import { GameEvent, GameNotifier } from './gameNotifier';
import './players.css';

export function Players(props) {
  const userName = props.userName;

  const [events, setEvent] = React.useState([]);

  React.useEffect(() => {
    GameNotifier.addHandler(handleGameEvent);

    return () => {
      GameNotifier.removeHandler(handleGameEvent);
    };
  }, []);

  function handleGameEvent(event) {
    setEvent((prevEvents) => {
      let newEvents = [event, ...prevEvents];
      if (newEvents.length > 5) {
        newEvents = newEvents.slice(1, 5);
      }
      return newEvents;
    });
  }

  function createMessageArray() {
    const messageArray = [];
    for (const [i, event] of events.entries()) {
      let message = 'unknown';
      if (event.type === GameEvent.Update) {
        console.log("event:");
        console.log(event);
        console.log("event.value:");
        console.log(event.value);
        console.log("event.value.score:");
        console.log(event.value.score);
        message = `has ${event.value.clicks} clicks!`;
      } else if (event.type === GameEvent.Start) {
        message = `started a new game`;
      } else if (event.type === GameEvent.System) {
        message = event.value.msg;
      }

      messageArray.push(
        <div key={i} className='event'>
          <span className={'player-event'}>{event.from.split('@')[0]}</span>
          {message}
        </div>
      );
    }
    return messageArray;
  }

  return (
    <div className='players'>
      Player
      <span className='player-name'>{userName}</span>
      <div id='player-messages'>{createMessageArray()}</div>
    </div>
  );
}
