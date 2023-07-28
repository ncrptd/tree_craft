import { createSlice } from '@reduxjs/toolkit'
import data from '../../data/data'
import { v4 as uuidv4 } from "uuid";

export const treeSlice = createSlice({
    name: 'tree',
    initialState: {
        data: data,
        showItemInput: false,
        targetNodeId: null,
    },
    reducers: {
        toggleItemInput: (state) => {
            state.showItemInput = !state.showItemInput;
        },
        handleTargetNode: (state, action) => {
            state.targetNodeId = action.payload
        },
        addContainer: (state, action) => {
            const { inputValue, targetNodeId } = action.payload;

            let newContainer = {};
            newContainer.title = inputValue;
            newContainer.id = uuidv4();
            newContainer.type = 'container'
            newContainer.children = []

            if (targetNodeId === null) {
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
                const targetNode = findNode(targetNodeId, state.data);
                if (targetNode) {
                    targetNode.children.push(newContainer);
                }
            }
        },
        deleteContainer: (state, action) => {
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

        }
    }

})
export const { addContainer, toggleItemInput, handleTargetNode, deleteContainer } = treeSlice.actions;
export default treeSlice.reducer