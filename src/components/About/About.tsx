import { Variants, motion } from "framer-motion";
import bgImage from "../../assets/peter-olexa-RYtiT3b7XW4-unsplash.jpg";

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
      <section id="about">
        <figure className="about-bg about-bg_filter">
          <img src={bgImage} alt="abstract background" />
          <figcaption className="about-bg_caption">
            Photo by{" "}
            <a href="https://unsplash.com/@deeezyfree?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Peter Olexa
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/photos/RYtiT3b7XW4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </figcaption>
        </figure>

        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.6 }}
          className="display-flex align-center justify-center">
          <motion.div variants={cardVariants} className="text-block">
            <h2 className="about-title">about me</h2>
            <p>
              I am a frontend developer based in Stockholm, Sweden. Constantly
              learning new things and growing in my role, and always excited to
              take on new challenges. The tech I currently work with is HTML5,
              CSS3/SCSS, JavaScript, TypeScript, React.js, Next.js, Node.js,
              Express.js, MongoDB. Figma for design.
            </p>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};
