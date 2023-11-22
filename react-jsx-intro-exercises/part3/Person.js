
function Person({ age, hobbies, name }) {
  const voteText = age >= 18 ? "Go vote!" : "Must be 18!";

  const hobbiesList = hobbies.map(hobby => <li>{hobby}</li>);

  return (
    <div>
      <p>Learn some information about this person:</p>
      <ul>
        <li>Name: {name.slice(0, 6)}</li>
        <li>Age: {age}</li>
        <ul>
          Hobbies:
          {hobbiesList}
        </ul>
      </ul>
      <h3>{voteText}</h3>
    </div>
  );
}
