// import logo from "./logo.svg";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hello from React</h1>
      <Weather city="Paris" />
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
    </div>
  );
}

export default App;
