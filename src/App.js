import logo from './logo.svg';
import './App.css';

function App() {
  const name = {
    first: "Andrea",
    last: "Daza"
  }
  const inputPlaceholder = "Enter details";
  const age = "23";
  const job = "engineer";

  const getFullName = (firstName, lastName) => `${firstName} ${lastName}`

  const getInput = () => <input placeholder={inputPlaceholder}/>
  
  return (
    <div className="App">
      <h3>Full Name: {getFullName(name.first, name.last)}</h3>
      <p>Age: {age}</p>
      <p>Job: {job}</p>

    {getInput()}
    <br/>
    {
      name.first === "Andrea" ? "true" : "false"
    }
    </div>
  );
}

export default App;
