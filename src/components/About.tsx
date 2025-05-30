import { User, GraduationCap } from 'lucide-react';
const About = () => {
  return <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A dedicated frontend developer who thrives on building interactive, responsive web solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Personal Bio Section - Card Style */}
          <div className="animate-fade-in h-full" style={{
          animationDelay: '0.2s'
        }}>
            <div className="bg-gradient-to-r from-gray-50 to-indigo-50 p-8 rounded-2xl shadow-lg border border-gray-100 h-full flex flex-col">
              <div className="flex items-center mb-8">
                <User className="text-indigo-600 mr-3" size={24} />
                <h3 className="text-2xl font-bold text-gray-900">Personal Bio</h3>
              </div>
              <div className="space-y-6 flex-grow">
                <p className="text-gray-600 leading-relaxed text-justify font-semibold text-lg">
                  I am a dedicated frontend developer who thrives on building interactive, responsive web solutions. 
                  My passion lies in creating user-centric applications that provide seamless experiences across all devices.
                </p>
                <p className="text-gray-600 leading-relaxed text-justify font-semibold text-base">
                  Beyond coding, I am actively involved in tech clubs and community initiatives, enjoying the opportunity 
                  to present innovative ideas at symposiums and collaborate with fellow tech enthusiasts. I have served 
                  as an IV Coordinator and Project Lead, along with holding leadership positions as an Office Bearer at 
                  ISTE – KEC and Executive Member at Rotaract Club – KEC.
                </p>
                <p className="text-gray-600 leading-relaxed text-justify font-semibold text-base">These leadership experiences have enhanced my collaborative skills and ability to drive innovative projects forward while maintaining a focus on technical excellence and user experience. They’ve also strengthened my decision-making under pressure and adaptability in dynamic team environments.</p>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="animate-fade-in h-full" style={{
          animationDelay: '0.4s'
        }}>
            <div className="h-full flex flex-col">
              <div className="flex items-center mb-8">
                <GraduationCap className="text-indigo-600 mr-3" size={24} />
                <h3 className="text-2xl font-bold text-gray-900">Education</h3>
              </div>
              <div className="space-y-6 flex-grow flex flex-col">
                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-8 rounded-2xl border border-indigo-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex-grow">
                  <h4 className="font-bold text-gray-900 text-xl mb-3">KONGU ENGINEERING COLLEGE</h4>
                  <p className="text-indigo-600 font-semibold text-lg mb-2">B.Tech in Information Technology</p>
                  <p className="text-gray-600 mb-2">2021 – 2025</p>
                  <div className="bg-white/80 px-4 py-2 rounded-lg inline-block">
                    <p className="text-gray-700 font-medium">CGPA: 7.00</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-8 rounded-2xl border border-orange-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <h4 className="font-bold text-gray-900 text-xl mb-3"> SARATHA MATRIC HIGHER SECONDARY SCHOOL</h4>
                  <div className="space-y-3">
                    <div className="bg-white/80 px-4 py-3 rounded-lg">
                      <p className="text-orange-600 font-semibold">HSC – 85.67%</p>
                      <p className="text-gray-600 text-sm">2021</p>
                    </div>
                    <div className="bg-white/80 px-4 py-3 rounded-lg">
                      <p className="text-orange-600 font-semibold">SSLC – 76.2%</p>
                      <p className="text-gray-600 text-sm">2019</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;