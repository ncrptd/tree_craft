import { configureStore } from "@reduxjs/toolkit";
import treeReducer from './slices/TreeSlice'

export default configureStore({
    reducer: {
        tree: treeReducer
    }
})