export const DFS = (start_node, target_node, level) => {
    let visited = {}
    let pathTracer = {}
    let delay = 0
    pathTracer[`${start_node[0]}-${start_node[1]}`] = {
        parent: null,
        id: `${start_node[0]}-${start_node[1]}`
    }
    function recursion(parent,x, y, level) {
        if (x === target_node[0] && y === target_node[1]) {
            pathTracer[`${x}-${y}`] = {parent: parent,id:`${x}-${y}`}
            setTimeout(() => {
                try {

                    document.getElementById(`${x}-${y}`).style.backgroundColor = "#6695b7"
                    DrawPath(pathTracer)
                } catch (error) {
                    console.log(error);

                }
            }, 250+delay)
            return true
        }
        else if (0 <= x && x < 25 && 0 <= y && y < 50 && !visited[`${x}-${y}`]) {
            setTimeout(() => {
                try {

                    document.getElementById(`${x}-${y}`).style.backgroundColor = "#6695b7"
                    // DrawPath(pathTracer)
                } catch (error) {
                    console.log(error);

                }
            }, 250+delay)
            delay+=100
            visited[`${x}-${y}`] = true
            pathTracer[`${x}-${y}`] = {parent: parent,id:`${x}-${y}`}
            return recursion(pathTracer[`${x}-${y}`],x - 1, y, level+1) || recursion(pathTracer[`${x}-${y}`],x, y-1, level+1) || recursion(pathTracer[`${x}-${y}`],x+1, y, level+1) || recursion(pathTracer[`${x}-${y}`],x, y + 1, level+1)
        }
        else {
            return
        }
    }
    recursion(pathTracer[`${start_node[0]}-${start_node[1]}`],start_node[0], start_node[1], 0)
    
    function DrawPath(obj) {
        let ids = [];
        let node = obj[`${target_node[0]}-${target_node[1]}`]//replace with the x and y for goal node
        console.log(node);
        let delay = 0;
        while (node) {
            ids.push(node.id)
            node = node.parent
        }
        for (let index = ids.length - 1; index >= 0; index--) {
            setTimeout(() => {
                document.getElementById(ids[index]).style.backgroundColor = "#f8ef1f"
            }, 250+delay)
            delay+=25
        }


    }
}