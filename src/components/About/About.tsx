import { Variants, motion } from "framer-motion";

export const About = () => {
  const cardVariants: Variants = {
    offscreen: {
      opacity: 0,
      scale: 0.5,
    },
    onscreen: {
      opacity: 1,
      scale: 1,
      transition: {
        ease: [0, 0.71, 0.2, 1.01],
        duration: 0.4,
      },
    },
  };
  return (
    <>
      <section className="standard" id="about">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.6 }}
          className="display-flex align-center justify-center">
          <motion.div variants={cardVariants} className="text-block">
            <h2 className="about-title">about</h2>
            <p>
              I am a frontend developer currently doing my final internship at
              Medieinstitutet, graduating in june 2023. These past two years of
              studying I have learned a lot about problem solving, how to plan
              and design my own projects, work with git in teams, and build
              websites with libraries and frameworks. I am constantly learning
              new things and growing in my role and I am excited to take on new
              challenges.
            </p>
            <p>
              The tech I currently work with is HTML5, CSS3/SCSS, JavaScript,
              TypeScript, Node.js. Frameworks and libraries such as React.js,
              Next.js, Express.js. Databases MongoDB and MySQL.
            </p>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};
