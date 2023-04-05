import { motion } from "framer-motion";

export const NotFound = () => {
  return (
    <section className="standard">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}>
        <h1>The page you are searching for does not exist.</h1>

        <p>Click on the logo to go back to the original page 🖖</p>
      </motion.div>
    </section>
  );
};
