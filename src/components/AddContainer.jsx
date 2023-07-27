import { useDispatch } from 'react-redux'
import { addContainer, toggleNewContainer } from '../store/slices/TreeSlice';
import { useState } from 'react';

function AddContainer() {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');


    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (inputValue === '') return;
        dispatch(addContainer(inputValue));
        dispatch(toggleNewContainer());
        setInputValue('');
    }
    return (
        <form className="flex mt-2 mb-2 gap-2" onSubmit={handleFormSubmit}>
            <input type="text" placeholder="New Container" className="p-1" value={inputValue} onChange={(e) => setInputValue(e.target.value)} autoFocus />
            <div className="flex gap-2">
                <button type="submit" className="py-1 px-2 bg-green-500 text-white rounded">Add </button>
                <button className="py-1 px-2 bg-red-500 text-white rounded">Cancel</button>
            </div>
        </form>
    )
}
export default AddContainer