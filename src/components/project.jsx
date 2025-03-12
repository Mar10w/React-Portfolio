import React from 'react';

const Project = ({ title, image, deployedLink, repoLink }) => (
  <div className="project">
    <h3>{title}</h3>
    <img src={image} alt={title} />
    <p>
      <a href={deployedLink}>Deployed Application</a> | <a href={repoLink}>GitHub Repository</a>
    </p>
  </div>
);

export default Project;