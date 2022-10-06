import "./App.css";
import "animate.css";
import gh from "./assets/gh.svg";
function App() {
  return (
    <div>
      <div className="animate__animated animate__backInDown">
        <img
          src="https://avatars.githubusercontent.com/u/103253731?s=400&u=76a8bfe54ec383ff70a60aa3e67bccabdeaffb94&v=4"
          className="logo"
          alt="Codezz logo"
        />
      </div>

      <div className="animate__animated animate__jackInTheBox">
        <h1 className="name">Codezz</h1>
      </div>

      <div className="animate__animated animate__fadeInTopRight">
        <h2>Follow Us 👇</h2>
        <a href="https://github.com/Codezzzzzzzzz" target={"_blank"}>
          <img className="gh" src={gh} alt="Github" />
        </a>
      </div>
      <h3>*Note : website under construction</h3>
    </div>
  );
}

export default App;
