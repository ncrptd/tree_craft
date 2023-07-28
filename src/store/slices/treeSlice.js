import { createSlice } from '@reduxjs/toolkit'
import data from '../../data/data'
import { v4 as uuidv4 } from "uuid";

export const treeSlice = createSlice({
    name: 'tree',
    initialState: {
        data: localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : data,
        showItemInput: false,
        targetNodeId: null,
        targetNodeType: null,

    },
    reducers: {
        toggleItemInput: (state) => {
            state.showItemInput = !state.showItemInput;
        },
        handleTargetNode: (state, action) => {
            console.log(action.payload)
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
            newContainer.type = state.targetNodeType === 'leaf' ? 'leaf' : 'container'
            if (state.targetNodeType !== 'leaf') {
                newContainer.children = [];
            }

            if (state.targetNodeId === null) {
                state.data.push(newContainer);
            } else {
                const findNode = (id, arr) => {
                    for (let node of arr) {
                        if (node.id === id) {
                            return node;
                        } else if (node.children && node.children.length > 0) {
                            const foundNode = findNode(id, node.children);
                            if (foundNode) {
                                return foundNode
                            }
                        }
                    }
                    return null;
                }
                const targetNode = findNode(state.targetNodeId, state.data);
                if (targetNode) {
                    targetNode.children.push(newContainer);
                }
            }
            localStorage.setItem('data', JSON.stringify(state.data))
        },
        deleteNode: (state, action) => {
            const targetNodeId = action.payload;
            const findNodeAndParent = (id, arr) => {
                for (let node of arr) {
                    if (node.id === id) {
                        return { node, parentArr: arr };
                    } else if (node.children && node.children.length > 0) {
                        const foundNode = findNodeAndParent(id, node.children);
                        if (foundNode) {
                            return foundNode
                        }
                    }
                }
                return null;
            }
            const { node, parentArr } = findNodeAndParent(targetNodeId, state.data);
            if (node && parentArr) {
                const index = parentArr.indexOf(node);
                if (index !== -1) {
                    parentArr.splice(index, 1);
                }
            }
            localStorage.setItem('data', JSON.stringify(state.data))

        },

    }

})
export const { addNode, toggleItemInput, handleTargetNode, handleTargetNodeType, deleteNode } = treeSlice.actions;
export default treeSlice.reducer