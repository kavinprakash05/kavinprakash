import { Download, Book } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Research = () => {
  const papers = [{
    title: 'Comparative Analysis of Machine Learning Algorithms for Thyroid Disease Prediction',
    description: 'Explores and compares various ML models for accuracy and reliability in medical diagnosis, focusing on early detection and prevention strategies.',
    category: 'Machine Learning',
    year: '2024',
    status: 'Published',
    gradient: 'from-indigo-500 to-purple-600'
  }, {
    title: 'Leveraging Deep Learning for Accurate Classification of Diabetic Retinopathy',
    description: 'Utilizes deep learning models to achieve high-accuracy classifications for early-stage diabetic eye disease detection, improving patient outcomes.',
    category: 'Deep Learning',
    year: '2024',
    status: 'Under Review',
    gradient: 'from-orange-500 to-pink-500'
  }];
  return <section id="research" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Research & Publications</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Academic contributions focusing on machine learning and healthcare applications
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {papers.map((paper, index) => <div key={index} className="bg-gradient-to-r from-gray-50 to-indigo-50 rounded-2xl shadow-xl overflow-hidden">
              <div className="md:flex">
                <div className={`md:w-1/3 h-48 md:h-auto bg-gradient-to-br ${paper.gradient} flex items-center justify-center`}>
                  <Book className="text-white" size={64} />
                </div>
                
                <div className="md:w-2/3 p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center mb-2">
                        <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium mr-3">
                          {paper.category}
                        </span>
                        <span className="text-gray-500 text-sm">{paper.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight text-left">
                        {paper.title}
                      </h3>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${paper.status === 'Published' ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'}`}>
                      {paper.status}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed text-justify">
                    {paper.description}
                  </p>
                  
                  <div className="flex space-x-4">
                    <Button variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white">
                      <Book className="mr-2 h-4 w-4" />
                      Read More
                    </Button>
                    {paper.status === 'Published' && <Button className="bg-indigo-600 hover:bg-indigo-700">
                        <Download className="mr-2 h-4 w-4" />
                        Download PDF
                      </Button>}
                  </div>
                </div>
              </div>
            </div>)}
        </div>

        <div className="mt-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Research Interests</h3>
          <p className="text-lg mb-6 opacity-90">
            Passionate about applying machine learning and deep learning technologies to solve real-world healthcare challenges
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/20 p-4 rounded-xl">
              <h4 className="font-bold mb-2">Machine Learning</h4>
              <p className="text-sm opacity-90">Healthcare prediction models</p>
            </div>
            <div className="bg-white/20 p-4 rounded-xl">
              <h4 className="font-bold mb-2">Deep Learning</h4>
              <p className="text-sm opacity-90">Medical image classification</p>
            </div>
            <div className="bg-white/20 p-4 rounded-xl">
              <h4 className="font-bold mb-2">Data Analysis</h4>
              <p className="text-sm opacity-90">Comparative algorithm studies</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Research;