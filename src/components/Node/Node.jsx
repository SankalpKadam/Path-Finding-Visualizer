import React from 'react';
import './index.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StartNode from '../Elements/StartNode';
import AdjustIcon from '@mui/icons-material/Adjust';
import TargetNode from '../Elements/TargetNode';

const Node = ({row, col}) => {
    const handleClick = (e)=>{
        console.log(e.target.id);
        
    }
    return (
        <div className='node' id={`${row}-${col}`} onClick={handleClick}>
            {
                (row === 0 && col === 0)  ? <StartNode/> :
                ((row === 14 && col === 35) && <TargetNode/>)
            }
        </div>
    )
}

export default Node