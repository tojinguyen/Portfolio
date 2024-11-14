import React from 'react';

const About = () => {
    return (
        <section
            id="about"
            className="w-full px-4 py-8 pt-24" // Thêm padding-top 24 để tránh bị che khuất bởi Header
            style={{ backgroundColor: '#062f4f' }} // Sử dụng inline style để áp dụng màu nền
        >
            <div className="max-w-screen-xl mx-auto text-center">
                <h2 className="text-5xl font-bold mb-4 text-white">About Me</h2>
                <p className="mb-4 text-white">
                    Tôi là một lập trình viên game với 5 năm kinh nghiệm trong việc phát triển trò chơi. Tôi đam mê tạo ra những trải nghiệm chơi game độc đáo và hấp dẫn.
                </p>
                <h3 className="text-2xl font-semibold mb-2 text-white">Kỹ Năng</h3>
                <ul className="list-disc list-inside mb-4 text-white">
                    <li>C#</li>
                    <li>Unity</li>
                    <li>Unreal Engine</li>
                    <li>Blender</li>
                    <li>JavaScript</li>
                    {/* Thêm các kỹ năng khác của bạn ở đây */}
                </ul>
                <h3 className="text-2xl font-semibold mb-2 text-white">Dự Án Nổi Bật</h3>
                <ul className="list-disc list-inside text-white">
                    <li><strong>Tên Dự Án 1:</strong> Mô tả ngắn gọn về dự án.</li>
                    <li><strong>Tên Dự Án 2:</strong> Mô tả ngắn gọn về dự án.</li>
                    {/* Thêm các dự án khác của bạn ở đây */}
                </ul>
            </div>
        </section>
    );
};

export default About;