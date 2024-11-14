import React from 'react';

const Contact = () => {
    return (
        <section
            id="contact"
            className="w-full px-4 py-8 bg-gradient-to-r from-gray-600 to-gray-800 text-white"
        >
            <div className="max-w-screen-xl mx-auto">
                <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
                <p className="mb-4">
                    Nếu bạn có bất kỳ câu hỏi nào hoặc muốn hợp tác, hãy liên hệ với tôi qua thông tin bên dưới.
                </p>
                <div className="space-y-2">
                    <p><strong>Email:</strong> <a href="mailto:your-email@example.com" className="text-blue-200 hover:text-blue-100">your-email@example.com</a></p>
                    <p><strong>Phone:</strong> <span className="text-blue-200">+84 123 456 789</span></p>
                    <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-blue-100">linkedin.com/in/yourprofile</a></p>
                    <p><strong>GitHub:</strong> <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-blue-100">github.com/yourusername</a></p>
                    {/* Thêm các liên kết khác nếu cần */}
                </div>
            </div>
        </section>
    );
};

export default Contact;