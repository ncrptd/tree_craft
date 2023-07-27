import { createSlice } from '@reduxjs/toolkit'
import data from '../../data/data'
import { v4 as uuidv4 } from "uuid";

export const treeSlice = createSlice({
    name: 'tree',
    initialState: {
        data: data,
        toggleNewContainer: false,
    },
    reducers: {
        toggleNewContainer: (state) => {
            state.toggleNewContainer = !state.toggleNewContainer;
        },
        addContainer: (state, action) => {
            let newContainer = {};
            newContainer.title = action.payload;
            newContainer.id = uuidv4();
            newContainer.type = 'container'
            newContainer.children = []
            state.data.push(newContainer);
        }
    }

})
export const { addContainer, toggleNewContainer } = treeSlice.actions;
export default treeSlice.reducer