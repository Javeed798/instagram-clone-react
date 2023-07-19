import React from 'react'
import Sidebar from "../../components/Sidebar/Sidebar";
import {Route, Routes} from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import Profile from "../../components/Profile/Profile";

const Router = () => {
    return (
        <div className={"flex"}>
            <div className={"w-[20%] border border-l-sky-300"}>
                <Sidebar />
            </div>
            <div className={"w-full"}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="username" element={<Profile />} />
                </Routes>
            </div>
        </div>
    )
}
export default Router
