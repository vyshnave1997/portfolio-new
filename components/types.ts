// components/types.ts
export interface EncryptedTextProps {
  text: string;
  encryptedClassName?: string;
  revealedClassName?: string;
  revealDelayMs?: number;
  triggerKey?: number;
}

export interface HoverEncryptedTextProps {
  text: string;
  className?: string;
}

export interface Project {
  id: string;
  name: string;
  image: string;
  year: string;
  description: string;
  services: string[];
  tools: string[];
  liveUrl?: string;
  githubUrl?: string;
  carbonFootprint?: string;
  media: {
    type: 'image' | 'video';
    url: string;
  }[];
}

export interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  showMoreInfo?: boolean;
  onMoreInfoToggle?: () => void;
}

export interface WorkPageProps {
  onProjectClick: (project: Project) => void;
}

export interface InfoPageProps {
  onMoreInfoToggle: () => void;
}

export interface MoreInfoPageProps {
  onClose: () => void;
}

export interface ProjectDetailPageProps {
  project: Project;
  onClose: () => void;
}