import { createSlice } from '@reduxjs/toolkit'
import data from '../../data/data'
import { v4 as uuidv4 } from "uuid";
import findNode from '../../services/findNode';
import findNodeAndParent from '../../services/findNodeAndParent';

export const treeSlice = createSlice({
    name: 'tree',
    initialState: {
        data: localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : data,
        showItemInput: false,
        targetNodeId: null,
        targetNodeType: null,
        content: ' '

    },
    reducers: {
        toggleItemInput: (state) => {
            state.showItemInput = !state.showItemInput;
        },
        handleTargetNode: (state, action) => {
            state.targetNodeId = action.payload
        },
        handleTargetNodeType: (state, action) => {
            state.targetNodeType = action.payload;
        },

        addNode: (state, action) => {
            const { inputValue } = action.payload;
            let newContainer = {};
            newContainer.title = inputValue;
            newContainer.id = uuidv4();
            newContainer.type = state.targetNodeType === 'leaf' ? 'leaf' : 'container';
            newContainer.content = ' ';

            if (state.targetNodeType !== 'leaf') {
                newContainer.children = [];
            }

            if (!state.targetNodeId) {
                state.data?.push(newContainer);
            } else {
                const targetNode = findNode(state.targetNodeId, state.data);
                if (targetNode) {
                    targetNode.children?.push(newContainer);
                }
            }
            localStorage.setItem('data', JSON.stringify(state.data))
        },
        deleteNode: (state, action) => {
            const id = action.payload;
            const { node, parentArr } = findNodeAndParent(id, state.data);
            if (node && parentArr) {
                const index = parentArr.indexOf(node);
                if (index !== -1) {
                    parentArr.splice(index, 1);
                }
            }

            localStorage.setItem('data', JSON.stringify(state.data))

        },
        setContent: (state, action) => {
            if (state.targetNodeId) {
                state.content = action.payload;
                if (state.targetNodeId) {
                    const targetNode = findNode(state.targetNodeId, state.data);
                    if (targetNode) {
                        targetNode.content = state.content;
                    }
                }
                localStorage.setItem('data', JSON.stringify(state.data))
            }
        }

    }

})
export const { addNode, toggleItemInput, handleTargetNode, handleTargetNodeType, deleteNode, setContent } = treeSlice.actions;
export default treeSlice.reducer