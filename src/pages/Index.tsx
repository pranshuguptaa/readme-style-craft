
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Copy, Check, Code2 } from "lucide-react";
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
    <div className="flex flex-col min-h-screen bg-black text-white relative overflow-hidden">
      {/* Floating dots background - enhanced with more dots */}
      <div className="dot dot-1"></div>
      <div className="dot dot-2"></div>
      <div className="dot dot-3"></div>
      <div className="dot dot-4"></div>
      <div className="dot dot-5"></div>
      <div className="dot dot-6"></div>
      <div className="dot dot-7"></div>
      <div className="dot dot-8"></div>
      <div className="dot dot-9"></div>
      <div className="dot dot-10"></div>

      <Navbar />

      <main className="flex-1 container py-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 animate-fade-in relative z-10">
            <div className="flex items-center justify-center mb-4">
              <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-purple/20 border border-purple/30 mr-3">
                <Code2 className="h-7 w-7 text-purple-light" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-light via-blue-light to-purple bg-clip-text text-transparent">
                ReadmeCraft
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-300 mb-6">
              Create a stunning GitHub profile README in minutes
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <Card className="glassmorphism shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="text-white">Editor</CardTitle>
                  <CardDescription className="text-gray-300">Fill in your information to generate your GitHub README</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="personal" className="space-y-4">
                    <TabsList className="grid grid-cols-4 w-full bg-white/10 border-white/10">
                      <TabsTrigger value="personal" className="data-[state=active]:bg-white/20">Personal</TabsTrigger>
                      <TabsTrigger value="social" className="data-[state=active]:bg-white/20">Social</TabsTrigger>
                      <TabsTrigger value="skills" className="data-[state=active]:bg-white/20">Skills</TabsTrigger>
                      <TabsTrigger value="stats" className="data-[state=active]:bg-white/20">Stats</TabsTrigger>
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
              <Card className="glassmorphism shadow-lg border-0">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white">Preview</CardTitle>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={copyMarkdown}
                      className="flex items-center gap-2 bg-white/10 border-white/20 hover:bg-white/20"
                    >
                      {copying ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      {copying ? "Copied!" : "Copy Markdown"}
                    </Button>
                  </div>
                  <CardDescription className="text-gray-300">Live preview of your GitHub README</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <MarkdownPreview 
                    personal={personal} 
                    socials={socials} 
                    skills={selectedSkills}
                    stats={stats}
                  />
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-12 text-center relative z-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">Ready to showcase your GitHub profile?</h2>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple to-blue-dark hover:opacity-90 transition-opacity"
              onClick={copyMarkdown}
            >
              Generate & Copy README <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </main>

      <footer className="border-t border-white/10 py-6 relative z-10">
        <div className="container flex flex-col md:flex-row items-center justify-between text-center md:text-left space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} ReadmeCraft. Made with ❤️.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
