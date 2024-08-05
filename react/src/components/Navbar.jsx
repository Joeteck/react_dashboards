import { useState } from 'react';
import { FaSteam, FaBell, FaQuestion, FaChevronDown, FaMinus, FaCross, FaBackward } from "react-icons/fa";
import { IoMdArrowDown, IoMdArrowDropdown, IoMdArrowRoundBack, IoMdArrowRoundForward, IoMdClose, IoMdDesktop, IoMdMegaphone } from "react-icons/io";
import { MdCancel, MdClose, MdMinimize, MdQuestionMark } from "react-icons/md";
import { IoClose, IoReload } from "react-icons/io5";
import { FaArrowsRotate } from "react-icons/fa6";
import { GiPadlock } from "react-icons/gi";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeNavItem, setActiveNavItem] = useState('');

    const toggleNavItem = (item) => {
        setActiveNavItem(item);
    }
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <nav className="bg-[#171D25] p-2 fixed flex flex-col w-full z-40">
            <div className="flex flex-row justify-between ">
                <div className="">
                    <ul className="flex flex-row text-[#67707B] text-lg text-center justify-center">
                        <li className="self-center">
                            <FaSteam  className="w-5 h-5 self-center" />
                        </li>
                        <li className="px-2">
                            Steam
                        </li>
                        <li className="px-2">
                            View
                        </li>
                        <li className="px-2">
                            Friends
                        </li>
                        <li className="px-2">
                            Games
                        </li>
                        <li className="px-2">
                            Help
                        </li>
                    </ul>
                </div>
                <div className="flex flex-row ">
                    <button className="rounded-sm p-[6px] px-5 text-[20px] bg-[#1999FF] mr-2" > <IoMdMegaphone /> </button>
                    <button className="rounded-sm p-[6px] px-5 text-[18px] bg-[#272D37] text-[#67707B]" ><FaBell /></button>
                    <div className="flex flex-row mx-2 items-center bg-[#272D37]">
                        <button className="rounded-sm p-[6px] m-[2px] text-[18px] bg-[#212121] text-[#67707B] border-r-[3px] border-[#1999FF]" ><MdQuestionMark /></button>
                        {/* Dropdown menu */}
                        <div className="relative inline-block text-left px-3" style={{position: "relative"}}>
                            <div>
                                <button className="flex flex-1 items-center gap-3 text-[#1999FF]" onClick={toggleDropdown}>
                                    Username
                                    <FaChevronDown />
                                    </button>
                            </div>
                            {isOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-[#171D25] rounded-md shadow-md shadow-slate-500/20" style={{zIndex: "100"}}>
                                    <ul className="rounded-md bg-[#171D25] text-white shadow-xl ">
                                        <li className="text-sm py-2 px-4">Account</li>
                                        <li className="text-sm py-2 px-4">Store</li>
                                        <li className="text-sm py-2 px-4">Settings</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                        <button className="rounded-sm p-[6px] text-[18px] text-[#67707B] text-center" ><IoMdDesktop /></button>
                        <button className="rounded-sm p-[6px] text-[18px] text-[#67707B] text-center" ><FaMinus /></button>
                        <button className="rounded-sm p-[6px] text-[22px] text-[#67707B] text-center" ><IoClose /></button>
                </div> 
            </div>
            <div className='flex flex-row items-center'>
                <button className="rounded-sm pr-[6px] text-[28px] text-[#67707B] text-center" ><IoMdArrowRoundBack /></button>
                <button className="rounded-sm p-[6px] text-[28px] text-[#67707B] text-center" ><IoMdArrowRoundForward /></button>
                <ul className='flex flex-1 gap-3 text-[22px]'>
                    <li className={`hover:text-[#1999FF] hover:border-b-[#1999FF] hover:border-b-[4px] text-white transition-colors duration-300 ${activeNavItem === 'store' ? 'border-b-[#1999FF] border-b-[4px] text-[#1999FF]' : ''}`} onClick={() => toggleNavItem('store')}>
                        <span className="font-semibold">STORE</span>
                    </li>
                    <li className={`hover:text-[#1999FF] hover:border-b-[#1999FF] hover:border-b-[4px] text-white transition-colors duration-300 ${activeNavItem === 'library' ? 'border-b-[#1999FF] border-b-[4px] text-[#1999FF]' : ''}`} onClick={() => toggleNavItem('library')}>
                        <span className="font-semibold">LIBRARY</span>
                    </li>
                    <li className={`hover:text-[#1999FF] hover:border-b-[#1999FF] hover:border-b-[4px] text-white transition-colors duration-300 ${activeNavItem === 'community' ? 'border-b-[#1999FF] border-b-[4px] text-[#1999FF]' : ''}`} onClick={() => toggleNavItem('community')}>
                        <span className="font-semibold">COMMUNITY</span>
                    </li>
                    <li className={`hover:text-[#1999FF] hover:border-b-[#1999FF] hover:border-b-[4px] text-white transition-colors duration-300 ${activeNavItem === 'username' ? 'border-b-[#1999FF] border-b-[4px] text-[#1999FF]' : ''}`} onClick={() => toggleNavItem('username')}>
                        <span className="font-semibold">USERNAME</span>
                    </li>
                </ul>
            </div>
            <div className='flex flex-row items-center'>
                <button className="rounded-sm px-[6px] text-[16px] text-[#67707B] text-center" ><FaArrowsRotate /></button>
                <button className="rounded-sm pl-[12px] text-[16px] text-[#67707B] text-center" ><GiPadlock /></button>
                <p className="text-[14px] px-1 text-[#67707B] text-center">https://steamcommunity.com/profiles/76561199081676671/</p>
            </div>
        </nav>
    )
}

export default Navbar