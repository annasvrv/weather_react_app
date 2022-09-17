import Weather from "./Weather";
import "./App.css";
import "./Weather.css";

function App() {
  return (
    <div className="App">
      <Weather />
      <p className="mt-3">
        <a
          href="https://github.com/annasvrv/weather_react_app"
          rel="noreferrer"
          target="_blank"
          title="GitHubCode"
        >
          Open-source code
        </a>{" "}
        by{" "}
        <a
          href="https://www.linkedin.com/in/anna-suvorova-1742b9197/"
          target="_blank"
          rel="noreferrer"
          title="LinkedIn profile"
        >
          Anna S
        </a>
      </p>
    </div>
  );
}

export default App;
