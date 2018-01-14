import { Skill } from './skill.model';
import { Timeline } from './timeline.model';

export interface Project {
  id: number;
  timeline: Timeline;
  projectName: string;
  projectDescription: string;
  complexity: number;
  skills: Skill[];
}
