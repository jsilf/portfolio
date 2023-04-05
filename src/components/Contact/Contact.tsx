import { Variants, motion } from "framer-motion";
import bgImage from "../../assets/ash.webp";

export const Contact = () => {
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
    <section className="standard" id="contact">
      <figure className="contact-bg">
        <img src={bgImage} alt="abstract background" />
        <figcaption className="contact-bg_caption">
          Photo by{" "}
          <a
            href="https://unsplash.com/@badashphotos?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            target="_blank">
            Ash Edmonds
          </a>{" "}
          on{" "}
          <a
            href="https://unsplash.com/photos/0aWZdK8nK2I?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            target="_blank">
            Unsplash
          </a>
        </figcaption>
      </figure>

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.6 }}
        className="contact-text display-flex display-flex-col">
        <motion.div variants={cardVariants}>
          <h2 className="contact-title">Contact</h2>
          <div>
            <p>
              Check out my{" "}
              <a
                href="https://github.com/jsilf"
                target="_blank"
                className="contact-link">
                <span>Github projects</span>
              </a>
            </p>

            <p>
              Contact me on{" "}
              <a
                href="https://www.linkedin.com/in/jessica-silfver"
                target="_blank"
                className="contact-link">
                <span>LinkedIn</span>
              </a>
            </p>

            <p>
              Or send me an{" "}
              <a
                href="mailto:jesilfver@gmail.com"
                target="_blank"
                className="contact-link">
                <span>email</span>
              </a>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
