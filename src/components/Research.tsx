import { Download, Book, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Research = () => {
  const [expandedPaper, setExpandedPaper] = useState<number | null>(null);

  const papers = [
    {
      title: 'Comparative Analysis of Machine Learning Algorithms for Thyroid Disease Prediction',
      description: 'Explores and compares various ML models for accuracy and reliability in medical diagnosis, focusing on early detection and prevention strategies.',
      fullDescription: 'This study compares and predicts thyroid illnesses using some ML algorithms. Used a dataset with hyperthyroid, hypothyroid and some other thyroid-associated cases. Performed data cleaning and feature selection via Random Forest and then tested on multiple classifiers like Random Forest, Decision Tree, Gradient Boosting, Naive Bayes, KNN, Logistic Regression, SVMs (Support Vector Machines), LightGBM AdaBoost and CatBoost etc. The maximum accuracy of 93.57% was accomplished by Logistic Regression SVM, and AdaBoost. The team evaluated these models based on accuracy, precision, recall, F1-score and the AUC-ROC curves. Gradio was also used as a user interface. So, it made predictions or let a user interact live with the models there. Class labels chosen for this study were T3toxic; compensated hypothyroid; goiter; hyperthyroid; negative; primary hypothyroid and secondary hypothyroid. Add Comparison of Machine Learning for Predicting Autonomic Hyperactive Nodules: Impact on Future Directions in Knowledge of Weights of Features, Health Analytics, and to Implementation for Improving the Diagnosis Accuracy of Thyroid Diseases [2] This paper makes a significant contribution to health analytics through comparative analyses of machine learning algorithms powering certain features contributing higher weights toward predictive models for predicting AHNs',
      category: 'Machine Learning',
      year: '2024',
      status: 'Published',
      gradient: 'from-indigo-500 to-purple-600',
      pdfUrl: 'https://drive.google.com/file/d/1_PFkB-wDuTEPFf1bceGlmpxgotF_SvmO/view?usp=sharing'
    },
    {
      title: 'Leveraging Deep Learning for Accurate Classification of Diabetic Retinopathy',
      description: 'Utilizes deep learning models to achieve high-accuracy classifications for early-stage diabetic eye disease detection, improving patient outcomes.',
      fullDescription: 'One of the most prevalent complications of diabetes and a leading cause of blindness worldwide is diabetic retinopathy (DR). Early classification and detection of DR are essential, as they enable timely medical intervention to prevent irreversible vision loss. Manual detection through retinal fundus examination is slow, tedious, and requires high expertise, making it less practical for routine clinical use. In this paper, we explore the potential of using deep learning-based convolutional neural networks (CNNs) to automate DR detection and classification. We evaluate the performance of several CNN architectures—Inception, ResNet50, VGG19, DenseNet121, MobileNetV2, and EfficientNetB2—on classifying retinal images of patients into different DR severity levels. The dataset, sourced from Kaggle\'s Diabetic Retinopathy Detection challenge, was preprocessed and augmented to improve accuracy and reduce overfitting. Among all the models, the InceptionResNetV2 architecture achieved the highest accuracy of 94.61% in detecting DR stages. Other models performed relatively lower. This study demonstrates that deep learning, particularly with InceptionResNetV2, is highly effective, fast, and reliable for DR detection, offering practical support to ophthalmologists in clinical decision-making. Automating DR detection reduces the burden on healthcare professionals and supports early diagnosis, helping prevent vision loss. Future work may focus on deploying such models in real-world clinical environments for broader accessibility and impact.',
      category: 'Deep Learning',
      year: '2024',
      status: 'Under Review',
      gradient: 'from-orange-500 to-pink-500',
      pdfUrl: 'https://drive.google.com/file/d/1_PFkB-wDuTEPFf1bceGlmpxgotF_SvmO/view?usp=sharing'
    }
  ];

  const toggleExpanded = (index: number) => {
    setExpandedPaper(expandedPaper === index ? null : index);
  };

  const handlePdfDownload = (url: string) => {
    // Convert Google Drive view link to direct download link
    const fileId = url.match(/\/d\/([a-zA-Z0-9-_]+)/)?.[1];
    if (fileId) {
      const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
      window.open(downloadUrl, '_blank');
    } else {
      window.open(url, '_blank');
    }
  };

  return (
    <section id="research" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-r from-orange-400/15 to-pink-400/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Research & Publications</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Academic contributions focusing on machine learning and healthcare applications
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {papers.map((paper, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-white/50 hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="md:flex">
                <div className={`md:w-1/3 h-48 md:h-auto bg-gradient-to-br ${paper.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <Book className="text-white relative z-10 group-hover:scale-110 transition-transform duration-300" size={64} />
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
                  
                  <p className="text-gray-600 mb-4 leading-relaxed text-justify">
                    {paper.description}
                  </p>

                  {/* Expandable full description */}
                  {expandedPaper === index && (
                    <div className="mb-6 p-4 bg-gray-50 rounded-lg border-l-4 border-indigo-500 animate-fade-in">
                      <p className="text-gray-700 leading-relaxed text-justify">
                        {paper.fullDescription}
                      </p>
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-3">
                    <Button 
                      variant="outline" 
                      className="border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-300"
                      onClick={() => toggleExpanded(index)}
                    >
                      <Book className="mr-2 h-4 w-4" />
                      Read More
                      {expandedPaper === index ? 
                        <ChevronUp className="ml-2 h-4 w-4" /> : 
                        <ChevronDown className="ml-2 h-4 w-4" />
                      }
                    </Button>
                    {paper.pdfUrl && (
                      <Button 
                        className="bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 hover:scale-105"
                        onClick={() => handlePdfDownload(paper.pdfUrl)}
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download PDF
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-white text-center shadow-2xl">
          <h3 className="text-2xl font-bold mb-4">Research Interests</h3>
          <p className="text-lg mb-6 opacity-90">
            Passionate about applying machine learning and deep learning technologies to solve real-world healthcare challenges
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/20 p-4 rounded-xl hover:bg-white/30 transition-all duration-300 hover:scale-105">
              <h4 className="font-bold mb-2">Machine Learning</h4>
              <p className="text-sm opacity-90">Healthcare prediction models</p>
            </div>
            <div className="bg-white/20 p-4 rounded-xl hover:bg-white/30 transition-all duration-300 hover:scale-105">
              <h4 className="font-bold mb-2">Deep Learning</h4>
              <p className="text-sm opacity-90">Medical image classification</p>
            </div>
            <div className="bg-white/20 p-4 rounded-xl hover:bg-white/30 transition-all duration-300 hover:scale-105">
              <h4 className="font-bold mb-2">Data Analysis</h4>
              <p className="text-sm opacity-90">Comparative algorithm studies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
