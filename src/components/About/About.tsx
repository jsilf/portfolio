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
      title:
        "2022-2023 Frontend developer, internship at Sphinxly digital agency remote/Stockholm, Sweden.",
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
      <section className="p-standard" id="about">
        <div>
          <h2>about</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            repellendus quos voluptatem voluptates laboriosam pariatur nesciunt
            cumque ea illum praesentium, quisquam deserunt corrupti dolores
            autem nobis deleniti! Quae, repudiandae omnis.
          </p>

          <div>
            <h3>work experience</h3>
            <ul>{htmlExperience}</ul>
          </div>

          <div>
            <h3>education</h3>
            <ul>{htmlEducation}</ul>
          </div>
        </div>
      </section>
    </>
  );
};
