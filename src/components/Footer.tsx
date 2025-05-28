
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Kavin Prakash M</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Frontend Developer passionate about creating innovative web solutions and contributing to the tech community.
            </p>
            <p className="text-gray-400">
              Building the future, one line of code at a time.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">Skills</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#research" className="hover:text-white transition-colors">Research</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="mailto:kavinprakash01@gmail.com" className="hover:text-white transition-colors">Email</a></li>
              <li><a href="https://linkedin.com/in/kavinprakash" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="https://github.com/kavinprakash" className="hover:text-white transition-colors">GitHub</a></li>
              <li><a href="https://leetcode.com/kavinprakash" className="hover:text-white transition-colors">LeetCode</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Kavin Prakash M. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
