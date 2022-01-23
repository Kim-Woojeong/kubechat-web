import "../public/css/DashboardForm.css";
import React, { Component } from "react";

class DashboardForm extends Component {
  render() {
    return (
      <div>
        <nav className="menubar">
          <button className="dropdownBtn">메뉴1</button>
          <ul className="dropdownContainer">
            <li><a className="dropdownMenu" href="#">연차조회 및 신청</a></li>
            <li><a className="dropdownMenu"  href="#">부서별연락처조회</a></li>
            <li><a className="dropdownMenu"  href="#">사내일정 조회</a></li>
            <li><a className="dropdownMenu" href="#">재고조회 및 신청</a></li>           
          </ul>
          <button className="dropdownBtn">메뉴2</button>
          <ul className="dropdownContainer">
            <li><a href="#">1:1채팅</a></li>
            <li><a href="#">사내직원소리함</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default DashboardForm;
