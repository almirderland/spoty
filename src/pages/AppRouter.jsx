import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/Login/Login";
import MainPage from "../components/MainPage/MainPage";
import Reg from "../components/Reg/Reg";



function AppRouter () {
    return (
        <Routes>
            <Route key="/login" path="/login" element={ <Login /> } exact />
            <Route key="/reg" path="/reg" element={ <Reg /> } exact />
            <Route key="/" path="/" element={ <MainPage /> } exact />
        </Routes>
    );
}

export default AppRouter;