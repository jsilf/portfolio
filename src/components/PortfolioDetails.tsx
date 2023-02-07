import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IProject } from "../models/IProject";
import { Project } from "../models/Project";

export const PortfolioDetails = () => {
  const url = "https://api.github.com/users/jsilf/repos";
  const [projectDetails, setProjectDetails] = useState<Project[]>([]);
  const [projectId, setProjectId] = useState(0);

  let { id } = useParams();

  useEffect(() => {
    if (projectId === 0) return;
  }, [projectId]);

  useEffect(() => {
    if (id) {
      return setProjectId(+id);
    }
  }, [id]);

  useEffect(() => {
    axios.get<IProject[]>(url).then((response) => {
      let projectsFromApi = response.data.map((project: IProject) => {
        return new Project(project.id, project.name, project.url);
      });

      setProjectDetails(projectsFromApi);
    });
  }, []);

  let htmlDetails = projectDetails.map((p, i) => {
    return (
      <div key={i}>
        {p.id === projectId && (
          <div>
            <h2>{p.name}</h2>
            <Link to={p.url}>Länk</Link>{" "}
          </div>
        )}
      </div>
    );
  });

  return (
    <>
      <section>Details about: {htmlDetails}</section>
    </>
  );
};
