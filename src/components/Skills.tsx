
import { Code, Briefcase, Sparkles } from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    'C',
    'Java',
    'HTML',
    'CSS',
    'JavaScript',
    'ReactJS',
    'OOPS',
  ];

  const softSkills = [
    { name: 'Event Management', icon: '🎯' },
    { name: 'Team Work', icon: '🤝' },
    { name: 'Time Management', icon: '⏰' },
    { name: 'Leadership', icon: '👑' },
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-r from-orange-400/15 to-pink-400/15 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 rounded-full text-blue-700 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Skills & Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">Skills & Expertise</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A comprehensive overview of my technical and soft skills developed through continuous learning and practice
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Technical Skills */}
          <div>
            <div className="flex items-center mb-10">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                <Code className="text-white" size={24} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Technical Skills</h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 group text-center">
                  <span className="font-semibold text-gray-900 text-sm md:text-base">{skill}</span>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 p-6 md:p-8 rounded-2xl text-white shadow-xl hover:shadow-2xl transition-all duration-300">
              <h4 className="text-xl md:text-2xl font-bold mb-6 flex items-center">
                <Sparkles className="mr-2" size={24} />
                Key Strengths
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-orange-400 rounded-full mr-3 animate-pulse"></div>
                  <span className="font-medium text-sm md:text-base">Problem-solving mindset</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-orange-400 rounded-full mr-3 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <span className="font-medium text-sm md:text-base">Collaborative approach</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-orange-400 rounded-full mr-3 animate-pulse" style={{animationDelay: '1s'}}></div>
                  <span className="font-medium text-sm md:text-base">Continuous learning</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-orange-400 rounded-full mr-3 animate-pulse" style={{animationDelay: '1.5s'}}></div>
                  <span className="font-medium text-sm md:text-base">Innovation-driven</span>
                </div>
              </div>
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <div className="flex items-center mb-10">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                <Briefcase className="text-white" size={24} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Soft Skills</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {softSkills.map((skill, index) => (
                <div 
                  key={index} 
                  className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group border border-white/50 hover:scale-105"
                >
                  <div className="text-3xl md:text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900 text-base md:text-lg">{skill.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
