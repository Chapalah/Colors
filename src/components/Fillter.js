import React from 'react'

const Fillter = () => {

    const blockFillters = [
        {
            title: 'All',
        }, {
            title: 'Dark',
        }, {
            title: 'Light',
        }, {
            title: 'Minimalism',
        },
      ]

    const handleFillter = (data) => {
        let blocks = document.querySelectorAll('.blocks__wrapper')
        blocks.forEach(block => {
            if(block.getAttribute !== data) {
                block.style.display = 'none'
            }
        })
    }

    return (
        <div className='blocks__fillters'>
            {blockFillters.map(fillter => (
                <div className='blocks__fillter' onClick={handleFillter(fillter.title)}>{fillter.title}</div>
            ))}
        </div>
    )
}

export default Fillter