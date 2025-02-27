import React from 'react';

import { Button } from 'react-bootstrap';
import { CosmoButton } from './CosmoButton';
import { delay } from './delay';
import { GameEvent, GameNotifier } from './gameNotifier';
import './play.css';

export function Game({ userName }) {
    const [count, setCount] = React.useState(parseInt(localStorage.getItem('count')) || 0);

    function incrementCount() {
        setCount(count + 1);
        localStorage.setItem('count', count + 1);
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