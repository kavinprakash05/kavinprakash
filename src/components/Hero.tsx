
import { Download, Github, Linkedin, ArrowRight, Phone, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { trackSectionView, trackPortfolioEngagement } from '@/lib/analytics';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import ResumeDownload from './ResumeDownload';

const Hero = () => {
  // Track when Hero section comes into view
  const { elementRef } = useIntersectionObserver({
    threshold: 0.3,
    onIntersect: (entry) => {
      if (entry.isIntersecting) {
        trackSectionView('Hero');
      }
    }
  });

  const handleExternalLink = (url: string, linkType: string) => {
    trackPortfolioEngagement('external_link_click', 'Hero', { link_type: linkType, url });
    window.open(url, '_blank');
  };

  return (
    <section ref={elementRef} id="home" className="min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pt-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-orange-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-100 to-pink-100 border border-orange-200 rounded-full text-orange-700 text-sm font-medium mb-6 animate-fade-in">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse"></span>
                Welcome to my portfolio
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Hello, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  KAVIN PRAKASH M
                </span>
              </h1>
              <h2 className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 font-medium">
                Frontend Developer | Tech Enthusiast | Student Leader
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed max-w-xl text-justify">
                Passionate about building interactive, responsive web solutions and actively involved in tech communities. 
                I thrive on creating user-centric applications and presenting innovative ideas at symposiums.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <ResumeDownload 
                className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
              >
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Download CV
              </ResumeDownload>
              <Button 
                variant="outline" 
                className="border-2 border-indigo-300 text-indigo-600 hover:bg-indigo-600 hover:text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
                onClick={() => handleExternalLink('https://github.com/kavinprakash05', 'github_profile')}
              >
                Visit GitHub Profile
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                href="tel:9655998612" 
                className="w-14 h-14 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 text-gray-700 hover:text-green-600 hover:scale-110 group"
                onClick={() => trackPortfolioEngagement('phone_click', 'Hero', { contact_method: 'phone' })}
              >
                <Phone size={22} className="group-hover:rotate-12 transition-transform duration-300" />
              </a>
              <a 
                href="https://leetcode.com/kavinprakash/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-14 h-14 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 text-gray-700 hover:text-orange-600 hover:scale-110 group"
                onClick={() => trackPortfolioEngagement('external_link_click', 'Hero', { link_type: 'leetcode' })}
              >
                <Code size={22} className="group-hover:rotate-12 transition-transform duration-300" />
              </a>
              <a 
                href="https://www.linkedin.com/in/kavinprakash/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-14 h-14 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 text-gray-700 hover:text-blue-600 hover:scale-110 group"
                onClick={() => trackPortfolioEngagement('external_link_click', 'Hero', { link_type: 'linkedin' })}
              >
                <Linkedin size={22} className="group-hover:rotate-12 transition-transform duration-300" />
              </a>
              <a 
                href="https://github.com/kavinprakash05" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-14 h-14 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 text-gray-700 hover:text-indigo-600 hover:scale-110 group"
                onClick={() => trackPortfolioEngagement('external_link_click', 'Hero', { link_type: 'github' })}
              >
                <Github size={22} className="group-hover:rotate-12 transition-transform duration-300" />
              </a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center animate-scale-in">
            <div className="relative">
              <div className="w-72 md:w-80 h-72 md:h-80 bg-gradient-to-br from-blue-400/40 to-purple-600/40 rounded-full opacity-60 absolute -top-4 -left-4 blur-xl animate-pulse"></div>
              <div className="w-64 md:w-72 h-64 md:h-72 bg-gradient-to-br from-orange-400/40 to-pink-500/40 rounded-full opacity-70 absolute top-4 left-4 blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="relative w-72 md:w-80 h-72 md:h-80 bg-gradient-to-br from-white to-gray-100 rounded-full overflow-hidden border-8 border-white shadow-2xl hover:shadow-3xl transition-shadow duration-500">
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
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent" style={{display: 'none'}}>
                  KP
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in" style={{animationDelay: '0.5s'}}>
          <div className="bg-white/70 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group border border-white/50 hover:scale-105">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">5+</div>
            <div className="text-gray-600 font-medium">Projects Completed</div>
          </div>
          <div className="bg-white/70 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group border border-white/50 hover:scale-105">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">2</div>
            <div className="text-gray-600 font-medium">Research Papers</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
