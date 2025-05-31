
import { Download, Book, Eye, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';

const Research = () => {
  const [expandedPaper, setExpandedPaper] = useState<number | null>(null);

  const papers = [
    {
      title: 'Comparative Analysis of Machine Learning Algorithms for Thyroid Disease Prediction',
      shortDescription: 'Explores and compares various ML models for accuracy and reliability in medical diagnosis, focusing on early detection and prevention strategies.',
      fullDescription: 'This comprehensive research explores and compares various machine learning models for accuracy and reliability in medical diagnosis, with a specific focus on early detection and prevention strategies for thyroid diseases. The study implements multiple algorithms including Random Forest, Support Vector Machines, and Neural Networks to achieve optimal prediction accuracy. We developed an interactive Gradio interface that allows healthcare professionals to input patient data and receive real-time predictions. The research demonstrates significant improvements in diagnostic accuracy compared to traditional methods, with our best model achieving 94.2% accuracy on the test dataset. The findings contribute to the advancement of AI-driven healthcare solutions and provide a practical tool for medical practitioners.',
      researchAreas: ['Machine Learning', 'Data Analysis', 'Healthcare AI', 'Gradio Interface'],
      gradient: 'from-green-400 to-teal-500',
      icon: '🧬',
      status: 'Published',
      pdfUrl: 'https://drive.google.com/file/d/1_PFkB-wDuTEPFf1bceGlmpxgotF_SvmO/view?usp=sharing'
    },
    {
      title: 'Leveraging Deep Learning for Accurate Classification of Diabetic Retinopathy',
      shortDescription: 'Utilizes deep learning models to achieve high-accuracy classifications for early-stage diabetic eye disease detection, improving patient outcomes.',
      fullDescription: 'This research utilizes advanced deep learning models to achieve high-accuracy classifications for early-stage diabetic eye disease detection, significantly improving patient outcomes through timely intervention. We implemented a sophisticated Convolutional Neural Network (CNN) architecture specifically designed for retinal image analysis. The model was trained on a comprehensive dataset of over 35,000 retinal images, achieving remarkable accuracy rates of 96.8% in detecting various stages of diabetic retinopathy. Our approach incorporates data augmentation techniques, transfer learning from pre-trained models, and custom loss functions optimized for medical imaging. The research includes extensive validation studies and comparison with existing diagnostic methods, demonstrating superior performance in identifying early-stage complications that are often missed by traditional screening methods.',
      researchAreas: ['Deep Learning', 'CNN Architecture', 'Medical Imaging', 'Healthcare AI'],
      gradient: 'from-blue-500 to-blue-600',
      icon: '👁️',
      status: 'Under Review',
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

  const toggleReadMore = (index: number) => {
    setExpandedPaper(expandedPaper === index ? null : index);
  };

  return (
    <section id="research" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Animation Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-1/2 -right-4 w-72 h-72 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-gradient-to-r from-pink-400/20 to-yellow-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Research & Publications</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cutting-edge research in machine learning and healthcare AI, contributing to the advancement of medical technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {papers.map((paper, index) => (
            <Card 
              key={index} 
              className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 animate-scale-in bg-white/80 backdrop-blur-sm border border-white/50"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Gradient Header with Icon */}
              <div className={`h-48 bg-gradient-to-br ${paper.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="text-6xl relative z-10 animate-pulse">{paper.icon}</div>
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <Badge 
                    variant={paper.status === 'Published' ? 'default' : 'secondary'}
                    className={`${
                      paper.status === 'Published' 
                        ? 'bg-green-600 hover:bg-green-700 text-white' 
                        : 'bg-yellow-600 hover:bg-yellow-700 text-white'
                    } font-semibold px-3 py-1`}
                  >
                    {paper.status}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-8">
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight hover:text-blue-600 transition-colors duration-300">
                  {paper.title}
                </h3>
                
                {/* Description */}
                <div className="mb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {expandedPaper === index ? paper.fullDescription : paper.shortDescription}
                  </p>
                  <button
                    onClick={() => toggleReadMore(index)}
                    className="mt-2 text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1 transition-colors duration-300"
                  >
                    {expandedPaper === index ? (
                      <>
                        Read Less <ChevronUp className="h-4 w-4" />
                      </>
                    ) : (
                      <>
                        Read More <ChevronDown className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </div>
                
                {/* Research Areas */}
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-3">Research Areas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {paper.researchAreas.map((area, areaIndex) => (
                      <span 
                        key={areaIndex}
                        className="px-3 py-1 bg-gradient-to-r from-green-100 to-blue-100 text-green-700 rounded-full text-sm font-medium border border-green-200 hover:shadow-md transition-all duration-300 transform hover:scale-105"
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
                    className="flex-1 border-green-500 text-green-600 hover:bg-green-50 hover:border-green-600 transition-all duration-300 transform hover:scale-105"
                    onClick={() => toggleReadMore(index)}
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    {expandedPaper === index ? 'Show Less' : 'Read More'}
                  </Button>
                  <Button 
                    className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
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
