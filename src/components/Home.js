import "../public/css/Home.css";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import DashboardForm from "./DashboardForm";

function App() {
  return (
    <div className="App">
      {/* App-header */}
      <header className="App-header">
        <ul className="menu">
          <p className="logo">Logo</p>
          <ul className="homemenu">
            <li>프로젝트 소개</li>
            <li>목표</li>
            <li>Contact</li>
          </ul>
          <li className="usermenu">
            <Link to="/login" className="login">
              login
            </Link>
          </li>
        </ul>
      </header>
      {/* End App-header */}
      {/* main-container */}
      <div className="main-container">
        {/* left-sidebar */}
        <div className="left-sidebar">
          <DashboardForm />
        </div>
        {/* End left-sidebar */}
        {/* page-wrapper */}
        <div className="page-wrapper">
          <Dashboard />
        </div>
        {/* page-wrapper */}
      </div>
      {/* End main-container */}
      {/* footer */}
      <footer className="footer"></footer>
      {/* End footer */}
    </div>
  );
}

export default App;
