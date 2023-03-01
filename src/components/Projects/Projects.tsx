import axios from "axios";
import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { IProject } from "../../models/IProject";
import { Project } from "../../models/Project";

import styled from "styled-components";

const StyledButton = styled.button`
  background: #041124;
  color: #fff;
  font-size: 1.125rem;
  border-radius: 50px;
  padding: 1rem;
  margin-top: 2rem;
`;

export const Projects = () => {
  const [project, setProject] = useState<Project[]>([]);
  const projectPerRow = 3;
  const [nextRow, setNextRow] = useState(projectPerRow);

  useEffect(() => {
    getData();
  }, []);

  console.log(project);

  const handleMoreProjects = () => {
    setNextRow(nextRow + projectPerRow);
  };

  async function getData() {
    try {
      axios
        .get<IProject[]>("https://api.github.com/users/jsilf/repos")
        .then((response) => {
          let projectsFromApi = response.data.map((project: IProject) => {
            return new Project(project.id, project.name, project.html_url);
          });
          setProject(projectsFromApi);
        });
    } catch (error) {
      console.log(error);
    }
  }

  const cardVariants: Variants = {
    offscreen: {
      y: 200,
    },
    onscreen: {
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
      <section className="p-standard" id="portfolio">
        <div className="display-flex display-flex-col align-center">
          <h2>portfolio</h2>
          <div className="projects">
            {project?.slice(0, nextRow)?.map((p) => {
              return (
                <motion.div
                  key={p.id}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.8 }}>
                  <a href={`${p.html_url}`}>
                    <motion.div variants={cardVariants}>
                      <div className="project-card">
                        <p>{p.name}</p>
                      </div>
                    </motion.div>
                  </a>
                </motion.div>
              );
            })}
          </div>
          {nextRow < project.length && (
            <StyledButton onClick={handleMoreProjects}>
              Load more projects
            </StyledButton>
          )}
        </div>
      </section>
    </>
  );
};
