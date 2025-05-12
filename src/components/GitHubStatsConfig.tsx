
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";

interface GitHubStatsConfigProps {
  stats: {
    showStats: boolean;
    includePrivate: boolean;
    includeAllCommits: boolean;
    statsTheme: string;
    rankIcon: string;
    hideTitle: boolean;
    customTitle: string;
  };
  setStats: React.Dispatch<React.SetStateAction<{
    showStats: boolean;
    includePrivate: boolean;
    includeAllCommits: boolean;
    statsTheme: string;
    rankIcon: string;
    hideTitle: boolean;
    customTitle: string;
  }>>;
}

const GitHubStatsConfig = ({ stats, setStats }: GitHubStatsConfigProps) => {
  const handleStatsChange = (key: keyof typeof stats) => (value: boolean | string) => {
    setStats(prev => ({ ...prev, [key]: value }));
  };

  const themeOptions = [
    "default", "radical", "merko", "gruvbox", "tokyonight", 
    "onedark", "cobalt", "synthwave", "highcontrast", "dracula"
  ];

  const rankIcons = ["default", "github", "git-commit", "star", "circle"];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Label htmlFor="showStats" className="flex items-center gap-2">
          Show GitHub Stats
        </Label>
        <Switch 
          id="showStats" 
          checked={stats.showStats} 
          onCheckedChange={(checked) => handleStatsChange('showStats')(checked)} 
        />
      </div>

      {stats.showStats && (
        <>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="includePrivate" className="flex items-center gap-2">
                Include Private Contributions
              </Label>
              <Switch 
                id="includePrivate" 
                checked={stats.includePrivate} 
                onCheckedChange={(checked) => handleStatsChange('includePrivate')(checked)} 
              />
            </div>
            
            <div className="flex items-center justify-between">
              <Label htmlFor="includeAllCommits" className="flex items-center gap-2">
                Include All Commits
              </Label>
              <Switch 
                id="includeAllCommits" 
                checked={stats.includeAllCommits} 
                onCheckedChange={(checked) => handleStatsChange('includeAllCommits')(checked)} 
              />
            </div>
            
            <div className="flex items-center justify-between">
              <Label htmlFor="hideTitle" className="flex items-center gap-2">
                Hide Title
              </Label>
              <Switch 
                id="hideTitle" 
                checked={stats.hideTitle} 
                onCheckedChange={(checked) => handleStatsChange('hideTitle')(checked)} 
              />
            </div>

            {!stats.hideTitle && (
              <div className="space-y-2">
                <Label htmlFor="customTitle">Custom Title</Label>
                <Input 
                  id="customTitle" 
                  value={stats.customTitle} 
                  onChange={(e) => handleStatsChange('customTitle')(e.target.value)} 
                  placeholder="Custom title for stats"
                />
              </div>
            )}
          </div>

          <div className="space-y-2">
            <Label>Theme</Label>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
              {themeOptions.map((theme) => (
                <div 
                  key={theme}
                  className={`border rounded p-2 cursor-pointer text-center text-sm transition-all ${
                    stats.statsTheme === theme ? 'border-primary bg-primary/10' : 'hover:bg-secondary'
                  }`}
                  onClick={() => handleStatsChange('statsTheme')(theme)}
                >
                  {theme}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Rank Icon</Label>
            <RadioGroup 
              value={stats.rankIcon} 
              onValueChange={(value) => handleStatsChange('rankIcon')(value)}
              className="flex flex-wrap gap-4"
            >
              {rankIcons.map((icon) => (
                <div key={icon} className="flex items-center space-x-2">
                  <RadioGroupItem value={icon} id={`rank-${icon}`} />
                  <Label htmlFor={`rank-${icon}`}>{icon}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </>
      )}
    </div>
  );
};

export default GitHubStatsConfig;
