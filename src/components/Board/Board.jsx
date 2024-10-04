import React, { useEffect, useState } from "react";
import './index.css'
import Node from "../Node/Node";
const Board = () =>{
    const [nodes, setNodes] = useState([])
    useEffect(()=>{
        let nodes = []
        for(let i = 0; i< 25; i++){
            let temp = []
            for (let j =0 ; j< 50; j++){
                temp.push(0)
            }
            nodes.push(temp)
        }
        setNodes(nodes)
        
    },[])
    return (
        <table className="board" cellSpacing={"0"}>
            <tbody>
            {
                nodes.map((row, rowIndex)=>{
                    return (<tr>
                    {

                        row.map((col, colIndex)=>{
                        return (<td>
                            
                            <Node row={rowIndex} col={colIndex}/>
                        </td>)
                    })
                    }
                    </tr>)
                })
            }
                
                
            </tbody>
        </table>
    )
}

export default Board;