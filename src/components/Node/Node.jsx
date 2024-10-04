import React, { useEffect, useRef, useState } from 'react';
import './index.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StartNode from '../Elements/StartNode';
import AdjustIcon from '@mui/icons-material/Adjust';
import TargetNode from '../Elements/TargetNode';
import { useDispatch, useSelector } from 'react-redux';
import { dragNode, setStartNode, setTargetNode, startNode, targetNode } from '../../store/slices/nodeSlice';

const Node = ({row, col}) => {
    const start = useSelector(startNode)
    const target = useSelector(targetNode)
    const nodeType = useSelector(dragNode)
    const [type, setType] = useState('')
    const [clicked, setClicked] = useState(false)
    const dispatch = useDispatch();
    const handleClick = (e)=>{
        //if the node is not clicked only then you can place either the start or end node
        if(!clicked){

            setClicked(true)
            if(!start){
                setType('start')
                dispatch(setStartNode({
                    start:[row, col]
                }))
            }
            else if(!target){
                setType('target')
                dispatch(setTargetNode({
                    target:[row,col]
                }))
            }
            console.log(e.target);
        }
        
    }
    const myRef = useRef()
    return (
        <div className='node' id={`${row}-${col}`} ref={myRef} onClick={handleClick} onDrop={()=>{
            nodeType && setType(nodeType)
            if (nodeType === 'start')dispatch(setStartNode({
                start:[row,col]
            }))
            else dispatch(setTargetNode({
                target:[row,col]
            }))
        }} onDragOver={(e)=>{
            e.preventDefault()
            
        }}
        >
            {
                (type==='start' && start && start[0]===row && start[1]===col) ? <StartNode/>:((type === 'target'&& target && target[0]===row && target[1]===col) && <TargetNode/>)
            }
        </div>
    )
}



export default Node