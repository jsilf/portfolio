interface IChildComponentProps {
  name: string;
}

export const About = () => {
  function getRandomInt(max: number) {
    return Math.random() * max;
  }

  const education = [
    {
      id: getRandomInt(10),
      title: "2021-2023 Front end developer, Medieinstitutet",
    },
    {
      id: getRandomInt(10),
      title: "2014-2015 Arkitektur och design, Nyckelviksskolan",
    },
    {
      id: getRandomInt(10),
      title: "2013-2014 Grundutbildning konst, Basis konstskola",
    },
    {
      id: getRandomInt(10),
      title: "2007-2010 Mode och design, St Martins gymnasium",
    },
  ];

  const experience = [
    {
      id: getRandomInt(10),
      title: "2019-2021 Kontorsassistent, Nivå Landskapsarkitektur",
    },
    {
      id: getRandomInt(10),
      title: "2016-2019 Butiksmedarbetare, BAUHAUS",
    },
  ];

  let htmlExperience = experience.map((ex, i) => {
    return (
      <li className="experience-li" key={ex.id}>
        {ex.title}
      </li>
    );
  });

  let htmlEducation = education.map((ed, i) => {
    return <li key={ed.id}>{ed.title}</li>;
  });

  return (
    <>
      <section id="about">
        <div>
          <h2>about</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            repellendus quos voluptatem voluptates laboriosam pariatur nesciunt
            cumque ea illum praesentium, quisquam deserunt corrupti dolores
            autem nobis deleniti! Quae, repudiandae omnis.
          </p>
        </div>
      </section>

      <section>
        <div>
          <h2>work experience</h2>
          <ul>{htmlExperience}</ul>
        </div>

        <div>
          <h2>education</h2>
          <ul>{htmlEducation}</ul>
        </div>
      </section>
    </>
  );
};
