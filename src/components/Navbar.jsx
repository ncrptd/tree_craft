import { useState } from "react"

function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header>
            <div className=" flex mx-6 justify-between items-center p-2">
                <div className="flex gap-4">
                    <nav className="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                        </svg>
                    </nav>
                    <div className="flex gap-2 justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                        <input type="text" placeholder="dfin" />
                    </div>
                </div>

                <div className="flex gap-6 items-center justify-center text-sm">
                    <div className="flex gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-purple-900">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
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

                        {open && <div className="cursor-pointer absolute text-slate-500 top-10 right-1 rounded-md shadow-lg w-52 px-2 py-4 text-base flex flex-col gap-4 font-medium">
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