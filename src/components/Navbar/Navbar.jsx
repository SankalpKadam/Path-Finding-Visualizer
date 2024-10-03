import React from 'react'
import './index.css'
import BFS from '../../Algorithms/BFS'
import { useSelector } from 'react-redux'
import { startNode, targetNode } from '../../store/slices/nodeSlice'
const Navbar = () => {
  const start = useSelector(startNode)
  const target = useSelector(targetNode)
  const myBFS = (e)=>{
    if(start && target){

      BFS(start,target,0)
    }
  }
  return (
    <div className='navbar'>
      <p className='navbar__logo'>PathFinding <span>Visualizer</span></p>
      <div className='navbar__options'>
        <select name="algorithm" id="select__algo">
          <option value="BFS">Breadth-First Search</option>
          <option value="DFS">Depth-First Search</option>
          <option value="Dijkstra">Dijkstra's</option>
        </select>
        <p>Reset</p>
        <p>Clear Walls</p>
        <button onClick={myBFS}>Visualize!</button>
      </div>
    </div>
  )
}

export default Navbar
