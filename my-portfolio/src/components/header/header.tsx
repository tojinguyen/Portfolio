import React, { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false); // State để quản lý trạng thái mở/đóng của menu

    const toggleMenu = () => {
        setIsOpen(!isOpen); // Đảo ngược trạng thái của menu
    };

    return (
        <header className="bg-black/75 w-full fixed top-0 left-0 z-50"> {/* Đặt màu nền đen với alpha 75% */}
            <nav className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">
                <div className="text-xl font-bold">My Portfolio</div>
                <div className="block lg:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        {/* Icon hamburger */}
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
                {/* Menu */}
                <ul className={`flex-col lg:flex-row lg:flex lg:space-x-4 absolute lg:static bg-black lg:bg-transparent left-0 right-0 transition-all duration-300 ease-in-out ${isOpen ? 'flex' : 'hidden'} mt-2`}>
                    <li><a href="#about" className="hover:text-gray-400 py-2 px-4">About</a></li>
                    <li><a href="#projects" className="hover:text-gray-400 py-2 px-4">Projects</a></li>
                    <li><a href="#skills" className="hover:text-gray-400 py-2 px-4">Skills</a></li>
                    <li><a href="#experience" className="hover:text-gray-400 py-2 px-4">Experience</a></li>
                    <li><a href="#education" className="hover:text-gray-400 py-2 px-4">Education</a></li>
                    <li><a href="#contact" className="hover:text-gray-400 py-2 px-4">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;