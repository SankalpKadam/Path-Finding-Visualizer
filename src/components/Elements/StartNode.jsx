import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const StartNode = () => {

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
    
  }
  return (
    <div className='startnode' style={myStyle} draggable onDragStart={onDragStart}>
      <PlayArrowIcon/>
    </div>
  )
}

export default StartNode
