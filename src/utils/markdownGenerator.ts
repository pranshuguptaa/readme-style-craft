
interface MarkdownGeneratorProps {
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

export function generateMarkdown({ 
  personal, 
  socials, 
  skills, 
  stats 
}: MarkdownGeneratorProps): string {
  let markdown = '';
  
  // Header section
  if (personal.name) {
    markdown += `<h1 align="center">${personal.name}</h1>\n\n`;
  }
  
  if (personal.subtitle) {
    markdown += `<h3 align="center">${personal.subtitle}</h3>\n\n`;
  }
  
  // About section
  if (personal.about) {
    markdown += `## About Me\n${personal.about}\n\n`;
  }
  
  // Current activities
  const activities = [];
  if (personal.currentWork) activities.push(`- 🔭 I'm currently working on ${personal.currentWork}`);
  if (personal.currentLearn) activities.push(`- 🌱 I'm currently learning ${personal.currentLearn}`);
  if (personal.collaborateOn) activities.push(`- 👯 I'm looking to collaborate on ${personal.collaborateOn}`);
  if (personal.helpWith) activities.push(`- 🤔 I'm looking for help with ${personal.helpWith}`);
  if (personal.askMeAbout) activities.push(`- 💬 Ask me about ${personal.askMeAbout}`);
  if (personal.reachMeAt) activities.push(`- 📫 How to reach me: ${personal.reachMeAt}`);
  if (personal.funFact) activities.push(`- ⚡ Fun fact: ${personal.funFact}`);
  
  if (activities.length > 0) {
    markdown += activities.join('\n') + '\n\n';
  }
  
  // Connect section for social links
  const socialLinks = [];
  
  if (socials.github) {
    socialLinks.push(`<a href="https://github.com/${socials.github}" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/github.svg" alt="${socials.github}" height="30" width="40" /></a>`);
  }
  
  if (socials.twitter) {
    socialLinks.push(`<a href="https://twitter.com/${socials.twitter}" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="${socials.twitter}" height="30" width="40" /></a>`);
  }
  
  if (socials.linkedin) {
    socialLinks.push(`<a href="https://linkedin.com/in/${socials.linkedin}" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="${socials.linkedin}" height="30" width="40" /></a>`);
  }
  
  if (socials.codepen) {
    socialLinks.push(`<a href="https://codepen.io/${socials.codepen}" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/codepen.svg" alt="${socials.codepen}" height="30" width="40" /></a>`);
  }
  
  if (socials.youtube) {
    socialLinks.push(`<a href="https://youtube.com/c/${socials.youtube}" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/youtube.svg" alt="${socials.youtube}" height="30" width="40" /></a>`);
  }
  
  if (socials.twitch) {
    socialLinks.push(`<a href="https://twitch.tv/${socials.twitch}" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitch.svg" alt="${socials.twitch}" height="30" width="40" /></a>`);
  }
  
  if (socialLinks.length > 0) {
    markdown += `## Connect With Me\n<p align="left">\n${socialLinks.join('\n')}\n</p>\n\n`;
  }
  
  // Languages and Tools
  if (skills.length > 0) {
    markdown += `## Languages and Tools\n<p align="left">\n`;
    
    skills.forEach(skill => {
      markdown += `<a href="#" target="_blank" rel="noreferrer"> 
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/${skill.toLowerCase()}/${skill.toLowerCase()}-original.svg" alt="${skill}" width="40" height="40"/> 
      </a> `;
    });
    
    markdown += `\n</p>\n\n`;
  }
  
  // GitHub Stats
  if (stats.showStats && socials.github) {
    let statsUrl = `https://github-readme-stats.vercel.app/api?username=${socials.github}`;
    
    const statsParams = [];
    
    if (stats.includePrivate) statsParams.push('count_private=true');
    if (stats.includeAllCommits) statsParams.push('include_all_commits=true');
    if (stats.hideTitle) statsParams.push('hide_title=true');
    if (stats.statsTheme !== 'default') statsParams.push(`theme=${stats.statsTheme}`);
    if (stats.rankIcon !== 'default') statsParams.push(`rank_icon=${stats.rankIcon}`);
    if (!stats.hideTitle && stats.customTitle) statsParams.push(`custom_title=${encodeURIComponent(stats.customTitle)}`);
    
    if (statsParams.length > 0) {
      statsUrl += '&' + statsParams.join('&');
    }
    
    markdown += `## GitHub Stats\n<p>&nbsp;<img align="center" src="${statsUrl}" alt="${socials.github}" /></p>\n\n`;
  }
  
  return markdown;
}
