import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Cookie, X, Shield, BarChart3 } from 'lucide-react';
import { updateConsentMode } from '@/lib/analytics';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consentChoice = localStorage.getItem('cookie_consent');
    if (!consentChoice) {
      // Show consent banner after a brief delay
      setTimeout(() => setShowConsent(true), 2000);
    } else {
      // Apply saved consent
      const hasConsent = consentChoice === 'accepted';
      updateConsentMode(hasConsent);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    updateConsentMode(true);
    setShowConsent(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie_consent', 'declined');
    updateConsentMode(false);
    setShowConsent(false);
  };

  const handleClose = () => {
    // If user closes without choosing, default to decline
    handleDecline();
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-black/50 backdrop-blur-sm">
      <Card className="max-w-4xl mx-auto bg-white/95 backdrop-blur border border-gray-200 shadow-2xl">
        <div className="p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 p-2 bg-blue-100 rounded-lg">
              <Cookie className="h-6 w-6 text-blue-600" />
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Privacy & Analytics Consent
              </h3>
              
              {!showDetails ? (
                <div>
                  <p className="text-gray-600 mb-4">
                    This portfolio uses privacy-compliant analytics to understand visitor engagement and improve content. 
                    Your privacy is important - no personal data is collected or shared.
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    <Button 
                      onClick={handleAccept}
                      className="bg-green-600 hover:bg-green-700 text-white"
                    >
                      <BarChart3 className="mr-2 h-4 w-4" />
                      Accept Analytics
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      onClick={handleDecline}
                      className="border-gray-300 text-gray-700 hover:bg-gray-50"
                    >
                      <Shield className="mr-2 h-4 w-4" />
                      Decline
                    </Button>
                    
                    <Button 
                      variant="ghost" 
                      onClick={() => setShowDetails(true)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="space-y-4 mb-6">
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                        <Shield className="mr-2 h-4 w-4" />
                        What We Track (Privacy-First)
                      </h4>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>• Page views and time spent on sections</li>
                        <li>• File downloads (resume, research papers)</li>
                        <li>• General location (country level only)</li>
                        <li>• Anonymous session data (resets each visit)</li>
                      </ul>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-blue-800 mb-2">
                        What We DON'T Track
                      </h4>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• Personal information or email addresses</li>
                        <li>• Cross-site tracking or advertising data</li>
                        <li>• Persistent user identification</li>
                        <li>• Sensitive personal data of any kind</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        GDPR Compliance
                      </h4>
                      <p className="text-sm text-gray-600">
                        All analytics are anonymized and comply with GDPR, CCPA, and other privacy regulations. 
                        You can change your preference anytime by clearing browser data.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    <Button 
                      onClick={handleAccept}
                      className="bg-green-600 hover:bg-green-700 text-white"
                    >
                      Accept Analytics
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      onClick={handleDecline}
                      className="border-gray-300 text-gray-700 hover:bg-gray-50"
                    >
                      Decline
                    </Button>
                    
                    <Button 
                      variant="ghost" 
                      onClick={() => setShowDetails(false)}
                      className="text-gray-600 hover:text-gray-800"
                    >
                      Back
                    </Button>
                  </div>
                </div>
              )}
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClose}
              className="flex-shrink-0 text-gray-400 hover:text-gray-600"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CookieConsent;