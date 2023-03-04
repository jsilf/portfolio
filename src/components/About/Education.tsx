interface IProps {
  education: {
    id: number;
    date: string;
    title: string;
  }[];
}

export const Education = ({ education }: IProps) => {
  return (
    <div>
      <ul>
        {education.map((item) => {
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
