import axios from "axios";
import { useEffect, useState } from "react";
import { IProject } from "../../models/IProject";
import { Project } from "../../models/Project";

const url = "https://api.github.com/users/jsilf/repos";

export const Projects = () => {
  const [project, setProject] = useState<Project[]>([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      axios.get<IProject[]>(url).then((response) => {
        let projectsFromApi = response.data.map((project: IProject) => {
          return new Project(project.id, project.name, project.html_url);
        });
        setProject(projectsFromApi);
      });
    } catch (error) {
      console.log(error);
    }
  }

  let html = project.map((p) => {
    return (
      <a key={p.id} href={`${p.html_url}`}>
        <div className="project-card">
          <p>{p.name}</p>
        </div>
      </a>
    );
  });

  console.log(html);

  return (
    <>
      <section className="p-standard" id="portfolio">
        <div className="display-flex display-flex-col align-center">
          <h2>Projects on Github</h2>
          <div className="projects">{html}</div>
        </div>
      </section>
    </>
  );
};
