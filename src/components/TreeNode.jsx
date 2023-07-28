import { useState } from "react"
import TreeNodeOptions from './TreeNodeOptions'
import { useDispatch } from "react-redux";
import { deleteNode } from "../store/slices/TreeSlice";
function TreeNode({ nodeItem, indent }) {
    const [open, setOpen] = useState(false);
    const { title, children, type } = nodeItem;
    const dispatch = useDispatch();


    const handleNodeOpen = () => {
        if (nodeItem.type === 'container') {
            return setOpen((prev) => !prev);
        }
    }
    const handleLeafItemDelete = () => {
        dispatch(deleteNode(nodeItem.id))
    }

    return (
        <div >
            <div className={`flex justify-between items-center w-full my-2 p-1 rounded ${open && 'bg-slate-200'}`} style={{ marginLeft: `${indent * 20}px` }}>
                <div className="flex gap-2 items-center cursor-pointer" onClick={handleNodeOpen}>
                    {type === 'container' && <div>
                        {!open ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-2 h-2"><path fill="currentColor" d="m19.704 12l-8.492-8.727a.75.75 0 1 1 1.075-1.046l9 9.25a.75.75 0 0 1 0 1.046l-9 9.25a.75.75 0 1 1-1.075-1.046L19.705 12Z" /></svg> :
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-2 h-2">
                                <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clipRule="evenodd" />
                            </svg>

                        }
                    </div>}
                    <div className={`${type !== 'container' && 'ml-4 font-medium text-slate-500'} flex items-center justify-between gap-x-[105px]`} >
                        <span className=" w-32 overflow-hidden text-ellipsis font-semibold ">
                            {title}
                        </span>
                        {type === 'leaf' &&
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-black" onClick={handleLeafItemDelete}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg>

                        }
                    </div>
                </div>
                {type === 'container' && <TreeNodeOptions nodeItem={nodeItem} setOpen={setOpen} />}
            </div>
            {children && children.length > 0 && open && children.map((nodeItem) => <TreeNode nodeItem={nodeItem} key={nodeItem?.id} indent={indent + 1} />)}

        </div>
    )
}
export default TreeNode

