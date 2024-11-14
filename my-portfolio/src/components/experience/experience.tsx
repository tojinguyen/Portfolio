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
        // Thêm các kinh nghiệm khác ở đây
    ];

    return (
        <section
            id="experience"
            className="w-full px-4 py-8 bg-gradient-to-r from-green-400 to-blue-500 text-white"
        >
            <div className="max-w-screen-xl mx-auto">
                <h2 className="text-3xl font-bold mb-4">My Experience</h2>
                <div className="space-y-4">
                    {experienceList.map((exp, index) => (
                        <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold">{exp.position}</h3>
                            <p className="text-sm italic">{exp.company} | {exp.duration}</p>
                            <p>{exp.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;