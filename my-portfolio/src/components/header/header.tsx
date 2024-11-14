import React, { useState, useRef } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false); // State để quản lý trạng thái mở/đóng của menu
    const headerRef = useRef(null); // Ref để tham chiếu đến header

    const toggleMenu = () => {
        setIsOpen(!isOpen); // Đảo ngược trạng thái của menu
    };

    const smoothScrollTo = (targetId, duration) => {
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;

        const headerHeight = headerRef.current.offsetHeight; // Lấy chiều cao của header
        const startPosition = window.pageYOffset; // Vị trí hiện tại
        const targetPosition = targetElement.getBoundingClientRect().top + startPosition - headerHeight; // Tính toán vị trí mục tiêu
        const distance = targetPosition - startPosition; // Khoảng cách cần cuộn
        let startTime = null;

        const animation = (currentTime) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1); // Tính toán tiến độ

            // Sử dụng easing để làm cho cuộn mượt mà hơn
            const easeInOutQuad = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

            window.scrollTo(0, startPosition + distance * easeInOutQuad(progress)); // Cuộn đến vị trí mới

            if (progress < 1) {
                requestAnimationFrame(animation); // Tiếp tục hoạt động cho đến khi hoàn thành
            }
        };

        requestAnimationFrame(animation); // Bắt đầu hoạt động
    };

    return (
        <header ref={headerRef} className="bg-black/75 w-full fixed top-0 left-0 z-50">
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
                    <li><a href="#about" onClick={() => { smoothScrollTo('about', 500); setIsOpen(false); }} className="hover:text-gray-400 py-2 px-4">About</a></li>
                    <li><a href="#projects" onClick={() => { smoothScrollTo('projects', 500); setIsOpen(false); }} className="hover:text-gray-400 py-2 px-4">Projects</a></li>
                    <li><a href="#skills" onClick={() => { smoothScrollTo('skills', 500); setIsOpen(false); }} className="hover:text-gray-400 py-2 px-4">Skills</a></li>
                    <li><a href="#experience" onClick={() => { smoothScrollTo('experience', 500); setIsOpen(false); }} className="hover:text-gray-400 py-2 px-4">Experience</a></li>
                    <li><a href="#education" onClick={() => { smoothScrollTo('education', 500); setIsOpen(false); }} className="hover:text-gray-400 py-2 px-4">Education</a></li>
                    <li><a href="#contact" onClick={() => { smoothScrollTo('contact', 500); setIsOpen(false); }} className="hover:text-gray-400 py-2 px-4">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;