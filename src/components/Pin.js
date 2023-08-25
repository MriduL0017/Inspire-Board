import { Search } from '@mui/icons-material'
import React from 'react'

function Pin({pinSize, imgSrc, name, link}) {
  return (
    <div className={`pin ${pinSize}`}>

        <img className='mainPic' src={imgSrc} alt='' />
        <div className='content'>
            <h3>{name}</h3>
            <div className="search">
                <a href = {link}>
                {<Search style={{ color: '#feffff' }}/>}
                </a>
            </div>
        </div>
    </div>
  )
}

export default Pin
 