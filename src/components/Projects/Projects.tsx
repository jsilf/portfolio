import axios from "axios";
import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "../Parts/Button";
import { externalProjects, projectList } from "./ProjectList";

export type ProjectType = {
  id: string;
  name: string;
  html_url: string;
  homepage: string;
  topics: string[];
};

class Project {
  constructor(
    public id: string,
    public name: string,
    public html_url: string,
    public homepage: string,
    public topics: string[]
  ) {}
}

export const Projects = () => {
  const [project, setProject] = useState<Project[]>([]);
  const projectPerRow = 4;
  const [nextRow, setNextRow] = useState(projectPerRow);
  const filterFromApi = ["jsilf", "simple-diary"];

  useEffect(() => {
    axios
      .get<ProjectType[]>("https://api.github.com/users/jsilf/repos")
      .then((response) => {
        let projectsFromApi = response.data.map((project: ProjectType) => {
          return new Project(
            project.id,
            project.name,
            project.html_url,
            project.homepage,
            project.topics
          );
        });

        const filtered = projectsFromApi.filter(
          (proj) => !filterFromApi.includes(proj.name)
        );
        return setProject([...externalProjects, ...filtered]);
      });
    // .catch(function (error) {
    //   if (error.response) {
    //     console.error(error.response.data);
    //     // console.log(error.response.status);
    //     // console.log(error.response.headers);
    //   } else if (error.request) {
    //     console.log(error.request);
    //   } else {
    //     console.log("Error", error.message);
    //   }
    //   console.log(error.config);
    // });
  }, []);

  const handleMoreProjects = () => {
    setNextRow(nextRow + projectPerRow);
  };

  const cardVariants: Variants = {
    offscreen: {
      opacity: 0,
      y: 200,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <>
      <section className="standard" id="portfolio">
        <div className="display-flex display-flex-col align-center">
          <h2>portfolio</h2>
          <div className="projects">
            {project?.slice(0, nextRow).map((p) => {
              return (
                <motion.div
                  className="project-wrapper"
                  key={p.id}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.8 }}>
                  <motion.div
                    variants={cardVariants}
                    whileHover={{ scale: 1.1 }}>
                    <a
                      href={p.homepage ? p.homepage : p.html_url}
                      title={p.name}
                      target="_blank"
                      rel="noopener noreferrer">
                      {projectList.map((img) => {
                        return (
                          img?.title === p.name && (
                            <div
                              key={img.id}
                              className="project-card display-flex justify-center align-center">
                              <img
                                src={img.image}
                                width={600}
                                height={400}
                                alt={`Screenshot of project ${p.name}`}
                              />
                            </div>
                          )
                        );
                      })}
                    </a>
                  </motion.div>
                  <div className="project-tag_wrap">
                    {p.topics?.map((tag, i) => {
                      return (
                        <span className="tag" key={i}>
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
          {nextRow < project.length && (
            <Button click={handleMoreProjects}>Show more</Button>
          )}
        </div>
      </section>
    </>
  );
};
