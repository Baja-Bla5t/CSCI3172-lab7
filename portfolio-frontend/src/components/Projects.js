import { useState } from 'react';

function Projects() {
  

  return (
    <>
      <div className="container-fluid d-flex flex-column align-items-center" style={{height: "100vh"}}>
        <h1>Work Samples</h1>
        <div className="d-flex flex-grow-1 w-100" style={{height: "100vh"}}>
          <iframe className="pdf" src="/WorkSamples.pdf" scrolling="yes" style={{width: "100%", height: "100%"}}></iframe>
        </div>
      </div>
    </>
  );
}

export default Projects;