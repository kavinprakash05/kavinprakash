
import { Download, Book, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Research = () => {
  const papers = [
    {
      title: 'Comparative Analysis of Machine Learning Algorithms for Thyroid Disease Prediction',
      description: 'Explores and compares various ML models for accuracy and reliability in medical diagnosis, focusing on early detection and prevention strategies.',
      researchAreas: ['Machine Learning', 'Data Analysis', 'Healthcare AI', 'Gradio Interface'],
      gradient: 'from-green-400 to-teal-500',
      icon: '🧬',
      pdfUrl: 'https://drive.google.com/file/d/1_PFkB-wDuTEPFf1bceGlmpxgotF_SvmO/view?usp=sharing'
    },
    {
      title: 'Leveraging Deep Learning for Accurate Classification of Diabetic Retinopathy',
      description: 'Utilizes deep learning models to achieve high-accuracy classifications for early-stage diabetic eye disease detection, improving patient outcomes.',
      researchAreas: ['Deep Learning', 'CNN Architecture', 'Medical Imaging', 'Healthcare AI'],
      gradient: 'from-blue-500 to-blue-600',
      icon: '👁️',
      pdfUrl: 'https://drive.google.com/file/d/1SjaFTMkof2XjsxXvcrZXDo7Mhl3FU-ll/view?usp=sharing'
    }
  ];

  const handlePdfDownload = (url: string) => {
    const fileId = url.match(/\/d\/([a-zA-Z0-9-_]+)/)?.[1];
    if (fileId) {
      const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
      window.open(downloadUrl, '_blank');
    } else {
      window.open(url, '_blank');
    }
  };

  return (
    <section id="research" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Research Papers</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {papers.map((paper, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Gradient Header with Icon */}
              <div className={`h-48 bg-gradient-to-br ${paper.gradient} flex items-center justify-center relative`}>
                <div className="text-6xl">{paper.icon}</div>
              </div>
              
              <CardContent className="p-8">
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                  {paper.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {paper.description}
                </p>
                
                {/* Research Areas */}
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-3">Research Areas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {paper.researchAreas.map((area, areaIndex) => (
                      <span 
                        key={areaIndex}
                        className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium border border-green-200"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    className="flex-1 border-green-500 text-green-600 hover:bg-green-50"
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    Read More
                  </Button>
                  <Button 
                    className="bg-green-600 hover:bg-green-700 text-white"
                    onClick={() => handlePdfDownload(paper.pdfUrl)}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    View PDF
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
