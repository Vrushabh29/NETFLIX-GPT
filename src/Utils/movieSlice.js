import { createSlice } from "@reduxjs/toolkit";

 const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayMovies:null,
        traillerVideo:null,
        PopularMovies:null,
        topRatedMovie:null,
        upcomingMovie:null
    },
    reducers:{
        addNowPlayingMovie:(state,action)=>{
            state.nowPlayMovies=action.payload

        },
        addNowPopularMovie:(state,action)=>{
            state.PopularMovies=action.payload

        },
        addTopRatedMovie:(state,action)=>{
            state.topRatedMovie=action.payload

        },
        addUPComingMovie:(state,action)=>{
            state.upcomingMovie=action.payload

        },
        addTrailler:(state,action)=>{
            state.traillerVideo=action.payload

        }
    }
 })

 export default movieSlice.reducer

 export const { addNowPlayingMovie,addTrailler,addNowPopularMovie,addTopRatedMovie,addUPComingMovie} = movieSlice.actions;