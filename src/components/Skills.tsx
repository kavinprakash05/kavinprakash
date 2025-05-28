
import { Code, Briefcase } from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    { name: 'C', level: 85 },
    { name: 'Java', level: 80 },
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 90 },
    { name: 'JavaScript', level: 88 },
    { name: 'ReactJS', level: 85 },
    { name: 'OOPS', level: 82 },
  ];

  const softSkills = [
    'Event Management',
    'Team Work',
    'Time Management',
    'Leadership',
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical and soft skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <div className="flex items-center mb-8">
              <Code className="text-indigo-600 mr-3" size={28} />
              <h3 className="text-2xl font-bold text-gray-900">Technical Skills</h3>
            </div>
            
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex justify-between mb-3">
                    <span className="font-semibold text-gray-900">{skill.name}</span>
                    <span className="text-indigo-600 font-medium">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-indigo-500 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <div className="flex items-center mb-8">
              <Briefcase className="text-orange-600 mr-3" size={28} />
              <h3 className="text-2xl font-bold text-gray-900">Soft Skills</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {softSkills.map((skill, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-200"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {skill.split(' ').map(word => word[0]).join('')}
                    </span>
                  </div>
                  <h4 className="font-semibold text-gray-900">{skill}</h4>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-8 rounded-xl text-white">
              <h4 className="text-xl font-bold mb-4">Key Strengths</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                  Problem-solving mindset
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                  Collaborative approach
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                  Continuous learning
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                  Innovation-driven
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
