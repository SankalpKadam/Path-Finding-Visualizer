import { createSlice } from "@reduxjs/toolkit";

export const nodeSlice = createSlice({
    name:'node',
    initialState:{
        start:null,
        target:null,
        type:null,
    },
    reducers:{
        setStartNode:(state, action)=>{
            state.start = action.payload.start
        },
        setTargetNode:(state, action)=>{
            state.target = action.payload.target
        },
        setDragType:(state, action)=>{
            state.type = action.payload.type
        }
    },
});

export const {setStartNode, setTargetNode, setDragType} = nodeSlice.actions;

export const startNode = (state)=>state.node.start;
export const targetNode = (state) => state.node.target;
export const dragNode= (state)=>state.node.type;
export default nodeSlice.reducer;