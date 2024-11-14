import React from 'react';

const Skills = () => {
    const skillsList = [
        { name: "C#", level: "Expert" },
        { name: "Unity", level: "Advanced" },
        { name: "Unreal Engine", level: "Intermediate" },
        { name: "Blender", level: "Intermediate" },
        { name: "JavaScript", level: "Advanced" },
        // Thêm các kỹ năng khác của bạn ở đây
    ];

    return (
        <section
            id="skills"
            className="w-full px-4 py-8 bg-gradient-to-r from-indigo-400 to-purple-500 text-white"
        >
            <div className="max-w-screen-xl mx-auto">
                <h2 className="text-3xl font-bold mb-4">My Skills</h2>
                <ul className="list-disc list-inside">
                    {skillsList.map((skill, index) => (
                        <li key={index} className="mb-2">
                            <span className="font-semibold">{skill.name}</span>: {skill.level}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Skills;