import { useState, useEffect } from "react";

const useProject = (projectId) => {
  const [project, setProject] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!projectId) return;
        const res = await fetch(`/api/project/${projectId}`);
        const project = (await res.json()).data.project;
        setProject(project);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [projectId]);
  return project;
};

export default useProject;
