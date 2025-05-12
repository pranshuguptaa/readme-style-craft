
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface PersonalInfoProps {
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
  setPersonal: React.Dispatch<React.SetStateAction<{
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
  }>>;
}

const PersonalInfo = ({ personal, setPersonal }: PersonalInfoProps) => {
  const handleChange = (key: keyof typeof personal) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPersonal(prev => ({ ...prev, [key]: e.target.value }));
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input 
            id="name" 
            placeholder="Your name" 
            value={personal.name}
            onChange={handleChange('name')}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="subtitle">Subtitle</Label>
          <Input 
            id="subtitle" 
            placeholder="Developer | Designer | Creator" 
            value={personal.subtitle}
            onChange={handleChange('subtitle')}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="about">About Me</Label>
        <Textarea 
          id="about" 
          placeholder="A short description about yourself" 
          value={personal.about}
          onChange={handleChange('about')}
          className="min-h-[100px]"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="currentWork">Currently working on</Label>
          <Input 
            id="currentWork" 
            placeholder="My awesome project" 
            value={personal.currentWork}
            onChange={handleChange('currentWork')}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="currentLearn">Currently learning</Label>
          <Input 
            id="currentLearn" 
            placeholder="New technologies" 
            value={personal.currentLearn}
            onChange={handleChange('currentLearn')}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="collaborateOn">Looking to collaborate on</Label>
          <Input 
            id="collaborateOn" 
            placeholder="Open source projects" 
            value={personal.collaborateOn}
            onChange={handleChange('collaborateOn')}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="helpWith">Looking for help with</Label>
          <Input 
            id="helpWith" 
            placeholder="Specific technology or project" 
            value={personal.helpWith}
            onChange={handleChange('helpWith')}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="askMeAbout">Ask me about</Label>
          <Input 
            id="askMeAbout" 
            placeholder="JavaScript, React, etc." 
            value={personal.askMeAbout}
            onChange={handleChange('askMeAbout')}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="reachMeAt">How to reach me</Label>
          <Input 
            id="reachMeAt" 
            placeholder="email@example.com" 
            value={personal.reachMeAt}
            onChange={handleChange('reachMeAt')}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="currentProject">Current project</Label>
          <Input 
            id="currentProject" 
            placeholder="My current project" 
            value={personal.currentProject}
            onChange={handleChange('currentProject')}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="funFact">Fun fact</Label>
          <Input 
            id="funFact" 
            placeholder="Something interesting about you" 
            value={personal.funFact}
            onChange={handleChange('funFact')}
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
