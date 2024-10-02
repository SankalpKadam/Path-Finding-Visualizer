import React from 'react'
import './index.css'
const Navbar = () => {
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
        <button>Visualize!</button>
      </div>
    </div>
  )
}

export default Navbar
