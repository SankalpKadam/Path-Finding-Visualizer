import React from 'react'
import './index.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AdjustIcon from '@mui/icons-material/Adjust';
const Legend = () => {
    return (
        <div className='legend'>
            <div className='legend__start'>
                <div className='legend__logos'><PlayArrowIcon/></div>
                <p>Start</p>
            </div>
            <div className='legend__target'>
                <div className='legend__logos'><AdjustIcon/></div>
                <p>Target</p>
            </div>
            <div className='legend__visited'>
                <div className='legend__logos'></div>
                <p>Visited</p>
            </div>
            <div className='legend__processed'>
                <div className='legend__logos'></div>
                <p>Processed</p>
            </div>
            <div className='legend__final'>
                <div className='legend__logos'></div>
                <p>Final Path</p>
            </div>
        </div>
    )
}

export default Legend
