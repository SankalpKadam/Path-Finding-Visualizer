import React from 'react';
import './index.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StartNode from '../Elements/StartNode';
import AdjustIcon from '@mui/icons-material/Adjust';
import TargetNode from '../Elements/TargetNode';
import { useSelector } from 'react-redux';
import { startNode, targetNode } from '../../store/slices/nodeSlice';

const Node = ({row, col}) => {
    const start = useSelector(startNode)
    const target = useSelector(targetNode)
    const handleClick = (e)=>{
        console.log(e.target.id);
        
    }
    return (
        <div className='node' id={`${row}-${col}`} onClick={handleClick}>
            {
                (row === start[0] && col === start[1])  ? <StartNode/> :
                ((row === target[0] && col === target[1]) && <TargetNode/>)
            }
        </div>
    )
}

export default Node