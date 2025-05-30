
import { User, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A dedicated frontend developer who thrives on building interactive, responsive web solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Personal Bio Section - Card Style */}
          <div className="animate-fade-in h-full" style={{animationDelay: '0.2s'}}>
            <div className="bg-gradient-to-r from-gray-800/80 to-slate-800/80 p-8 rounded-2xl shadow-lg border border-gray-700 h-full flex flex-col backdrop-blur-sm">
              <div className="flex items-center mb-8">
                <User className="text-cyan-400 mr-3" size={24} />
                <h3 className="text-2xl font-bold text-white">Personal Bio</h3>
              </div>
              <div className="space-y-6 flex-grow">
                <p className="text-gray-300 leading-relaxed text-justify text-lg font-semibold">
                  I am a dedicated frontend developer who thrives on building interactive, responsive web solutions. 
                  My passion lies in creating user-centric applications that provide seamless experiences across all devices.
                </p>
                <p className="text-gray-300 leading-relaxed text-justify font-semibold">
                  Beyond coding, I am actively involved in tech clubs and community initiatives, enjoying the opportunity 
                  to present innovative ideas at symposiums and collaborate with fellow tech enthusiasts. I have served 
                  as an IV Coordinator and Project Lead, along with holding leadership positions as an Office Bearer at 
                  ISTE – KEC and Executive Member at Rotaract Club – KEC.
                </p>
                <p className="text-gray-300 leading-relaxed text-justify font-semibold">
                  These leadership experiences have enhanced my collaborative skills and ability to drive innovative 
                  projects forward while maintaining a focus on technical excellence and user experience.
                </p>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="animate-fade-in h-full" style={{animationDelay: '0.4s'}}>
            <div className="h-full flex flex-col">
              <div className="flex items-center mb-8">
                <GraduationCap className="text-cyan-400 mr-3" size={24} />
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>
              <div className="space-y-6 flex-grow flex flex-col">
                <div className="bg-gradient-to-r from-gray-800/80 to-slate-800/80 p-8 rounded-2xl border border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex-grow backdrop-blur-sm">
                  <h4 className="font-bold text-white text-xl mb-3">KONGU ENGINEERING COLLEGE</h4>
                  <p className="text-cyan-400 font-semibold text-lg mb-2">B.Tech in Information Technology</p>
                  <p className="text-gray-300 mb-2">2021 – 2025</p>
                  <div className="bg-gray-700/50 px-4 py-2 rounded-lg inline-block border border-gray-600">
                    <p className="text-gray-200 font-medium">CGPA: 7.00</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-gray-800/80 to-slate-800/80 p-8 rounded-2xl border border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                  <h4 className="font-bold text-white text-xl mb-3">SARATHA MATRIC HIGHER SECONDARY SCHOOL</h4>
                  <div className="space-y-3">
                    <div className="bg-gray-700/50 px-4 py-3 rounded-lg border border-gray-600">
                      <p className="text-cyan-400 font-semibold">HSC – 85.67%</p>
                      <p className="text-gray-300 text-sm">2021</p>
                    </div>
                    <div className="bg-gray-700/50 px-4 py-3 rounded-lg border border-gray-600">
                      <p className="text-cyan-400 font-semibold">SSLC – 76.2%</p>
                      <p className="text-gray-300 text-sm">2019</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
