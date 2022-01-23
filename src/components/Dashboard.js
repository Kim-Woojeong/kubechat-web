import React, { Component } from "react";
import "../public/css/Dashboard.css";

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard_container">
        <div className="row_page_titles">row_page_titles</div>
        <div className="dashboard_contents">
          <ul className="dashContent1">
            <li className="simpleResults">
              <i class="fas fa-dollar-sign"></i>
              <div className="resultInfo">Total Revenue</div>
            </li>
            <li className="simpleResults">
              <i class="fas fa-shopping-cart"></i>
              <div className="resultInfo">Sales</div>
            </li>
            <li className="simpleResults">
              <i class="fas fa-archive"></i>
              <div className="resultInfo">Stores</div>
            </li>
            <li className="simpleResults">
              <i class="fas fa-user"></i>
              <div className="resultInfo">Customer</div>
            </li>
          </ul>
          <ul className="dashContent2">
            <li className="graphNchart">
              <img class="graph" src="graph1.png" />
            </li>
            <li className="graphNchart">
              {" "}
              <img class="chart" src="chart1.png" />
            </li>
          </ul>
          <ul className="dashContent3">
            <li className="information">클러스터</li>
            <li className="information">Chatbot API</li>
            <li className="information">모니터링</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Dashboard;
