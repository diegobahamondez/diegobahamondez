import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];

  const handleGitHubClick = () => {
    window.location.href = project.github;
  };

  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} alt={project.name} />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <GitHubIcon onClick={handleGitHubClick}/>
    </div>
  );
}

export default ProjectDisplay;
