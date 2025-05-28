
import { Code, Settings, User } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Specialized in building modern, responsive, and user-friendly web solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-orange-50 p-8 rounded-2xl shadow-xl">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Code className="text-white" size={36} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Frontend Web Development</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Specializing in building modern, responsive, and user-friendly interfaces with 
                integrated payment systems and real-time features.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Code className="text-indigo-600" size={24} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Responsive Design</h4>
                <p className="text-gray-600 text-sm">
                  Creating layouts that work seamlessly across all devices and screen sizes
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Settings className="text-orange-600" size={24} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Payment Integration</h4>
                <p className="text-gray-600 text-sm">
                  Implementing secure payment gateways like Stripe and Razorpay
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <User className="text-purple-600" size={24} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">User Experience</h4>
                <p className="text-gray-600 text-sm">
                  Focusing on intuitive interfaces that enhance user engagement
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl text-white">
              <h4 className="text-xl font-bold mb-3">What You Get:</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                    Modern React.js applications
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                    Mobile-first responsive design
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                    Cross-browser compatibility
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                    Performance optimization
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                    SEO-friendly structure
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                    Clean, maintainable code
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
