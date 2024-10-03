import React, { useState } from 'react'
import './index.css'
import BFS from '../../Algorithms/BFS'
import { useSelector } from 'react-redux'
import { startNode, targetNode } from '../../store/slices/nodeSlice'
import { DFS } from '../../Algorithms/DFS'
const Navbar = () => {
  const start = useSelector(startNode)
  const target = useSelector(targetNode)
  const [selected, setSelected] = useState('')
  // const options = {
  //   BFS:BFS(start, target, 0),
  //   DFS:DFS(start, target,0)
  // }
  const myBFS = (e)=>{
    if(start && target){
      console.log(selected);
      
      if(selected === 'BFS') BFS(start,target,0)
      else if (selected === 'DFS') DFS(start, target,0)
      else alert('Select an algo')
      setSelected('')
    }
  }
  return (
    <div className='navbar'>
      <p className='navbar__logo'>PathFinding <span>Visualizer</span></p>
      <div className='navbar__options'>
        <select name="algorithm" id="select__algo" onClick={(e)=>setSelected(e.target.value)}>
          <option value="BFS" onClick={(e)=>setSelected(e.target.value)}>Breadth-First Search</option>
          <option value="DFS" onClick={(e)=>setSelected(e.target.value)}>Depth-First Search</option>
          <option value="Dijkstra" onClick={(e)=>setSelected(e.target.value)}>Dijkstra's</option>
        </select>
        <p>Reset</p>
        <p>Clear Walls</p>
        <button onClick={myBFS}>Visualize!</button>
      </div>
    </div>
  )
}

export default Navbar
