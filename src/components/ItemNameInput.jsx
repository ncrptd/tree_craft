import { useDispatch, useSelector } from 'react-redux'
import { addContainer, toggleItemInput, handleTargetNode } from '../store/slices/TreeSlice';
import { useState } from 'react';

function ItemNameInput() {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');
    const targetNodeId = useSelector(state => state.tree.targetNodeId);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (inputValue === '') return;
        dispatch(addContainer({ inputValue, targetNodeId }));
        dispatch(toggleItemInput());
        setInputValue('');
        dispatch(handleTargetNode(null))
    }
    return (
        <form className="flex mt-2 mb-2 gap-2" onSubmit={handleFormSubmit}>
            <input type="text" placeholder="New Container" className="p-1" value={inputValue} onChange={(e) => setInputValue(e.target.value)} autoFocus />
            <div className="flex gap-2">
                <button type="submit" className="py-1 px-2 bg-green-500 text-white rounded">Add </button>
                <button className="py-1 px-2 bg-red-500 text-white rounded" onClick={() => dispatch(toggleItemInput())}>Cancel</button>
            </div>
        </form>
    )
}
export default ItemNameInput