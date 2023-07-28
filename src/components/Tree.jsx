import TreeOptions from "./TreeOptions"
import TreeNode from "./TreeNode"
import { useDispatch, useSelector } from 'react-redux'
import ItemNameInput from "./ItemNameInput";
import { useRef } from "react";
import JoditEditor from 'jodit-react';
import { setContent } from "../store/slices/treeSlice";

function Tree() {
    const data = useSelector(state => state.tree.data);
    const showItemInput = useSelector(state => state.tree.showItemInput);
    const content = useSelector(state => state.tree.content)
    const dispatch = useDispatch();

    const editor = useRef(null);
    return (
        <main className="h-screen">
            <ul className="flex gap-2 items-center mx-5 px-2 ">
                <li className="border-b-2 p-2 border-red-500">All</li>
                <li className="p-2">Board</li>
                <li className="p-2">Graph</li>
                <li className="p-2">Recent</li>
                <li className="p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-4 h-4"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><circle cx="8" cy="2.5" r=".75" /><circle cx="8" cy="8" r=".75" /><circle cx="8" cy="13.5" r=".75" /></g></svg>
                </li>
            </ul>

            <div className="flex border h-full">
                <div className="w-full px-6 bg-slate-50  overflow-auto md:w-2/5">
                    <TreeOptions />

                    {showItemInput && <ItemNameInput />}

                    {data.map((nodeItem) => <TreeNode nodeItem={nodeItem} key={nodeItem?.id} indent={0} />)}
                </div>
                <div className="w-full ">
                    <JoditEditor
                        ref={editor}
                        value={content}
                        tabIndex={1} // tabIndex of textarea
                        onBlur={(newContent) => {
                            dispatch(setContent(newContent));
                        }} // preferred to use only this option to update the content for performance reasons
                    />
                </div>
            </div>
        </main>
    )
}
export default Tree