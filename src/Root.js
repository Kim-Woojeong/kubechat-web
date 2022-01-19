import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import DashboardForm from './components/DashboardForm';

const Root = () => (
        <BrowserRouter>
            
            <Routes>
                <Route path="/" exact element={<Home/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/dashboard" element={<Dashboard/>}>
                    <Route path=":id" element={<DashboardForm/>}></Route>
                </Route>
            </Routes>

        </BrowserRouter>

);

export default Root;