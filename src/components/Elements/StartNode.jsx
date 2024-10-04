import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useDispatch } from 'react-redux';
import { setDragType, setStartNode } from '../../store/slices/nodeSlice';

const StartNode = () => {
  const dispatch = useDispatch()
  const myStyle = {
    'width':'100%',
    'height':'100%',
    'color':'#e21c1c',
    'display':'flex',
    'justifyContent':'center',
    'alignItems':'center'
  }
  const onDragStart = (e)=>{
    console.log(e.target);
    dispatch(setDragType({
      type:'start'
    }))
  }
  return (
    <div id='startnode' style={myStyle} draggable onDragStart={onDragStart}>
      <PlayArrowIcon/>
    </div>
  )
}

export default StartNode
