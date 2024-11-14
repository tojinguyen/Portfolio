import React from 'react';

const Contact = () => {
    return (
        <section
            id="contact"
            className="w-full px-4 py-8 bg-gradient-to-r from-gray-600 to-gray-800 text-white"
        >
            <div className="max-w-screen-xl mx-auto">
                <h2 className="text-5xl font-bold mb-6 text-center">Contact Me</h2> {/* Cải thiện tiêu đề */}
                <p className="mb-4 text-center">
                    Nếu bạn có bất kỳ câu hỏi nào hoặc muốn hợp tác, hãy liên hệ với tôi qua thông tin bên dưới.
                </p>
                <div className="space-y-4"> {/* Thêm khoảng cách giữa các thông tin liên hệ */}
                    <div>
                        <strong>Email:</strong>
                        <a href="mailto:your-email@example.com" className="text-blue-200 hover:text-blue-100 ml-1">your-email@example.com</a>
                    </div>
                    <div>
                        <strong>Phone:</strong>
                        <span className="text-blue-200 ml-1">+84 123 456 789</span>
                    </div>
                    <div>
                        <strong>LinkedIn:</strong>
                        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-blue-100 ml-1">linkedin.com/in/yourprofile</a>
                    </div>
                    <div>
                        <strong>GitHub:</strong>
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-blue-100 ml-1">github.com/yourusername</a>
                    </div>
                    {/* Thêm các liên kết khác nếu cần */}
                </div>
            </div>
        </section>
    );
};

export default Contact;