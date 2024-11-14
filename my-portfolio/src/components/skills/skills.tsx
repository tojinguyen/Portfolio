import React from 'react';

const Skills = () => {
    const skillsList = [
        { name: "C#", level: "Expert" },
        { name: "Unity", level: "Advanced" },
        { name: "Unreal Engine", level: "Intermediate" },
        { name: "Blender", level: "Intermediate" },
        { name: "JavaScript", level: "Advanced" },
    ];

    return (
        <section
            id="skills"
            className="w-full px-4 py-8 pb-12"
            style={{ backgroundColor: '#1C1C1C' }}
        >
            <div className="max-w-screen-xl mx-auto">
                <h2 className="text-5xl font-bold mb-6 text-white text-center">My Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillsList.map((skill, index) => (
                        <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                            <p className="text-white">{skill.level}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;