
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check, Copy } from 'lucide-react';
import { toast } from 'sonner';
import { generateMarkdown } from '@/utils/markdownGenerator';

interface MarkdownPreviewProps {
  personal: {
    name: string;
    subtitle: string;
    about: string;
    currentWork: string;
    currentLearn: string;
    collaborateOn: string;
    helpWith: string;
    askMeAbout: string;
    reachMeAt: string;
    funFact: string;
    portfolio: string;
    currentProject: string;
  };
  socials: {
    github: string;
    twitter: string;
    linkedin: string;
    website: string;
    email: string;
    codepen: string;
    youtube: string;
    twitch: string;
  };
  skills: string[];
  stats: {
    showStats: boolean;
    includePrivate: boolean;
    includeAllCommits: boolean;
    statsTheme: string;
    rankIcon: string;
    hideTitle: boolean;
    customTitle: string;
  };
}

const MarkdownPreview = ({ personal, socials, skills, stats }: MarkdownPreviewProps) => {
  const [markdown, setMarkdown] = useState('');
  const [copying, setCopying] = useState(false);
  
  useEffect(() => {
    setMarkdown(generateMarkdown({ personal, socials, skills, stats }));
  }, [personal, socials, skills, stats]);
  
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(markdown);
      setCopying(true);
      toast.success('Markdown copied to clipboard!');
      setTimeout(() => setCopying(false), 2000);
    } catch (err) {
      toast.error('Failed to copy to clipboard');
    }
  };
  
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Preview</h3>
        <Button 
          size="sm" 
          variant="outline" 
          onClick={copyToClipboard}
          className="flex items-center gap-1"
        >
          {copying ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          {copying ? 'Copied!' : 'Copy Markdown'}
        </Button>
      </div>
      
      <div className="markdown-preview rounded-md border bg-github-dark text-white p-4 overflow-auto h-[600px]">
        <pre className="whitespace-pre-wrap break-words">{markdown}</pre>
      </div>
    </div>
  );
};

export default MarkdownPreview;
