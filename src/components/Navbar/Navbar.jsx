import React from 'react'
import './index.css'
import BFS from '../../Algorithms/BFS'
const Navbar = () => {
  const myBFS = (e)=>{
    BFS([0,0],[14,35],0)
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
