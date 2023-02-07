interface IChildComponentProps {
  name: string;
}

export const About = () => {
  const education = [
    "2021-2023 Front end developer, Medieinstitutet",
    "2014-2015 Arkitektur och design, Nyckelviksskolan",
    "2013-2014 Grundutbildning konst, Basis konstskola",
    "2007-2010 Mode och design, St Martins gymnasium",
    "2021-2023 Front end developer, Medieinstitutet",
  ];

  const experience = [
    "2019-2021 Kontorsassistent, Nivå Landskapsarkitektur",
    "2016-2019 Butiksmedarbetare, BAUHAUS",
    "2015-2016 Värvare, UNHCR",
  ];

  let htmlExperience = experience.map((e, i) => {
    return (
      <li className="experience-li" key={i}>
        {e}
      </li>
    );
  });

  let htmlEducation = education.map((ed, i) => {
    return (
      <li className="education-li" key={i}>
        {ed}
      </li>
    );
  });

  return (
    <>
      <section id="about">
        <div className="experience-wrap">
          <h2 className="experience-title">experience</h2>
          <ul className="experience-list">{htmlExperience}</ul>
        </div>

        <div className="education-wrap">
          <h2 className="education-title">education</h2>
          <ul>{htmlEducation}</ul>
        </div>

        <div className="about-me_wrap">
          <h2 className="title-about">about me</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            repellendus quos voluptatem voluptates laboriosam pariatur nesciunt
            cumque ea illum praesentium, quisquam deserunt corrupti dolores
            autem nobis deleniti! Quae, repudiandae omnis.
          </p>
        </div>

        <div className="skills-wrap">
          <h2 className="title-skills">skills</h2>
          <ul>
            <li>skill</li>
            <li>skill</li>
            <li>skill</li>
            <li>skill</li>
            <li>skill</li>
            <li>skill</li>
          </ul>
        </div>
      </section>
    </>
  );
};
