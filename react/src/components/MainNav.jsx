import { useState } from 'react';
import { IoMdSearch } from "react-icons/io"

const MainNav = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    return (
            <div className="flex flex-1 justify-between bg-[#245685] pl-6 py-1 items-center">
            <div className="flex items-center max-md:relative">
                <button className="text-white text-lg font-semibold hidden max-md:block border-[#1999FF] border-2 rounded-sm px-5 py2" onClick={toggleDropdown}> {isDropdownOpen ? 'Close' : 'Menu'} </button>
                {isDropdownOpen && (
                    <ul className="absolute top-full left-0 z-50 text-white text-lg font-semibold gap-3 items-center bg-[#245685] p-4 rounded-sm shadow-md max-md:block hidden">
                    <li>Your Store</li>
                    <li>New & Noteworthy</li>
                    <li>Categories</li>
                    <li>Points Shop</li>
                    <li>News</li>
                    <li>Labs</li>
                    </ul>
                )}
                <ul className="max-md:hidden flex  flex-1 text-white text-lg font-semibold md:gap-6 max-md:absolute max-md:top-full max-md:left-0 ">
                    <li className="">
                        Your Store
                    </li>
                    <li className="">
                        New & Noteworthy
                    </li>
                    <li className="">
                        Categories
                    </li>
                    <li className="">
                        Points Shop
                    </li>
                    <li className="">
                        News
                    </li>
                    <li className="">
                        Labs
                    </li>
                </ul>
            </div>
            <div className="flex flex-row rounded-sm bg-[#316282] ">
                <input type="text" className=" py-1 px-5 text-[18px] bg-transparent text-[#272D37]"  placeholder="Search"/>
                <button className="rounded-sm px-2 py-2 text-[20px] bg-[#1999FF] text-[#272D37] mr-1" > <IoMdSearch /> </button>
            </div> 
        </div>
    )
}

export default MainNav