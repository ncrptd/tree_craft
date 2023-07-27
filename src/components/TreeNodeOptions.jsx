import { useDispatch } from 'react-redux'
import { toggleNewContainer } from '../store/slices/TreeSlice'
function TreeNodeOptions() {
    const dispatch = useDispatch();

    return (
        <ul className="flex gap-4 cursor-pointer ">
            <li className="flex justify-center items-center group relative">
                <div className={`p-2 rounded bg-black text-white hidden group-hover:block  absolute top-5 text-sm whitespace-nowrap`}>
                    Create Item
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ">
                    <path fillRule="evenodd" d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z" clipRule="evenodd" />
                </svg>
            </li>
            <li className="flex justify-center items-center relative group" onClick={() => dispatch(toggleNewContainer())}>
                <div className={`p-2 rounded bg-black text-white invisible group-hover:visible absolute top-5 text-sm whitespace-nowrap`}>
                    Create Container
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="M1.992 19h3m3 0h-3m0 0v-3m0 3v3M7 2h9.5L21 6.5V19" /><path d="M11 22h5.5a1.5 1.5 0 0 0 1.5-1.5V8.749a.6.6 0 0 0-.176-.425l-3.148-3.148A.6.6 0 0 0 14.25 5H4.5A1.5 1.5 0 0 0 3 6.5V13" /><path d="M14 5v3.4a.6.6 0 0 0 .6.6H18" /></g></svg>
            </li>
            <li className="flex justify-center items-center relative group">
                <div className={`p-2 rounded bg-black text-white hidden group-hover:block  absolute top-5 text-sm whitespace-nowrap z-10`} >
                    Delete
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-4 h-4"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><circle cx="8" cy="2.5" r=".75" /><circle cx="8" cy="8" r=".75" /><circle cx="8" cy="13.5" r=".75" /></g></svg>
            </li>
        </ul>
    )
}
export default TreeNodeOptions