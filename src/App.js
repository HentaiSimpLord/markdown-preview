import logo from "./logo.svg";
import "./styles/App.scss";
import Editor from "./components/editor";
import Preview from "./components/preview";

function App() {
  return (
    <div className="App">
      <Editor />
      <Preview />
    </div>
  );
}

export default App;
