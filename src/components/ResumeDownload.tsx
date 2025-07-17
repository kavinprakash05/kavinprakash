import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download, FileText, ExternalLink } from 'lucide-react';
import { trackResumeDownload } from '@/lib/analytics';

interface ResumeDownloadProps {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
  showIcon?: boolean;
  children?: React.ReactNode;
}

const ResumeDownload = ({ 
  variant = 'default', 
  size = 'default', 
  className = '', 
  showIcon = true,
  children 
}: ResumeDownloadProps) => {
  const [isDownloading, setIsDownloading] = useState(false);

  // Using the actual Google Drive resume URL
  const resumeUrl = 'https://drive.google.com/file/d/1FpaZRv-yxpqFB7OZl38IvgyKcEbXkO_5/view?usp=sharing';

  const handleResumeDownload = async () => {
    setIsDownloading(true);
    
    try {
      // Track the download
      trackResumeDownload();
      
      // For Google Drive links, extract file ID and create download URL
      const fileId = resumeUrl.match(/\/d\/([a-zA-Z0-9-_]+)/)?.[1];
      if (fileId) {
        const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
        window.open(downloadUrl, '_blank');
      } else {
        // Fallback to original URL
        window.open(resumeUrl, '_blank');
      }
      
    } catch (error) {
      console.error('Error downloading resume:', error);
      // Fallback: open in new tab
      window.open(resumeUrl, '_blank');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      onClick={handleResumeDownload}
      disabled={isDownloading}
    >
      {showIcon && (
        isDownloading ? (
          <div className="animate-spin mr-2 h-4 w-4 border-2 border-current border-t-transparent rounded-full" />
        ) : (
          <Download className="mr-2 h-4 w-4" />
        )
      )}
      {children || (isDownloading ? 'Downloading...' : 'Download Resume')}
    </Button>
  );
};

export default ResumeDownload;