import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';

const TargetNode = () => {
    const myStyle = {
        'width':'100%',
        'height':'100%',
        'color':'#3baa7c',
        'display':'flex',
        'justify-content':'center',
        'align-items':'center'
      }
      const onDragStart = (e)=>{
        console.log(e.target);
        
      }
  return (
    <div className='endnode' style={myStyle} draggable onDragStart={onDragStart}>
      <AdjustIcon/>
    </div>
  )
}

export default TargetNode
