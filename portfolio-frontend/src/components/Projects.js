import { useState, useEffect } from 'react';

function Projects() {
  //State for displaying projects
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //State for skill searching
  const [skillQuerry, setSkillQuerry] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("");

  //Projects useEffect (for fetching project data and setting state)
  useEffect(() => {
    fetch("https://lab7-backend.netlify.app/.netlify/functions/api/projects")
      .then((response) => {
        if(!response.ok){
          throw new Error(`HTTP Error: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Projects Data: ", data, Array.isArray(data));
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const uniqueSkills = [... new Set(projects.flatMap((p) => p.Skills.split(", ")))];
  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.ProjectName.toLowerCase().includes(skillQuerry.toLowerCase());
    const matchesSkill = selectedSkill ? project.Skills.includes(selectedSkill) : true;
    return matchesSearch && matchesSkill;
  });

  return (
    <>
      <div className="container-fluid d-flex flex-column align-items-start">
        <h1>Work Samples</h1>
        <input
        type="text"
        className="form-control mb-3"
        placeholder="Search projects by name..."
        value={skillQuerry}
        onChange={(event) => setSkillQuerry(event.target.value)}
      />
      
      <div className="d-flex gap-2 flex-wrap">
        {uniqueSkills.length > 0 ? (
          uniqueSkills.map((skill, index) => (
            <button
              key={index}
              className={`btn ${selectedSkill === skill ? "btn-primary" : "btn-outline-primary"}`}
              onClick={() => setSelectedSkill(selectedSkill === skill ? "" : skill)}
            >
              {skill}
            </button>
          ))
        ) : (
          <p>No skills found</p>
        )}

      </div>
        {loading && <p>Loading projects...</p>}
        {error && <p>Error: {error}</p>}

      <ul>
        {filteredProjects.length > 0 ? 
          (filteredProjects.map((project, index) => (
            <li key={index}>
              <h3>{project.ProjectName}</h3>
              <p>Author: {project.Author}</p>
              <p>Languages: {project.Languages}</p>
              <p>Description: {project.Description}</p>
              <p>Skills: {project.Skills}</p>
            </li>
          ))
        ) : (
          <p>No projects have the skills requested.</p>
        )}
      </ul>
      </div>
    </>
  );
}

export default Projects;