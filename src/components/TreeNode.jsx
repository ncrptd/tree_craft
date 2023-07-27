import { useState } from "react"
import TreeNodeOptions from './TreeNodeOptions'
function TreeNode({ nodeItem, indent }) {
    const [open, setOpen] = useState(false);
    const { title, children } = nodeItem;

    return (
        <div>
            <div className={`flex justify-between items-center w-full py-2`} style={{ marginLeft: `${indent * 20}px` }}>
                <div className="flex gap-2 items-center cursor-pointer " onClick={() => setOpen((prev) => !prev)}>
                    {children && <div>
                        {!open ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-2 h-2"><path fill="currentColor" d="m19.704 12l-8.492-8.727a.75.75 0 1 1 1.075-1.046l9 9.25a.75.75 0 0 1 0 1.046l-9 9.25a.75.75 0 1 1-1.075-1.046L19.705 12Z" /></svg> :
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-2 h-2">
                                <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clipRule="evenodd" />
                            </svg>

                        }
                    </div>}
                    <span className={`${!children && 'ml-4 font-medium text-slate-500'} font-semibold`}>{title}</span>
                </div>
                {children && <TreeNodeOptions />}
            </div>
            {children && children.length > 0 && open && children.map((nodeItem) => <TreeNode nodeItem={nodeItem} key={nodeItem?.id} indent={indent + 1} />)}

        </div>
    )
}
export default TreeNode

