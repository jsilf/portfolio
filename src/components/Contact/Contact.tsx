import bgImage from "../../assets/ash-edmonds-0aWZdK8nK2I-unsplash.jpg";

export const Contact = () => {
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
      <div className="contact-text display-flex display-flex-col">
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
      </div>
    </section>
  );
};
