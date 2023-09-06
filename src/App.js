import logo from "./logo.svg";
import "./App.css";
import Feed from "./components/feed/Feed";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Feed />
      </header>
    </div>
  );
}

export default App;
