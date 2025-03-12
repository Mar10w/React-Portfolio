import React from 'react';
import Project from '../components/Project';

const Portfolio = () => (
  <section>
    <h2>Portfolio</h2>
    <Project title="Project 1" image="path-to-image.jpg" deployedLink="url-to-deployed-app" repoLink="url-to-repo" />
    <Project title="Project 2" image="path-to-image.jpg" deployedLink="url-to-deployed-app" repoLink="url-to-repo" />
    {/* Add more Project components as needed */}
  </section>
);

export default Portfolio;