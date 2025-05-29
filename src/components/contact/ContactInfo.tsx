
import { Mail, Phone, Github, Linkedin } from 'lucide-react';
import CodeIcon from './CodeIcon';

const ContactInfo = () => {
  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
      
      <div className="space-y-6 mb-8">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
            <Mail className="text-indigo-600" size={24} />
          </div>
          <div>
            <h4 className="font-bold text-gray-900">Email</h4>
            <p className="text-gray-600">kavinprakash01@gmail.com</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
            <Phone className="text-orange-600" size={24} />
          </div>
          <div>
            <h4 className="font-bold text-gray-900">Phone</h4>
            <p className="text-gray-600">+91 9489409325</p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h4 className="font-bold text-gray-900 mb-4">Address</h4>
        <p className="text-gray-600 leading-relaxed">
          291, Orambu Thottam,<br />
          Palanigoundenpalayam, Kurumandur,<br />
          Gobi - 638457
        </p>
      </div>

      <div>
        <h4 className="font-bold text-gray-900 mb-4">Social Links</h4>
        <div className="flex space-x-4">
          <a href="https://leetcode.com/kavinprakash" className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center text-yellow-600 hover:bg-yellow-200 transition-colors">
            <CodeIcon size={20} />
          </a>
          <a href="https://linkedin.com/in/kavinprakash" className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 hover:bg-blue-200 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="https://github.com/kavinprakash" className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors">
            <Github size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
