import React from 'react';

const Education = () => {
    const educationList = [
        {
            institution: "Trường Đại Học 1",
            degree: "Cử Nhân Công Nghệ Thông Tin",
            duration: "Tháng 9, 2016 - Tháng 6, 2020",
            description: "Chương trình đào tạo chuyên sâu về lập trình, phát triển phần mềm và quản lý dự án."
        },
        {
            institution: "Trường Cao Đẳng 1",
            degree: "Chứng Chỉ Lập Trình Game",
            duration: "Tháng 1, 2015 - Tháng 6, 2016",
            description: "Đào tạo về thiết kế game, lập trình game và sử dụng công cụ Unity."
        },
        // Thêm các thông tin giáo dục khác ở đây
    ];

    return (
        <section
            id="education"
            className="w-full px-4 py-8 bg-gradient-to-r from-yellow-400 to-red-500 text-white"
        >
            <div className="max-w-screen-xl mx-auto">
                <h2 className="text-3xl font-bold mb-4">My Education</h2>
                <div className="space-y-4">
                    {educationList.map((edu, index) => (
                        <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold">{edu.degree}</h3>
                            <p className="text-sm italic">{edu.institution} | {edu.duration}</p>
                            <p>{edu.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;