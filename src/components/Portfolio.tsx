import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { IProject } from "../models/IProject";
import { Project } from "../models/Project";

export const Portfolio = () => {
  //axios get projects from github and display in a fun way

  const url = "https://api.github.com/users/jsilf/repos";
  const [project, setProject] = useState<Project[]>([]);

  useEffect(() => {
    if (project.length > 0) return;
    axios.get<IProject[]>(url).then((response) => {
      console.log(response.data[0]);

      let projectsFromApi = response.data.map((project: IProject) => {
        return new Project(project.id, project.name, project.url);
      });
      setProject(projectsFromApi);
    });
  });

  let html = project.map((p, i) => {
    return (
      <p key={i}>
        <Link to={`/${p.id}`}>{p.name}</Link>
      </p>
    );
  });
  <Outlet />;

  return (
    <>
      <section id="portfolio">
        <h2>Mina projekt på Github</h2>
        <div>{html}</div>
      </section>
    </>
  );
};
