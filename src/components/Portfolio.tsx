
import { Github, Projector } from 'lucide-react';
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
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Showcasing my latest projects and development work
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center text-6xl text-white`}>
                {project.image}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <span 
                        key={featureIndex}
                        className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium"
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
                    className="flex-1 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button 
                    size="sm"
                    className="flex-1 bg-indigo-600 hover:bg-indigo-700"
                  >
                    <Projector className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Want to see more?</h3>
            <p className="text-gray-600 mb-6">
              Check out my GitHub profile for more projects and contributions to open source.
            </p>
            <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3">
              <Github className="mr-2 h-5 w-5" />
              Visit GitHub Profile
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
