import { useState, useEffect } from 'react';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://lab7-backend.netlify.app/.netlify/functions/api/projects")
      .then((response) => {
        if(!response.ok){
          throw new Error(`HTTP Error: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="container-fluid d-flex flex-column align-items-center" style={{height: "100vh"}}>
        <h1>Work Samples</h1>
        {loading && <p>Loading projects...</p>}
        {error && <p>Error: {error}</p>}

      <ul>
        {projects.map((project, index) => {
          <li key={index}>
            <h3>{project.ProjectName}</h3>
            <p>Author: {project.Author}</p>
            <p>Languages: {project.Languages}</p>
            <p>Description: {project.Description}</p>
            <p>Skills: {project.Skills}</p>
          </li>
        })}
      </ul>
      </div>
    </>
  );
}

export default Projects;