import { projects } from "../dev-data/projects";

export const getProjectById = (projectId) => {
  const project = projects.find((el) => el.id === Number(projectId));
  return project;
};
