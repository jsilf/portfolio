import map from "../../assets/interactive-map.webp";
import portfolio from "../../assets/portfolio.webp";
import golobe from "../../assets/golobe.webp";
import gridpainter from "../../assets/gridpainter.webp";
import smslan from "../../assets/smslantips.webp";
import wip from "../../assets/WIP.webp";
import { v4 as uuidv4 } from "uuid";
import { ProjectType } from "./Projects";

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
  },
  {
    id: generateRandomKey(),
    title: "interactive-tourist-map",
    image: map,
  },
  {
    id: generateRandomKey(),
    title: "SMSLåntips",
    image: smslan,
  },
  {
    id: generateRandomKey(),
    title: "pandoras-box",
    image: wip,
  },
  {
    id: generateRandomKey(),
    title: "travel-easyweb-dotnet",
    image: golobe,
  },
  {
    id: generateRandomKey(),
    title: "Gridpainter",
    image: gridpainter,
  },
];

export const externalProjects: ProjectType[] = [
  {
    id: generateRandomKey(),
    name: "SMSLåntips",
    html_url: "https://smslåntips.com",
    homepage: "https://smslåntips.com",
    topics: ["reactjs", "scss", "easyweb cms"],
  },
  {
    id: generateRandomKey(),
    name: "Gridpainter",
    html_url: "https://github.com/MilicaBl/gridpainter.git",
    homepage: "https://gridpainter.vercel.app/",
    topics: ["reactjs", "expressjs", "nodejs", "mongodb"],
  },
];
