import { Education } from "./Education";
import { Experience } from "./Experience";

export interface IProps {
  label: {
    id: number;
    title: string;
    date: string;
  }[];
}

const educationList: IProps = {
  label: [
    {
      id: getRandomInt(10),
      date: "2021-2023",
      title: "Frontend developer, Medieinstitutet online/Stockholm, Sweden",
    },
    {
      id: getRandomInt(10),
      date: "2021",
      title: "Webbutveckling 1, NTI online, Sweden",
    },
    {
      id: getRandomInt(10),
      date: "2014-2015",
      title: "Arkitektur and design, Nyckelviksskolan, Lidingö Sweden",
    },
    {
      id: getRandomInt(10),
      date: "2013-2014",
      title: "Basis art school, Stockholm Sweden",
    },
    {
      id: getRandomInt(10),
      date: "2007-2010",
      title: "Mode och design, St Martins gymnasium, Solna Sweden",
    },
  ],
};

const experienceList: IProps = {
  label: [
    {
      id: getRandomInt(10),
      date: "2022-2023",
      title:
        "Frontend developer, internship at Sphinxly remote/Stockholm, Sweden.",
    },
    {
      id: getRandomInt(10),
      date: "2019-2021",
      title: "Office assistant at Nivå Landskapsarkitektur Stockholm, Sweden.",
    },
    {
      id: getRandomInt(10),
      date: "2016-2019",
      title: "Cashier at BAUHAUS Stockholm, Sweden.",
    },
  ],
};

function getRandomInt(max: number) {
  return Math.random() * max;
}

export const About = () => {
  return (
    <>
      <section className="p-standard" id="about">
        <div className="display-flex align-center justify-center">
          <div className="text-block">
            <h2>about</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              repellendus quos voluptatem voluptates laboriosam pariatur
              nesciunt cumque ea illum praesentium, quisquam deserunt corrupti
              dolores autem nobis deleniti! Quae, repudiandae omnis.
            </p>
          </div>
          <section className="text-block-list">
            <h3>experience and education</h3>
            <div className="list-block display-flex">
              <Education education={educationList.label} />
              <Experience experience={experienceList.label} />
            </div>
          </section>
        </div>
      </section>
    </>
  );
};
