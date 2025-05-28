
import { Download, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-indigo-50 via-purple-50 to-orange-50 pt-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
                Welcome to my portfolio
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                Hello, I'm{' '}
                <span className="text-indigo-600">Kavin Prakash M</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
                Frontend Developer | Tech Enthusiast | Student Leader
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Passionate about building interactive, responsive web solutions and actively involved in tech communities. 
                I thrive on creating user-centric applications and presenting innovative ideas at symposiums.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Button 
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
              <Button 
                variant="outline"
                className="border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-6 py-3 rounded-full"
              >
                View Portfolio
              </Button>
            </div>

            <div className="flex space-x-4">
              <a 
                href="https://github.com/kavinprakash" 
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-200 text-gray-700 hover:text-indigo-600"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/kavinprakash" 
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-200 text-gray-700 hover:text-indigo-600"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-full opacity-20 absolute -top-4 -left-4"></div>
              <div className="w-72 h-72 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full opacity-30 absolute top-4 left-4"></div>
              <div className="relative w-80 h-80 bg-gray-200 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center text-6xl text-indigo-600 font-bold">
                  KP
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-indigo-600 mb-2">6.95</div>
            <div className="text-gray-600">CGPA</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-500 mb-2">5+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">2</div>
            <div className="text-gray-600">Research Papers</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
