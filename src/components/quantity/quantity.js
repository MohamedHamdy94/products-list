import React from 'react'
import './quantity.css'

const Quantity = (props) => {
  const {item,inc,dec } = props;

  return (
<div className='counter'>
 <button onClick={() => inc(item.id)} className='btn'>+</button>
 <span className='count'>{item.quantity}</span>
 <button onClick={() => dec(item.id)} className='btn' disabled={item.quantity<=1}>-</button>
 </div>
    )
}

export default Quantity