import map from "../../assets/interactive-map.webp";
import portfolio from "../../assets/portfolio.webp";
import golobe from "../../assets/golobe.webp";
import gridpainter from "../../assets/gridpainter.webp";
import smslan from "../../assets/smslantips.webp";
import wip from "../../assets/WIP.webp";
import { IProject } from "../../models/IProject";
import { v4 as uuidv4 } from "uuid";

function generateRandomKey() {
  const unique_key = uuidv4();
  const sliced_key = unique_key.slice(0, 7);
  return sliced_key;
}

export const projectList = [
  {
    id: generateRandomKey(),
    title: "portfolio",
    image: portfolio,
    techStack: "React.JS, TypeScript, SCSS",
  },
  {
    id: generateRandomKey(),
    title: "interactive-tourist-map",
    image: map,
    techStack: "React.JS, TypeScript, SCSS, Node.JS, Express.JS, MongoDB",
  },
  {
    id: generateRandomKey(),
    title: "SMSLåntips",
    image: smslan,
    techStack: "React.js, TypeScript, SCSS, Easyweb CMS",
  },
  {
    id: generateRandomKey(),
    title: "pandoras-box",
    image: wip,
    techStack: "React.JS, TypeScript, Three.JS, React Three Fiber, Vite",
  },
  {
    id: generateRandomKey(),
    title: "travel-easyweb-dotnet",
    image: golobe,
    techStack:
      "Practice project | Easyweb .NET library, Easyweb CMS, JavaScript, SCSS",
  },
  {
    id: generateRandomKey(),
    title: "Gridpainter",
    image: gridpainter,
    techStack:
      "School group project 2022 | React.JS, Tailwind, Socket.IO, MongoDB",
  },
];

export const externalProjects: IProject[] = [
  {
    id: generateRandomKey(),
    name: "SMSLåntips",
    html_url: "https://smslåntips.com",
    homepage: "https://smslåntips.com",
  },
  {
    id: generateRandomKey(),
    name: "Gridpainter",
    html_url: "https://github.com/MilicaBl/gridpainter.git",
    homepage: "https://gridpainter.vercel.app/",
  },
];
