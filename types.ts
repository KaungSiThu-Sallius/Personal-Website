
export interface Project {
  id: number;
  title: string;
  description: string;
  category: 'Machine Learning' | 'Excel' | 'Tableau' | 'Python' | 'SQL' | 'All';
  tags: string[];
  imageUrl: string;
  githubUrl?: string;
  demoUrl?: string;
  demoLabel?: string; // e.g., "View Tableau" or "View Spreadsheet"
}

export interface Skill {
  name: string;
  category: 'Core' | 'Tools' | 'Analysis';
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  imageUrl: string;
  url: string; // Link to Medium/Dev.to or internal
}