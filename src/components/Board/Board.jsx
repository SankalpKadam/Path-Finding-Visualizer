import React, { useEffect, useState } from "react";
import './index.css'
import Node from "../Node/Node";
const Board = () =>{
    const {rows, cols} = {rows: 10, cols:5}
    const [nodes, setNodes] = useState([])
    useEffect(()=>{
        let nodes = []
        for(let i = 0; i< 10; i++){
            let temp = []
            for (let j =0 ; j< 5; j++){
                temp.push(0)
            }
            nodes.push(temp)
        }
        setNodes(nodes)
        console.log("nodes ",nodes);
        
    },[])
    return (
        <div className="board">
            {
                // nodes.map((row, rowIndex)=>{
                //     return (<>
                //     {

                //         row.map((col, colIndex)=><Node/>)
                //     }
                //     </>)
                // })
                Array(108*5).fill(0).map((item)=><Node/>)
            }
        </div>
    )
}

export default Board;