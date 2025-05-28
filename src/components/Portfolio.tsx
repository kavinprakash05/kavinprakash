
import { Github, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const projects = [
    {
      title: 'RR Fibres E-Commerce',
      description: 'Full-featured online store with Stripe integration, secure payments, responsive layout, and shopping cart functionality.',
      features: ['Stripe Payment Integration', 'Responsive Design', 'Shopping Cart', 'Secure Payments'],
      gradient: 'from-indigo-500 to-purple-600',
      image: '🛒'
    },
    {
      title: 'Railway Ticket Booking System',
      description: 'A React and MongoDB-based ticket booking system with real-time payment (Razorpay), search, and tracking features.',
      features: ['React.js', 'MongoDB', 'Razorpay Integration', 'Real-time Tracking'],
      gradient: 'from-orange-500 to-pink-500',
      image: '🚂'
    },
    {
      title: 'Online Ceramic Shop',
      description: 'Clean, responsive shopping platform with product filtering, search, and contact features.',
      features: ['Product Filtering', 'Search Functionality', 'Contact Forms', 'Clean UI'],
      gradient: 'from-purple-500 to-indigo-500',
      image: '🏺'
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-r from-orange-400/15 to-pink-400/15 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-indigo-100 border border-purple-200 rounded-full text-purple-700 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            My Work
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Showcasing my latest projects and development work with real-world applications
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-white/50 group hover:scale-105">
              <div className={`h-52 bg-gradient-to-br ${project.gradient} flex items-center justify-center text-7xl text-white relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10"></div>
                <span className="relative z-10 group-hover:scale-110 transition-transform duration-300">{project.image}</span>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors duration-300">{project.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-3 text-lg">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <span 
                        key={featureIndex}
                        className="px-3 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-600 rounded-full text-sm font-medium border border-indigo-200 hover:scale-105 transition-transform duration-200"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1 border-2 border-indigo-300 text-indigo-600 hover:bg-indigo-600 hover:text-white font-semibold py-3 rounded-xl transition-all duration-300 group/btn"
                  >
                    <Github className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                    Code
                  </Button>
                  <Button 
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group/btn"
                  >
                    <span className="mr-2">Demo</span>
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-2xl max-w-2xl mx-auto border border-white/50 hover:shadow-3xl transition-all duration-500">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Want to see more?</h3>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Check out my GitHub profile for more projects and contributions to open source.
            </p>
            <Button className="bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-800 hover:to-gray-600 text-white px-10 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group">
              <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              Visit GitHub Profile
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
