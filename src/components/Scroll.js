import React from 'react';

//higher order component which returns a component that has vertical scrolling enabled
const Scroll = (Component) => (props) => {
    return (
        <div className='scroll'>
            <Component {...props}/>
        </div>
    );
};

export default Scroll;