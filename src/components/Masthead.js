import React from 'react';
import "./Masthead.scss";

function Masthead({title, subtitle, dash}) {
  return (
    <div className="masthead">
    <div className="masthead-container">
        <h1 className='title'>{title}</h1>
        <h2 className='dash'>{dash}</h2>
        <h3 className='subtitle'>{subtitle}</h3>
    </div>
</div>
  )
}

export default Masthead