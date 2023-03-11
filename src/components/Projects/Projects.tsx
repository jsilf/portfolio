import axios from "axios";
import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { IProject } from "../../models/IProject";
import { Project } from "../../models/Project";
import map from "../../assets/interactive-map.webp";
import portfolio from "../../assets/portfolio.webp";
import notes from "../../assets/notes.webp";
import oldPortfolio from "../../assets/old_portfolio.webp";
import wip from "../../assets/Logo.svg";
import { Button } from "./Button";

const mapId = Math.random();

const images = [
  {
    id: mapId,
    title: "portfolio",
    image: portfolio,
    techStack: "React, TypeScript, SCSS",
  },
  {
    id: mapId,
    title: "CV",
    image: oldPortfolio,
    techStack: "Old portfolio - HTML, SCSS, JavaScript",
  },
  {
    id: mapId,
    title: "interactive-tourist-map",
    image: map,
    techStack: "React, TypeScript, SCSS, Node.js, Express.js, MongoDB",
  },
  ,
  {
    id: mapId,
    title: "pepp-app",
    image: wip,
    techStack: "Work in progress - Next.js, TypeScript, Node.js, MongoDB",
  },
  {
    id: mapId,
    title: "note-to-self",
    image: notes,
    techStack: "React, TypeScript, Node.js, Express.js, MongoDB",
  },
];

export const Projects = () => {
  const [project, setProject] = useState<Project[]>([]);
  const projectPerRow = 2;
  const [nextRow, setNextRow] = useState(projectPerRow);
  const filterFromApi = "jsilf";

  useEffect(() => {
    axios
      .get<IProject[]>("https://api.github.com/users/jsilf/repos")
      .then((response) => {
        let projectsFromApi = response.data.map((project: IProject) => {
          return new Project(
            project.id,
            project.name,
            project.html_url,
            project.homepage
          );
        });

        const filtered = projectsFromApi.filter(
          (proj) => proj.name !== filterFromApi
        );
        return setProject(filtered);
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
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
                  key={p.id}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.8 }}>
                  <motion.div
                    variants={cardVariants}
                    whileHover={{ scale: 1.1 }}>
                    <a
                      href={p.homepage}
                      target="_blank"
                      rel="noopener noreferrer">
                      {images.map((img) => {
                        return (
                          img?.title === p.name && (
                            <div
                              key={img.id}
                              className="project-card display-flex justify-center align-center">
                              <img src={img.image} width={600} height={400} />
                              <p className="project-card_text">
                                {img.techStack}
                              </p>
                            </div>
                          )
                        );
                      })}
                    </a>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
          {nextRow < project.length && (
            <Button click={handleMoreProjects}>Load more projects</Button>
          )}
        </div>
      </section>
    </>
  );
};
