import "./css/Reset.css";
import "./css/App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="layout">
      <div className="container">
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
