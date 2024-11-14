import React from 'react';

const Experience = () => {
    const experienceList = [
        {
            company: "Công Ty 1",
            position: "Lập Trình Viên Game",
            duration: "Tháng 1, 2020 - Hiện tại",
            description: "Phát triển và tối ưu hóa các trò chơi 3D bằng Unity và Unreal Engine."
        },
        {
            company: "Công Ty 2",
            position: "Thực Tập Sinh Lập Trình",
            duration: "Tháng 6, 2019 - Tháng 12, 2019",
            description: "Hỗ trợ phát triển các tính năng mới cho trò chơi và sửa lỗi."
        },
    ];

    return (
        <section
            id="experience"
            className="w-full px-4 py-8"
            style={{ backgroundColor: '#222222' }}
        >
            <div className="max-w-screen-xl mx-auto">
                <h2 className="text-5xl font-bold mb-6 text-white text-center">My Experience</h2>
                <div className="space-y-4">
                    {experienceList.map((exp, index) => (
                        <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold">{exp.position}</h3>
                            <p className="text-sm italic text-gray-400">{exp.company} | {exp.duration}</p>
                            <p className="text-white">{exp.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;