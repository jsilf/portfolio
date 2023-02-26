import { Education } from "./Education";
import { Experience } from "./Experience";

interface IEducationList {
  education: {
    id: number;
    title: string;
  }[];
}

interface IExperienceList {
  experience: {
    id: number;
    title: string;
  }[];
}

function getRandomInt(max: number) {
  return Math.random() * max;
}

const educationList: IEducationList = {
  education: [
    {
      id: getRandomInt(10),
      title:
        "2021-2023 Frontend developer, Medieinstitutet online/Stockholm, Sweden",
    },
    {
      id: getRandomInt(10),
      title: "2021 Webbutveckling 1, NTI online, Sweden",
    },
    {
      id: getRandomInt(10),
      title:
        "2014-2015 Arkitektur and design, Nyckelviksskolan, Lidingö Sweden",
    },
    {
      id: getRandomInt(10),
      title: "2013-2014 Basis art school, Stockholm Sweden",
    },
    {
      id: getRandomInt(10),
      title: "2007-2010 Mode och design, St Martins gymnasium, Solna Sweden",
    },
  ],
};

const experienceList: IExperienceList = {
  experience: [
    {
      id: getRandomInt(10),
      title:
        "2022-2023 Frontend developer, internship at Sphinxly remote/Stockholm, Sweden.",
    },
    {
      id: getRandomInt(10),
      title:
        "2019-2021 Office assistant at Nivå Landskapsarkitektur Stockholm, Sweden.",
    },
    {
      id: getRandomInt(10),
      title: "2016-2019 Cashier at BAUHAUS Stockholm, Sweden.",
    },
  ],
};

export const About = () => {
  return (
    <>
      <section className="p-standard" id="about">
        <div>
          <h2>about</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            repellendus quos voluptatem voluptates laboriosam pariatur nesciunt
            cumque ea illum praesentium, quisquam deserunt corrupti dolores
            autem nobis deleniti! Quae, repudiandae omnis.
          </p>

          <Education education={educationList.education} />
          <Experience experience={experienceList.experience} />
        </div>
      </section>
    </>
  );
};
