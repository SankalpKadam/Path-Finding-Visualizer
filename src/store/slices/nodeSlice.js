import { createSlice } from "@reduxjs/toolkit";

export const nodeSlice = createSlice({
    name:'node',
    initialState:{
        start:[7,5],
        target:[14,8]
    },
    reducers:{
        setStartNode:(state, action)=>{
            state.start = action.payload.start
        },
        setTargetNode:(state, action)=>{
            state.target = action.payload.target
        }
    },
});

export const {setStartNode, setTargetNode} = nodeSlice.actions;

export const startNode = (state)=>state.node.start;
export const targetNode = (state) => state.node.target;

export default nodeSlice.reducer;