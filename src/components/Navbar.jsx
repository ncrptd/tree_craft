import { useState } from "react"

function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header>
            <div className="flex flex-wrap mx-5 md:justify-between justify-center items-center px-2 py-4 gap-2">
                <div className="flex gap-10 ">
                    <nav className="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                        </svg>
                    </nav>
                    <div className="flex gap-2 justify-center items-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                        <input type="text" placeholder="dfin" className="w-full focus:outline px-2 rounded" />
                    </div>
                </div>

                <div className="flex gap-6 items-center justify-center text-sm">
                    <div className="flex gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-purple-900">
                            <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z" />
                        </svg>

                        <span className="uppercase">Invite team member</span>
                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                    </svg>
                    {/* profile  */}
                    <div className="flex justify-center items-center w-10 h-10 rounded-full bg-purple-700 text-white relative cursor-pointer" onClick={() => {
                        setOpen((prev) => !prev)
                    }}>
                        <span className="absolute w-3 h-3 rounded-full top-7 left-7 bg-green-600 border-2 border-white">
                        </span>
                        <span className="leading-4 absolute uppercase text-[10px] bg-red-600 text-white font-bold border-2 border-white rounded-2xl py-0 px-1  top-0 left-6">New</span>
                        <span>FL</span>

                        {open && <div className="cursor-pointer absolute text-slate-500 bg-white top-10 right-1 rounded-md shadow-lg w-52 px-2 py-4 text-base flex flex-col gap-4 font-medium">
                            <ul className="flex flex-col gap-1 border-b-2 p-1 border-slate-200">
                                <li className="flex justify-between items-center px-2 rounded hover:bg-blue-50"><span>
                                    Dark Mode
                                </span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.4} stroke="currentColor" className="w-8 h-8"><path fill="currentColor" d="M8 15.5a3.496 3.496 0 0 1-3.464-3.868A3.496 3.496 0 0 1 8 8.5a3.496 3.496 0 0 1 3.464 3.868A3.496 3.496 0 0 1 8 15.5Z" /><path fill="currentColor" fillRule="evenodd" d="M8.074 18.75h7.852a6.75 6.75 0 0 0 0-13.5H8.074a6.75 6.75 0 0 0 0 13.5Zm0-1.5a5.25 5.25 0 1 1 0-10.5h7.852a5.25 5.25 0 1 1 0 10.5H8.074Z" clipRule="evenodd" /></svg>
                                </li>
                                <li className="px-2 rounded hover:bg-blue-50">Profile</li>
                            </ul>
                            <ul className="flex flex-col gap-1 border-b-2 p-1 border-slate-200">
                                <li className="px-2 rounded hover:bg-blue-50">What&lsquo;s new</li>
                                <li className="px-2 rounded hover:bg-blue-50">Help</li>
                                <li className="px-2 rounded hover:bg-blue-50">Send feedback</li>
                                <li className="px-2 rounded hover:bg-blue-50">Hints and shortcuts</li>
                            </ul>
                            <ul className="p-1">
                                <li className="px-2 rounded hover:bg-blue-50">Log out</li>
                            </ul>
                        </div>}
                    </div>
                </div>
            </div>



        </header>
    )
}
export default Navbar