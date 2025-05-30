
import { Download, Github, Linkedin, ArrowRight, Phone, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 pt-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-cyan-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-cyan-500/15 to-blue-500/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-transparent via-cyan-900/5 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-400/10 to-teal-400/10 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium mb-6 animate-fade-in">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
                Welcome to my portfolio
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Hello, I'm{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-300 bg-clip-text text-transparent">
                  KAVIN PRAKASH M
                </span>
              </h1>
              <h2 className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 font-medium">
                Frontend Developer | Tech Enthusiast | Student Leader
              </h2>
              <p className="text-base md:text-lg text-gray-400 mb-8 leading-relaxed max-w-xl text-justify">
                Passionate about building interactive, responsive web solutions and actively involved in tech communities. 
                I thrive on creating user-centric applications and presenting innovative ideas at symposiums.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group border-0"
                onClick={() => window.open('https://drive.google.com/file/d/1FpaZRv-yxpqFB7OZl38IvgyKcEbXkO_5/view?usp=sharing', '_blank')}
              >
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Download CV
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group bg-transparent"
                onClick={() => window.open('https://github.com/kavinprakash05', '_blank')}
              >
                Visit GitHub Profile
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="tel:9655998612" className="w-14 h-14 bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 text-gray-300 hover:text-cyan-400 hover:scale-110 group border border-gray-700">
                <Phone size={22} className="group-hover:rotate-12 transition-transform duration-300" />
              </a>
              <a href="https://leetcode.com/kavinprakash/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 text-gray-300 hover:text-cyan-400 hover:scale-110 group border border-gray-700">
                <Code size={22} className="group-hover:rotate-12 transition-transform duration-300" />
              </a>
              <a href="https://www.linkedin.com/in/kavinprakash/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 text-gray-300 hover:text-cyan-400 hover:scale-110 group border border-gray-700">
                <Linkedin size={22} className="group-hover:rotate-12 transition-transform duration-300" />
              </a>
              <a href="https://github.com/kavinprakash05" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 text-gray-300 hover:text-cyan-400 hover:scale-110 group border border-gray-700">
                <Github size={22} className="group-hover:rotate-12 transition-transform duration-300" />
              </a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center animate-scale-in">
            <div className="relative">
              <div className="w-72 md:w-80 h-72 md:h-80 bg-gradient-to-br from-cyan-400/30 to-teal-600/30 rounded-full opacity-60 absolute -top-4 -left-4 blur-xl animate-pulse"></div>
              <div className="w-64 md:w-72 h-64 md:h-72 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full opacity-70 absolute top-4 left-4 blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="relative w-72 md:w-80 h-72 md:h-80 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full overflow-hidden border-8 border-cyan-400/20 shadow-2xl hover:shadow-3xl transition-shadow duration-500">
                <img 
                  src="/lovable-uploads/ba3f1e80-f530-43ef-9b0c-3331e0111d98.png" 
                  alt="Kavin Prakash M"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback to initials if image fails to load
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = 'none';
                    const fallbackDiv = target.nextElementSibling as HTMLElement;
                    if (fallbackDiv) {
                      fallbackDiv.style.display = 'flex';
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent" style={{display: 'none'}}>
                  KP
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in" style={{animationDelay: '0.5s'}}>
          <div className="bg-gray-800/70 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group border border-gray-700 hover:scale-105">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">5+</div>
            <div className="text-gray-300 font-medium">Projects Completed</div>
          </div>
          <div className="bg-gray-800/70 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group border border-gray-700 hover:scale-105">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">2</div>
            <div className="text-gray-300 font-medium">Research Papers</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
