import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';

export const Card = ({ item, handleClick, itemId }) => {

    return (
        <button key={uuidv4()} name='card-button' className='card' onClick={() => handleClick(itemId)}>
            <div className='card--icon'>
                <img src={item.icon.variants.light.svgUrl} alt={item.title} />
            </div>
            <h4 className='card--title'>{item.title}</h4>
        </button>
    )
}
