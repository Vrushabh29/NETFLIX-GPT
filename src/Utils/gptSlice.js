import { createSlice } from "@reduxjs/toolkit";

const gptSlice= createSlice({
    name:"gpt",
    initialState: {
        showGptSearch:false,
        gptMovie:null,
        moviename:null,
        movieresult:null

        
    },
    reducers:{
        toggoleGPTSearchView:(state)=>{
            state.showGptSearch=!state.showGptSearch
        },
        addGPTMovieResult:(state,action)=>{
          const  {moviename,movieresult}=action.payload
          state.moviename=moviename;
          state.movieresult=movieresult;
        },

    

    }
})

       
export const {toggoleGPTSearchView,addGPTMovieResult}=gptSlice.actions
export  default  gptSlice.reducer;