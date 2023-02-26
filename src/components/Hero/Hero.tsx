import profilePic from "../../assets/profile_pic.jpg";

export const Hero = () => {
  return (
    <>
      <section className="hero slide-bottom">
        <div className="hero-text-block">
          <h1>
            <span className="hero-intro">Hi, i'm</span>Jessica, I love nature,
            music and bibimbap.
          </h1>
          <p>And of course build and design things for the web!</p>
        </div>

        <div className="hero-image-block">
          <figure>
            <img src={profilePic} />
          </figure>
          <p className="hero-image-block_text">Frontend Developer</p>
        </div>
      </section>
    </>
  );
};
