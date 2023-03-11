import profilePic from "../../assets/profile_pic.webp";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-inner display-flex justify-between align-center">
          <div className="hero-text-block">
            <h1 className="hero-text-block_title">
              <span className="hero-text-block_span">Hi, i'm</span>Jessica, I
              love nature, music and bibimbap.
            </h1>
            <p>And of course build and design things for the web!</p>
          </div>

          <div className="hero-image-block display-flex display-flex-col align-center">
            <figure>
              <motion.div whileHover={{ scale: 1.1 }}>
                <img src={profilePic} />
              </motion.div>
            </figure>

            <p className="hero-image-block_text">Frontend Developer</p>
          </div>
        </div>
        <span className="arrow-down"></span>
      </section>
    </>
  );
};
