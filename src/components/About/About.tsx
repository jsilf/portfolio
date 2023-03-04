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
      id: randomIntForId(10),
      date: "2021-2023",
      title: "Frontend developer, Medieinstitutet online/Stockholm, Sweden",
    },
    {
      id: randomIntForId(10),
      date: "2021",
      title: "Webbutveckling 1, NTI online, Sweden",
    },
    {
      id: randomIntForId(10),
      date: "2014-2015",
      title: "Arkitektur and design, Nyckelviksskolan, Lidingö Sweden",
    },
    {
      id: randomIntForId(10),
      date: "2013-2014",
      title: "Basis art school, Stockholm Sweden",
    },
    {
      id: randomIntForId(10),
      date: "2007-2010",
      title: "Mode och design, St Martins gymnasium, Solna Sweden",
    },
  ],
};

const experienceList: IProps = {
  label: [
    {
      id: randomIntForId(10),
      date: "2022-2023",
      title:
        "Frontend developer, internship at Sphinxly remote/Stockholm, Sweden.",
    },
    {
      id: randomIntForId(10),
      date: "2019-2021",
      title: "Office assistant at Nivå Landskapsarkitektur Stockholm, Sweden.",
    },
    {
      id: randomIntForId(10),
      date: "2016-2019",
      title: "Cashier at BAUHAUS Stockholm, Sweden.",
    },
  ],
};

export const About = () => {
  return (
    <>
      <section className="p-standard" id="about">
        <div className="display-flex align-center justify-center">
          <div className="text-block">
            <h2 className="about-title">about</h2>
            <p>
              I am studying to become a frontend developer by summer 2023. So
              far I have learned a lot about problem solving, how to plan and
              design my own projects, work with git in groups, and build
              websites with libraries and frameworks. Love learning new things,
              but also work on getting better at what I already know.
            </p>
            <p>
              The tech I currently work with consists of HTML5, CSS3/SCSS,
              JavaScript, TypeScript, Node.js. Frameworks and libraries such as
              React.js, Next.js, Express.js, Angular. Databases MongoDB and
              MySQL.
            </p>
          </div>
          {/* <section className="text-block-list">
            <h3 className="about-subtitle">education and experience</h3>
            <div className="list-block display-flex">
              <Education education={educationList.label} />
              <Experience experience={experienceList.label} />
            </div>
          </section> */}
        </div>
      </section>
    </>
  );
};

function randomIntForId(max: number) {
  return Math.random() * max;
}
