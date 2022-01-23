import "../public/css/sidemenu.css";
import React, { Component } from 'react';


class DashboardForm extends Component {
    render() {
        return (
            <div>
                <nav className="menubar">
                    <div className="menu">
                        <a className="logo" href="#">
                            logo
                        </a>
                        <div className="sidenav">
                            <button className="dropdown-btn">메뉴1</button>
                            <div className="dropdown-container">
                                <a href="#">연차조회 및 신청</a>
                                <a href="#">식단조회</a>
                                <a href="#">부서별연락처조회</a>
                                <a href="#">사내일정 조회</a>
                                <a href="#">재고조회 및 신청</a>
                            </div>
                            <button className="dropdown-btn">메뉴2</button>
                            <div className="dropdown-container">
                                <a href="#">1:1채팅</a>
                                <a href="#">사내직원소리함</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

var dropdown = document.getElementsByClassName("dropdown-btn");
    var i;

    for (i = 0; i < dropdown.length; i++) {
        dropdown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } 
        else {
            dropdownContent.style.display = "block";
        }
    });
}

export default DashboardForm;