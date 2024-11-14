import React from 'react';

const About = () => {
    return (
        <section
            id="about"
            className="w-full px-4 py-8 pt-24"
            style={{ backgroundColor: '#062f4f' }}
        >
            <div className="max-w-screen-xl mx-auto text-center">
                <h2 className="text-5xl font-bold mb-4 text-white">About Me</h2>
                <p className="mb-4 text-white">
                    Tôi là một lập trình viên game với 5 năm kinh nghiệm trong việc phát triển trò chơi. Tôi đam mê tạo ra những trải nghiệm chơi game độc đáo và hấp dẫn.
                </p>
                {/* Các nội dung khác */}
            </div>
        </section>
    );
};

export default About;