interface IProps {
  experience: {
    id: number;
    title: string;
  }[];
}

export const Experience = ({ experience }: IProps) => {
  return (
    <>
      <section>
        <h3>experience</h3>
        <ul>
          {experience.map((item) => {
            return <li key={item.id}>{item.title}</li>;
          })}
        </ul>
      </section>
    </>
  );
};
