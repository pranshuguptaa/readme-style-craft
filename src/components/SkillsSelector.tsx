
import React, { useState } from 'react';
import { Check, Search } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SKILLS_DATA } from '@/data/skills';

interface SkillsSelectorProps {
  selectedSkills: string[];
  setSelectedSkills: React.Dispatch<React.SetStateAction<string[]>>;
}

const SkillsSelector = ({ selectedSkills, setSelectedSkills }: SkillsSelectorProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSkills = searchQuery
    ? SKILLS_DATA.filter(skill => 
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : SKILLS_DATA;

  const toggleSkill = (skillName: string) => {
    if (selectedSkills.includes(skillName)) {
      setSelectedSkills(prev => prev.filter(skill => skill !== skillName));
    } else {
      setSelectedSkills(prev => [...prev, skillName]);
    }
  };

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search skills..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-8"
        />
      </div>
      
      <div>
        <h4 className="mb-2 font-medium">Selected Skills</h4>
        <div className="flex flex-wrap gap-2 min-h-10">
          {selectedSkills.length === 0 ? (
            <p className="text-sm text-muted-foreground">No skills selected</p>
          ) : (
            selectedSkills.map(skill => (
              <Badge 
                key={skill} 
                variant="secondary" 
                className="cursor-pointer hover:bg-destructive hover:text-destructive-foreground"
                onClick={() => toggleSkill(skill)}
              >
                {skill} ✕
              </Badge>
            ))
          )}
        </div>
      </div>
      
      <div>
        <h4 className="mb-2 font-medium">Available Skills</h4>
        <ScrollArea className="h-[200px] border rounded-md p-2">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 p-1">
            {filteredSkills.map(skill => (
              <div
                key={skill.name}
                className={`badge-container flex items-center gap-1 rounded-md px-2 py-1 cursor-pointer ${
                  selectedSkills.includes(skill.name) ? 'bg-accent/10' : ''
                }`}
                onClick={() => toggleSkill(skill.name)}
              >
                <Badge 
                  variant="outline" 
                  className={`badge flex items-center gap-1.5 ${
                    selectedSkills.includes(skill.name) ? 'border-accent text-accent' : ''
                  }`}
                >
                  {selectedSkills.includes(skill.name) && (
                    <Check className="w-3 h-3" />
                  )}
                  <span className="flex items-center">
                    <img 
                      src={skill.icon} 
                      alt={skill.name} 
                      className="w-4 h-4 mr-1" 
                    />
                    {skill.name}
                  </span>
                </Badge>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default SkillsSelector;
