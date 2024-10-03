// import { configureStore } from '@reduxjs/toolkit';
// export const store = configureStore({
//     reducer: {
//       counter: counterReducer,
//     },
//   });

import { createSlice } from "@reduxjs/toolkit";

  const initialstate = {
    count : 0
  }

  export const counterSlice = createSlice(
    {
        name:"counter",
        initialstate,

        reducer:{


                increment:(state)=>{
                    state.count +=1
                },

                decrement:(state)=>{
                    state.count -=1
                },
                

        },
    });

  export const  {increment,decrement}=counterSlice.actions;
  export default counterSlice.reducer
