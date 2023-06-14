import map from "../../assets/interactive-map.webp";
import portfolio from "../../assets/portfolio.webp";
import golobe from "../../assets/golobe.webp";
import codfather from "../../assets/codfather.webp";
import gridpainter from "../../assets/gridpainter.webp";
import smslan from "../../assets/smslantips.webp";
import wip from "../../assets/WIP.webp";
import { IProject } from "../../models/IProject";

const mapId = Math.random();

export const projectList = [
  {
    id: mapId,
    title: "portfolio",
    image: portfolio,
    techStack: "React.js, TypeScript, SCSS",
  },
  {
    id: mapId,
    title: "interactive-tourist-map",
    image: map,
    techStack: "React.js, TypeScript, SCSS, Node.js, Express.js, MongoDB",
  },
  {
    id: mapId,
    title: "SMSLåntips",
    image: smslan,
    techStack: "React.js, TypeScript, SCSS, Easyweb CMS",
  },
  {
    id: mapId,
    title: "Travel agency Golobe",
    image: golobe,
    techStack:
      "Practice project | Easyweb .NET library, Easyweb CMS, JavaScript, SCSS",
  },
  {
    id: mapId,
    title: "Restaurangen",
    image: codfather,
    techStack: "School project 2022 | React.js, TypeScript, SCSS",
  },
  {
    id: mapId,
    title: "Gridpainter",
    image: gridpainter,
    techStack: "School project 2022 | React.js, Tailwind, Socket.io, MongoDB",
  },
];

export const externalProjects: IProject[] = [
  {
    id: mapId,
    name: "SMSLåntips",
    html_url: "https://smslantips.com",
    homepage: "https://smslantips.com",
  },
  {
    id: mapId,
    name: "Restaurangen",
    html_url: "https://github.com/tovehydmark/restaurangen.git",
    homepage: "https://spontaneous-elf-ec9ee9.netlify.app/",
  },
  {
    id: mapId,
    name: "Gridpainter",
    html_url: "https://github.com/MilicaBl/gridpainter.git",
    homepage: "https://github.com/MilicaBl/gridpainter.git",
  },
];
