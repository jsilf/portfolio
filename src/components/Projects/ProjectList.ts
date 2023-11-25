import map from "../../assets/interactive-map.webp";
import portfolio from "../../assets/portfolio.webp";
import golobe from "../../assets/golobe.webp";
import wip from "../../assets/WIP.webp";
import { v4 as uuidv4 } from "uuid";
// import { ProjectType } from "./Projects";

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
    title: "pandoras-box",
    image: wip,
  },
  {
    id: generateRandomKey(),
    title: "travel-easyweb-dotnet",
    image: golobe,
  },
];

/*Add external projects here and to the projectlist*/
// export const externalProjects: ProjectType[] = [
//   {
//     id: generateRandomKey(),
//     name: "",
//     html_url: "",
//     homepage: "",
//     topics: [""],
//   },
// ];
