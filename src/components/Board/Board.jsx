import React, { useEffect, useState } from "react";
import './index.css'
import Node from "../Node/Node";
const Board = () =>{
    const [nodes, setNodes] = useState([])
    useEffect(()=>{
        let nodes = []
        for(let i = 0; i< 15; i++){
            let temp = []
            for (let j =0 ; j< 36; j++){
                temp.push(0)
            }
            nodes.push(temp)
        }
        setNodes(nodes)
        
    },[])
    return (
        <div className="board">
            {
                nodes.map((row, rowIndex)=>{
                    return (<>
                    {

                        row.map((col, colIndex)=><Node row={rowIndex} col={colIndex}/>)
                    }
                    </>)
                })
            }
        </div>
    )
}

export default Board;