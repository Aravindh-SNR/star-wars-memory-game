import React, {Fragment} from 'react';

const TopicItem = ({count, data, handleClick}) => {
    return (
        <Fragment>
            {/* displaying the boxes as long as there are matching boxes left to be selected */}
            {!(count === 0 && data.length > 0) && data.map((item, index) => {
                return (
                    <div className='data_item' key={index} onClick={handleClick}>
                        {item}
                    </div>);
            })}
            {/* displaying the victory message when the player has finished selecting all the matching boxes */}
            {count === 0 && data.length > 0 && <p className='animated zoomIn victory'>You win! Move on to the other topics and keep improving your memory.</p>}
        </Fragment>
    );
};

export default TopicItem;