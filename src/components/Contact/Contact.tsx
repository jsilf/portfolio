import bgImage from "../../assets/ash-edmonds-0aWZdK8nK2I-unsplash.jpg";

export const Contact = () => {
  return (
    <section className="p-standard" id="contact">
      <figure className="contact-bg">
        <img src={bgImage} alt="abstract background" />
        <figcaption>
          Photo by
          <a href="https://unsplash.com/@badashphotos?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Ash Edmonds
          </a>
          on
          <a href="https://unsplash.com/photos/0aWZdK8nK2I?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </figcaption>
      </figure>
      <div className="contact-text display-flex display-flex-col">
        <h2 className="p-2">Contact</h2>

        <div>
          <a href="https://github.com/jsilf" target="_blank">
            <p>Check out my Github projects</p>
          </a>
          <a href="https://www.linkedin.com/in/jessica-silfver" target="_blank">
            <p>Contact me on LinkedIn</p>
          </a>
          <a href="mailto:jesilfver@gmail.com" target="_blank">
            <p>Email me</p>
          </a>
        </div>
      </div>
    </section>
  );
};
