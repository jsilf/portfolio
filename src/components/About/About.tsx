import { Variants, motion } from "framer-motion";
import bgImage from "../../assets/unsplash.webp";

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
              I am a Frontend developer based in Sweden. Constantly learning new
              things and growing in my role. I'm always excited to take on new
              challenges.
            </p>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};
