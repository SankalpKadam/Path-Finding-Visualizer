import React, { useRef, useState } from 'react';
import './index.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StartNode from '../Elements/StartNode';
import AdjustIcon from '@mui/icons-material/Adjust';
import TargetNode from '../Elements/TargetNode';
import { useDispatch, useSelector } from 'react-redux';
import { setStartNode, setTargetNode, startNode, targetNode } from '../../store/slices/nodeSlice';

const Node = ({row, col}) => {
    const start = useSelector(startNode)
    const target = useSelector(targetNode)
    const [type, setType] = useState('')
    const dispatch = useDispatch();
    const handleClick = ()=>{
        if(!start){
            setType('start')
            // myRef.current.appendChild(<StartNode/>)
            dispatch(setStartNode({
                start:[row, col]
            }))
        }
        else if(!target){
            setType('target')
            // myRef.current.appendChild(<TargetNode/>)
            dispatch(setTargetNode({
                target:[row,col]
            }))
        }
        myRef.current.onClick = ()=>{}
        
    }
    const myRef = useRef()
    return (
        <div className='node' id={`${row}-${col}`} ref={myRef} onClick={handleClick} onDrop={()=>{
            console.log("helllo");
            
        }} onDragOver={()=>{
            console.log('over');
            
        }}
        >

            {
                (type==='start') ? <StartNode/>:(type === 'target' && <TargetNode/>)
            }
        </div>
    )
}

export default Node