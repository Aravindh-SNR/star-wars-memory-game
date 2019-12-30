import React from 'react';
import Scroll from './Scroll';

const Home = () => {
    return (
        <div className='home'>
            <p>Welcome to the Star Wars Memory Game!</p>
            <p>Choose any one of the above topics to start playing.</p>
            <p>Please note that this is not a Star Wars quiz, but a memory game that makes use of topics from Star Wars, 
            and is similar to the card game <a id='concentration' href='https://www.ducksters.com/games/concentration_rules.php' target='_blank' rel='noopener noreferrer'>Concentration</a>.</p>
            <p>No Star Wars knowledge is required to play the game.</p>
            <p>How to play:</p>
            <ol>
                <li>Click on any two boxes, one after the other, to see the content inside them. If they have the same content, they'll be taken off the list.</li>
                <li>If they don't, the content will be hidden again after one second. Try again but now, you know the location of two more items. <span role='img' aria-label='wink emoji'>&#128521;</span></li>
                <li>Repeat until all the boxes are gone and you win!</li>
            </ol>
        </div>
    );
};

export default Scroll(Home);