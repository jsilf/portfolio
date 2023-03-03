interface IProps {
  experience: {
    id: number;
    date: string;
    title: string;
  }[];
}

export const Experience = ({ experience }: IProps) => {
  return (
    <div>
      <ul>
        {experience.map((item) => {
          return (
            <li key={item.id}>
              <span className="list-date">{item.date}</span>

              {` ${item.title}`}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
