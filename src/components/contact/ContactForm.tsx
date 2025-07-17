
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { trackContactFormSubmission } from '@/lib/analytics';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await emailjs.send(
        'service_nyrfdef', // Service ID
        'template_lspaqct', // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Kavin Prakash',
        },
        'iDqdHF6XvfXAByLyd' // Public Key
      );
      
      // Track successful form submission
      trackContactFormSubmission('email_form');
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name">Name *</Label>
            <Input 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
              className="mt-1"
              disabled={isLoading}
            />
          </div>
          <div>
            <Label htmlFor="email">Email *</Label>
            <Input 
              id="email" 
              name="email" 
              type="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
              className="mt-1"
              disabled={isLoading}
            />
          </div>
        </div>
        
        <div>
          <Label htmlFor="subject">Subject *</Label>
          <Input 
            id="subject" 
            name="subject" 
            value={formData.subject} 
            onChange={handleChange} 
            required 
            className="mt-1"
            disabled={isLoading}
          />
        </div>
        
        <div>
          <Label htmlFor="message">Message *</Label>
          <Textarea 
            id="message" 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            required 
            rows={5} 
            className="mt-1"
            disabled={isLoading}
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3"
          disabled={isLoading}
        >
          {isLoading ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
