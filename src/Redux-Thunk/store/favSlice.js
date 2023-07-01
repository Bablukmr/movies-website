import { createSlice } from "@reduxjs/toolkit"


const favSlice=createSlice({
    name:'FAV',
  initialState:[], 
  reducers:{

    add(state,action){
        state.push(action.payload);
    },
    remove(state,action){
     return state.filter(item=>item.imdbID!==action.payload);

    }
  },
});
export const {add,remove}= favSlice.actions;
export default favSlice.reducer;