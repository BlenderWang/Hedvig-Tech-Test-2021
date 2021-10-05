import React from 'react'

export const Card = ({ item }) => {
    return (
        <button name='card-button' key={item.title} className='card'>
            <div className='card--icon'>
                <img src={item.icon.variants.light.svgUrl} alt={item.title} />
            </div>
            <h4 className='card--title'>{item.title}</h4>
        </button>
    )
}
