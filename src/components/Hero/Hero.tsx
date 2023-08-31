import profilePic from "../../assets/profile.webp";
import { motion } from "framer-motion";
import { Arrow } from "../Parts/Arrow";

export const Hero = () => {
  return (
    <>
      <section className="hero standard">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="hero-inner display-flex justify-between align-center">
          <div className="hero-text-block">
            <h1 className="hero-text-block_title">
              <span className="hero-text-block_span">Hi, i'm</span>Jessica, I
              love nature, music and bibimbap.
            </h1>
            <span>And of course build and design things for the web!</span>
          </div>

          <motion.div className="hero-image-block display-flex display-flex-col align-center">
            <figure className="hero-image">
              <motion.div whileHover={{ scale: 1.1 }}>
                <img src={profilePic} alt="Profile picture" />
              </motion.div>
            </figure>

            <span className="hero-image-block_text">Frontend Developer</span>
          </motion.div>
        </motion.div>
        <Arrow classname="arrow-down" />
      </section>
    </>
  );
};
