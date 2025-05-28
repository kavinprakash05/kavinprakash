import { User, GraduationCap, Award } from 'lucide-react';
const About = () => {
  return <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A dedicated frontend developer who thrives on building interactive, responsive web solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <User className="text-indigo-600 mr-3" size={24} />
                <h3 className="text-2xl font-bold text-gray-900">Personal Bio</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4 text-justify">
                I am a dedicated frontend developer who thrives on building interactive, responsive web solutions. 
                My passion lies in creating user-centric applications that provide seamless experiences across all devices.
              </p>
              <p className="text-gray-600 leading-relaxed text-justify">
                Beyond coding, I am actively involved in tech clubs and community initiatives, enjoying the opportunity 
                to present innovative ideas at symposiums and collaborate with fellow tech enthusiasts.
              </p>
            </div>

            <div className="mb-8">
              <div className="flex items-center mb-4">
                <GraduationCap className="text-indigo-600 mr-3" size={24} />
                <h3 className="text-2xl font-bold text-gray-900">Education</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900">Kongu Engineering College</h4>
                  <p className="text-indigo-600">B.Tech in Information Technology (2021–2025)</p>
                  <p className="text-gray-600">CGPA: 7.00</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900">Saratha Matric Higher Secondary School</h4>
                  <p className="text-orange-600">HSC – 85.67% (2021)</p>
                  <p className="text-gray-600">SSLC – 76.2% (2019)</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center mb-6">
              <Award className="text-indigo-600 mr-3" size={24} />
              <h3 className="text-2xl font-bold text-gray-900">Leadership Roles</h3>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 rounded-xl text-white">
                <h4 className="font-bold text-lg mb-2">Office Bearer</h4>
                <p className="opacity-90">ISTE – KEC</p>
              </div>
              
              <div className="bg-gradient-to-r from-orange-500 to-pink-500 p-6 rounded-xl text-white">
                <h4 className="font-bold text-lg mb-2">Executive Member</h4>
                <p className="opacity-90">Rotaract Club – KEC</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-4 rounded-xl text-white text-center">
                  <h4 className="font-bold">IV Coordinator</h4>
                </div>
                <div className="bg-gradient-to-r from-pink-500 to-orange-500 p-4 rounded-xl text-white text-center">
                  <h4 className="font-bold">Project Coordinator</h4>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-xl">
              <h4 className="font-bold text-gray-900 mb-3">Community Involvement</h4>
              <p className="text-gray-600">
                Active participation in national-level symposiums and tech communities, 
                contributing to knowledge sharing and collaborative innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;