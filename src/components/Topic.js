import React, {useState, useEffect, Fragment} from 'react';
import TopicItem from './TopicItem';
import Scroll from './Scroll';
import Loading from './loading_animation/Loading';

//function to shuffle the order of elements in an array
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
};

const Topic = (props) => {
    //storing the array of items in data
    const [data, setData] = useState([]);
    //storing the player's first click event during each of their attempts to click two matching boxes
    const [choice, setChoice] = useState(null);
    //number of matching boxes left to be selected
    const [count, setCount] = useState(0);
    let timer = null;
    
    useEffect(() => {
        //fetching data from the star wars api
        (async function() {
            const response = await fetch(`https://swapi.co/api${props.match.path}/`, {mode: 'cors'});
            const responseObject = await response.json();
            let newData = [];
            //storing the item's name (or the film's title) in the data array
            for (const item of responseObject.results) {
                props.match.path === '/films' ? newData.push(item.title) : newData.push(item.name);
            }
            //doubling the data array so that there is a matching element for every other element
            newData = newData.concat(newData);
            //shuffling the order of elements in the array
            shuffleArray(newData);
            setData(newData);
            //assigning the length of the array to count
            setCount(newData.length);
        })();
        return () => {
            clearTimeout(timer);
        };
    }, [props.match.path, timer]);

    //listener for click events
    const handleClick = (event) => {
        //going further only if the box clicked is not part of an already selected matching pair
        if(!Array.from(event.target.classList).includes('done')) {
            //toggling the 'chosen' class in order to show the contents of the box
            event.target.classList.toggle('chosen');
            //setting the first click event to the state variable 'choice'
            if(!choice) {
                setChoice(event.nativeEvent);
            } else {
                //comparing the second click event with the first event stored in choice
                if(choice.target !== event.target) {
                    if(choice.target.textContent === event.target.textContent) {
                        //marking the boxes done if they match
                        choice.target.classList.add('done');
                        event.target.classList.add('done');
                        setCount(count - 2);
                    } else {
                        const choice2 = event.nativeEvent;
                        timer = setTimeout(() => {
                            //toggling the 'chosen' class in order to hide the contents of the box again
                            //doing this inside a timer because we have to show the contents of the box first before hiding them
                            choice.target.classList.toggle('chosen');
                            choice2.target.classList.toggle('chosen');
                        }, 1000);
                    }
                }
                //making choice null so that it can store the first click event of the player's next attempt
                setChoice(null);
            }
        }
    };

    return (
        <Fragment>
            {/* displaying a loading message if the data array is empty */}
            {!data.length && <Loading/>}
            <div className='data'>
                <TopicItem count={count} data={data} handleClick={handleClick}/>
            </div>
        </Fragment>
    );
};

export default Scroll(Topic);