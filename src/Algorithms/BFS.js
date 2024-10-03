function BFS(start_node, target_node, level){
    let visited = {}
    let queue = [[...start_node, level]]
    let pathTracer = {}
    pathTracer[`${start_node[0]}-${start_node[1]}`]={
        parent:null,
        id:`${start_node[0]}-${start_node[1]}`
    }
    while(queue.length > 0){
        let popped = queue.shift()
        let x = popped[0]
        let y = popped[1]
        let temp = popped[2]
        if(x===target_node[0] && y===target_node[1]){
            // console.log('found')
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
        else if(0<=x && x<15 && 0<=y && y<36 && !visited[`${x}-${y}`] ){
            // console.log('Current processsed = '+x+" ,"+y)
            setTimeout(()=>{
                try {
                    
                    console.log(`${x}-${y}, color`)
                    document.getElementById(`${x}-${y}`).style.backgroundColor="#6695b7"
                } catch (error) {
                    console.log(error);
                    
                }
            },250+temp*100)
            visited[`${x}-${y}`] = true
            queue.push([x+1,y, temp+1])
            pathTracer[`${x+1}-${y}`] = {parent:pathTracer[`${x}-${y}`], id:`${x+1}-${y}`}
            queue.push([x-1,y, temp+1])
            pathTracer[`${x-1}-${y}`] = {parent:pathTracer[`${x}-${y}`], id:`${x-1}-${y}`}

            queue.push([x,y+1, temp+1])
            pathTracer[`${x}-${y+1}`] = {parent:pathTracer[`${x}-${y}`], id:`${x}-${y+1}`}

            queue.push([x,y-1, temp+1])
            pathTracer[`${x}-${y-1}`] = {parent:pathTracer[`${x}-${y}`], id:`${x}-${y-1}`}

        }
        else{
            // console.log(x,y);
            
            continue
        }
    }
    console.log('End')
    function DrawPath(obj){
        let ids = [];
        let node = obj[`${target_node[0]}-${target_node[1]}`]//replace with the x and y for goal node
    
        while (node){
            ids.push(node.id)
            node = node.parent
        }
        for (let index = ids.length-1; index >= 0; index--) {
            setTimeout(()=>{
                document.getElementById(ids[index]).style.backgroundColor="#f8ef1f"
            },250-index*100)
        }
        
    
    }
}

export default BFS