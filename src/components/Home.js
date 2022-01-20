import '../public/css/Home.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
                <ul className="menu">
                    <p className="logo">Logo</p>
                    <ul className="homemenu">
                    <li>프로젝트 소개</li>
                    <li>목표</li>
                    <li>Contact</li>
                    </ul>
                    <li className="usermenu">
                        <Link to="/login"  className="login">login</Link>
                    </li>
                    </ul>
                </header>
      <div className="main-container">
        Home
      </div>
      <footer className="footer">
        
      </footer>
    </div>
  );
}

export default App;
