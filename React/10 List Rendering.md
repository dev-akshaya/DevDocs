### List Rendering

#### Example

```JSX
import React from "react";

const User = () => {
  const names = ["Prabhakar", "Ranjana", "Akshaya", "Sudipti"];
  const nameList = names.map((name) => <h2>{name}</h2>);
  return <div>{nameList}</div>;
};

export default User;
```

#### Example 2

```JSX
// PersonList
import React from "react";
import Person from "./Person";

const PersonList = () => {
  const persons = [
    { id: 1, name: "Prabhakar", skills: "React" },
    { id: 2, name: "Ranjana", skills: "JS" },
    { id: 3, name: "Akshaya", skills: "Full Stack" },
    { id: 4, name: "Sudipti", skills: "Nodejs" },
  ];
  const personList = persons.map((person) => <Person person={person} />);
  return <div>{personList}</div>;
};

export default PersonList;
```

```JSX
// Person
import React from "react";

const Person = ({ person }) => {
  return (
    <div>
      <h1>i am {person.name}</h1> <h2>My skills: {person.skills}</h2>
    </div>
  );
};

export default Person;
```

### List and Keys

- A "key" is a special string attribute you need to include when creating list of elements
- keys give the element a stable identy
- keys help react to identify which item has changed, are added or are modified

### Index as Key

- The items in your list do not have a unique id
- The list is a static list and will not change
- The list will never be reordered or filtered
