import React from 'react';

const ProjectItem = ({ project }) => {
    return (
        <div className="flex items-start bg-gray-800 p-6 rounded-lg shadow-lg"> {/* Sử dụng items-start để căn lề trên cùng */}
            <img
                src={project.image}
                alt={project.name}
                className="w-1/4 h-auto object-cover rounded-lg mr-4" // Hình chữ nhật với border radius
            />
            <div className="flex-grow text-left"> {/* Thêm text-left để căn lề trái */}
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-semibold mb-1 text-white transition-all duration-300 hover:text-blue-200 hover:font-bold hover:text-2xl block" // Thêm block để tên dự án chiếm toàn bộ chiều rộng
                >
                    {project.name}
                </a>
                <p className="text-white">{project.description}</p>
            </div>
        </div>
    );
};

export default ProjectItem;