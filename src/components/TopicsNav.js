import React from 'react';
import {NavLink} from 'react-router-dom';

//component for the navigation section
const TopicsNav = ({topics}) => {
    return (
        <nav>
            <div className='topics_nav'>
                {topics.map(topic => <NavLink to={`/${topic}`} className='nav_item' key={topic}>{topic}</NavLink>)}
            </div>    
        </nav>
    );
};

export default TopicsNav;