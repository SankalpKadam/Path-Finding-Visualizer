//method to calculate the nearest node is manhattan distance
function Dijkstra(start_node, target_node){
    let visited = {}
    let queue = [[calculateDistance(start_node[0], start_node[1]),...start_node, 0]]
    let pathTracer = {}
    pathTracer[`${start_node[0]}-${start_node[1]}`] = {
        parent:null,
        id:`${start_node[0]}-${start_node[1]}`
    }
    while (queue.length > 0){
        let popped = queue.shift()
        let x = popped[1]
        let y = popped[2]
        let temp = popped[3]
        if(x == target_node[0] && y == target_node[1]){
            console.log(pathTracer);
            setTimeout(()=>{
                try {
                    
                    // console.log(`${x}-${y}, color`)
                    document.getElementById(`${x}-${y}`).style.backgroundColor="#6695b7"
                    DrawPath(pathTracer)
                } catch (error) {
                    console.log(error);
                    
                }
            },250+temp*100)
            break
        }
        else if(0<=x && x<25 && 0<=y && y<50 && !visited[`${x}-${y}`] ){

            visited[`${x}-${y}`] = true
            setTimeout(()=>{
                try {
                    
                    document.getElementById(`${x}-${y}`).style.backgroundColor="#6695b7"
                } catch (error) {
                    console.log(error);
                    
                }
            },250+temp*100)
            queue.push([calculateDistance(x+1, y), x+1, y, temp+1])
            pathTracer[`${x+1}-${y}`] = {
                parent:pathTracer[`${x}-${y}`],
                id:`${x+1}-${y}`
            }
            queue.push([calculateDistance(x-1, y), x-1, y, temp+1])
            pathTracer[`${x-1}-${y}`] = {
                parent:pathTracer[`${x}-${y}`],
                id:`${x-1}-${y}`
            }
            queue.push([calculateDistance(x, y+1), x, y+1, temp+1])
            pathTracer[`${x}-${y+1}`] = {
                parent:pathTracer[`${x}-${y}`],
                id:`${x}-${y+1}`
            }
            queue.push([calculateDistance(x, y-1), x, y-1, temp+1])
            pathTracer[`${x}-${y-1}`] = {
                parent:pathTracer[`${x}-${y}`],
            id:`${x}-${y-1}`
        }
        queue.sort((a,b)=>a[0]-b[0])
        // console.log(queue);
        
        // break
    }
    }


    function calculateDistance(x,y){
        return Math.abs(target_node[0]-x)+Math.abs(target_node[1]-y)
    }

    function DrawPath(obj){
        let ids = [];
        let node = obj[`${target_node[0]}-${target_node[1]}`]//replace with the x and y for goal node
        let delay = 0;
    
        while (node){
            ids.push(node.id)
            node = node.parent
        }
        for (let index = ids.length-1; index >= 0; index--) {
            setTimeout(()=>{
                document.getElementById(ids[index]).style.backgroundColor="#f8ef1f"
            },250+delay)
            delay+=25
        }
        
    
    }

}

export default Dijkstra