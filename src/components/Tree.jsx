import TreeOptions from "./TreeOptions"
import TreeNode from "./TreeNode"
import data from "../data/data"
function Tree() {
    return (
        <main>
            <ul className="flex gap-2 items-center mx-5 px-2 ">
                <li className="border-b-2 p-2">All</li>
                <li className="p-2">Board</li>
                <li className="p-2">Graph</li>
                <li className="p-2">Recent</li>
                <li className="p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-4 h-4"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><circle cx="8" cy="2.5" r=".75" /><circle cx="8" cy="8" r=".75" /><circle cx="8" cy="13.5" r=".75" /></g></svg>
                </li>
            </ul>

            <div className="flex border border-slate-300">
                <div className="w-2/5 px-6 bg-slate-50 h-[500px] overflow-auto">
                    <TreeOptions />
                    {data.map((nodeItem) => <TreeNode nodeItem={nodeItem} key={nodeItem?.id} indent={0} />)}
                </div>
                <div className="w-full"></div>
            </div>
        </main>
    )
}
export default Tree