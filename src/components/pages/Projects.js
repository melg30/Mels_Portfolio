import React from "react";
import "./style.css";

function ProjectCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Project Name:</strong> {props.name}
          </li>
          <li>
            <strong>Deployed Link:</strong> {props.deployed}
          </li>
          <li>
            <strong>Github Link:</strong> {props.github}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
