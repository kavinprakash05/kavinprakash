
import { Code, Settings, User, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-orange-400/15 to-pink-400/15 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 border border-indigo-200 rounded-full text-indigo-700 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            What I Offer
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Specialized in building modern, responsive, and user-friendly web solutions that drive results and enhance user experience
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-white via-blue-50 to-indigo-50 p-10 rounded-3xl shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500">
            <div className="text-center mb-10">
              <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 rounded-2xl mx-auto mb-8 flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300">
                <Code className="text-white" size={40} />
              </div>
              <h3 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">Frontend Web Development</h3>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Specializing in building modern, responsive, and user-friendly interfaces with 
                integrated payment systems and real-time features that deliver exceptional user experiences.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-10">
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group border border-white/50 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-100 to-indigo-200 rounded-xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Code className="text-indigo-600" size={28} />
                </div>
                <h4 className="font-bold text-gray-900 mb-3 text-xl">Responsive Design</h4>
                <p className="text-gray-600 leading-relaxed">
                  Creating layouts that work seamlessly across all devices and screen sizes with pixel-perfect precision
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group border border-white/50 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-100 to-orange-200 rounded-xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Settings className="text-orange-600" size={28} />
                </div>
                <h4 className="font-bold text-gray-900 mb-3 text-xl">Payment Integration</h4>
                <p className="text-gray-600 leading-relaxed">
                  Implementing secure payment gateways like Stripe and Razorpay with robust security measures
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group border border-white/50 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-purple-200 rounded-xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <User className="text-purple-600" size={28} />
                </div>
                <h4 className="font-bold text-gray-900 mb-3 text-xl">User Experience</h4>
                <p className="text-gray-600 leading-relaxed">
                  Focusing on intuitive interfaces that enhance user engagement and drive conversions
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 p-8 rounded-2xl text-white shadow-xl">
              <h4 className="text-2xl font-bold mb-6 flex items-center">
                <Sparkles className="mr-3" size={24} />
                What You Get:
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-orange-400 rounded-full mr-4 animate-pulse"></div>
                    <span className="font-medium">Modern React.js applications</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-orange-400 rounded-full mr-4 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    <span className="font-medium">Mobile-first responsive design</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-orange-400 rounded-full mr-4 animate-pulse" style={{animationDelay: '1s'}}></div>
                    <span className="font-medium">Cross-browser compatibility</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-orange-400 rounded-full mr-4 animate-pulse" style={{animationDelay: '1.5s'}}></div>
                    <span className="font-medium">Performance optimization</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-orange-400 rounded-full mr-4 animate-pulse" style={{animationDelay: '2s'}}></div>
                    <span className="font-medium">SEO-friendly structure</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-orange-400 rounded-full mr-4 animate-pulse" style={{animationDelay: '2.5s'}}></div>
                    <span className="font-medium">Clean, maintainable code</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <Button 
                  className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
