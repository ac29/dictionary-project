
import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className = "container">
        <header>Dictionary</header>
      <main>
        <Dictionary defaultKeyword="sunset"/>
        </main>
      <footer className ="text-centre">
        <a href= "https://github.com/ac29/dictionary-project" rel = "noreferrer" target="_blank">
          Open-source code {" "}
        </a>
        by Alham C.
      </footer>
      </div>  
    </div>
  );
}

export default App;
