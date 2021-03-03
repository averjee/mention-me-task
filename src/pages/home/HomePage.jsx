import "./HomePage.css";

import logo from "./assets/logo.svg";

const Home = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>The pleasing comfort of the create-react-app landing page.</p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
        data-testid="learn-react-link"
      >
        Learn React
      </a>
    </header>
  );
};

export default Home;
