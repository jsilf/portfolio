interface IProps {
  education: {
    id: number;
    title: string;
  }[];
}

export const Education = ({ education }: IProps) => {
  return (
    <>
      <section>
        <h3>education</h3>
        <ul>
          {education.map((item) => {
            return <li key={item.id}>{item.title}</li>;
          })}
        </ul>
      </section>
    </>
  );
};
