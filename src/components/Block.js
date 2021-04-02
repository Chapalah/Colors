import React from 'react'
import Fillter from './Fillter'

const Block = () => {
      const blockItems = [
          {
            title: 'Тёплые оттенки',
            color: ['#EAE7DC','#D8C3A5', '#E98074', '#E85A4F'],
            data: 'Ligth'
          }, {
            title: 'Тёмные цвета',
            color: ['#0C0032','#190061', '#1F2833', '#282828'],
            data: 'Dark'
          }, {
            title: 'Синие оттенки',
            color: ['#25274D','#464866', '#2E9CCA', '#29648A'],
            data: 'Dark'
          }, {
            title: 'Яркие цвета',
            color: ['#D83F87','#2A1B3D', '#44318D', '#E98064'],
            data: 'Ligth'
          }, {
            title: 'Минималистичные цвета',
            color: ['#222629','#474B4F', '#6B6E70', '#86C232'],
            data: 'Minimalism'
          }, {
            title: 'Минималистичные цвета',
            color: ['#222629','#474B4F', '#6B6E70', '#C21D00'],
            data: 'Minimalism'
          }
          
        ]

      const handleCopy = color => {
        navigator.clipboard.writeText(color)
        let blocks = document.querySelectorAll('.block')
        blocks.forEach(block => {
          block.classList.add('clicked')
          block.addEventListener('mouseout', () => {
            blocks.forEach(block => {
                block.classList.remove('clicked')
            })
          })
        })
    
      }

      return (
        <div className="blocks">
            <Fillter />
            {blockItems.map(item => (
                <div className="blocks__item">
                    <h2>{item.title}</h2>
                    <div className="blocks__wrapper" datatype={item.data}>
                        {item.color.map(color => 
                          <div 
                            className="block" 
                            style={{background: color}}
                            onClick={() => {handleCopy(color)}}>
                              {color}
                          </div>
                        )}
                    </div>
                </div>
            ))}
        </div>

    )
}

export default Block