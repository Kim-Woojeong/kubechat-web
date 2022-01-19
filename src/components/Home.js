import '../public/Home.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
                <ul class="menu">
                    <p class="logo">Logo</p>
                    <ul class="homemenu">
                    <li>프로젝트 소개</li>
                    <li>목표</li>
                    <li>Contact</li>
                    </ul>
                    <li class="usermenu">
                        <Link to="/login"  class="login">login</Link>
                    </li>
                    </ul>
                </header>
      <div class="main-container">
        Home
      </div>
      <footer class="footer">
        
      </footer>
    </div>
  );
}

export default App;
