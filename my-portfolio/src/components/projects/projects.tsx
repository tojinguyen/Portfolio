import React from 'react';
import ProjectItem from './project-item'; // Nhập component ProjectItem

const Projects = () => {
    const projectList = [
        {
            name: "Tên Dự Án 1",
            description: "Mô tả ngắn gọn về dự án 1.",
            link: "https://link-to-project-1.com",
            image: "https://via.placeholder.com/150"
        },
        {
            name: "Tên Dự Án 2",
            description: "Mô tả ngắn gọn về dự án 2.",
            link: "https://link-to-project-2.com",
            image: "https://via.placeholder.com/150"
        },
        {
            name: "Tên Dự Án 3",
            description: "Mô tả ngắn gọn về dự án 3.",
            link: "https://link-to-project-3.com",
            image: "https://via.placeholder.com/150"
        },
    ];

    return (
        <section
            id="projects"
            className="w-full px-4 py-8"
            style={{ backgroundColor: '#222222' }}
        >
            <div className="max-w-screen-xl mx-auto text-center">
                <h2 className="text-5xl font-bold mb-8 text-white">My Projects</h2>
                <div className="flex flex-col space-y-6">
                    {projectList.map((project, index) => (
                        <ProjectItem key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;