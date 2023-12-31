import { useDispatch } from 'react-redux'
import { toggleItemInput, handleTargetNode, handleTargetNodeType, deleteNode, setContent } from '../store/slices/treeSlice';
function TreeNodeOptions({ nodeItem, setOpen }) {
    const dispatch = useDispatch();

    const handleAddNewContainer = () => {
        dispatch(handleTargetNode(nodeItem?.id));
        dispatch(handleTargetNodeType('container'));
        dispatch(toggleItemInput());
        setOpen(true)
    }

    const handleAddNewLeaf = () => {
        dispatch(handleTargetNode(nodeItem?.id));
        dispatch(handleTargetNodeType('leaf'));
        dispatch(toggleItemInput());
        setOpen(true)
    }
    const handleDelete = () => {
        dispatch(deleteNode(nodeItem?.id));
        dispatch(setContent(' '));

    }
    return (
        <ul className="flex gap-4 cursor-pointer ">
            <li className="flex justify-center items-center group relative" onClick={handleAddNewLeaf}>
                <div className={`p-2 rounded bg-black text-white hidden group-hover:block  absolute top-5 text-sm whitespace-nowrap`}>
                    Create Item
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ">
                    <path fillRule="evenodd" d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z" clipRule="evenodd" />
                </svg>
            </li>
            <li className="flex justify-center items-center relative group" onClick={handleAddNewContainer}>
                <div className={`p-2 rounded bg-black text-white invisible group-hover:visible absolute top-5 text-sm whitespace-nowrap`}>
                    Create Container
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="M1.992 19h3m3 0h-3m0 0v-3m0 3v3M7 2h9.5L21 6.5V19" /><path d="M11 22h5.5a1.5 1.5 0 0 0 1.5-1.5V8.749a.6.6 0 0 0-.176-.425l-3.148-3.148A.6.6 0 0 0 14.25 5H4.5A1.5 1.5 0 0 0 3 6.5V13" /><path d="M14 5v3.4a.6.6 0 0 0 .6.6H18" /></g></svg>
            </li>
            <li className="flex justify-center items-center relative group" onClick={handleDelete}>
                <div className={`p-2 rounded bg-black text-white hidden group-hover:block  absolute top-5 text-sm whitespace-nowrap z-10`} >
                    Delete
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>

            </li>

        </ul>
    )
}
export default TreeNodeOptions