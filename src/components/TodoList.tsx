interface Person {
  name: string;
  theme: React.CSSProperties;
}

const person: Person = {
  name: "Juan",
  theme: {
    backgroundColor: "red",
  },
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}</h1>
      <ul>
        <li>improve the videophone</li>
        <li>prepare aeronautics lectures</li>
      </ul>
    </div>
  );
}
