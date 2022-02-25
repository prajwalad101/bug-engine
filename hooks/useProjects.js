import { useState, useEffect } from "react";

// hook for fetching all projects
const useProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/projects");
        const data = (await res.json()).data;
        setProjects(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return projects;
};

export default useProjects;
