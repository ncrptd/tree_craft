import { configureStore } from "@reduxjs/toolkit";
import treeReducer from './slices/treeSlice'

export default configureStore({
    reducer: {
        tree: treeReducer
    }
})