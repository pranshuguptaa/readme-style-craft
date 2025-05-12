
import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Github, Twitter, Globe, Linkedin, Mail, CodepenIcon, Youtube, Twitch } from "lucide-react";

interface SocialLink {
  name: string;
  icon: React.ReactNode;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

interface SocialLinksInputProps {
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
  setSocials: React.Dispatch<React.SetStateAction<{
    github: string;
    twitter: string;
    linkedin: string;
    website: string;
    email: string;
    codepen: string;
    youtube: string;
    twitch: string;
  }>>;
}

const SocialLinksInput = ({ socials, setSocials }: SocialLinksInputProps) => {
  const handleChange = (key: keyof typeof socials) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setSocials(prev => ({ ...prev, [key]: e.target.value }));
  };

  const socialLinks: SocialLink[] = [
    {
      name: "GitHub",
      icon: <Github className="w-4 h-4" />,
      placeholder: "github username",
      value: socials.github,
      onChange: (value) => setSocials(prev => ({ ...prev, github: value }))
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-4 h-4" />,
      placeholder: "twitter username",
      value: socials.twitter,
      onChange: (value) => setSocials(prev => ({ ...prev, twitter: value }))
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-4 h-4" />,
      placeholder: "linkedin username",
      value: socials.linkedin,
      onChange: (value) => setSocials(prev => ({ ...prev, linkedin: value }))
    },
    {
      name: "Website",
      icon: <Globe className="w-4 h-4" />,
      placeholder: "website url",
      value: socials.website,
      onChange: (value) => setSocials(prev => ({ ...prev, website: value }))
    },
    {
      name: "Email",
      icon: <Mail className="w-4 h-4" />,
      placeholder: "email address",
      value: socials.email,
      onChange: (value) => setSocials(prev => ({ ...prev, email: value }))
    },
    {
      name: "Codepen",
      icon: <CodepenIcon className="w-4 h-4" />,
      placeholder: "codepen username",
      value: socials.codepen,
      onChange: (value) => setSocials(prev => ({ ...prev, codepen: value }))
    },
    {
      name: "YouTube",
      icon: <Youtube className="w-4 h-4" />,
      placeholder: "youtube channel",
      value: socials.youtube,
      onChange: (value) => setSocials(prev => ({ ...prev, youtube: value }))
    },
    {
      name: "Twitch",
      icon: <Twitch className="w-4 h-4" />,
      placeholder: "twitch username",
      value: socials.twitch,
      onChange: (value) => setSocials(prev => ({ ...prev, twitch: value }))
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {socialLinks.map((social) => (
        <div key={social.name} className="space-y-2">
          <Label htmlFor={social.name.toLowerCase()}>
            <div className="flex items-center gap-2">
              {social.icon} {social.name}
            </div>
          </Label>
          <div className="relative">
            <Input
              id={social.name.toLowerCase()}
              placeholder={social.placeholder}
              value={social.value}
              onChange={(e) => social.onChange(e.target.value)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SocialLinksInput;
