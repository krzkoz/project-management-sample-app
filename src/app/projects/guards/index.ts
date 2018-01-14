import { ProjectsGuard } from './projects.guard';
import { ProjectExistsGuard } from './project-exists.guard';
import { SkillsGuard } from './skills.guard';

export const guards: any[] = [ProjectsGuard, ProjectExistsGuard, SkillsGuard];

export * from './projects.guard';
export * from './project-exists.guard';
export * from './skills.guard';
