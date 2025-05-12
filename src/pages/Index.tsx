
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Copy, Github, Check } from "lucide-react";
import { toast } from "sonner";

import Navbar from "@/components/Navbar";
import PersonalInfo from "@/components/PersonalInfo";
import SocialLinksInput from "@/components/SocialLinksInput";
import SkillsSelector from "@/components/SkillsSelector";
import GitHubStatsConfig from "@/components/GitHubStatsConfig";
import MarkdownPreview from "@/components/MarkdownPreview";

const Index = () => {
  const [personal, setPersonal] = useState({
    name: "",
    subtitle: "",
    about: "",
    currentWork: "",
    currentLearn: "",
    collaborateOn: "",
    helpWith: "",
    askMeAbout: "",
    reachMeAt: "",
    funFact: "",
    portfolio: "",
    currentProject: ""
  });

  const [socials, setSocials] = useState({
    github: "",
    twitter: "",
    linkedin: "",
    website: "",
    email: "",
    codepen: "",
    youtube: "",
    twitch: ""
  });

  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const [stats, setStats] = useState({
    showStats: true,
    includePrivate: false,
    includeAllCommits: false,
    statsTheme: "default",
    rankIcon: "default",
    hideTitle: false,
    customTitle: ""
  });

  const [copying, setCopying] = useState(false);

  const copyMarkdown = async () => {
    try {
      const markdown = document.querySelector('.markdown-preview pre')?.textContent;
      if (markdown) {
        await navigator.clipboard.writeText(markdown);
        setCopying(true);
        toast.success('Markdown copied to clipboard!');
        setTimeout(() => setCopying(false), 2000);
      }
    } catch (err) {
      toast.error('Failed to copy to clipboard');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />

      <main className="flex-1 container py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple to-blue bg-clip-text text-transparent mb-4">
              GitHub Profile README Generator
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6">
              Create a stunning GitHub profile README in minutes
            </p>
            <div className="flex items-center justify-center gap-4">
              <Button
                variant="outline"
                onClick={() => window.open("https://github.com/", "_blank")}
              >
                <Github className="mr-2 h-4 w-4" />
                View on GitHub
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <Card className="shadow-md border card-hover-effect">
                <CardHeader>
                  <CardTitle>Editor</CardTitle>
                  <CardDescription>Fill in your information to generate your GitHub README</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="personal" className="space-y-4">
                    <TabsList className="grid grid-cols-4 w-full">
                      <TabsTrigger value="personal">Personal</TabsTrigger>
                      <TabsTrigger value="social">Social</TabsTrigger>
                      <TabsTrigger value="skills">Skills</TabsTrigger>
                      <TabsTrigger value="stats">Stats</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="personal" className="space-y-4">
                      <PersonalInfo personal={personal} setPersonal={setPersonal} />
                    </TabsContent>
                    
                    <TabsContent value="social" className="space-y-4">
                      <SocialLinksInput socials={socials} setSocials={setSocials} />
                    </TabsContent>
                    
                    <TabsContent value="skills" className="space-y-4">
                      <SkillsSelector selectedSkills={selectedSkills} setSelectedSkills={setSelectedSkills} />
                    </TabsContent>
                    
                    <TabsContent value="stats" className="space-y-4">
                      <GitHubStatsConfig stats={stats} setStats={setStats} />
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="shadow-md border gradient-border">
                <div className="bg-background p-0.5 rounded-xl">
                  <CardHeader className="bg-card rounded-t-xl">
                    <div className="flex items-center justify-between">
                      <CardTitle>Preview</CardTitle>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={copyMarkdown}
                        className="flex items-center gap-2"
                      >
                        {copying ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        {copying ? "Copied!" : "Copy Markdown"}
                      </Button>
                    </div>
                    <CardDescription>Live preview of your GitHub README</CardDescription>
                  </CardHeader>
                  <CardContent className="bg-card rounded-b-xl pt-6">
                    <MarkdownPreview 
                      personal={personal} 
                      socials={socials} 
                      skills={selectedSkills}
                      stats={stats}
                    />
                  </CardContent>
                </div>
              </Card>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-semibold mb-4">Ready to showcase your GitHub profile?</h2>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple to-blue hover:opacity-90 transition-opacity"
              onClick={copyMarkdown}
            >
              Generate & Copy README <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </main>

      <footer className="border-t py-6">
        <div className="container flex flex-col md:flex-row items-center justify-between text-center md:text-left space-y-4 md:space-y-0">
          <div className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} GitHub Profile README Generator. Made with ❤️.
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://github.com/" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
