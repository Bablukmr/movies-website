
import { configureStore } from "@reduxjs/toolkit";
import favRducer from './favSlice'

const store = configureStore({
    reducer: {
        FAV:favRducer,
    }

})

export default store;